---
title: 2026년 9월
description: 2026년 9월 Suprema Docs 주요 업데이트 내역을 제공합니다.
slug: 2026-09-changelog
date: 2026-10-01T09:00
---

9월 **Suprema Docs**에서는 **BioStar X** 1.0.3 버전과 **BioStar Air** 2.13 버전에 맞춰 모니터링 일괄 제어, 신분증 스캔, 감사 로그, 구역 및 재실 관리, SSO & SCIM 연동 등 여러 사용 가이드를 추가하고 업데이트했습니다. 또한 **BioStation 3**, **X-Station 2**, **Device Manager**의 릴리스 노트를 공개했습니다.

![Suprema Docs 26.09 Changelogs](/img/changelogs/changelogs-202609.png)

{/*truncate*/}

## 플랫폼

### BioStar X

* [버전 1.0.3](/platform/biostar_x/release-notes/103): 1.0.3 버전 릴리스 노트 추가

#### 새 문서

* [일괄 제어하기](/platform/biostar_x/monitoring-batch-control): 모니터링에서 여러 출입문, 엘리베이터, 고급 출입 통제를 선택해 한 번에 제어하는 방법 안내

* [신분증 스캔 설정하기](/platform/biostar_x/settings-account-scan-passport), [신분증 스캔으로 사용자 등록 및 수정하기](/platform/biostar_x/add-user-by-scanning-passport): 신분증을 스캔해 사용자 정보를 자동으로 입력하는 방법 안내

* [장기 미출입자 조치하기](/platform/biostar_x/settings-account-personal-data): 장기 미출입 사용자의 자동 비활성화 기준과 사전 알림 이메일 설정 방법 안내

* [인증을 통한 출입문 제어 설정하기](/platform/biostar_x/settings-door-auth-control): 사용자 인증으로 출입문을 수동 개방하거나 해제 상태로 전환하는 방법 안내

* 감사 로그

  * [출입 통제 감사 로그 조회하기](/platform/biostar_x/settings-system-audit-trail-ac), [감사 설정 관리하기](/platform/biostar_x/settings-system-audit-trail-settings)

  * [근태 감사 로그 조회하기](/platform/biostar_x/tna-audit-trail), [근태 감사 설정하기](/platform/biostar_x/tna-audit-trail-settings)

* [BioStar X 서버 제거 및 보안 인증서 복구하기](/platform/biostar_x/remove-server): 서버를 제거하는 방법과 백업한 보안 인증서를 복구하는 방법 안내

#### 문서 업데이트

* [사용자 기본 정보 입력하기](platform/biostar_x/add-user-basic-info): 사용자 ID 및 이름 입력 시 특수 문자를 허용하는 규칙 업데이트

* 모니터링

  * [상태 확인하기](/platform/biostar_x/check-door-status): 미리보기 패널에서 알람 확인, 주의가 필요한 항목 모아보기 안내 추가

  * [장치 모니터링하기](/platform/biostar_x/monitoring-device): 장치 잠금 해제, 인증 실패 잠금 해제, 여러 장치 한 번에 제어하기 안내 추가

* [장치 관리 기능 사용하기](/platform/biostar_x/settings-device-using-functions#exportImportDeviceConfig): 장치 설정 내보내기/가져오기 안내 추가

* [장치 등록하기](/platform/biostar_x/settings-adding-devices#addingWaitingDevices): 대기 중인 장치 등록 방법 추가

* [인증 설정하기](/platform/biostar_x/settings-device-details-auth#faceDetectionSettings): 얼굴 인증 설정 옵션 추가

* [고급 설정하기](/platform/biostar_x/settings-device-details-advanced)

  * [마스터 관리자 추가](/platform/biostar_x/settings-device-details-advanced#master-administrator): 마스터 관리자 기능을 CE향 제품에서만 사용할 수 있다는 안내와 글로벌향 제품의 2단계 인증 안내 추가

  * [대기 화면에 동영상 재생](/platform/biostar_x/settings-device-details-advanced#playVideo): 대기 화면 동영상 재생 기능 안내 추가

* [운영 권한 관리하기](platform/biostar_x/settings-manage-account): 운영 권한의 메뉴별 권한을 세분화하여 설정할 수 있는 안내 업데이트

* [인원 점검(Roll Call)](/platform/biostar_x/settings-advanced-ac-roll-call): 인원 점검 수행 시 현장에 없는 사람은 제외하는 기능 추가

* [퀵 액션 사용하기](/platform/biostar_x/settings-custom-interface): 헤더에 퀵 액션 버튼을 추가하고 관리하는 안내 추가

* [VMS 연동하기](/platform/biostar_x/settings-video-integration): VMS 인증서 설치 절차와 문제 해결 안내 업데이트

* [리포트 생성하기](/platform/biostar_x/data-generate-reports): 모든 이벤트 및 경보 이력 조회에서 리포트 저장 기능 안내 추가

* [시스템 보안 강화하기](platform/biostar_x/settings-system-security#communicationByDevice): 장치와 보안 통신 기능 관련 업데이트

* [BioStar X 라이선스](/platform/biostar_x/settings-license-biostar-x-license): 여러 라이선스 키를 한 번에 활성화하는 안내 업데이트

* [라이선스 정책](/platform/biostar_x/licensing): 변경된 라이선스 정책 업데이트

* [라이선스 계산기](/bsx-license-calculator): 라이선스 정채 업데이트에 따른 개선

### BioStar X Mobile

* [장치 관리하기](/platform/biostar_x_mobile/manage-devices): 모바일 앱에서 장치 상태를 확인하고 인증 실패 잠금을 해제하는 안내 문서 추가

* [인원 점검 시작하기](platform/biostar_x_mobile/start-rollcall) 인원 점검 수행 시 현장에 없는 사람은 제외하는 기능 안내 추가

### BioStar Air

* [BioStar Air 릴리스 노트](/platform/biostar_air/release-notes/bsair-release-notes#2130): 2.13.0 버전 릴리스 노트 추가

* 구역 및 안티패스백

  * [구역 관리](/platform/biostar_air/zone-management), [구역 관리하기](/platform/biostar_air/manage-zone): 구역과 안티패스백(APB)의 개념 및 구역 설정 방법 안내

  * [APB 위반 확인하기](/platform/biostar_air/manage-violation): APB 위반 목록을 확인하고 위반을 해제하는 방법 안내

* 현장(On Site) 사용자 및 실시간 재실 확인

  * [재실 확인하기](/platform/biostar_air/manage-presence): 현장(On Site) 및 외부(Off Site) 사용자를 확인하고 재실 상태를 수동으로 변경하는 방법 안내

  * [비상 호출](/platform/biostar_air/managing-roll-call-fire-muster): 소집 장소별 비상 호출 진행 방법 업데이트

  * [복합 단지 사이트에서 재실 및 소집 장소 설정하기](/platform/biostar_air/multi-building-presence-muster): 여러 건물로 구성된 사이트에서 경계 구역과 소집 장소를 설정하는 방법 안내

* SSO & SCIM

  * [SSO & SCIM 설정하기](/platform/biostar_air/site-sso-scim-settings): 로그인 정책 안내

  * [SSO & SCIM 활성화하기](/platform/biostar_air/site-sso-scim-basic-settings): ID 공급자 연동 설정 방법 안내

  * [Microsoft Entra ID 연동 설정하기](/platform/biostar_air/site-sso-scim-entra-id-setup), [Okta 연동 설정하기](/platform/biostar_air/site-sso-scim-okta-setup): ID 공급자별 SSO 연결 및 SCIM 프로비저닝 방법 안내

* [등록 출입문 관리하기](/platform/biostar_air/managing-registered-doors#batchDoorAccessLevels): 여러 출입문에 출입 레벨을 일괄 할당하는 방법 추가

## 장치

### 장치 업데이트

* [XPass Q2](/device/xpass_q2): XPQ2-DPB 신규 모델 추가

* [BioEntry W3](/device/bioentry_w3/installation): 틸팅 브래킷을 사용한 설치 방법 추가

* [BioStation 3](/device/biostation_3)

  * [인증](/device/biostation_3/authentication): 얼굴 중복 인증 방지 시간 설정 추가

  * [사용자](/device/biostation_3/user): 사용자 ID와 이름에 입력할 수 있는 특수 문자 안내 업데이트

  * [제품 사양](/device/biostation_3/product-specifications) 업데이트

* [FaceStation F2](/device/facestation_f2)

  * [시작하기](/device/facestation_f2/admin-menu): 장치에서 출입문을 제어하는 방법 추가

  * [사용자](/device/facestation_f2/user): 사용자 ID와 이름에 입력할 수 있는 특수 문자 안내 업데이트

* [BioStation 2a](/device/biostation_2a)
  
  * [인증](/device/biostation_2a/authentication): 인증 결과 표시 옵션 설정 추가

  * [설정](/device/biostation_2a/settings#rs-485): 인증 결과 설정 추가

* [Device Manager](/device/device_manager/getting-started): 신규 장치 지원 및 iOS 지원 버전 업데이트

### 릴리스 노트

* [BioStation 3](/device/biostation_3/release-notes/151): 1.5.1 버전 릴리스 노트 추가

* [X-Station 2](/device/xstation_2/release-notes/142): 1.4.2 버전 릴리스 노트 추가

* [Device Manager](/device/device_manager/release-notes/124): 1.2.4 버전 릴리스 노트 추가

## Docs

개별 문서 페이지에서 제품 기준으로 문서를 PDF로 다운로드할 수 있도록 개선

![Download PDF](/img/changelogs/changelog-2609-download-pdf.png)
