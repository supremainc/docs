h1. ViOnyx Date & Time 기능 명세서
----
h2. 1. 기능 개요
||항목||내용||
|기능명|Date & Time Settings|
|위치|Settings > Date & Time|
|역할|날짜/시간, 시간대, NTP 동기화|
|연동|BioStar 시간대 동기화, CLUe 자동 동기화|
----
h2. 2. 기능 구성
||구성||설명||
|Time Zone|시간대 설정 (BioStar 동일)|
|Manual|수동 설정, PC 시간 동기화|
|NTP Server Sync|NTP 자동 동기화|
|CLUe 연동|CLUe 서버 자동 동기화|
----
h2. 3. Time Zone (시간대)
||항목||사양||
|형식|(GMT ±HH:00) City|
|예시|(GMT +09:00) Seoul|
|목록|BioStar 목록 동일|
|기본값|(GMT +09:00) Seoul|
{panel:title=⚠️ 개발팀 확인 필요|borderStyle=solid|borderColor=#cccccc|titleBGColor=#ffab00|bgColor=#ffffff}
BioStar 시간대 목록 전체 항목 확인 및 동기화
{panel}
----
h2. 4. 시간 설정 모드
h3. 4.1 모드 선택
||모드||설명||
|Manual|수동 시간 설정|
|NTP Server Sync|NTP 자동 동기화|

{info}

두 모드는 상호 배타적 (하나만 선택)\{info}
----
h2. 5. Manual (수동 설정)
h3. 5.1 수동 입력
||항목||형식||
|Date|YYYY-MM-DD|
|Time|HH:MM:SS|
h3. 5.2 PC Viewer Time 동기화
||항목||사양||
|기능|브라우저 시간을 카메라에 적용|
|적용|Apply 버튼 클릭 시|
----
h2. 6. NTP Server Sync
h3. 6.1 서버 주소 설정
||항목||사양||
|최대 서버 수|4개|
|입력 형식|URL 또는 IP|
|Address 1|필수|
|Address 2~4|선택|
h3. 6.2 동기화 동작
||항목||정책||
|동기화 시점|설정 시 즉시 + 주기적|
|우선순위|Address 1→2→3→4|
|실패 처리|다음 서버 Fallback|
{panel:title=⚠️ 개발팀 확인 필요|borderStyle=solid|borderColor=#cccccc|titleBGColor=#ffab00|bgColor=#ffffff}
 * NTP 동기화 주기 (1시간/6시간/24시간?)
 * NTP 주소 유효성 검사 정규식
 * 실패 시 재시도 정책{panel}
----
h2. 7. CLUe 연동
h3. 7.1 시간 동기화
||항목||사양||
|조건|CLUe 서버 연결 시|
|동작|서버 시간 자동 동기화|
|설정 제한|모든 설정 읽기 전용|

-> CLUe 에서 지원하는 NTP 주소 자동 반영 필요 
----
h2. 8. 설정 반영
||설정||반영 시점||
|Time Zone|즉시 반영|
|Manual|Apply 클릭 시|
|NTP|모드 선택 시|
----
h2. 부록: 개발팀 확인 필요 사항
||#||섹션||확인 항목||비고||
|1|3|BioStar 시간대 목록| |
|2|6.1|NTP 주소 정규식|URL|
|3|6.2|NTP 동기화 주기|자동 동기됨(설정 불필요)|
|4|6.2|재시도 정책|자동 동기됨(설정 불필요)|
|5|-|DST 지원 여부|NTP에서 자동 처리되므로 DST 설정 불필요|