
# Anti Passback

## Description

Anti-passback (APB) in BioStar Air works similarly to other access control systems:

* Zone-based
* Prevents credential sharing
* Enables path enformcement
* Improves accuracy of presense records
* Hard (reject) and Soft (log only) enforcement modes
* Temporary disable APB zones
* Clear violations
* Audit logs
* Re-entry timer
* Purge timer

Administrators configure APB Zones from a convenient unified interface. The system handles different APB scenarios, including single-door RS-485 configurations and larger multi-door perimeter zones. However, unlike BioStar 2 and X, Airfob Space does not have different setup workflows for “global” and ”local” APB.

## Goals for this Feature
* Expand BioStar Air’s competitiveness in mid-market projects by closing a meaningful advanced access control gap.
* Low friction way to deliver Anti-Passback through a single unified configuration experience.
* Support complex customer environments that need movement enforcement across site perimeters and internal zones.
* Reduce implementation and support burden by streamlining setup into a single workflow.
* Improve the reliability of movement history and occupancy-related records for security review and operational reporting.
* Support modern mixed-credential environments, including biometric, mobile, and card-based access.
* Create a platform for future security and operational features such as anomaly detection, automated actions, and investigation workflows.

## Key Sales Points

* **Stronger control over movement**: BioStar Air can enforce whether users enter and exit secure areas in the correct order across perimeters and internal zones.
* **Works across all credential types**: Anti-Passback supports biometric, mobile, card, and mixed-credential environments without forcing customers into a single credential model.
* **Stops credential sharing across locations**: If a member enters one site with one credential, another person cannot use that same member’s other credential to access a second site without a valid exit.
   **Ideal for gyms, coworking, and membership-based businesses**: APB helps protect revenue by reducing the risk of members sharing access with friends or unauthorized users.
* **Unified zone-based setup**: Administrators manage APB from one streamlined workflow instead of configuring disconnected rules across multiple areas of the product.
* **More than door-level protection**: Customers can secure a full perimeter or apply APB within specific zones inside a site for more granular control.
* **Built for advanced and growing deployments**: Features like capacity-aware zones, re-entry lockout timers, and violation purge timers support more sophisticated security policies as customer needs mature.

## 1. Zone Management

Go to Zone Management → Zones

The Zones screen is the main place in the system to configure Anti Passback.

Site Administrators can:
* Temporarily disable all zones (all settings are preserved)
* Enable / Disable a zone (all settings are preserved)
* Delete a zone (except Perimeter zone)
* See how many people are currently inside each zone
* See at first glance the status of the devices in the zone
* View APB mode and exemptions applied to each zone

## 2. Create a Zone

Go to Zone Management → Zones → Add a Zone
Inside a zone, Site Administrator can change zone’s name, pick entry and exit devices for this zone and set up APB rules.

## 3. Setting up APB

Go to Zone Management → Zones → Add a Zone
When creating or editing a zone, Site administrators choose how APB should behave.

**Important**
* When APB mode is NONE – all previously configured APB settings are reset to default values
* Zone can still be used without APB configured for calculating presence
* One device can be used only in one zone at a time
* Door settings do not change after changing entry and exit devices in the zone

### APB Mode

* **Hard APB**: Blocks access when the user violates the APB rule.

* **Soft APB**: Allows access but records the APB violation.

* **None**: No APB enforcement is applied to the zone.

### Door sensor confirmation

Administrators can choose to confirm entry or exit using the door sensor.

This means the users are marked as inside (or outside) only after the door sensor confirms the door was opened.

### Timers

Administrators can configure the following APB timers:
* Automatically clearing a violation after a set time
* Enforcing re-entry delay

## 4. Review and clear violations

Go to Zone Management → Violations

The Violations screen shows users who currently have active APB violations.

Site Administrators can see which type of violation a user has, zone and door when it happened. Administrators can also clear APB violations for an individual user or multiple users at the same time. Exempt users do not show up in this table.

## 5. APB exception user groups

Go to Zone Management → Zones → Add/edit a Zone → Exceptions

Some users may need to bypass APB rules. In this case, Site Administrators can assign APB exception groups to each zone.

**Important**
* When a zone is disabled, existing APB violations remain and can only be cleared from Violations page
* APB rules do not apply to user groups listed in Exceptions, but members still appear in the People Inside count.

## Impact on Daily Operations

### For administrative roles
* Better control over who enters and exits secured areas.
* Less risk of credential sharing.
* More reliable understanding of who is inside controlled zones.
* Clearer APB violation records for review and investigation.

### For installers
* APB can be explained and configured around zones, which matches how customers think about their buildings.
* Hard APB and Soft APB support different customer security levels.
* APB exceptions help avoid over-blocking important operational users.
* Zone-level management makes APB easier to support after installation.

### Typical customer use cases
* Offices with controlled internal areas
* Labs and production rooms
* Warehouses
* Gyms and membership-based facilities like coworking
* Multi-tenant buildings
* Sites where entry/exit sequence matters

### Known Limitations

### APB depends on correct zone setup

If entry and exit devices are not configured correctly, APB behavior and People Inside counts may not reflect actual movement.

### Offline devices may not receive changes immediately

Changes apply to online devices first. Offline devices receive updates when they reconnect.

### Some zone actions may be restricted when assigned devices are offline

A zone may not be deletable until assigned devices reconnect or are removed from the zone.

### Disabling a zone resets People Inside count

When a zone is disabled, People Inside count resets to 0. Existing violations remain available from the Violations page and Event Logs.

### Clearing a violation does not delete history

Clear violation only removes the active violation state. The original event remains in Event Logs.

### Doors used in APB zones are protected from conflicting edits

Administrators must remove a door from the APB zone before changing settings that would affect APB behavior.


# On Site Now

## Description
On Site Now gives administrators a real-time view of which active credential users are currently present at a site.
The feature uses access events and configurable perimeter zone rules to determine whether a user is considered “on site” or “off site”. It is built on a shared presence engine used by Zones and Roll Call.

On Site Now can use designated “out” readers to mark users as off site. For sites that only have “in” readers, administrators can configure a purge timer to automatically mark users as off site after a defined period of inactivity.

## In v2.13, the feature includes:
* On Site count on the main dashboard
* Configuration of the Perimeter zone that is the baseline for presence counting
* Dedicated Safety → Presence page with detailed presence information and manual override option

## Goals for this Feature
* Increase BioStar Air’s value for customers sensitive to safety and operations tracking, by adding a credible real-time presence capability.
* Create a single presence model that can serve as shared infrastructure for dashboard, roll call, and future zone-based workflows.
* Reduce dependence on searching raw event-logs just to see who is on site.
* Make installation and configuration as simple as possible. Out readers are not mandatory.
* Lay the groundwork for future occupancy analytics, cross-site visibility, and richer presence-based automation.
Key Sales Points
* See who is on site right now: Administrators get a live view of who is on site and where they are now, instead of reconstructing it from access events.
* Improve emergency readiness: Safety teams can use current presence information during roll call and incident response. Presense screen shows last door used by everyone on site.
* Fits different site setups: Works with both dedicated “out” readers and inactivity-based purge rules for sites that only have “in” readers.
* Manual correction when needed: Administrators can review detailed presence information and apply overrides when real-world conditions require it.
* Presence where it matters most: On-site count is visible from the main dashboard for faster day-to-day awareness.
* Built for real customer scale: Supports large facilities, high user volumes, and mixed credential environments.
* Trusted across workflows: The same presence logic powers multiple safety and monitoring experiences, helping customers avoid conflicting views.


## 1. Configure Site Presence Behavior

To configure the site’s entry and exit readers, go to: Zone Management → Zones

The pinned Perimeter zone is used for site-level presence behavior. It behaves like all other zones, except it is not allowed to be renamed or deleted.

The Perimeter Zone is the same zone used for site-level presence and can also be configured with APB rules.

To configure a perimeter zone, click on it and choose perimeter entry and exit devices in the same way as you would configure regular zones. A user is marked On Site when they enter through an entry reader and Off Site when they exit through an exit reader. If a site has no active exit readers, the off-site timer must be configured.


## 2. Review Presence

To view the list of users on site, go to: Safety → Presence

In Presence page, Site Administrators can view users currently On Site by default, and switch to Off Site or All users when needed. They can also manually change the status for individual user or multiple users at the same time. If information is sensitive, names can be also masked.

### Impact on Daily Operations

#### For site administrators
* Quickly check who is currently inside the site.
* Search and review users from the Presence screen.
* Manually correct presence when needed.
* Use the dashboard count for quick awareness.
* Use the same presence model during Roll Call.

#### For safety personnel (muster point administrators)
* Access a more useful list during emergency situations.
* Reduce confusion about who may still be inside.
* Improve accountability during muster workflows.

#### For partners and installers
* Configure presence behavior according to the customer’s door setup.
* Explain clearly how IN / OUT readers improve accuracy.

#### Typical customer use cases
* Offices
* Warehouses
* Manufacturing sites
* Schools
* Multi-building sites
* Any facility that needs quick awareness of who is inside


## Known Limitations

**Presence accuracy depends on site configuration**

Sites with clearly configured IN / OUT readers will generally provide more reliable presence data

**Delayed or offline events may affect presence**

If devices were offline or events are delayed, presence may update after synchronization.

**Manual override is a correction, not proof of physical location**

Mark On Site / Mark Off Site updates the system status, but it does not physically verify where the person is.

**Presence is not the same as access permission**

A user shown as On Site is not necessarily allowed to access every door.

**Dashboard, Presence, and Roll Call depend on the same presence logic**

Incorrect presence rules can affect all related views.

**Only activated users can be marked on/off site**

Users with expired/inactive/suspended status cannot be tagged on or off site until reactivated