---
title: September 2026
description: Provides the major update history for Suprema Docs in September 2026.
slug: 2026-09-changelog
date: 2026-10-01T09:00
---

September brings plenty of news to **Suprema Docs**. In line with **BioStar X** version 1.0.3 and **BioStar Air** version 2.13, we've added and updated a range of user guides covering batch control in monitoring, ID scanning, audit trails, zone and presence management, and SSO & SCIM integration. We've also published release notes for **BioStation 3**, **X-Station 2**, and **Device Manager**.

![Suprema Docs 26.09 Changelogs](/img/changelogs/changelogs-202609.png)

{/*truncate*/}

## Docs

* You can now **download the product manual PDF directly** from each individual document page.

  ![Download PDF](/img/changelogs/changelog-2609-download-pdf.png)

* Each individual document page now shows the **Last updated** of that document.

  ![Last Updated](/img/changelogs/changelog-2609-last-updated.png)

## Platform

### BioStar X

* [Version 1.0.3](/platform/biostar_x/release-notes/103): Added release notes for version 1.0.3

#### New Documents

* [Bulk Control](/platform/biostar_x/monitoring-batch-control): Added guidance on selecting and controlling multiple doors, elevators, and advanced access controls at once from Monitoring

* [Set Up ID Scan](/platform/biostar_x/settings-account-scan-passport), [Register and Edit Users by Scanning an ID](/platform/biostar_x/add-user-by-scanning-passport): Added guidance on automatically entering user information by scanning an ID

* [Manage Long-Term Inactive Users](/platform/biostar_x/settings-account-personal-data): Added guidance on setting automatic deactivation criteria and advance notification emails for long-term inactive users

* [Configure Door Control through Authentication](/platform/biostar_x/settings-door-auth-control): Added guidance on manually opening a door or switching it to released status through user authentication

* Audit Trail

  * [Viewing Access Control Audit Logs](/platform/biostar_x/settings-system-audit-trail-ac), [Managing Audit Settings](/platform/biostar_x/settings-system-audit-trail-settings)

  * [Viewing Time & Attendance Audit Logs](/platform/biostar_x/tna-audit-trail), [Setting the Time & Attendance Audit](/platform/biostar_x/tna-audit-trail-settings)

* [Uninstall BioStar X Server and Restoring the Security Certificate](/platform/biostar_x/remove-server): Added guidance on removing the server and restoring a backed-up security certificate

#### Document Updates

* [Entering Basic User Information](/platform/biostar_x/add-user-basic-info): Updated the rules for allowing special characters when entering user IDs and names

* Monitoring

  * [Checking the Status](/platform/biostar_x/check-door-status): Added guidance on checking alarms in the preview panel and viewing items that require attention in one place

  * [Monitoring Devices](/platform/biostar_x/monitoring-device): Added guidance on unlocking devices, releasing authentication failure locks, and controlling multiple devices at once

* [Using Device Management Functions](/platform/biostar_x/settings-device-using-functions#exportImportDeviceConfig): Added guidance on exporting and importing device settings

* [Adding Devices](/platform/biostar_x/settings-adding-devices#addingWaitingDevices): Added guidance on registering waiting devices

* [Setting the Authentication](/platform/biostar_x/settings-device-details-auth#faceDetectionSettings): Added face authentication setting options

* [Advanced Settings](/platform/biostar_x/settings-device-details-advanced)

  * [Master Admin](/platform/biostar_x/settings-device-details-advanced#master-administrator): Added a note that the master administrator feature is available only on CE products, along with guidance on two-factor authentication for global products

  * [Playing a Video on the idle Screen](/platform/biostar_x/settings-device-details-advanced#playVideo): Added guidance on the video playback feature on the standby screen

* [Managing Operator Permissions](/platform/biostar_x/settings-manage-account): Updated guidance on configuring granular, menu-level permissions for operator roles

* [Roll Call](/platform/biostar_x/settings-advanced-ac-roll-call): Added the ability to exclude people who are not on site when performing a roll call

* [Using Quick Actions](/platform/biostar_x/settings-custom-interface): Added guidance on adding and managing quick action buttons in the header

* [Integrating with VMS](/platform/biostar_x/settings-video-integration): Updated the VMS certificate installation procedure and troubleshooting guidance

* [Generating Reports](/platform/biostar_x/data-generate-reports): Added guidance on saving reports when viewing all events and alarm history

* [Strengthening System Security](/platform/biostar_x/settings-system-security#communicationByDevice): Updated content related to the secure communication feature with devices

* [BioStar X License](/platform/biostar_x/settings-license-biostar-x-license): Updated guidance on activating multiple license keys at once

* [Licensing Policy](/platform/biostar_x/licensing): Updated the revised licensing policy

* [License Calculator](/bsx-license-calculator): Improved in line with the licensing policy update

### BioStar X Mobile

* [Managing Devices](/platform/biostar_x_mobile/manage-devices): Added a guide on checking device status and releasing authentication failure locks in the mobile app

* [Starting a Roll Call](/platform/biostar_x_mobile/start-rollcall): Added guidance on the ability to exclude people who are not on site when performing a roll call

### BioStar Air

* [BioStar Air Release Notes](/platform/biostar_air/release-notes/bsair-release-notes#2130): Added release notes for version 2.13.0

* Zones and Anti-Passback

  * [Zone Management](/platform/biostar_air/zone-management), [Managing Zones](/platform/biostar_air/manage-zone): Added guidance on the concepts of zones and anti-passback (APB) and how to set up zones

  * [Checking APB Violations](/platform/biostar_air/manage-violation): Added guidance on viewing the APB violation list and clearing violations

* On-Site Users and Real-Time Presence

  * [Checking Presence](/platform/biostar_air/manage-presence): Added guidance on checking On-Site and Off-Site users and manually changing presence status

  * [Emergency Roll Call](/platform/biostar_air/managing-roll-call-fire-muster): Updated how to conduct an emergency roll call by muster point

  * [Configuring Presence and Muster Points at Multi-Building Sites](/platform/biostar_air/multi-building-presence-muster): Added guidance on setting up boundary zones and muster points at sites made up of multiple buildings

* SSO & SCIM

  * [Setting SSO & SCIM](/platform/biostar_air/site-sso-scim-settings): Added guidance on login policies

  * [Enabling SSO & SCIM](/platform/biostar_air/site-sso-scim-basic-settings): Added guidance on configuring identity provider integration

  * [Setting Microsoft Entra ID Integration](/platform/biostar_air/site-sso-scim-entra-id-setup), [Setting Okta Integration](/platform/biostar_air/site-sso-scim-okta-setup): Added guidance on SSO connection and SCIM provisioning for each identity provider

* [Managing Registered Doors](/platform/biostar_air/managing-registered-doors#batchDoorAccessLevels): Added guidance on batch-assigning access levels to multiple doors

## Devices

### Device Updates

* [XPass Q2](/device/xpass_q2): Added the new XPQ2-DPB model

* [BioEntry W3](/device/bioentry_w3/installation): Added installation instructions using the tilting bracket

* [BioStation 3](/device/biostation_3)

  * [Authentication](/device/biostation_3/authentication): Added a setting for the duplicate face authentication prevention time

  * [User](/device/biostation_3/user): Updated guidance on the special characters allowed in user IDs and names

  * [Product Specifications](/device/biostation_3/product-specifications) updated

* [FaceStation F2](/device/facestation_f2)

  * [Admin Menu](/device/facestation_f2/admin-menu): Added guidance on controlling doors from the device

  * [User](/device/facestation_f2/user): Updated guidance on the special characters allowed in user IDs and names

* [BioStation 2a](/device/biostation_2a)

  * [Authentication](/device/biostation_2a/authentication): Added authentication result display options

  * [Settings](/device/biostation_2a/settings#rs-485): Added authentication result settings

* [Device Manager](/device/device_manager/getting-started): Updated supported new devices and the supported iOS version

### Release Notes

* [BioStation 3 Max](/device/biostation_3_max/release-notes/110): Added release notes for version 1.1.0

* [BioStation 3](/device/biostation_3/release-notes/151): Added release notes for version 1.5.1

* [FaceStation F2](/device/facestation_f2/release-notes/231): Added release notes for version 2.3.1

* [X-Station 2](/device/xstation_2/release-notes/142): Added release notes for version 1.4.2

* [Device Manager](/device/device_manager/release-notes/124): Added release notes for version 1.2.4

## Developer

* [BioStar X API](/developer/bsxapi?api=revision-notes): Released version 1.0.3

* [BioStar Device SDK](https://kb.supremainc.com/bs2sdk/doku.php?id=en:release_note_2913): Released version 2.9.13

* [Suprema G-SDK](https://supremainc.github.io/g-sdk/release/release-1.9.2/): Released version 1.9.2
