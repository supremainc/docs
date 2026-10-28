---
title: 2026년 10월
description: 2026년 10월 Suprema Docs 주요 업데이트 내역을 제공합니다.
slug: 2026-10-changelog
date: 2026-11-02T09:00
---

10월 **Suprema Docs**에서는 **ViOnyx** 1.1.0 버전에 맞춰 출입 통제, 일정, RS-485 설정 방법을 추가하고 릴리스 노트를 공개했습니다. 또한 **BioStar X**와 **Milestone XProtect**의 연동 가이드를 새로 공개하고, **Genetec** 연동 가이드에 권장 시스템 구성, 카드 형식 설정, 개인 인증 모드 설정 방법을 추가했습니다. 이 밖에 **CoreStation 40**, **Device Manager**의 릴리스 노트를 공개했습니다.

![Suprema Docs 26.10 Changelogs](/img/changelogs/changelogs-202610.png)

{/*truncate*/}

## Docs

* 개별 문서 페이지에 **Copy page** 버튼이 추가되었습니다. 문서 내용을 마크다운 형식으로 복사하거나 AI 서비스에서 바로 열어 문서에 대해 질문할 수 있습니다.

  * **Copy page**: 현재 문서를 마크다운 형식으로 복사합니다. 복사한 내용을 AI 서비스에 붙여 넣어 활용할 수 있습니다.

  * **Open in ChatGPT**, **Open in Claude**, **Open in Perplexity**, **Open in Gemini**: 선택한 AI 서비스에서 현재 문서를 열고 문서 내용에 대해 질문할 수 있습니다.

  ![Copy page](/img/changelogs/changelog-2610-copypage.png)

## 플랫폼

### BioStar X

* [지원 장치](/platform/biostar_x/supported-device): 장치별 최소 펌웨어 버전 표기 추가

## 장치

### 장치 업데이트

* [ViOnyx](/device/vionyx)

  * [설치 및 연결하기](/device/vionyx/installation): RS-485 연결 방법 안내 추가

  * [웹 서버 접속 및 설정](/device/vionyx/web-server-settings#access-web-server): 카메라 웹 서버 접속 및 비밀번호 설정 절차 업데이트

* [ViOnyx 웹 서버](/device/vionyx_webserver/)

  * 출입 통제

    * [출입 통제 관리하기](/device/vionyx_webserver/manage-access-control): 출입문을 등록하고 사용자에게 출입 권한을 부여해 얼굴 인식 결과로 출입문을 제어하는 방법 안내

    * [출입문 관리하기](/device/vionyx_webserver/manage-doors), [출입 레벨 관리하기](/device/vionyx_webserver/manage-access-levels): 출입문을 등록하고 출입문, 출입 시간, 사용자를 출입 레벨로 묶어 관리하는 방법 안내

    * [출입문 제어하기](/device/vionyx_webserver/control-doors): 출입문 상태를 실시간으로 확인하고 원격으로 출입문을 열거나 잠그는 방법 안내

    * [출입문 규칙 설정하기](/device/vionyx_webserver/configure-door-rules): 출입 판단 결과에 따라 오디오 재생, 웹훅 전송, 릴레이 동작을 실행하는 방법 안내

    * [출입 통제 이벤트 설정하기](/device/vionyx_webserver/configure-access-control): 얼굴 인식으로 출입자를 식별하고 테일게이팅을 판단하는 방법 안내

  * [일정 관리하기](/device/vionyx_webserver/manage-schedule): AI 규칙이 동작할 요일과 시간대를 일정으로 설정하는 방법 안내

  * [RS-485 설정하기](/device/vionyx_webserver/configure-rs485): 슈프리마 I/O 장치를 슬레이브로 추가하고 관리하는 방법 안내

  * [카메라 설정 변경하기](/device/vionyx_webserver/configure-camera-settings): IR 자동 전환, 적응형 자동 노출, 카메라 히터 설정 추가

  * [네트워크 설정하기](/device/vionyx_webserver/configure-network): 포트, 영상 전송 및 암호화, ONVIF, Tunnel 설정 안내 추가

  * AI 이벤트 및 규칙

    * [사용자 추적 이벤트 설정하기](/device/vionyx_webserver/configure-people-tracking), [라인 통과 감지 이벤트 설정하기](/device/vionyx_webserver/configure-line-crossing), [침입 감지 이벤트 설정하기](/device/vionyx_webserver/configure-intrusion): 이벤트 발생 조건 및 카운트 설정 추가

    * [AI 규칙(Rule) 설정하기](/device/vionyx_webserver/set-ai-rule#setRelayAction): 사용자 선택 및 릴레이 동작 설정 추가

  * [라이브 영상 보기](/device/vionyx_webserver/live-basic): 화면 캡처 및 AI 표시 옵션 안내 추가

  * [시스템 로그 확인하기](/device/vionyx_webserver/view-system-logs), [시스템 로그 유형](/device/vionyx_webserver/system-log-type): 출입 통제 로그 추가

* [BioStation 3 Max](/device/biostation_3_max)

  * [설정](/device/biostation_3_max/settings): 대기 화면 동영상 재생 및 동영상 음량 설정 추가

  * [사용자](/device/biostation_3_max/user): 사용자 ID와 이름에 입력할 수 있는 특수 문자 안내 업데이트 및 협박 지문 설정 추가

  * [인증](/device/biostation_3_max/authentication): 서버 매칭에서 지문 인증 지원 안내 업데이트

* [XPass Q2](/device/xpass_q2)

  * [시작하기](/device/xpass_q2/getting-started): QR 코드와 바코드의 인식 권장 거리 안내 추가

  * [제품 사양](/device/xpass_q2/product-specifications) 업데이트

### 릴리스 노트

* [ViOnyx](/device/vionyx/release-notes/110): 1.1.0 버전 릴리스 노트 추가

* [CoreStation 40](/device/corestation_40/release-notes/174): 1.7.4 버전 릴리스 노트 추가

* [Device Manager](/device/device_manager/release-notes/125): 1.2.5 버전 릴리스 노트 추가

## 인테그레이션

### 신규 인테그레이션

**BioStar X**와 **Milestone XProtect**를 MIPAccessControl 플러그인으로 연동하는 방법을 안내하는 문서를 새로 공개했습니다.

* [Milestone](/integration/milestone/)

  * [Introduction](/integration/milestone/introduction): 연동 기능, 시스템 구성도, BioStar X와 XProtect의 구조 차이 안내

  * [Installation](/integration/milestone/installation): 사전 요구 사항과 Milestone x Suprema 플러그인 설치 방법 안내

  * [Configuration](/integration/milestone/configuration): 플러그인 설정, 라이선스 활성화, 카메라와 출입 지점 연결 방법 안내

  * [Synchronization Check](/integration/milestone/synchronization): 출입문 상태, 카드 소지자 정보, 이벤트의 동기화 확인 방법 안내

  * [Troubleshooting](/integration/milestone/troubleshooting): 연결 실패, 이벤트 미수신, SSL 인증서 오류 등 주요 문제의 해결 방법과 자주 묻는 질문 안내

### 인테그레이션 업데이트

* [Genetec](/integration/genetec/)

  * [Installation](/integration/genetec/installation#recommended-system-architecture): 권장 시스템 구성과 장치 수에 따른 서버 권장 사양 및 시스템 요구 사항 추가

  * [System Management](/integration/genetec/system-management#card-format-setting): Wiegand 카드 및 스마트 카드 형식 설정 방법 추가

  * [Cardholder Management](/integration/genetec/cardholder-management#private-authentication-mode): 개인 인증 모드 설정 및 AoC(Access On Card) 발급 방법 추가
