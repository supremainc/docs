# Access Management - Managing Door Access in BioStar Air

## Feature Overview

Access management in BioStar Air allows administrators to define and enforce access rules based on location, time, and user roles. This system is built around**access levels**, which combine doors, schedules, and holiday groups to control user permissions.

## Understanding Access Levels

Access levels define who has access, where, and when. They are composed of:

* **Doors/Door Groups**- Where access is granted.
* **Schedules**- When access is allowed.
* **Holiday Groups**- Days when access is restricted or adjusted.

Access levels should be set up before adding users to streamline the user management process.

## Setting Up Holiday Groups

Holiday groups define dates when access may be restricted.

1. Go to**Access Management**>**Holiday Groups**.
2. Click**Add Holiday Group**.
3. Enter a name and configure holidays:
   * Fixed Date: Select a calendar date (e.g., January 1st for New Year's Day).
   * Recurring: Define flexible dates (e.g., third Monday in February).
   * Custom Range: Set a start and end time for multi-day holidays.
4. Click**Save**to finalize.

\*\*Note:\*\*Holiday groups override schedules. Assign unrestricted access to users who must always have entry.

## Creating Schedules

Schedules define when users can access doors.

1. Go to**Access Management**>**Schedules**.
2. Click**Add Schedule**.
3. Enter a**Name**and optional description.
4. Select operational hours (e.g., 8:00 AM - 6:00 PM) or choose**All Day**.
5. Assign a**Holiday Group**if access should be restricted on holidays.
6. Click**Save**to apply.

\*\*Important:\*\*Holiday groups override schedules. Ensure critical personnel have full access if needed.

## Creating Access Levels

Access levels define user permissions based on doors, schedules, and holidays.

1. Go to**Access Management**>**Access Levels**.
2. Click**Add Access Level**.
3. Enter a**Name**and optional description.
4. Select**Doors or Door Groups**for access control.
5. Assign a**Schedule**(or set to "Always" for unrestricted access).
6. Click**Save**to finalize.

## Modifying and Deleting Access Levels

To modify an existing access level:

* Select the access level and click**Edit**.
* Update door assignments, schedules, or holiday groups.
* Click**Save**to apply changes.

To delete an access level:

* Select the access level and click**Delete**.

## Assigning Access Levels to Users

To assign an access level to existing users:

1. Go to**User Management**>**Users**.
2. Select one or more users.
3. Click**Set Access**.
4. Choose the appropriate access level.
5. Click**Done**to confirm.

## Assigning Access Levels to New Users

When adding a new user:

1. Go to**User Management**>**Users**>**Add User**.
2. Fill in user details.
3. Click**Access Level**and select the appropriate access level.
4. Click**Save**or**Activate Card**to finalize.
