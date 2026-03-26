h1. ViOnyx System 기능 명세서
----
h2. 1. 기능 개요
||항목||내용||
|기능명|System Settings|
|위치|메인 메뉴 > System|
|역할|장치 정보 관리, 펌웨어 업데이트, 계정 관리, 오디오 설정, 로그 조회|
----
h2. 2. 기능 구성
||메뉴||설명||
|Device|장치 정보, 펌웨어 업데이트, 재시작, 초기화|
|Audio|오디오 클립 관리|
|Account|관리자/Operator 계정 관리|
|Logs|Access Logs, Event Logs, System Logs 조회|
----
h2. 3. Device (장치 정보)
----
h3. 3.1 Information (장치 정보)
||항목||타입||설명||
|Model|읽기 전용|카메라 모델명 (예: AICAM-ABCD)|
|Device SN|읽기 전용|장치 시리얼 번호|
|HW Version|읽기 전용|하드웨어 버전|
|Kernel|읽기 전용|커널 버전|
|Name|편집 가능|장치 이름 (커스텀 입력)|
|Memo|편집 가능|메모 (커스텀 입력)|
|Location|편집 가능|위치 정보|
|Location GPS|편집 가능|GPS 좌표 (경도, 위도)|
|Open Source License|버튼|오픈소스 라이선스 팝업 표시|
----
h3. 3.2 Name / Memo / Location 입력 사양
||항목||사양||
|필수 여부|선택|
|길이|1 ~ 64자|
|다국어|유니코드 지원 (한글, 일본어, 중국어 등)|
|공백|중간 허용, 앞뒤 금지|
|허용 특수문자|{{_}} {{.}} {{-}} {{(}} {{)}}|
|유효성 정규식|{{^[\p\\{L}\p\\{N}_.\-()](?:[\p\\{L}\p\\{N} _.\-()]{0,62}[\p\\{L}\p\\{N}_.\-()])?$}}|
----
h3. 3.3 GPS 설정
||항목||사양||
|기본값|OFF|
|설정 시|경도(Longitude), 위도(Latitude) 입력 가능|
----
h3. 3.4 Open Source License
||항목||사양||
|동작|"View" 버튼 클릭 시 팝업 창으로 라이선스 내용 표시|
|내용|HTML 형식 제공|
{quote}*� [개발팀 확인 필요]* 오픈소스 라이선스 내용 (R&D 제공 필요)
{quote}
----
h2. 4. Firmware / Reset
----
h3. 4.1 Firmware Update
||항목||사양||
|현재 버전|Version 표시 (예: 1.10.1)|
|업데이트|"Update" 버튼 클릭 → 파일 선택 → 확인 팝업|
|파일 선택|경로 선택 및 업데이트 파일 선택 UX 제공|
h4. 펌웨어 업데이트 확인 팝업
||요소||내용||
|타이틀|FW Update|
|메시지|"FW Version: [버전]\n\nWould you like to update to the latest version?"|
|버튼|Cancel / Confirm|
----
h3. 4.2 Reboot (재시작)
||항목||사양||
|동작|"Apply" 버튼 클릭 → 확인 팝업 → 장치 재시작|
h4. 재시작 확인 팝업
||요소||내용||
|타이틀|Reboot|
|메시지|"Would you like to restart the device?"|
|버튼|Cancel / Confirm|
----
h3. 4.3 Reset (초기화)
||초기화 유형||설명||삭제 대상||
|Config Reset|설정만 초기화|설정값 (네트워크 설정 제외)|
|Factory Reset|공장 초기화|사용자, 이벤트, 로그, 비밀번호 등 전체|
h4. Config Reset 확인 팝업
||요소||내용||
|타이틀|Config Reset|
|메시지|"Performing a config reset will only initialize the configuration settings and will not delete user data or logs."|
|버튼|Cancel / Confirm|
h4. Factory Reset 확인 팝업
||요소||내용||
|타이틀|Factory Reset|
|메시지|"Performing a factory reset will delete all user and log information and cannot be restored."|
|버튼|Cancel / Confirm|
|추가 확인|비밀번호 재입력 필요 (사용자 의도 재확인)|
h4. Factory Reset 비밀번호 확인 팝업
||요소||내용||
|메시지|"Please enter your login password to proceed with the factory reset."|
|입력 필드|로그인 비밀번호 입력|
|버튼|Cancel / Confirm|
----
h2. 5. Audio (오디오 설정)
----
h3. 5.1 Audio Clip 관리
||항목||사양||
|총 용량|30MB|
|잔여 용량|표시 (예: Remaining capacity: 8.5MB)|
|최대 파일 크기|총 용량 범위 이내|
|지원 형식|WAV 확장자만|
|지원 샘플레이트|48k|
{quote}*� [개발팀 확인 필요]* Audio Clip 총 용량 및 WAV 지원 샘플레이트 (R&D 사양 제공 필요)
{quote}
----
h3. 5.2 Audio Clip 추가
||항목||사양||
|동작|"+ Add" 버튼 클릭 → 파일 선택|
|파일 형식|WAV 확장자만 선택 가능|
|용량 제한|잔여 용량 범위 내 업로드 가능|
|파일명 제한 여부|파일명 영어만, 파일명 길이는 64자 이내|
{quote}*� [개발팀 확인 필요]* 업로드 가능한 파일명 제한 여부 (영문명만 가능 등)
{quote}
----
h3. 5.3 Audio Clip 리스트
||컬럼||설명||
|No|순번|
|Name|파일명|
|Volume|0 ~ 10|
|Play|재생/정지 버튼|
|Size|파일 크기 (MB)|
|Edit|편집/삭제 버튼|
{quote}*� [개발팀 확인 필요]* Volume 값 범위 (0 ~ 10) R&D 사양 확인
{quote}
----
h3. 5.4 Audio Clip 삭제
||조건||동작||
|Rule에서 미사용|즉시 삭제|
|Rule에서 사용 중|경고 팝업 표시 후 삭제 시 Rule Action에서도 자동 제외|
h4. 삭제 확인 팝업 (Rule 사용 중)
||요소||내용||
|타이틀|Audio Settings|
|메시지|"This audio clip is applied to the rule action settings.\n\nDo you still want to delete it?\n\nIf deleted, it will be automatically excluded from the rule action settings."|
|버튼|Cancel / Confirm|
----
h2. 6. Account (계정 관리)
----
h3. 6.1 계정 유형
||유형||설명||최대 인원||
|Administrator|마스터 관리자 (전체 권한)|1명|
|Operator|추가 관리자 (권한 제한)|최대 10명|
----
h3. 6.2 Administrator 설정
||항목||사양||
|ID|기본값 {{admin}} (변경 가능)|
|Password|"Update" 버튼으로 변경 가능|
|권한|전체 시스템 관리, Operator 추가/삭제/비활성화|
----
h3. 6.3 Administrator ID 입력 사양
||항목||사양||
|필수 여부|*필수*|
|길이|1 ~ 64자|
|다국어|유니코드 지원 (한글, 일본어, 중국어 등)|
|공백|중간 허용, 앞뒤 금지|
|허용 특수문자|{{_}} {{.}} {{-}} {{(}} {{)}}|
|유효성 정규식|{{^[\p\\{L}\p\\{N}_.\-()](?:[\p\\{L}\p\\{N} _.\-()]{0,62}[\p\\{L}\p\\{N}_.\-()])?$}}|
----
h3. 6.4 Password 변경
||항목||사양||
|입력 필드|New Password, New Confirm Password|
|비밀번호 정책|초기 비밀번호 설정과 동일한 규칙 적용|
|유효성 검사|실시간 규칙 준수 여부 표시|
|Apply 버튼|모든 규칙 충족 시 활성화|
h4. 비밀번호 규칙 표시
||규칙||설명||
|At least 12 characters|최소 12자 이상|
|At least one lowercase & uppercase letter|대소문자 각 1개 이상|
|At least one number & special character|숫자 및 특수문자 각 1개 이상|
|Must not contain common words or simple sequences|일반 단어/연속 문자 금지|
----
h3. 6.5 Operator 관리
||항목||사양||
|추가|"+ Add" 버튼으로 추가|
|최대 인원|10명|
|ID 규칙|Administrator ID와 동일|
|PW 규칙|Administrator PW와 동일|
|권한 설정|Read Only / Edit 선택|
----
h3. 6.6 Operator 권한
||권한||설명||
|Read Only|전체 메뉴 읽기 전용|
|Edit|전체 메뉴 편집 가능|
----
h3. 6.7 Operator 제한 사항
||항목||제한||
|다른 Operator 초대|불가|
|Operator 로그인 시|본인의 ID/PW만 변경 가능|
----
h3. 6.8 Operator 비활성화
||항목||사양||
|권한|Administrator만 가능|
|동작|Operator 계정 일시적 비활성화 (Disable)|
----
h2. 7. Logs (로그 조회)
----
h3. 7.1 로그 유형
||로그 유형||설명||
|Access Logs|로그인/로그아웃 기록|
|Event Logs|이벤트 발생, Webhook 발신, Rule Action 진행 기록|
|System Logs|개발팀 분석용 로그 (장치 부팅, 재부팅, 공장 초기화 등)|
----
h3. 7.2 Access Logs
||컬럼||설명||
|Log ID|로그 ID|
|Type|로그 유형 (예: Admin Login)|
|Source|접속 출처 (IP 주소 또는 Suprema CLUe)|
|Time|발생 시간|
----
h3. 7.3 로그 내보내기
||항목||사양||
|형식|CSV Export|
|동작|"CSV Export" 버튼 클릭 → 파일 다운로드|
----
h3. 7.4 로그 보관 정책
||항목||사양||
|보관 기간|장치 메모리 사이즈에 따름|
|상세 사양|system log: 1 month, 용량은 추후 지정
access log: 1 month, 용량은 추후 지정
event log: 1month, 용량은 추후 지정|
{quote}*� [개발팀 확인 필요]* 로그 보존 기간 및 최대 보관량 (R&D 사양 제공 필요)
{quote}
----
h2. 8. 다국어 지원
----
h3. 8.1 주요 텍스트
||키||한국어||영어||일본어||
|menu_device|장치|Device|デバイス|
|menu_audio|오디오|Audio|オーディオ|
|menu_account|계정|Account|アカウント|
|menu_logs|로그|Logs|ログ|
|btn_update|업데이트|Update|アップデート|
|btn_reboot|재시작|Reboot|再起動|
|btn_reset|초기화|Reset|リセット|
|config_reset|설정 초기화|Config Reset|設定リセット|
|factory_reset|공장 초기화|Factory Reset|工場リセット|
----
h2. 부록: 개발팀 확인 필요 사항 요약
||#||섹션||확인 항목||비고||
|1|3.4|오픈소스 라이선스 내용|HTML 형식 제공|
|2|5.1|Audio Clip 총 용량|30MB|
|3|5.1|WAV 지원 샘플레이트|48k|
|4|5.2|Audio Clip 파일명 제한 여부|파일명 영어만, 파일명 길이는 64자 이내|
|5|5.3|Audio Volume 값 범위|0 ~ 10 확정|
|6|7.4|로그 보존 기간 및 최대 보관량|system log: 1 month, 용량은 추후 지정
access log: 1 month, 용량은 추후 지정
event log: 1 month, 용량은 추후 지정|
|7|-|GPS 좌표 입력 형식|Decimal Degrees(DD)|
|8|-|Firmware 파일 확장자/형식|bin 파일|
|9|-|Config Reset 시 네트워크 설정 포함 여부|제외 확정|
|10|-|Operator Read Only/Edit 권한 상세 범위|Operator: 관리자 메뉴를 제외한 모든 메뉴에 RW 허용
User: 모든 메뉴에 RW 권한 없음, Live View 확인만 허용|
|11|-|Event Logs 기록 항목 상세|Webhook 발신 기록 포맷|
|12|-|System Logs 접근 권한|Administrator 전용|