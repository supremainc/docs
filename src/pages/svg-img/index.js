import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { svgComponentsMap } from '@site/genpdf/svg-components-map.mjs';

// static/img/menus 폴더의 SVG 파일명 목록만 가져옵니다. (keys()는 모듈을 실행하지 않으므로
// 실제 로더(svgr 등) 처리 방식과 무관하게 파일 경로만 안전하게 나열할 수 있습니다.)
const svgContext = require.context('@site/static/img/menus', false, /\.svg$/);

// MDXComponents.js에 등록된 defined_name(컴포넌트명)을 파일명 기준으로 역매핑합니다.
const definedNameByFile = Object.entries(svgComponentsMap).reduce((acc, [name, path]) => {
  acc[path.split('/').pop()] = name;
  return acc;
}, {});

const svgList = svgContext
  .keys()
  .map((key) => {
    const fileName = key.replace('./', '');
    return {
      fileName,
      definedName: definedNameByFile[fileName] ?? null,
    };
  })
  .sort((a, b) => a.fileName.localeCompare(b.fileName));

function SVGLists() {
  return (
    <Layout>
      <Head>
        <title>SVG Image List | Suprema Docs</title>
      </Head>
      <div className='svg--list' style={{ padding: '2rem', margin: '0 auto' }}>
        <h1>SVG Image List</h1>
        <p>
          <code>/static/img/menus</code> 경로에 있는 SVG 아이콘 {svgList.length}개와, <code>MDXComponents.js</code>에
          등록된 컴포넌트 이름을 정리한 목록입니다.
        </p>
        <table>
          <thead>
            <tr>
              <th>이미지</th>
              <th>파일명</th>
              <th>컴포넌트 이름</th>
            </tr>
          </thead>
          <tbody>
            {svgList.map(({ fileName, definedName }) => (
              <tr key={fileName}>
                <td>
                  <img src={`/docs/img/menus/${fileName}`} alt={fileName} width={24} height={24} />
                </td>
                <td>{fileName}</td>
                <td>{definedName ?? '(Not set)'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default SVGLists;
