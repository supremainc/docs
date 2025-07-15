# Daylight Saving Time (DST) Configuration
## Feature Overview
Daylight Saving Time (DST) allows you to configure how time adjustments occur for a site. This is especially important when managing sites with readers in multiple time zones, ensuring consistent and accurate time tracking.

## Navigating to the Feature
To access the DST settings:

* Go to**Settings**.
* Click on**DST**.
* You will be directed to the**Daylight Saving Time**page, where you can view and edit existing DST configurations.

## Step-by-Step Instructions
### Editing an Existing DST Configuration
1. On the**Daylight Saving Time**page, locate the DST configuration you want to edit.
2. Click on the existing DST setting to modify its parameters.

### Adding a New DST Configuration
1. Click the**Add DST**button in the top right corner of the screen.
2. Select the appropriate time zone from the drop-down menu.
3. Choose whether to enable**Automatic DST**(recommended) or configure it manually.
4. If using**Automatic DST**, simply toggle on the switch.
5. If configuring manually, specify the appropriate start and end day or week for that time zone.

### Enabling DST for Devices
Each device must also have DST enabled to ensure accurate time adjustments:

1. Go to**Device Management**.
2. Click on**Registered Devices**.
3. Select a device from the list.
4. Locate the**Time Zone**section.
5. Toggle on**Use DST**to enable daylight saving time for the device.

*Note:*For time zones that observe DST, this setting is typically enabled by default.

## Common Issues & Considerations
* In**Event Logs**:  
   * If device time is set, event log timestamps will be coordinated with the DST time for each individual device.  
   * If site time is set, timestamps will be adjusted according to the site's DST configuration rather than per device.