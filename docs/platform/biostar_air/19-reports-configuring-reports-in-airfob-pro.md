## Reports - Configuring Reports in BioStar Air

Reports in BioStar Air can be configured from different screens depending on the type of report you need. This guide covers how to generate and schedule reports for users, event logs, and audit logs.

## Accessing Report Configuration

To configure a report, navigate to the appropriate section:

* For user reports: Go to**User Management**>**Users**.
* For event log or admin action reports: Go to**Monitoring**>**Event Logs**or**Audit Logs**.

In these screens, locate the report icon in the toolbar at the top (a document icon). Hover over it to see the label**Report**, then click it to open the report settings.

## Configuring User Reports

1. Enter a report name.
2. Click**Filters**and select criteria:
   * User Type
   * Card Type
   * User Status
   * User Group
   * Access Level
   * Floor Level
3. Click**Add Report**to save it.
4. At the bottom of the screen, the**Report List**displays all created reports.
5. Click the**Download**icon to export the report as a**PDF**or**CSV**.
6. Click the**Delete**button to remove a report.

## Configuring Event Log Reports

1. Go to**Monitoring**>**Event Logs**.
2. Click the**Report**button.
3. Choose from the following filters:
   * Events
   * User Type
   * Device Group
   * Device Nickname
   * User Group
   * Access Level
   * Device ID
   * Door

## Configuring Audit Log Reports

1. Go to**Monitoring**>**Audit Logs**.
2. Click the**Report**button.
3. Choose from the following filters:
   * **Account**: Select a user or group of users.
   * **Action**: Choose specific actions.
   * **Admin**: Select the admin level.
   * **Type**: Filter by action type.

## Scheduling Reports

1. Go to**Site Settings**>**Alerts**.
2. Click**Add Alert**(blue button in the upper-right corner).
3. Select**Report**as the alert type.
4. Choose the report name.
5. Set the report schedule:
   * Weekly or monthly.
   * Select the specific day for delivery.
   * All reports will be sent at midnight on the selected day.
6. Select the target recipients:
   * All admins at a certain admin level.
   * Individual admins.
7. Choose the delivery method:
   * Reports**can only be sent via email**.
   * *They cannot be sent via SMS or push notifications.*
