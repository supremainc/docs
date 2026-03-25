h1. ViOnyx Camera Settings 기능 명세서
----
h2. 1. 기능 개요
||항목||내용||
|기능명|Camera Settings (카메라 설정)|
|위치|Settings > Camera|
|역할|이미지 품질 조정, 화이트 밸런스, 노이즈 필터, 설치 타입 설정|
|참조|Avigilon 동일 칩셋 기반, 동일 메뉴 구성|

카메라가 설치된 환경에서 최적의 영상을 촬영할 수 있도록 카메라의 설정을 변경할 수 있습니다. 다양한 환경에 적합 한 이미지 프리셋을 기본적으로 제공하고 있으며, 사용자가 직접 카메라 설정값을 지정할 수도 있습니다. 카메라 미리 보기 화면에서 설정한 값에 따라 카메라 영상이 어떻게 나타나는지 확인할 수 있습니다.
----
h2. 2. 설정 항목 분류
----
h3. 2.1 사용자 설정 vs 자동 처리 항목
||구분||항목||UI 표시||
|*사용자 설정*|Preset, 채도, 선명도, 밝기, 대비, 화이트밸런스, Time Filter, Mounting Type|설정 UI 제공|
|*자동 처리*|Exposure, WDR, Day/Night, IR Cut Filter, IR LED, Flicker Control, 주요 색상 보정|UI 미제공 (내부 자동 처리)|
|*읽기 전용*|현재 노출, 게인, 조리개, 밝기 레벨|값 표시만 (수정 불가)|
----
h2. 3. 자동 처리 항목 (UI 미제공 - 내부 자동 처리)
{quote}*⚠️ 개발 참고:* 아래 항목들은 사용자 설정 UI를 제공하지 않으며, 카메라 내부에서 자동으로 처리됩니다. 펌웨어/ISP 레벨에서 구현되어야 합니다.
{quote}
----
h3. 3.1 노출 제어 (Exposure Control)
||항목||처리 방식||설명||
|Exposure Mode|*자동*|Shutter + Gain + Aperture 최적 조합 자동 계산|
|Shutter Speed|*자동*|조도에 따라 자동 조절|
|Gain|*자동*|저조도 시 자동 증가|
|Aperture|*자동*|조도에 따라 자동 조절|
----
h3. {color:#ff0000}3.2 Wide Dynamic Range (WDR) ->  WDR ON/OFF ui 추가{color}
||항목||처리 방식||설명||
|WDR|*기본 OFF* |역광 환경 자동 보정|
----
h3. 3.3 주/야간 모드 (Day/Night)
||항목||처리 방식||설명||
|Day/Night Mode|*자동 전환(최대한 늦게)*|조도 기반 자동 판단|
|IR Cut Filter|*Day/Night 연동 자동*|주간: IR 차단 ON / 야간: IR 차단 OFF|
|IR LED|*야간 모드 시 자동 점등*|Night 모드 진입 시 자동 ON|
|Day→Night Threshold|*내부 설정값 사용*|펌웨어 기본값|
|Night→Day Threshold|*내부 설정값 사용*|펌웨어 기본값|
{quote}*� [개발팀 확인 필요]* 주/야간 모드 자동 적용 가능 여부 및 약간의 빛이 있는 경우 처리 방식. AI 성능 영향
{quote}
----
h3. 3.4 Flicker 제어
||항목||처리 방식||설명||
|Flicker Control|Manual|OFF/50Hz/60Hz 설정 (default: off)|
----
h3. 3.5 색상 보정
||항목||처리 방식||설명||
|Primary Color Correction (주요 색상 보정)|*자동*|색상 왜곡 자동 보정|
----
h3. 3.6 개발 체크리스트
||#||자동 처리 항목||펌웨어 구현 확인||비고||
|1|Auto Exposure|☐|Shutter/Gain/Aperture 자동 조합|
|2|WDR|☐|항상 ON 또는 자동|
|3|Day/Night 자동 전환|☐|조도 기반|
|4|IR Cut Filter 자동|☐|Day/Night 연동|
|5|IR LED 자동|☐|Night 모드 연동|
|6|Flicker 수동 설정|☐|off/50Hz/60Hz (default : off)|
|7|Primary Color Correction|☐|자동 색상 보정|
{quote}*� [개발팀 확인 필요]* 위 자동 처리 항목들이 펌웨어/ISP에서 정상 동작하는지 확인
{quote}
----
h2. 4. 사용자 설정 항목
----
h3. 4.1 Preset
||항목||정책||
|기능|수동 입력 설정 프리셋만 1차 구현|
{quote}*� 1차에서는 기본 수동 설정만 진행*
{quote}
----
h3. 4.2 기본 이미지 파라미터
||항목||범위||기본값||설명||
|Saturation (채도)|1 ~ 100|26|색상의 선명도|
|Sharpness (선명도)|1 ~ 100|55|이미지 경계 선명도|
|Brightness (밝기)|1 ~ 100|50|이미지 전체 밝기|
|Contrast (대비)|1 ~ 100|50|밝고 어두운 부분의 차이|
{quote}*� [개발팀 확인 필요]* 각 파라미터 기본값 (R&D 사양 제공 필요)
{quote}
----
h3. 4.3 설정 반영
||항목||정책||
|반영 시점|슬라이더 조작 시 실시간 미리보기 반영|
|저장|Apply 버튼 (변경 즉시 자동 저장)|
{quote}*� [개발팀 확인 필요]* 실시간 반영 vs Apply 버튼 방식
{quote}
----
h2. 5. 화이트 밸런스 (White Balance)
----
h3. 5.1 모드 설정
||모드||설명||Red/Blue 조정||
|Auto|자동 화이트 밸런스|불가 (자동 반영)|
|Manual|수동 화이트 밸런스|가능|
----
h3. 5.2 수동 설정 파라미터
||항목||범위||기본값||조건||
|Red|1 ~ 100|50|Manual 모드 시 활성화|
|Blue|1 ~ 100|50|Manual 모드 시 활성화|
----
h3. 5.3 Auto 모드 동작
||항목||정책||
|Red/Blue 입력 필드|비활성화 (읽기 전용)|
|값 표시|자동 측정된 값 실시간 표시|
{quote}*� [개발팀 확인 필요]* Red/Blue 기본값 (R&D 사양 제공 필요)
{quote}
----
h2. 6. Sensitivity (감도 설정)
----
h3. 6.1 Time Filter
||항목||내용||
|기능|시간 기준 노이즈 필터링 강도 조절|
|설명|시간 기준으로 불필요한 변화(노이즈)를 얼마나 강하게 걸러낼지 조절|
|범위|1 ~ 100|
|기본값|55|
||값||효과||
|낮음 (1~30)|노이즈 필터링 약함, 빠른 움직임 감지에 유리|
|중간 (31~70)|균형 잡힌 필터링|
|높음 (71~100)|노이즈 필터링 강함, 저조도 환경에 유리|
{quote}*� [개발팀 확인 필요]* Time Filter 기본값 (R&D 사양 제공 필요)
{quote}
----
h2. 7. Mounting Type (설치 타입)
----
h3. 7.1 지원 타입
||타입||설명||AI 기능 제한||
|Ceiling (천장형)|천장 설치|제한 없음 (전체 AI 기능 사용 가능)|
|Wall (벽부형)|벽면 설치|*얼굴 인식만 가능* (객체 추적 불가)|
----
h3. 7.2 타입 변경 시 동작
||변경 방향||동작||
|Ceiling → Wall|경고 팝업 표시 → 사용자 확인 후 변경 → AI 설정 제한 적용|
|Wall → Ceiling|즉시 변경 → 전체 AI 기능 활성화|
----
h3. 7.3 벽부형(Wall) AI 제한 상세
||AI 기능||Ceiling (천장형)||Wall (벽부형)||
|얼굴 인식|✓ 가능|✓ 가능|
|객체 추적 (People Tracking)|✓ 가능|✗ 불가|
|기타 AI 분석|✓ 가능|✗ 불가|
----
h3. 7.4 경고 팝업
||항목||내용||
|제목|Mounting Type|
|메시지 (한국어)|벽부형 변경시 AI 기능은 얼굴 인식만 가능합니다. 계속 하시겠습니까?|
|메시지 (영어)|When changing to wall mount, only face recognition AI is available. Do you want to continue?|
|버튼|Cancel / Apply|
----
h2. 8. 노출 정보 표시 (Exposure Info) - 읽기 전용
----
h3. 8.1 표시 항목 (읽기 전용)
||항목||단위||설명||
|Exposure|ms|노출 시간 (예: 8.3 ms)|
|Gain|dB|게인 값 (예: 3.9 dB)|
|Aperture|%|조리개 개방률 (예: 100%)|
|Brightness Level|EV|밝기 레벨 (예: +7.03 EV)|
----
h3. 8.2 표시 정책
||항목||정책||
|업데이트 주기|실시간 또는 일정 간격 갱신|
|사용자 수정|불가 (읽기 전용, 자동 측정값)|
|표시 위치|설정 패널 하단 또는 미리보기 영역|
{quote}*� [개발팀 확인 필요]* 업데이트 주기 및 값
{quote}
----
h2. 9. 초기화 (Reset)
----
h3. 9.1 초기화 동작
||항목||정책||
|버튼|Reset|
|레이블|"Restore to default"|
|대상|Camera Settings 전체 항목|
|복원 값|공장 초기 설정|
----
h3. 9.2 초기화 범위
||항목||초기화 대상||
|Image Quality|✓ 초기화 (Saturation, Sharpness, Brightness, Contrast)|
|White Balance|✓ 초기화 (Auto 모드 + Red/Blue 기본값)|
|Time Filter|✓ 초기화|
|Mounting Type|✓ 초기화 (Ceiling 기본)|
|Preset|✓ 초기화 (기본 프리셋)|
----
h3. 9.3 초기화 확인 팝업
||항목||정책||
|팝업 표시|초기화 전 확인 팝업 필요 여부|
----
h2. 10. 다국어 지원
----
h3. 10.1 주요 텍스트
||키||한국어||영어||일본어||
|camera_settings|카메라 설정|Camera Settings|カメラ設定|
|preset|프리셋|Preset|プリセット|
|saturation|채도|Saturation|彩度|
|sharpness|선명도|Sharpness|シャープネス|
|brightness|밝기|Brightness|明るさ|
|contrast|대비|Contrast|コントラスト|
|white_balance|화이트 밸런스|White Balance|ホワイトバランス|
|auto|자동|Auto|自動|
|sensitivity|감도|Sensitivity|感度|
|time_filter|타임 필터|Time Filter|タイムフィルター|
|mounting_type|설치 타입|Mounting Type|取付タイプ|
|ceiling|천장형|Ceiling|天井型|
|wall|벽부형|Wall|壁掛け型|
|reset|초기화|Reset|リセット|
|restore_default|기본값 복원|Restore to default|デフォルトに戻す|
|exposure|노출|Exposure|露出|
|gain|게인|Gain|ゲイン|
|aperture|조리개|Aperture|絞り|
----
h3. 10.2 경고 메시지
||키||한국어||영어||일본어||
|wall_mount_warning|벽부형 변경시 AI 기능은 얼굴 인식만 가능합니다. 계속 하시겠습니까?|When changing to wall mount, only face recognition AI is available. Do you want to continue?|壁掛けに変更すると、顔認識AIのみ利用可能です。続行しますか？|
----
h2. 부록 A: 개발팀 확인 필요 사항 요약
||#||섹션||확인 항목||비고||
|1|3.3|주/야간 모드 자동 적용 및 AI 성능 영향|약간의 빛이 있는 경우 처리|
|2|3.6|자동 처리 항목 펌웨어 동작 확인|Exposure, WDR, Day/Night, IR, Flicker, Color Correction|
|3|4.1|Preset 종류 및 각 프리셋별 설정값|R&D 사양 제공 필요|
|4|4.2|Saturation 기본값|26|
|5|4.2|Sharpness 기본값|55|
|6|4.2|Brightness 기본값|50|
|7|4.2|Contrast 기본값|50|
|8|4.3|설정 반영 방식 (실시간 vs Apply 버튼)|UX 정책|
|9|5.2|White Balance Red/Blue 기본값|50|
|10|6.1|Time Filter 기본값|55|
|11|8.2|노출 정보 업데이트 주기|실시간 vs 주기적|
----
h2. 부록 B: 자동 처리 항목 상세 (펌웨어 참조용)
{quote}*⚠️ 이 섹션은 펌웨어/ISP 개발자 참조용입니다.*
{quote}
----
h3. B.1 Auto Exposure 동작 요구사항
||항목||요구사항||
|목표|장면 밝기에 따라 최적 노출 자동 계산|
|조절 파라미터|Shutter Speed, Gain, Aperture 조합|
|우선순위|Shutter → Aperture → Gain 순으로 조절 권장|
|제약|과도한 Gain 증가 시 노이즈 발생 주의|
----
h3. B.2 WDR 동작 요구사항
||항목||요구사항||
|목표|밝은 영역과 어두운 영역 동시 표현|
|동작|항상 ON 또는 장면 분석 후 자동 활성화|
|레벨|내부 최적값 사용 (사용자 조절 불가)|
----
h3. B.3 Day/Night 자동 전환 요구사항
||항목||요구사항||
|전환 기준|조도 센서 또는 이미지 밝기 분석|
|Day→Night|어두워지면 IR Cut Filter OFF + IR LED ON|
|Night→Day|밝아지면 IR Cut Filter ON + IR LED OFF|
|Dwell Time|오동작 방지를 위한 전환 대기 시간 적용|
|Hysteresis|전환 임계값에 히스테리시스 적용 (채터링 방지)|
----
h3. B.4 Flicker Control 요구사항
||항목||요구사항||
|목표|형광등/LED 조명 깜빡임 제거|
|동작|Manual 설정|
|OFF|Anti Flicker 기능 사용 안 함(AE 에서 자동으로 조정, Shutter 제한 없음) |
|50Hz 환경|Shutter 1/50, 1/100, 1/150... 사용|
|60Hz 환경|Shutter 1/60, 1/120, 1/180... 사용|
----
h3. B.5 Primary Color Correction 요구사항
||항목||요구사항||
|목표|색상 왜곡 자동 보정|
|동작|ISP 파이프라인에서 자동 처리|
|사용자 제어|없음 (내부 자동)|