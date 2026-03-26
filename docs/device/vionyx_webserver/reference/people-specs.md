h1. ViOnyx People (Face User List) 기능 명세서
----

h2. 1. 기능 개요
||항목||내용||
|기능명|People (Face User List)|
|위치|메인 메뉴 > People|
|역할|얼굴 인식 사용자 등록 및 관리|
|비고|얼굴 없는 사용자도 생성 가능 (선 API 생성 후 추후 얼굴 사진 등록 가능)|
----

h2. 2. 얼굴 인식 동의 팝업
||항목||사양||
|표시 조건|최초 사용자 추가 시|
|팝업 내용|"얼굴 인식 사용은 관련 해당 지역의 관련 규제 법규 준수가 필요합니다. 슈프리마는 이에 대한 책임을 지지 않습니다. 이에 대해 동의 하시고 계속 하시겠습니까?"|
|버튼|Cancel / Confirm|
|동의 후|이후 팝업 표시 없음, 시스템 로그에 동의 기록 (어드민 ID, 날짜)|
----

h2. 3. 사용자 리스트
----

h3. 3.1 리스트 컬럼
||컬럼||설명||
|User ID|사용자 고유 ID (유니크 보장)|
|Name|사용자 이름|
|Description|설명 (유저 그룹 등 정보 매핑용)|
|Unique Key|사용자 구분 연동 목적 (예: 유저 그룹 공통 식별 값)|
|Last Updated|최종 수정 일시|
|Edit|수정/삭제 버튼|
----

h3. 3.2 필드 입력 사양
h4. Name (사용자 이름)
||항목||사양||
|필수 여부|*필수*|
|길이|1 ~ 64자|
|다국어|유니코드 지원 (한글, 일본어, 중국어 등)|
|공백|중간 허용, 앞뒤 금지|
|허용 특수문자|{{*}} {{.}} {{-}} {{(}} {{)}}|
|유효성 정규식|`^[\p\{L}\p\{N}*.-()](?:[\p\{L}\p\{N} *.-()]\{0,62}[\p\{L}\p\{N}*.-()])?# ViOnyx People (Face User List) 기능 명세서|
----

h2. 1. 기능 개요
||항목||내용||
|기능명|People (Face User List)|
|위치|메인 메뉴 > People|
|역할|얼굴 인식 사용자 등록 및 관리|
|비고|얼굴 없는 사용자도 생성 가능 (선 API 생성 후 추후 얼굴 사진 등록 가능)|
----

h2. 2. 얼굴 인식 동의 팝업
||항목||사양||
|표시 조건|최초 사용자 추가 시|
|팝업 내용|"얼굴 인식 사용은 관련 해당 지역의 관련 규제 법규 준수가 필요합니다. 슈프리마는 이에 대한 책임을 지지 않습니다. 이에 대해 동의 하시고 계속 하시겠습니까?"|
|버튼|Cancel / Confirm|
|동의 후|이후 팝업 표시 없음, 시스템 로그에 동의 기록 (어드민 ID, 날짜)|
----

h2. 3. 사용자 리스트
----

|
h4. Description (설명)
||항목||사양||
|필수 여부|선택|
|길이|0 ~ 256자|
|다국어|유니코드 지원 (한글, 일본어, 중국어 등)|
|공백|허용 (앞뒤 자동 trim)|
|허용 문자|모든 유니코드 문자, 특수문자 허용|
|금지 문자|제어 문자 (Control Characters)|
|유효성 정규식|`^[\p\{L}\p\{N}\p\{P}\p\{S}\p\{Z}]\{0,256}# ViOnyx People (Face User List) 기능 명세서|
----

h2. 1. 기능 개요
||항목||내용||
|기능명|People (Face User List)|
|위치|메인 메뉴 > People|
|역할|얼굴 인식 사용자 등록 및 관리|
|비고|얼굴 없는 사용자도 생성 가능 (선 API 생성 후 추후 얼굴 사진 등록 가능)|
----

h2. 2. 얼굴 인식 동의 팝업
||항목||사양||
|표시 조건|최초 사용자 추가 시|
|팝업 내용|"얼굴 인식 사용은 관련 해당 지역의 관련 규제 법규 준수가 필요합니다. 슈프리마는 이에 대한 책임을 지지 않습니다. 이에 대해 동의 하시고 계속 하시겠습니까?"|
|버튼|Cancel / Confirm|
|동의 후|이후 팝업 표시 없음, 시스템 로그에 동의 기록 (어드민 ID, 날짜)|
----

h2. 3. 사용자 리스트
----

| | 용도 | 부서, 직책, 유저 그룹 등 자유 형식 메모 |
h4. Unique Key (고유 키)
||항목||사양||
|필수 여부|선택|
|길이|0 ~ 64자|
|유니크|*중복 불가* (시스템 전체에서 고유)|
|허용 문자|영문 대소문자, 숫자, {{-}} {{*}}|
|금지 문자|공백, 특수문자 (하이픈, 언더스코어 제외)|
|대소문자|구분함 (Case-sensitive)|
|유효성 정규식|`^[A-Za-z0-9*-]\{0,64}# ViOnyx People (Face User List) 기능 명세서|
** BIoStar/CLUe와 동기화 될 때 사용자 이름, ID 와 같은 필수 값에 대한 동기화가 보장 되어야 함

----

h2. 1. 기능 개요
||항목||내용||
|기능명|People (Face User List)|
|위치|메인 메뉴 > People|
|역할|얼굴 인식 사용자 등록 및 관리|
|비고|얼굴 없는 사용자도 생성 가능 (선 API 생성 후 추후 얼굴 사진 등록 가능)|
----

h2. 2. 얼굴 인식 동의 팝업
||항목||사양||
|표시 조건|최초 사용자 추가 시|
|팝업 내용|"얼굴 인식 사용은 관련 해당 지역의 관련 규제 법규 준수가 필요합니다. 슈프리마는 이에 대한 책임을 지지 않습니다. 이에 대해 동의 하시고 계속 하시겠습니까?"|
|버튼|Cancel / Confirm|
|동의 후|이후 팝업 표시 없음, 시스템 로그에 동의 기록 (어드민 ID, 날짜)|
----

h2. 3. 사용자 리스트
----

| | 용도 | 외부 시스템 연동 ID (사원번호, 카드번호, ERP ID 등) | | 예시 | {{AC1234-5678-9012-3456}}, {{EMP_00001}}, {{CARD-A1B2C3}} |
----

h3. 3.2 검색 및 필터
||항목||사양||
|검색|부분 검색 지원|
|필터|User Name (기본), User ID (선택)|
----

h3. 3.3 정렬
||정렬 기준||비고||
|User ID 순|*기본값*|
|User Name 순|선택|
|Description 순|선택|
|Last Updated 최신순|선택|
----

h3. 3.4 뷰 모드
||모드||설명||
|리스트 뷰|테이블 형태 (기본)|
|카드 뷰|카드 형태로 전환 가능, 기본 기능 동일|
----

h3. 3.5 멀티 선택
||항목||사양||
|체크박스|멀티 선택 체크박스 제공|
|일괄 삭제|복수 사용자 선택 후 일괄 삭제 가능|
|삭제 확인|"Are you sure you want to delete the selected user(s)? This action cannot be undone."|
|삭제 후|토스트 메시지 "User deleted successfully"|
----

h2. 4. 사용자 추가
----

h3. 4.1 필수/선택 필드
||필드||필수 여부||설명||
|User ID|*필수*|유니크 보장, 자동 증감 추천으로 간편 입력 지원|
|Name|선택|사용자 이름|
|Description|선택|유저 그룹 등 정보 매핑용|
|Unique Key|선택|User ID 외 별도 사용자 구분 연동 목적|
|Face Credentials|선택|1st Face, 2nd Face (최대 2개)|
{quote}*� 참고:* User ID와 System User ID 분리 - 추후 BioStar 사용자 싱크 시 User ID 키 값 동일 적용 목적
{quote}
----

h3. 4.2 Unique Key 중복 체크
||항목||사양||
|중복 입력|불가|
|에러 메시지|"Duplicate unique key values cannot be entered."|
----

h3. 4.3 저장 결과
||결과||동작||
|성공|토스트 메시지 "User created successfully"|
|실패|팝업 "User registration failed due to \{{reason}}. Error code: 1111"|
----

h2. 5. 얼굴 등록
----

h3. 5.1 등록 방식
||방식||설명||
|My Files|로컬 파일에서 사진 불러오기|
|Web Cam|웹캠으로 실시간 촬영|
|AI Shot|Unknown Face 리스트에서 선택|
----

h3. 5.2 My Files (파일 업로드)
||항목||사양||
|업로드 방식|Drag & Drop 또는 Browse 버튼|
|지원 포맷|PNG, JPEG, JPG|
|용량 제한|2MB~10MB, 한명당 api 단건 등록가능|
|성공 시|바로 이전 페이지로 이동|
|실패 시|에러 문구 표시|

||에러 케이스||메시지||
|얼굴 미검출|"The face cannot be found in the photo or the quality is poor. Please try again with a different photo."|
|용량 초과|용량 초과 안내 메시지|
{quote}*� [개발팀 확인 필요]* 사진 용량 제한 5MB 확정 여부
{quote}
----

h3. 5.3 Web Cam (웹캠 촬영)
||항목||사양||
|촬영 모드|웹캠 선택 시 사진 촬영 모드 진입|
|카운트다운|사진 버튼 클릭 시 3, 2, 1 카운트다운|
|촬영 후|사진 확인 → Apply 또는 Retry|
|실패 시|"The face cannot be found in the photo or the quality is poor. Please try again."|
----

h3. 5.4 AI Shot (Unknown Face 선택)
||항목||사양||
|목록|최근 인증된 Unknown Face 리스트 표시|
|선택|클릭 시 하이라이트, 얼굴 1개만 선택 가능|
|적용|Apply 버튼으로 등록 시도|
|Back|이전 파일 선택 화면으로 이동|
|Cancel|선택 취소, 선택 없음 상태|

||조건||동작||
|AI Analysis 미설정/Disabled|AI Shot 등록 방식 *비활성화*|
|등록 불가 품질|"The face cannot be found in the photo or the quality is poor. Please select another face photo."|
{quote}*� [개발팀 확인 필요]* Unknown Face 리스트 불러오기에서 등록 가능 여부 판단 가능 여부
{quote}
----

h3. 5.5 Face Guide
||항목||사양||
|표시|물음표(?) 버튼 클릭 시 Face Guide 팝업 제공|
|가이드 항목|Face Up, Expression, Eyes Closed, Dark, Wearing Mask, Wearing Hat, Makeup, Face Down|
----

h2. 6. 사용자 상세 페이지
----

h3. 6.1 Profile 정보
||필드||수정 가능||
|User ID|*수정 불가*|
|Name|수정 가능|
|Description|수정 가능|
|Unique Key|수정 가능|
|Face Credentials|수정 가능 (1st Face, 2nd Face)|
----

h3. 6.2 Event Logs
||항목||사양||
|표시|날짜별 해당 유저 이벤트를 시간 역순으로 표시|
|달력 픽커|과거 이벤트 확인 가능 (근태/타 시스템 특정일 로그 확인 용도)|

||이벤트 종류||설명||
|Face Identification Success|얼굴 인증 성공|
|Duplicated Face Auth|중복 얼굴 인증|
|User Added Successfully|유저 생성|
|User Modified Successfully|유저 수정|
----

h3. 6.3 수정 저장
||결과||동작||
|성공|토스트 메시지 "User modified successfully"|
----

h2. 7. Face Settings (얼굴 인식 설정)
{quote}*� [개발팀 확인 필요]* 얼굴 설정 상세 내용 R&D 확인 필요
{quote}
----

h3. 7.1 Operation
||항목||설명||기본값||
|Auth Timeout|인증 타임아웃|3~20초|
|Enroll Duplication Check|중복 사용자 등록 차단|ON/OFF 가능|
----

h3. 7.2 Recognition
||항목||설명||기본값||
|Security Level|보안 수준|Normal, More Secure, Most Secure|
|Fake Detection|위조 감지|OFF(기본값), ON(Beta - TBD) <- Level 1~4|
|Mask Detection|마스크 착용 시에도 얼굴 인식 시도|지원안함|
----

h3. 7.3 Timed APB (Event Delay)
||항목||사양||
|기능|매칭 성공한 사람에 대한 추가 매칭 성공 이벤트 발생 지연 설정|
|예시|1분 설정 → "A씨" 매칭 성공 후 1분 이내 추가 매칭 성공해도 이벤트 발생 없음|
|범위|0 ~ 600초 (최대 10분)|
|기본값|0초|
{quote}*� 참고:* Rule Action 이벤트 발생 여부와 관련. 실제로는 매칭 수행하여 동선 추적 필요
{quote}
{quote}*� [개발팀 확인 필요]* Unknown Face에 대해서도 Timed APB 적용 가능 여부
{quote}
----

h2. 8. 사용자 삭제
||항목||사양||
|삭제 확인|"Are you sure you want to delete the selected user(s)? This action cannot be undone."|
|삭제 후|토스트 메시지 "User deleted successfully"|
----

h2. 부록: 개발팀 확인 필요 사항 요약
||#||섹션||확인 항목||비고||
|1|5.2|사진 용량 제한|2MB~10MB, 한면ㅇ당 api 단건 등록가능|
|2|5.4|AI Shot 리스트 등록 가능 여부 판단|미구현(현재로서는 AI Shot 품질 판단기준 없음)|
|3|7|Face Settings 상세 내용|R&D 확인 필요|
|4|7.3|Unknown Face Timed APB 적용 여부|Rule 기능으로 이동 필요.
Unknown Person에 대해서도 등록인원과 동일하게 적용 가능|
|5|-|User ID 자동 증감 규칙|시작값, 증가 방식|
|6|-|Face Credentials 최대 등록 개수|2개|
|7|-|Event Logs 보관 기간|최대 30일|
|8|-|Unknown Face 리스트 보관 기간|Event Logs로 취급|
|9|-|웹캠 지원 해상도/포맷|FHD 이상 권장|
|10|-|BioStar 사용자 싱크 방식|1차에서 계획없음|
