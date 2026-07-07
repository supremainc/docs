'use strict';

// SVGR(svgrConfig.template)용 커스텀 템플릿.
// remark-cmd.js가 <Cmd sid="..." product="..." /> 를 텍스트로 치환하는 것과 동일한 방식으로,
// SVG 컴포넌트에 sid/product를 넘기면 useCmdTitle.js를 통해 title(<title> 엘리먼트)을 채워 넣는다.
//
//   import SVG from '@site/static/img/menus/ico-settings.svg';
//   <SVG sid="audit.system.logout" product="2" />
//
// svgrConfig.titleProp: true 로 이미 <title>{title}</title> 생성 코드가 jsx에 포함되어 있으므로,
// 여기서는 함수 파라미터에서 sid/product/replace/device 를 가로채 useCmdTitle 훅으로 계산한 값을
// 동일한 변수명(title)에 담아주기만 하면 된다.
function svgrCmdTemplate(variables, { tpl }) {
  return tpl`
${variables.imports};

import { useCmdTitle } from '@site/src/plugins/remark-cmd/useCmdTitle';

function ${variables.componentName}({ title: _cmdTitleFallback, titleId, sid, product, replace, device, ...props }) {
  const title = useCmdTitle({ sid, product, replace, device }) || _cmdTitleFallback;
  return (
    ${variables.jsx}
  );
}

${variables.exports};
`;
}

module.exports = svgrCmdTemplate;
