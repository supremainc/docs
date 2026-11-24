# Crowdin 스킬

이 폴더의 아래 스킬은 Crowdin 공식 저장소에서 가져왔습니다. 저장소를 내려받은 팀원은 별도 설치 없이 Claude Code에서 바로 사용할 수 있습니다.

- 출처: <https://github.com/crowdin/skills> (커밋 `af77e8c`, 2026-11-19)
- 라이선스: MIT ([LICENSE-crowdin-skills](LICENSE-crowdin-skills))
- 제외한 항목: 각 스킬의 `evals/` 폴더(스킬 개발용 테스트 데이터)

| 스킬 | 용도 |
|---|---|
| `how-to-crowdin` | "Crowdin에서 X를 어떻게 하나요?"에 대한 방법 안내, 리포트 해석 |
| `crowdin-cli` | `crowdin` 명령어, `crowdin.yml` 설정 |
| `croql` | CroQL 필터 작성 |
| `glossary-terms-extraction` | 문서에서 용어집 후보 추출 |
| `glossary-term-translations` | 기존 번역으로 용어집 번역 채우기 |
| `context-extraction` | 번역가용 문자열 맥락(`ai_context`) 작성 |
| `translate` | 리소스 파일 번역 초안 작성 후 제안으로 업로드 |
| `github-action` | Crowdin GitHub Action 설정 |
| `crowdin-api-client` | `@crowdin/crowdin-api-client` 코드 작성 |
| `graphql` | Crowdin GraphQL 쿼리 작성 |
| `integration-sync` | 연동 앱(Webflow, Zendesk 등)과 콘텐츠 동기화 |
| `generate-screenshots` | 스크린숏을 번역 맥락으로 업로드 |
| `i18n-setup` | 앱 국제화와 Crowdin 연결 |
| `create-app` | Crowdin 앱 개발 |
| `feedback` | Crowdin 팀에 피드백 전달(GitHub 이슈) |

## 업데이트 방법

원본 저장소가 갱신되면 아래처럼 다시 복사하세요. 복사 후 이 문서의 커밋 해시를 갱신하세요.

```bash
git clone --depth 1 https://github.com/crowdin/skills.git /tmp/crowdin-skills
for d in /tmp/crowdin-skills/skills/*/; do
  n=$(basename "$d"); rm -rf ".claude/skills/$n"; mkdir -p ".claude/skills/$n"
  (cd "$d" && tar cf - --exclude=./evals .) | (cd ".claude/skills/$n" && tar xf -)
done
```

## 참고

- 스킬 대부분은 Crowdin MCP 서버 연결이 필요합니다. 각자 `.mcp.json`에 개인 토큰으로 Crowdin Enterprise 엔드포인트(`https://supremainc.mcp.crowdin.com/v2/mcp`)를 설정하세요. `.mcp.json`은 gitignore 대상입니다.
- 이 폴더의 스킬은 원본을 그대로 유지합니다. 수정이 필요하면 별도 스킬로 만드세요. 그래야 업데이트할 때 변경 내용을 덮어쓰지 않습니다.
