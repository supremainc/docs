h1. ViOnyx Video Profile 기능 명세서
----
h2. 1. 기능 개요
||항목||내용||
|기능명|Video Profile (비디오 프로필 설정)|
|위치|Settings > Video Profile|
|역할|채널별 스트림 설정, 뷰 모드 구성, 인코딩 파라미터 관리|
----
h2. 2. 채널 구성
----
h3. 2.1 채널 정의
||채널||용도||뷰 타입||
|Ch 1|뷰 타입 선택|Fisheye View 고정 (변경 불가)|
|Ch 2|뷰 타입 선택|사용자 선택 가능|
----
h3. 2.2 채널별 뷰 모드 제약
||채널||뷰 모드 선택||비고||
|*Ch 1*|Fisheye View *고정*|변경 불가|
|*Ch 2*|선택 가능|Single Panorama / Double Panorama / Quad View|
----
h3. 2.3 Ch 2 채널 지원 뷰 타입
||뷰 모드||설명||
|Single Panorama View|단일 파노라마 뷰 (기본값)|
|Double Panorama View|이중 파노라마 뷰|
|Quad View|4분할 뷰|
{quote}*� 참고:* Ch 2에서는 Fisheye View 선택 불가
{quote}
----
h2. 3. 스트림 설정
----
h3. 3.1 스트림 구성
||항목||정책||
|스트림 수|채널별 Main Stream / Sub Stream 지원|
|설정 단위|각 채널(Ch 1, Ch 2)별로 Main / Sub 각 1개씩 설정 가능|
|Main Stream|고화질 녹화/모니터링용|
|Sub Stream|저화질 원격 전송/실시간 모니터링용|
|기본값|R&D 사양 제공 필요|
||채널||Main Stream||Sub Stream||
|Ch 1|✓ 설정 가능|✓ 설정 가능|
|Ch 2|✓ 설정 가능|✓ 설정 가능|
{quote}*� [개발팀 확인 필요]* Main / Sub Stream 각각의 기본 Default 값 (R&D 사양 제공 필요)
{quote}
----
h3. 3.2 지원 프로파일 항목
||항목||지원 값||기본값||비고||
|Codec|H.264, H.265|H.264|H.265는 Profile T 필수|
|Resolution|R&D 사양 제공 필요|-|최대 12MP|
|Frame Rate|R&D 사양 제공 필요|-|fps|
|Max Bitrate|R&D 사양 제공 필요|-|Kbps/Mbps|
|Bitrate Control|CBR / VBR|-|R&D 사양 제공 필요|
|GOP|R&D 사양 제공 필요|-|I-Frame 간격|
{quote}*� [개발팀 확인 필요]* 각 프로파일 항목별 지원 범위 및 기본값 (R&D 사양 필요)
{quote}
----
h2. 4. 뷰 모드 및 프로파일 설정 연동
----
h3. 4.1 설정 반영 정책
||항목||정책||
|반영 시점|별도 적용 버튼 입력 없이 즉시 카메라 설정에 반영|
|표시 위치|중앙 뷰 부분에 표시|
----
h3. 4.2 화면 좌우 반전 (Mirror)
||항목||정책||
|AI 미설정 시|완전 활성화 (해당 채널 AI 기능 삭제 후 가능)|
|AI 설정 시|비활성화 또는 경고 표시|
{quote}*� 참고:* Orientation 변경은 기존 AI 이벤트 설정에 영향을 줄 수 있으므로, Fisheye View에서 AI 이벤트 설정이 되어 있는 경우 AI 설정 삭제 후 진행 가능하도록 가이드
{quote}
----
h2. 5. Orientation (화면 방향) 설정
----
h3. 5.1 지원 기능
||기능||설명||
|좌우 반전 (Mirror)|수평 반전|
----
h3. 5.2 AI 연동 정책
||조건||동작||
|AI 이벤트 미설정|Orientation 변경 가능|
|AI 이벤트 설정됨|변경 시 AI 설정 삭제 경고 → 사용자 확인 후 진행|
{quote}*� [개발팀 확인 필요]* AI 설정 삭제 후 Orientation 변경 가능하도록 플로우 확정
{quote}
----
h2. 6. 초기화 (Reset)
----
h3. 6.1 초기화 대상
||항목||정책||
|초기화 범위|해당 채널만 초기화 (전체 채널 초기화 아님)|
|복구 설정|공장 초기 설정으로 복구|
----
h3. 6.2 AI 연동 정책
||조건||동작||
|AI 이벤트 미설정|즉시 초기화|
|AI 이벤트 설정됨|Fisheye View에서 AI 이벤트 설정이 되어 있는 경우, AI 설정 삭제 후 진행 가능하도록 가이드|
----
h2. 7. 동시 접속 제한
----
h3. 7.1 접속 정책
||항목||정책||
|Web Viewer 제한|동시 접속은 최대 2개로 제한 |
|추가 접근 시|추가 접근 시 Busy로 아래 팝업 화면 표시|
----
h2. 8. 채널 초기화 동작
----
h3. 8.1 초기화 플로우
||단계||조건||동작||결과||
|1|채널 초기화 버튼 클릭|AI 이벤트 설정 확인|-|
|2-A|AI 미설정|즉시 초기화|완료|
|2-B|AI 설정됨|경고 팝업 표시|-|
|3-A|경고 팝업 → 취소|-|현재 상태 유지|
|3-B|경고 팝업 → 확인|AI 설정 삭제 → 초기화|완료|
----
h3. 8.2 초기화 결과
||항목||초기화 후 상태||
|뷰 모드|기본값으로 복원|
|스트림 설정|공장 초기값으로 복원|
|AI 설정|삭제됨 (해당 채널)|
----
h2. 9. 설정 저장 및 반영
----
h3. 9.1 저장 정책
||항목||정책||
|저장 방식|변경 즉시 자동 반영 (별도 저장 버튼 없음)|
|반영 시점|설정 변경 시 즉시 카메라에 적용|
----
h3. 9.2 설정 완료 후 이동
||항목||정책||
|Basic 설정 완료 시|Date & Time 다음 탭 선택으로 자동 이동|
|다른 메뉴 이동|설정 가능 인식|
----
h2. 10. 다국어 지원
----
h3. 10.1 주요 텍스트
||키||한국어||영어||일본어||
|ch1|채널 1|Ch 1|チャンネル1|
|ch2|채널 2|Ch 2|チャンネル2|
|view_fisheye|피시아이 뷰|Fisheye View|フィッシュアイビュー|
|view_single_panorama|싱글 파노라마|Single Panorama|シングルパノラマ|
|view_double_panorama|더블 파노라마|Double Panorama|ダブルパノラマ|
|view_quad|쿼드 뷰|Quad View|クワッドビュー|
|codec|코덱|Codec|コーデック|
|resolution|해상도|Resolution|解像度|
|frame_rate|프레임 레이트|Frame Rate|フレームレート|
|bitrate|비트레이트|Bitrate|ビットレート|
|gop|GOP|GOP|GOP|
|reset|초기화|Reset|リセット|
|mirror|좌우 반전|Mirror|左右反転|
----
h2. 부록: 개발팀 확인 필요 사항 요약
||#||섹션||확인 항목||비고||
|1|3.1|Main/Sub Stream 기본 Default 값|Codec: H.264, H.265, MJPEG 지원(Default: H.264)|
|2|3.2|Resolution 지원 범위 및 기본값|Fisheye:
-> Main: 3520x3520, Sub: 1280x1280, 880x880
Single Panorama:
-> Main: 4096x1024, Sub: -
Double Panorama:
-> Main: 2048x2048, Sub: -
Quad View:
-> Main: 2048x2048, Sub: -
|
|3|3.2|Frame Rate 지원 범위 및 기본값|30, 25, 20, 15, 10(Default: 30)|
|4|3.2|Max Bitrate 지원 범위 및 기본값|Range: 100Kbps ~ 450Mbps
Default: Main: 2Mbps(H.462), Sub: 1Mbps(H.264)
|
|5|3.2|Bitrate Control 모드 및 기본값|CBR/VBR(Default: VBR)|
|6|3.2|GOP 지원 범위 및 기본값|1~300(Default: 30)|
|7|5.2|AI 설정 삭제 후 Orientation 변경 플로우|확정 필요|
|8|7.1|Busy 상태 팝업 메시지 문구 및 디자인|동시 접속 정책|
|9|7.2|Encoding 한계 가이드 문구|채널별 최대 설정 가능 범위|