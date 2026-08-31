# ROLL CALL

## Description

Roll Call Improvement enhances BioStar Air’s emergency roll-call capabilities by using the shared On Site Now presence engine to generate more accurate real-time muster lists.
Instead of assuming that all users are on site, the system uses current presence logic to show active users who are considered present at the time of the emergency.
The feature also separates roll-call responsibility by assigned user groups to specific muster points and assigned muster admins, helping safety personnel focus only on the users they are responsible for.
Suprema Pass app notifications help guide on-site mobile credential users to the correct muster point and warn off-site users not to enter the facility during an active event.

## Goals for this Feature
* Correct a weak point in BioStar Air’s emergency workflow by replacing assumption-based muster lists with presence-based roll call.
* Elevate Roll Call from a basic checklist feature into a best-in-calss feature.
* Reuse the On Site Now presence engine so emergency workflows are built on a consistent presence model.
* Improve role clarity during emergencies by assigning clear responsibilities for muster points.
* Increase value of Suprema Pass mobile credential app byusing it to deliver emergency instructions.
* Improve privacy and administrative control by limiting visibility of personal information.

## Key Sales Points

* **More accurate muster lists**: Roll Call shows who is actually considered on site at the time of the event instead of assuming all users are present.

* **Focused responsibility by muster point**: Assigned muster admins see the people relevant to their own muster area, making emergencies easier to manage.

* **Built-in mobile guidance**: Mobile credential users can receive emergency instructions in Suprema Pass, including where to report or whether to stay away from the site.

* **Faster emergency coordination**: Safety teams spend less time sorting out who is present, who is missing, and who is responsible for each group.

* **Better fit for complex facilities**: Especially valuable for multi-building sites, campuses, industrial locations, and other environments with distributed evacuation flows.

* **Stronger privacy controls**: Access to roll-call participant details can be limited to the admins responsible for a given muster point.

* **Best-in-class safety experience**: BioStar Air moves beyond basic roll call by combining live presence logic, guided response, and distributed accountability in one workflow.

## 1. Configure Master Points

To create a muster point, go to:Safety → Roll Call → Add Muster Point
Muster Points define where credential users should gather during an emergency.

Site Administrators can configure each Muster Point with:
* Muster Point name and description
* Device groups and individual devices
* User groups
* Assigned admins (New!)

### Assigned Admins
* Site Masters can assign admins or operators to specific Muster Points.
* This restricts each assigned admin’s rights to the users they are responsible for during an active roll call.

## 2. Start Roll Call in BioStar Air Mobile App

To start a roll call, go to:Safety → Roll Call → Start Roll Call
The Roll Call start flow depends on the admin role.
Site Master / Unassigned Admin / Unassigned Operator
* View active roll calls.
* Start a new roll call site-wide or for specific muster points.
* Open active roll call from the list.
* Mark users safe
* Finish roll call

### Assigned Admin / Operator

If Roll call started, an assigned admin or operator get a notification and opens directly into their assigned Muster Point workflow. They can manage scope of their roll call for their own Muster Point right away.

The active Roll Call screen shows:
* Muster Point name
* Unaccounted users
* All users
* On Site users
* All assigned users
* User search
* Safe status

### Site Master

A Site Master can:
* Finish a selected active Roll Call
* Finish multiple active Roll Calls
* Finish all active Roll Calls for the site

### Assigned Admin / Operator

An assigned admin or operator can finish the Roll Call for their own assigned Muster Point.

**Important**

* One admin cannot be assigned to multiple Muster Points at the same time
* Users marked safe are shown in the end of “All Assigned” user list
* Users can be reviewed from the On Site view or All assigned view.
* Off Site users can still be marked safe.
* Roll Call can automatically complete when all On Site users in scope are marked safe.

## Known Limitations

* Roll Call accuracy depends on On Site Now presence logic
   If perimeter zone is not configured correctly, the Roll Call list may not accurately reflect who is physically On Site.
* Mobile notifications require Suprema Pass
   Users with RF cards or biometric credentials only do not receive mobile Roll Call notifications. Suprema Pass must be installed and users must have a valid mobile credential for the site.
* Unassigned On Site users may not receive Muster Point instructions
   If an On Site user is not assigned to an in-scope Muster Point, the system does not have a specific location to send them to.
* Admin assignment must be maintained
   If Assigned Admins are not configured correctly, the right person may not see the expected Muster Point workflow.
* Presence can be affected by delayed or offline events
   If access events arrive late after device reconnection, presence and Roll Call accuracy may be affected.
* Roll Call impacts only activated users
   Only users with activated status can receive notifications

Mobile credential users and administrators using older versions of Suprema Pass or the BioStar Air app can continue using the existing Roll Call experience, but must update to access all the new features.