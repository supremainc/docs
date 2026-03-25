h1. ViOnyx Privacy & Overlay 기능 명세서
----
h2. 1. 기능 개요
||항목||내용||
|기능명|Privacy & Overlay Settings|
|위치|Settings > Privacy & Overlay|
|역할|프라이버시 영역 마스킹, 얼굴 프라이버시, OSD 오버레이 설정|

- 라이브 뷰에서 비공개할 영역을 지정하거나 수정, 삭제할 수 있습니다.
- 카메라 영상에서 사생활 침해가 우려되는 부분을 보이지 않도록 프라이버시 영역으로 설정할 수 있습니다.

----
h2. 2. 기능 구성 요약
||기능||설명||
|Privacy Area Setting|특정 영역 마스킹 (최대 10개)|
|Face Privacy Setting|얼굴 자동 블러 처리|
|Overlay|날짜/시간, 카메라 이름 OSD 표시|
----
h2. 3. Privacy Area Setting (프라이버시 영역 설정)
----
h3. 3.1 기능 설명
||항목||내용||
|목적|특정 영역을 마스킹하여 프라이버시 보호|
|적용 범위|Fisheye View에서 설정 시, 모든 뷰 모드에 적용 (Single Panorama, Double Panorama, Quad View 등)|
----
h3. 3.2 영역 설정 사양
||항목||사양||
|최대 영역 수|*10개*|
|영역 생성|"Add" 버튼 클릭|
|영역 삭제|각 영역별 "Remove" 버튼|
|영역 형태|사각형 (드래그로 크기/위치 조절)|
----
h3. 3.3 영역 속성
||속성||설명||옵션||
|Area Name|영역 이름|자동 생성 (Area #1, Area #2, ...)|
|Order|영역 순서 (Z-index)|1 ~ 10 (변경 시 다른 영역 1칸씩 밀림)|
|Color|마스킹 색상|디자인 가이드에 따름|
----
h3. 3.4 영역 순서 (Order) 동작
||동작||설명||
|순서 변경|드롭다운 또는 위/아래 버튼으로 변경|
|충돌 처리|순서 변경 시 기존 영역들이 1칸씩 밀림|
|겹침 표시|Order 값이 높은 영역이 위에 표시|
----
h3. 3.5 뷰 모드 연동
||설정 위치||적용 범위||
|Fisheye View에서 설정|모든 Dewarping 뷰에 자동 적용|
||적용 뷰 모드||
|Fisheye View|
|Single Panorama View|
|Double Panorama View|
|Quad View|
----
h2. {color:#ff0000}4. Face/Full Body Privacy Setting (얼굴 / 전신 프라이버시){color}
----
h3. 4.1 기능 설명
||항목||내용||
|목적|감지된 얼굴/전신 자동 블러 처리|
|동작|AI 얼굴 감지 → 자동 블러 적용|
|AI 영향|*블러 처리되어도 AI 성능에는 영향 없음*|
----
h3. 4.2 설정 옵션
||항목||옵션||
|{color:#ff0000}Face Privacy{color}|{color:#ff0000}ON / OFF (토글) *Full Body On 할 경우 자동 얼굴 블러 반영{color}|
|{color:#ff0000}Full Body Privacy{color}|{color:#ff0000}ON / OFF (토글){color}|
{quote}*� [개발팀 확인 필요]* Face Privacy 블러 강도 설정 필요 여부 (고정 vs 사용자 조절)

 
{quote}
----
h3. 4.3 안내 메시지
||언어||메시지||
|한국어|사용자 얼굴 감지시 자동으로 블러 처리 되지만, AI 성능에는 영향을 주지 않습니다.|
|영어|Detected faces are automatically blurred, but this does not affect AI performance.|
|일본어|検出された顔は自動的にぼかし処理されますが、AI性能には影響しません。|
----
h3. 4.4 동작 원리
||단계||처리||용도||
|1|카메라 영상 입력|-|
|2|AI 얼굴 감지|-|
|3-A|블러 처리된 영상 출력|스트리밍/녹화용|
|3-B|원본 기반 AI 분석|Face Recognition 등|
{quote}*� 참고:* 블러는 출력 스트림에만 적용되며, AI 분석은 원본 이미지 기반으로 수행
{quote}
----
h2. 5. Overlay (OSD 오버레이)
----
h3. 5.1 기능 설명
||항목||내용||
|목적|영상 위에 날짜/시간, 카메라 이름 표시|
|적용 범위|Fisheye View에서만 표시 (Dewarping 뷰 제외)|
|참고|Avigilon: 좌측 상단 고정, 위치 변경 불가 / 한화: 별도 오버레이 없음|
----
h3. 5.2 Date & Time 오버레이
||항목||설정||옵션/범위||
|활성화|ON / OFF|토글|
|Date Format|날짜 형식|YYYY-MM-DD (기본) / MM-DD-YYYY / DD-MM-YYYY|
|Time Format|시간 형식|HH:MM:SS (기본) / HH:MM (초생략)|
|Font Size|폰트 크기|디자인 가이드에 따름|
|Color|글자 색상|디자인 가이드에 따름|
|Position|위치|마우스 드래그로 조절 가능|
{quote}*� [개발팀 확인 필요]* Date Format 추가 옵션 여부 (MM-DD-YYYY, DD-MM-YYYY 등)
{quote}
----
h3. 5.3 Camera Name 오버레이
||항목||설정||옵션/범위||
|활성화|Display ON / OFF|토글|
|Name|카메라 이름|공통 입력 필드 규칙 적용|
|Font Size|폰트 크기|디자인 가이드에 따름|
|Color|글자 색상|디자인 가이드에 따름|
|Position|위치|마우스 드래그로 조절 가능|
----
h3. 5.4 위치 조절
||항목||정책||
|조절 방식|마우스 드래그|
|조절 단위|픽셀 단위 자유 이동|
|경계 제한|영상 영역 내에서만 이동 가능|
----
h3. 5.5 Overlay 표시 예시
||위치||표시 내용||
|사용자 지정 위치|날짜/시간 (예: 2026-01-12 13:45:56)|
|사용자 지정 위치|카메라 이름 (예: ViOnyx)|
----
h2. 6. 설정 저장 및 반영
----
h3. 6.1 저장 정책
||항목||정책||
|Privacy Area|설정 즉시 반영|
|Face Privacy|토글 즉시 반영|
|Overlay|설정 즉시 반영|
{quote}*� [개발팀 확인 필요]* 각 설정 반영 시점 확정
{quote}
----
h3. 6.2 스트림 적용
||설정||적용 대상||
|Privacy Area|모든 스트림 (Ch 1 / Ch 2)|
|Face Privacy|모든 스트림 (Ch 1 / Ch 2)|
|Overlay|Fisheye View 스트림 (Ch 1)|
----
h2. 7. 다국어 지원
----
h3. 7.1 주요 텍스트
||키||한국어||영어||일본어||
|privacy_overlay|프라이버시 및 오버레이|Privacy & Overlay|プライバシー＆オーバーレイ|
|area_setting|영역 설정|Area Setting|エリア設定|
|add|추가|Add|追加|
|remove|삭제|Remove|削除|
|order|순서|Order|順序|
|color|색상|Color|色|
|face_privacy|얼굴 프라이버시|Face Privacy Setting|顔プライバシー設定|
|overlay|오버레이|Overlay|オーバーレイ|
|camera_name|카메라 이름|Camera Name|カメラ名|
|display|표시|Display|表示|
|date_time|날짜 및 시간|Date & Time|日付と時刻|
|date_format|날짜 형식|Date Format|日付形式|
|time_format|시간 형식|Time Format|時刻形式|
|font_size|폰트 크기|Font Size|フォントサイズ|
----
h2. 부록: 개발팀 확인 필요 사항 요약
||#||섹션||확인 항목||비고||
|1|4.2|Face Privacy 블러 강도 설정 필요 여부|고정|
|2|5.2|Date Format 추가 옵션 여부|MM-DD-YYYY, DD-MM-YYYY 가능|
|3|6.1|각 설정 반영 시점|즉시 반영 확정(반영 시점까지 1초정도 Overlay Shutdown 필요)|
|4|-|Privacy Area 색상 옵션|https://jira.suprema.co.kr/browse/AICP-8?focusedCommentId=369074&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-369074|
|5|-|Overlay Font Size 옵션|https://jira.suprema.co.kr/browse/AICP-8?focusedCommentId=369074&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-369074|
|6|-|Overlay Color 옵션|https://jira.suprema.co.kr/browse/AICP-8?focusedCommentId=369074&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-369074|