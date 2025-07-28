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
      // console.log(outDir);
      // Process each HTML file
      for (const routePath of routesPaths) {
        // For non-default locales, routePath includes locale prefix (e.g., /en/platform/...)
        // but outDir already points to build/en, so we need to remove the locale prefix
        let cleanRoutePath = routePath;
        if (currentLocale !== defaultLocale) {
          const localePrefix = `/${currentLocale}`;
          if (routePath.startsWith(localePrefix)) {
            cleanRoutePath = routePath.replace(localePrefix, '') || '/';
          }
        }
        
        let htmlFilePath = path.join(outDir, cleanRoutePath, 'index.html');
        if (fs.existsSync(htmlFilePath)) {
          try {
            const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');
            const dom = new JSDOM(htmlContent);
            const document = dom.window.document;
            
            // Find img elements in content areas without width/height
            const images = document.querySelectorAll('figure img:not([width]):not([height]), p.hasimg img:not([width]):not([height])');
            let modified = false;
            
            // Debug: show first few images found for English
            // if (currentLocale === 'en' && images.length > 0 && processedFiles < 3) {
            //   console.log(`[postBuild] Processing ${routePath} - Found ${images.length} images`);
            // }
            
            for (const img of images) {
              const src = img.getAttribute('src');
              if (!src || src.startsWith('data:') || src.startsWith('http')) {
                continue; // Skip data URLs and external images
              }
              
              // Debug: show image src for English
              // if (currentLocale === 'en' && processedFiles < 3) {
              //   console.log(`[postBuild] Processing image src: ${src}`);
              // }
              
              // Convert relative path to absolute file path in build directory
              let imagePath;
              if (src.startsWith('/')) {
                // Handle different build structures for multilingual sites
                if (currentLocale !== defaultLocale) {
                  // Non-default locale build: outDir = build/{locale}, src = /{locale}/img/{locale}/...
                  // For English: src = /en/img/en/image.png → build/en/img/en/image.png
                  imagePath = path.join(outDir, '..', src.replace(/^\//, ''));
                } else {
                  // Default locale build: outDir = build, src = /img/...
                  // For Korean: src = /img/image.png → build/img/image.png
                  imagePath = path.join(outDir, src.replace(/^\//, ''));
                }
              } else {
                // Relative path - resolve relative to HTML file location
                imagePath = path.resolve(path.dirname(htmlFilePath), src);
              }
              
              // Debug: show image path for English
              // if (currentLocale === 'en' && processedFiles < 3) {
              //   console.log(`[postBuild] Looking for image at: ${imagePath}`);
              //   console.log(`[postBuild] File exists: ${fs.existsSync(imagePath)}`);
              // }
              
              if (fs.existsSync(imagePath)) {
                try {
                  const buffer = fs.readFileSync(imagePath);
                  const dimensions = imageSize(buffer);
                  
                  if (dimensions.width && dimensions.height) {
                    img.setAttribute('width', dimensions.width.toString());
                    img.setAttribute('height', dimensions.height.toString());
                    modified = true;
                    processedImages++;
                    
                    // Debug: show successful dimension extraction
                    // if (currentLocale === 'en' && processedFiles < 3) {
                    //   console.log(`[postBuild] ✅ Successfully added dimensions: ${dimensions.width}x${dimensions.height} for ${src}`);
                    //   console.log(`[postBuild] 📁 Image file path: ${imagePath}`);
                    // }
                  } else {
                    // if (currentLocale === 'en' && processedFiles < 3) {
                    //   console.warn(`[postBuild] ⚠️  Could not extract dimensions from ${src} (width: ${dimensions.width}, height: ${dimensions.height})`);
                    // }
                  }
                } catch (error) {
                  console.warn(`[postBuild] ❌ Could not get dimensions for ${src}:`, error.message);
                  // if (currentLocale === 'en' && processedFiles < 3) {
                  //   console.warn(`[postBuild] 📁 Failed image path: ${imagePath}`);
                  // }
                }
              } else {
                // if (currentLocale === 'en' && processedFiles < 3) {
                //   console.warn(`[postBuild] 🚫 Image not found: ${imagePath} for src: ${src}`);
                // }
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
      }
      
      console.log(`[postBuild] Completed: ${processedFiles} HTML files modified, ${processedImages} images processed`);
    },
  };
}

module.exports = pluginPostBuildImageDimensions;
