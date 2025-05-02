const axios = require('axios');
const cheerio = require('cheerio');
const xml2js = require('xml2js'); // XML 파싱을 위한 라이브러리
const fs = require('fs'); // 파일 시스템 모듈

// 1. sitemap.xml 가져오기
async function fetchSitemap(sitemapUrl) {
  try {
    const response = await axios.get(sitemapUrl);
    return response.data;
  } catch (error) {
    console.error(`Error fetching sitemap: ${error.message}`);
    return null;
  }
}

// 2. sitemap.xml 파싱하여 URL 목록 추출
async function parseSitemap(sitemapXml) {
  try {
    const parser = new xml2js.Parser();
    const result = await parser.parseStringPromise(sitemapXml);
    const urls = result.urlset.url.map((urlObj) => urlObj.loc[0]);
    // 제외할 URL 목록
    const excludeUrls = [
      'https://supremainc.github.io/docs/',
      'https://supremainc.github.io/docs/search',
      'https://supremainc.github.io/docs/legal/disclaimers',
      'https://supremainc.github.io/docs/legal/eula',
      'https://supremainc.github.io/docs/legal/open-source-licenses',
      'https://supremainc.github.io/docs/reference/glossary',
      'https://supremainc.github.io/docs/platform/biostar_x/toc'
    ];

    // 제외할 URL 필터링
    const filteredUrls = urls.filter((url) => !excludeUrls.includes(url));
    return filteredUrls;
  } catch (error) {
    console.error(`Error parsing sitemap: ${error.message}`);
    return [];
  }
}

// 3. 각 URL의 콘텐츠 가져오기 및 파싱
async function fetchAndParseUrl(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    // 예: <title> 태그와 <meta name="description"> 내용 추출
    const title = $('header h1').text();
    const description = $('.theme-doc-markdown.markdown')
      .clone()
      .find('table')
      .remove()
      .end()
      .find('div[class*="admonitionHeading"]')
      .remove()
      .end()
      .find('article[class*="overviewItems"]')
      .remove()
      .end()
      .text()
      .replace(title, '');

    return { url, title, description };
  } catch (error) {
    console.error(`Error fetching URL (${url}): ${error.message}`);
    return { url, error: error.message };
  }
}

// 4. 메인 로직
async function main() {
  const sitemapUrl = 'https://supremainc.github.io/docs/sitemap.xml';

  console.log('Fetching sitemap...');
  const sitemapXml = await fetchSitemap(sitemapUrl);

  if (!sitemapXml) {
    console.error('Failed to fetch sitemap.');
    return;
  }

  console.log('Parsing sitemap...');
  const urls = await parseSitemap(sitemapXml);

  console.log(`Found ${urls.length} URLs. Fetching and parsing each URL...`);
  const results = [];
  for (const url of urls) {
    const parsedData = await fetchAndParseUrl(url);
    results.push(parsedData);
  }

  // docs.json 파일로 저장
  console.log('Saving results to docs.json...');
  fs.writeFileSync('docs.json', JSON.stringify(results, null, 2), 'utf-8');
  console.log('Results saved to docs.json');
}

// 실행
main();