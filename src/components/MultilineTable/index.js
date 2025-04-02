import React from 'react';
import ReactDOMServer from 'react-dom/server';

function MultilineTable({ children, style = {}, tableClassName = '' }) {
  // children을 HTML 문자열로 변환한 뒤, 간단한 치환으로 원본 텍스트에 가까운 형태를 복원
  let htmlContent = ReactDOMServer.renderToStaticMarkup(children);
  // <br> 태그를 줄바꿈 문자로, <p> 태그는 양쪽에 newline을 넣어 단락 구분 처리
  let raw = htmlContent
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<p.*?>/gi, '')
    // 기타 태그는 모두 제거 (목록, 링크 등은 텍스트로 남음)
    .replace(/<[^>]+>/g, '')
    .trim();

  // 줄바꿈 문자(\n) 기준으로 분할하고, 빈 줄은 제거
  const lines = raw.split('\n').map(line => line.replace(/\s+$/, ''));
  const filteredLines = lines.filter(line => line.trim() !== '');
  
  // 최소한 헤더와 구분선이 있어야 함
  if (filteredLines.length < 2) {
    return <span>유효한 테이블 데이터가 없습니다.</span>;
  }

  // 첫 번째 줄은 헤더, 두 번째 줄은 구분선으로 가정
  const headerLine = filteredLines[0];
  const headers = headerLine.split('|').map(h => h.trim()).filter(Boolean);

  // 2번째 줄(구분선)은 무시하고, 나머지 줄들을 행으로 처리
  const tableRows = [];
  let currentLine = '';
  for (let i = 2; i < filteredLines.length; i++) {
    let line = filteredLines[i];
    // tailing "\\"가 있으면 줄 바꿈 표기로 간주하여 다음 줄과 병합
    if (line.endsWith('\\')) {
      currentLine += line.slice(0, -1) + '\n';
    } else {
      currentLine += line;
      tableRows.push(currentLine);
      currentLine = '';
    }
  }
  if (currentLine) tableRows.push(currentLine);

  // 각 행을 셀로 분리
  const parsedRows = tableRows.map(row =>
    row.split('|').map(cell => cell.trim())
  );

  // 셀 내 내용을 렌더링할 때, 줄바꿈 및 목록 표기법 처리 (예: "- " 또는 "- - "가 목록 수준을 나타냄)
  function renderCellContent(content) {
    const lineItems = content.split('\n').map(line => line.trim()).filter(Boolean);
    return lineItems.map((line, idx) => {
      const listMatch = line.match(/^(-\s*)+/);
      if (listMatch) {
        // 선행 '-'의 개수에 따라 들여쓰기 적용 (두 번째 수준부터 indent)
        const dashCount = listMatch[0].match(/-/g).length;
        const itemContent = line.replace(/^(-\s*)+/, '');
        return (
          <div key={idx} style={{ marginLeft: (dashCount - 1) * 20 }}>
            <span style={{ display: 'inline-block', width: 20 }}>&#8226;</span> {itemContent}
          </div>
        );
      }
      return <div key={idx}>{line}</div>;
    });
  }

  return (
    <table
      className={`multiline-table ${tableClassName}`}
      style={{ borderCollapse: 'collapse', width: '100%', ...style }}
    >
      <thead>
        <tr>
          {headers.map((header, idx) => (
            <th
              key={idx}
              style={{ padding: '8px', borderBottom: '2px solid #ddd' }}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {parsedRows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                style={{
                  padding: '8px',
                  borderBottom: '1px solid #ddd',
                  verticalAlign: 'top'
                }}
              >
                {renderCellContent(cell)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MultilineTable;