# Device Management - Configuring the Airfob Patch and Tag

## Device Overview

The Airfob Patch and Tag devices upgrade existing access control readers or door locks to be compatible with BioStar Air mobile credentials.

* \*\*Airfob Patch:\*\*Ideal for wired readers and intercoms, this energy-harvesting device attaches without the need for wiring.
* \*\*Airfob Tag:\*\*Equipped with a coin cell battery, making it suitable for battery-powered devices like door locks.

## Compatibility

Both devices work with Mifare 1K technology but are not compatible with 125 KHz "low frequency" readers or locks.

## Functionality

These devices operate by reading the encrypted Bluetooth BioStar Air credential from a mobile phone and emulating a Mifare RFID signal. They attach to readers and locks using tape, requiring no wiring.

## Configuration Steps

After installing your Tag or Patch and registering it with the BioStar Air app, follow these steps to configure your device:

### 1. Access the App

* Open the**BioStar Air**app.
* Log into the site where your Tag or Patch is registered.

### 2. Navigate to Device Settings

* Tap**Access Point**on the menu bar.
* Select**Device**to view a list of registered devices.
* Choose the Patch or Tag you wish to configure.

### 3. Enable BLE Mode

* Bring your phone close to the device.
* Toggle on**BLE Mode**in the app.

### 4. Set Card ID Output Method

* Scroll to**Card ID Output Method**and tap**Edit**.
* Press**Select**next to**User Card ID**.

### 5. Choose the Output Method

* \*\*None:\*\*Select this option if no card ID should be transmitted. This setting is useful for Time & Attendance (T\&A) purposes to extend battery life.
* \*\*Fixed Device:\*\*Transmits a constant, pre-programmed card ID. Useful for door locks or intercoms that require RFID cards to be programmed individually. The device log will only display this fixed card ID.
* \*\*User Card ID:\*\*Transmits a unique card ID for each user, aligning with existing RFID card numbers in access control systems. This allows seamless integration without issuing new physical cards.
* \*\*Direct Input:\*\*Manually specify the card ID to transmit. Useful for custom settings where a single ID must be used across multiple devices.

### 6. Save Your Settings

* Confirm your selections by pressing**Save**while your phone is near the device.
* A success message will confirm the update.

By following these steps, you can ensure that your Airfob devices are properly configured to meet your specific access control needs.
