h1. ViOnyx Rule Settings 기능 명세서
----
h2. 1. 기능 개요
||항목||내용||
|기능명|Rule Settings|
|위치|Settings > AI & Rule > Rule Settings|
|역할|AI Analysis 이벤트 발생 시 실행할 액션(Webhook, Audio) 설정|
|채널|*Ch 1 (Fisheye View) 고정*|
----
h2. 2. 필수 값
||항목||필수 여부||
|Name|*필수*|
|Condition Type|*필수*|
|Action Type|*필수*|
----
h2. 3. Rule 생성
----
h3. 3.1 기본 정보
||항목||사양||
|Name|Rule 이름 입력 (필수)|
|Channel|*Ch 1 고정* (Fisheye view only supported)|
----
h3. 3.2 Condition (조건) 설정
----
h4. 3.2.1 Type 선택
||Type||설명||
|Face Movement Tracking|얼굴 인식 동선 추적 이벤트|
|Intrusion|침입 감지 이벤트|
|Line Crossing|라인 크로싱 이벤트|
|People Counting|피플 카운팅 이벤트|
----
h4. 3.2.2 Event 선택
||항목||사양||
|목록|선택한 Type으로 생성된 AI Analysis 이벤트 목록 표시|
|표시 형식|(ID: N) 이벤트명 (예: (ID: 1) Face People Tracking #1)|
----
h4. 3.2.3 Face Movement Tracking 전용 설정
h5. Entry Area 선택
||항목||사양||
|필수 여부|*선택 사항* (없어도 됨)|
|복수 선택|가능|
|Entry Area 없는 경우|"No area available" 표시, Face Recognition 자동 선택|
h5. Event Type 선택
||조건||Event Type 옵션||
|Entry Area 미선택 또는 없음|*Face Recognition 자동 선택 (제외 불가)*|
|Entry Area 선택됨|Face Recognition, Entry Area 중 선택 (최소 1개 필수)|
{quote}*⚠️ 중요:* Entry Area가 선택되지 않거나 없는 경우, Face Recognition이 무조건 자동 선택되며 제외 불가
{quote}
||Event Type||설명||
|Face Recognition|얼굴 인식 이벤트|
|Entry Area|구역 진입/진출 이벤트|
{quote}*� 참고:* 해당 구역 진입 이벤트만 발생시키고 싶다면 Entry Area 이벤트 조건만 설정 필요. 단, 얼굴 인식을 제외하더라도 라이브뷰에서 얼굴 인식 화면은 표시됨 (Rule 설정과 무관, 이벤트 설정 여부만 해당)
{quote}
----
h4. 3.2.4 Intrusion 전용 설정
||항목||사양||
|Intrusion Area|침입 감지 구역 선택 (필수)|
|복수 선택|가능|
----
h4. 3.2.5 Line Crossing / People Counting 설정
||항목||사양||
|해당 Area/Line|선택한 Event에 설정된 Area/Line 선택|
----
h2. 4. Action (액션) 설정
----
h3. 4.1 Action Type
||Type||설명||
|Webhook|HTTP POST 요청 발송|
|Audio|오디오 클립 재생|
{quote}*� [개발팀 확인 필요]* 오디오 Output 설정 - WAV 파일 저장 및 재생 방식 확정
{quote}
----
h3. 4.2 복수 Action 설정
||항목||사양||
|추가|"+ Add" 버튼으로 Action 추가|
|삭제|"Remove" 버튼으로 개별 Action 삭제|
|최대 개수|미정|
{quote}*� [개발팀 확인 필요]* Action 최대 설정 개수
{quote}
----
h2. 5. Webhook 설정
----
h3. 5.1 기본 설정
||항목||사양||비고||
|Method|*POST 고정*|다른 Method 미지원|
|URL|http:// 또는 https:// 입력|필수|
|Schedule|*Always 고정* (1차)|추후 스케줄 설정 창 제공 예정|
----
h3. 5.2 Header 설정
||항목||사양||
|기본값|Content-Type: Application/json|
|추가|"+ Add" 버튼으로 추가 가능|
|최대 개수|*8개* (Key-Value 쌍)|
----
h3. 5.3 Body 설정
h4. Face Movement Tracking Body 기본값
||Key||Value||Type||
|userId|Unknown macro: \{ {userid}
 }\|string\|
 \|userName\|Unknown macro: \{{userName}
 }\|string\|
 \|deviceSN\|Unknown macro: \{{device_serial}
 }\|string\|
 \|eventAt\|Unknown macro: \{{event_at}
 }\|numbers\|
 \|eventType\|Unknown macro: \{{eventType}
 }\|string\|
 \|entryAreaId\|Unknown macro: \{{entryArea_id}
 }\|numbers\|
 \|entryType\|Unknown macro: \{{entry / exit}
 }\|string\|
 \|userPhoto\|Unknown macro: \{{Profile Photo}
 }\|string\|
 \|faceShot\|Unknown macro: \{{faceShot}
 }\|string\|
 h4. Intrusion Body 기본값
 \|\|Key\|\|Value\|\|Type\|\|
 \|eventAt\|Unknown macro: \{{event_at}
 }\|numbers\|
 \|eventType\|Unknown macro: \{{eventType}
 }\|string\|
 \|deviceSN\|Unknown macro: \{{device_serial}
 }\|string\|
 \|intrusionAreaId\|Unknown macro: \{{intrusionArea_id}
 }\|numbers\|
 \|intrusionAreaName\|Unknown macro: \{{intrusionArea_name}
 }\|string\|
 \|entryType\|Unknown macro: \{{entry / exit}
 }\|string\|
 \|userId\|Unknown macro: \{{userid}
}|string|
|userName|Unknown macro: \{ {userName}
 }\|string\|
 \|userPhoto\|Unknown macro: \{{Profile Photo}
 }\|string\|
 \|faceShot\|Unknown macro: \{{faceShot}
 }\|string\|
 h4. Line Crossing Body 기본값
 \|\|Key\|\|Value\|\|Type\|\|
 \|eventAt\|Unknown macro: \{{event_at}
 }\|numbers\|
 \|eventType\|Unknown macro: \{{eventType}
 }\|string\|
 \|deviceSN\|Unknown macro: \{{device_serial}
 }\|string\|
 \|lineId\|Unknown macro: \{{line_id}
 }\|numbers\|
 \|lineName\|Unknown macro: \{{line_name}
 }\|string\|
 \|crossingDirection\|Unknown macro: \{{A_to_B / B_to_A}
 }\|string\|
 \|userId\|Unknown macro: \{{userid}
 }\|string\|
 \|userName\|Unknown macro: \{{userName}
}|string|
|userPhoto|Unknown macro: \{ {Profile Photo}
 }\|string\|
 \|faceShot\|Unknown macro: \{{faceShot}
 }\|string\|
 h4. People Counting Body 기본값
 \|\|Key\|\|Value\|\|Type\|\|
 \|eventAt\|Unknown macro: \{{event_at}
 }\|numbers\|
 \|eventType\|Unknown macro: \{{eventType}
 }\|string\|
 \|deviceSN\|Unknown macro: \{{device_serial}
 }\|string\|
 \|countingAreaId\|Unknown macro: \{{countingArea_id}
 }\|numbers\|
 \|countingAreaName\|Unknown macro: \{{countingArea_name}
 }\|string\|
 \|currentCount\|Unknown macro: \{{current_count}
 }\|numbers\|
 \|userId\|Unknown macro: \{{userid}
 }\|string\|
 \|userName\|Unknown macro: \{{userName}
 }\|string\|
 \|userPhoto\|Unknown macro: \{{Profile Photo}
}|string|
|faceShot|Unknown macro: \{ {faceShot}}|string|
----
h3. 5.4 People Counting API (GET)
{quote}*� 참고:* People Counting의 현재 카운트 값을 외부에서 조회할 수 있는 API 제공
{quote}
h4. 전체 Counting Area 조회
||항목||사양||
|Method|*GET*|
|Endpoint|{{/api/v1/peoplecounting/areas}}|
|설명|모든 Counting Area의 현재 카운트 조회|

*Response 예시:*

 

{{

{ "areas": [ 

{ "areaId": 1, "areaName": "Entry #1", "currentCount": 15 }

,

{ "areaId": 2, "areaName": "Entry #2", "currentCount": 8 }

]
 }}}
h4. 특정 Counting Area 조회
||항목||사양||
|Method|*GET*|
|Endpoint|{\{/api/v1/peoplecounting/areas/ {areaId}}}|
|설명|특정 Counting Area의 현재 카운트 조회|

*Response 예시:*

 

{{

{ "areaId": 1, "areaName": "Entry #1", "currentCount": 15 }

}}
{quote}*� [개발팀 확인 필요]* API 인증 방식 (API Key, Token 등) 및 Rate Limit 정책
{quote}
h4. Face Matching 사용 시 추가 Body
{quote}*� 참고:* Intrusion, Line Crossing, People Counting에서 Face Matching ON 시 userId, userName, userPhoto, faceShot 값이 활성화됨
{quote}
----
h3. 5.4 Body 설정 옵션
||항목||사양||
|기본값 선택|체크박스로 사용 여부 선택 가능|
|수동 추가|"+ Add" 버튼으로 커스텀 값 추가 가능|
|추가 항목 Type|string / numbers 선택 가능 (기본: string)|
|필수 조건|*최소 1개의 Body 값 필수*|
|수동 추가 항목|*반드시 값 입력 필요* (빈 값 불가)|
|수동 추가 제한|*최대 10개까지 추가 가능*|
----
h3. 5.5 Webhook 로그 기록
{quote}*⚠️ 중요:* 시스템 로그에 Webhook 발신 기록과 응답 수신 값이 기재되어야 함. 발신 여부 및 응답 값에 대한 확인이 장애 대응에 필수
{quote}
||로그 항목||설명||
|발신 기록|Webhook 요청 발송 시간, URL, Body|
|응답 수신|HTTP 응답 코드, 응답 내용|
----
h3. 5.6 Unknown Face 처리
{quote}*� [개발팀 확인 필요]* Unknown Face Webhook 발신 관련
{quote}
||확인 항목||내용||
|Unknown Face 발신|발신함|
|중복 발신|Face Area 내 최대 4회 재시도(약 3~4초) 후 발신|
|상태 변경|인증 성공 시 새로운 인증 이벤트 발신|
----
h2. 6. Audio 설정
----
h3. 6.1 Audio 옵션
||항목||사양||
|Audio Clip|재생할 오디오 클립 선택 (필수)|
|Repeat|반복 횟수 설정 (기본: None)|
{quote}*� [개발팀 확인 필요]* 오디오 클립 저장 형식 (WAV), 최대 용량, 업로드 방식
{quote}
----
h2. 7. Rule 리스트
----
h3. 7.1 리스트 표시
||컬럼||설명||
|On/Off|Rule 활성화/비활성화 토글|
|Name|Rule 이름|
|Type|AI Analysis Type|
|Event|연결된 Event 이름|
|Schedule|스케줄 (1차: Always 고정)|
|Edit|수정/삭제 버튼|
----
h3. 7.2 Rule On/Off
||동작||팝업 메시지||
|OFF → ON|"Would you like to turn ON this rule? In the ON state, actions will function again."|
|ON → OFF|"Would you like to turn OFF this rule? In the OFF state, actions will not function."|
----
h3. 7.3 Rule 수정
||항목||동작||
|클릭|Rule 리스트 항목 클릭 시 상세 설정 페이지로 이동|
----
h3. 7.4 Rule 삭제
||항목||사양||
|확인 팝업|"Are you sure you want to delete this rule setting? It cannot be recovered after deletion."|
|삭제 후|토스트 메시지 "Rule deleted successfully"|
----
h2. 8. 설정 저장
----
h3. 8.1 버튼 동작
||버튼||동작||
|Apply|설정 저장 및 적용|
|Cancel|변경 내용 취소, 이전 상태로 복원|
----
h3. 8.2 저장 후 동작
||항목||동작||
|성공|토스트 메시지 "Rule created successfully"|
|목록|Rule List에 추가|
----
h2. 부록: 개발팀 확인 필요 사항 요약
||#||섹션||확인 항목||비고||
|1|4.1|Audio Output 설정 방식|WAV 파일 저장 및 재생|
|2|4.2|Action 최대 설정 개수|Webhook + Audio 조합|
|3|5.6|Unknown Face Webhook 발신 여부|수상한 사람 발견|
|4|5.6|동일 Unknown Face 중복 발신 처리|연속 발신 방지?|
|5|5.6|Unknown → 인식 전환 시 처리|재발신? 업데이트?|
|6|6.1|Audio 클립 저장 형식/용량|WAV, 최대 용량|
|7|6.1|Audio 클립 업로드 방식|UI/API|
|8|-|Rule Name 입력 규칙|길이, 특수문자 등|
|9|-|Schedule 설정 UI (2차)|시간대별 설정 방식|
|10|-|Webhook 타임아웃 설정|요청 대기 시간|
|11|5.4|People Counting API 인증 방식|API Key, Token 등|
|12|5.4|People Counting API Rate Limit|요청 제한 정책|