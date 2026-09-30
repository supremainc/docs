const path = require('path');
const { execFile } = require('child_process');
const { promisify } = require('util');
const { getVcsPreset } = require('@docusaurus/utils');

const execFileAsync = promisify(execFile);

/**
 * 문서의 "최종 수정" 날짜를 파일을 마지막으로 수정한 커밋 시각이 아니라
 * 빌드 중인 브랜치(main/preview)에 병합된 시각으로 반환하는 Docusaurus VCS.
 *
 * `git log --first-parent -m`은 빌드 브랜치의 이력만 따라가며, 병합 커밋을
 * "병합된 브랜치의 파일을 변경한 커밋"으로 취급한다.
 * 빌드 브랜치에 직접 커밋한 파일은 해당 커밋 시각이 그대로 사용된다.
 *
 * 개발 모드(`yarn start`)에서는 'default-v2'와 같이 고정된 가짜 값을 반환한다.
 * See https://docusaurus.io/docs/api/docusaurus-config#vcs
 */
const isDevOrTest =
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';
const hardcodedVcs = getVcsPreset('hardcoded');
// 생성일은 문서에서 사용하지 않으며(블로그의 날짜 폴백에서만 사용), 파일별로 조회하는 방식을 그대로 쓴다.
const creationVcs = getVcsPreset('git-ad-hoc');

let initPromise = null;

async function git(args, cwd) {
  const { stdout } = await execFileAsync('git', args, {
    cwd,
    encoding: 'utf8',
    maxBuffer: 200 * 1024 * 1024,
  });
  return stdout;
}

// 파일 절대 경로 → 병합(반영) 시각(ms) 맵
async function loadMergeDates(siteDir) {
  const repoRoot = (await git(['rev-parse', '--show-toplevel'], siteDir)).trim();
  const stdout = await git(
    [
      '--no-pager',
      '-c', 'log.showSignature=false',
      // 한글 등 비 ASCII 파일명이 따옴표·이스케이프 없이 출력되도록 설정
      '-c', 'core.quotePath=false',
      'log',
      '--first-parent',
      '-m',
      '--format=t:%ct',
      '--name-only',
    ],
    repoRoot,
  );

  const dates = new Map();
  let timestamp = null;
  // git log는 최신 커밋부터 출력하므로 파일별로 처음 나온 시각이 최종 반영 시각이다.
  for (const line of stdout.split('\n')) {
    if (line.startsWith('t:')) {
      timestamp = Number.parseInt(line.slice(2), 10) * 1000;
      continue;
    }
    const relativeFile = line.trim();
    if (!relativeFile || timestamp === null) {
      continue;
    }
    const absoluteFile = path.resolve(repoRoot, relativeFile);
    if (!dates.has(absoluteFile)) {
      dates.set(absoluteFile, timestamp);
    }
  }
  return dates;
}

// 설정 검증이 각 메서드의 인수 개수(arity)를 확인하므로 인수를 명시적으로 선언한다.
module.exports = {
  initialize: ({ siteDir }) => {
    if (isDevOrTest || initPromise) {
      // i18n 빌드 시 로케일마다 호출되므로 한 번만 초기화한다.
      return;
    }
    initPromise = loadMergeDates(siteDir);
  },
  getFileCreationInfo: async (filePath) => {
    if (isDevOrTest) {
      return hardcodedVcs.getFileCreationInfo(filePath);
    }
    return creationVcs.getFileCreationInfo(filePath);
  },
  getFileLastUpdateInfo: async (filePath) => {
    if (isDevOrTest) {
      return hardcodedVcs.getFileLastUpdateInfo(filePath);
    }
    if (!initPromise) {
      throw new Error('mergeDateVcs가 초기화되지 않았습니다.');
    }
    const dates = await initPromise;
    const timestamp = dates.get(path.resolve(filePath));
    // 수정자 이름은 표시하지 않으므로(showLastUpdateAuthor: false) author는 비워 둔다.
    return timestamp ? { timestamp, author: '' } : null;
  },
};
