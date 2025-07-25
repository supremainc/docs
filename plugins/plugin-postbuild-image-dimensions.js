const path = require('path');
const fs = require('fs');
const { JSDOM } = require('jsdom');
const { imageSize } = require('image-size');

// Plugin to add image dimensions to HTML after build
function pluginPostBuildImageDimensions(context, options) {
  return {
    name: 'plugin-postbuild-image-dimensions',
    
    async postBuild({ siteDir, routesPaths, outDir }) {
      console.log('[postBuild] Processing HTML files for image dimensions...');
      
      // Get i18n configuration from site config
      const { siteConfig } = context;
      const { defaultLocale, locales } = siteConfig.i18n;
      
      // Determine current locale from outDir path
      let currentLocale = defaultLocale;
      for (const locale of locales) {
        if (locale !== defaultLocale && (outDir.endsWith(`\\${locale}`) || outDir.endsWith(`/${locale}`))) {
          currentLocale = locale;
          break;
        }
      }
      
      console.log(`[postBuild] Current locale: ${currentLocale}`);
      
      let processedFiles = 0;
      let processedImages = 0;
      
      // Find all HTML files in the build directory instead of relying on routesPaths
      function findHtmlFiles(dir) {
        const htmlFiles = [];
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            // Recursively find HTML files in subdirectories
            htmlFiles.push(...findHtmlFiles(fullPath));
          } else if (item.endsWith('.html')) {
            htmlFiles.push(fullPath);
          }
        }
        
        return htmlFiles;
      }
      
      const htmlFiles = findHtmlFiles(outDir);
      console.log(`[postBuild] Found ${htmlFiles.length} HTML files to process`);
      
      // Process each HTML file
      for (const htmlFilePath of htmlFiles) {
        try {
          const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');
          const dom = new JSDOM(htmlContent);
          const document = dom.window.document;
          
          // Find img elements in content areas without width/height
          const images = document.querySelectorAll('figure img:not([width]):not([height]), p.hasimg img:not([width]):not([height])');
          let modified = false;
          
          for (const img of images) {
            const src = img.getAttribute('src');
            if (!src || src.startsWith('data:') || src.startsWith('http')) {
              continue; // Skip data URLs and external images
            }
            
            // Convert relative path to absolute file path in build directory
            let imagePath;
            if (src.startsWith('/')) {
              // Remove /docs prefix from src path as it's already handled by baseUrl
              let cleanSrc = src;
              if (src.startsWith('/docs/')) {
                cleanSrc = src.replace('/docs/', '/');
              }
              
              // Handle different build structures for multilingual sites
              if (currentLocale !== defaultLocale) {
                // Non-default locale build: outDir = build/{locale}, src = /img/...
                // For English: src = /img/device/image.png → build/en/img/device/image.png
                imagePath = path.join(outDir, cleanSrc.replace(/^\//, ''));
              } else {
                // Default locale build: outDir = build, src = /img/...
                // For Korean: src = /img/image.png → build/img/image.png
                imagePath = path.join(outDir, cleanSrc.replace(/^\//, ''));
              }
            } else {
              // Relative path - resolve relative to HTML file location
              imagePath = path.resolve(path.dirname(htmlFilePath), src);
            }
            
            if (fs.existsSync(imagePath)) {
              try {
                const buffer = fs.readFileSync(imagePath);
                const dimensions = imageSize(buffer);
                
                if (dimensions.width && dimensions.height) {
                  img.setAttribute('width', dimensions.width.toString());
                  img.setAttribute('height', dimensions.height.toString());
                  modified = true;
                  processedImages++;
                }
              } catch (error) {
                console.warn(`[postBuild] ❌ Could not get dimensions for ${src}:`, error.message);
              }
            }
          }
          
          // Write back modified HTML if any changes were made
          if (modified) {
            const modifiedHtml = dom.serialize();
            fs.writeFileSync(htmlFilePath, modifiedHtml, 'utf8');
            processedFiles++;
          }
          
        } catch (error) {
          console.warn(`[postBuild] Error processing ${htmlFilePath}:`, error.message);
        }
      }
      
      console.log(`[postBuild] Completed: ${processedFiles} HTML files modified, ${processedImages} images processed`);
    },
  };
}

module.exports = pluginPostBuildImageDimensions;
