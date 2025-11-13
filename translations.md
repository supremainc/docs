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

---

물결 사용 -> 하이픈

CXPath: //heading[0]/content

CXPath: //yaml/title

gathering setting -> muster setting

the following document,  [the following]() document.

visual face

settings-remote-access.mdx 문서 업데이트
