## 번역 지침

크라우딘 업로드 명령어

```
crowdin upload -b main
```

크라우딘 번역 전 태그 감추기할 목록

- Cmd
- Image
- Table, Thead, Th, Tbody, Row, Td
- Columns, Column
- Include
- Xclude
- Steps, Step
- Folder, File
- Tabs, TabItem
- Overview
- BugLists
- Faqs
- FaqsItems
- Calloutlists
- DocLink
- Treeview
- YouTube
- PageBreak
- Magnify
- NextStep, NextItem
- DbQueryCreate
- 주석 {/**/}
- import
- details
- summary

영어에 남아있는 한글 정규식 검색

^.*[가-힣].*$

주석 오류 찾기

{/\*

\\ 중복된 특수기호

 검색해서 확인

</Badge> 검색해서 확인

띄어쓰기 2번 검색 (전체 바꾸기 하면 안됨)

^.*[가-힣]  [가-힣].*$
^.*[a-z]  [a-z].*$

찾아서 삭제할 것: },{

---

물결 사용 -> 하이픈

CXPath: //heading[0]/content

CXPath: //yaml/title

gathering setting -> muster setting

the following document,  [the following]() document.

visual face

settings-remote-access.mdx 문서 업데이트


---

전체 문서에 테이블의 | * -> | - 변경할 것

---

location-issues.json: \\\" -> \"


## 번역 언어 추가 시 고려할 사항

### 수동 추가 파일

_airfob-portal-site-type.mdx
_more-information.mdx
_ic-information.mdx
_ios-license.mdx
_android-license.mdx
_sil-open-font-license.mdx
_original-ssleay-license.mdx
_openssl-license.mdx
_mit-open-source-license.mdx
_gnu-lesser-general-public-license.mdx
_gnu-general-public-license.mdx
_boringssl-license.mdx
_apache-license.mdx
legal/*.mdx
/docs/ja/platform/biostar_x/opensourcelicenses.txt


### 번역 리소스 파일 확인하기

- i18n\ko\code.json 파일과 같은 구조의 파일인지 확인할 것

- navbar.json 국문 파일과 다국어 파일 구조가 동일한지 확인할 것

- releasenote 영문 파일 기준으로 다국어 파일에 추가할 것

- overviewitem.js 82 줄 수정: '릴리스' 'release'

## 추후 수정 예정

src\components\Image\index.js