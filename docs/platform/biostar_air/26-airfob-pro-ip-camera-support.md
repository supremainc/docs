# BioStar Air IP Camera Support

\*\*Tags:\*\*CCTV, ONVIF, VMS

## Overview

BioStar Air can automatically detect IP cameras that are connected to the same network as an Airfob Edge Reader. The cameras use the reader as a gateway, eliminating the need for an NVR (Network Video Recorder). Instead, the cameras utilize the built-in SD card storage.

For each Airfob Edge Reader installed, BioStar Air can show simultaneous live view streams for:

* Up to 2 cameras at Full HD resolution (1080p)
* Up to 4 cameras at HD resolution (720p)

## Compatibility

* \*\*Onvif Profiles:\*\*IP cameras must be compatible with Onvif profiles S and/or G.
  * \*\*Onvif Profile S:\*\*Streaming Live Video
  * \*\*Onvif Profile G:\*\*Record Video to an SD Card
* \*\*SD Card:\*\*IP cameras should have an on-board SD card to record video for later playback. (MOCA recommends SanDisk microSDXC Class10 Max Endurance 256GB or 512GB)
* \*\*Encoding:\*\*Cameras must support H.264 (AVC) and it must be enabled as the active CODEC. BioStar Air does not currently support H.265.
* \*\*Recommended Brands:\*\*We have excellent compatibility with Hanwha, Hikvision, and Dahua cameras. Compatibility with other brands may vary depending on their adherence to Onvif profiles.
* \*\*Testing New Cameras:\*\*If you have other camera brands that you would like to test, our team can assist you through the process.

## Functionality

In the BioStar Air app, you can:

* View live camera feeds.
* View recorded camera feeds.
* Access camera footage associated with access events.

## Instructions

### 1. Connect the IP Camera

* \*\*Network Connection:\*\*Ensure that your IP camera is connected to the same network as an Airfob Edge Reader or Airfob Edge Reader Ultimate.
* \*\*Enable Onvif:\*\*Ensure that Onvif is enabled on your cameras.
* \*\*Reader Registration:\*\*Verify that the reader is registered to a site.

### 2. Log into BioStar Air

Only**Master Administrators**can make changes to site settings, such as enabling Video Management. Make sure that you log in with Master privileges.

### 3. Enable Video Management

Navigate to**Settings > Site > Additional features > Video Management**to turn on Video Management. (This can only be enabled by a Master level administrator.)

### 4. Add Cameras

* Go to**Device Management > Cameras > + Add Camera**.
* \*\*Select Device (Reader):\*\*Select the reader that will act as a gateway. The reader should be running firmware version 2.5.1 or later and be on the same network as the camera.
* \*\*Automatic Search:\*\*BioStar Air will automatically search for cameras on your network.
* \*\*Camera Registration:\*\*You may need to input an ID and password to register a camera.

### 5. Associate Cameras with Doors

* Go to**Door Management > Registered Doors**.
* \*\*Assign Devices:\*\*Select a door, then in the Assign Devices section, select a camera. This links the camera to a door, allowing you to view relevant footage in event logs.

### 6. View Live Camera Footage

* Go to**Monitoring > Real-Time Video**to watch live video streams.
* \*\*Simultaneous Streams:\*\*You can view up to 2 live Full HD (1080p) streams for each Airfob Edge Reader installed.
* \*\*Additional Streams:\*\*To view more live streams, add more readers or reduce the camera resolution (**Device Management > Cameras > Click on a Camera > Profile**).

### 7. View Recorded Camera Footage

* Go to**Monitoring > Recorded Video**to watch recorded video streams.

### 8. View Event Footage

* Go to**Monitoring > Event Logs**. Find an event log with an associated video clip and click the play button to view it.

### 9. Explore Additional Settings

There are many other settings available for you to explore within the app. This guide is an interim reference until the official instruction manual is published.

## Tested & Confirmed Devices

| No | Manufacturer   | Model No.               | Device Type | Onvif Profiles | Resolution |
| -- | -------------- | ----------------------- | ----------- | -------------- | ---------- |
| 1  | Hanwha Techwin | QNV-C8011R              | Camera      | S, G, T, M     | 2592x1944  |
| 2  | Hanwha Techwin | QND-6022R               | Camera      | S, G, T        | 1920x1080  |
| 3  | Hanwha Techwin | MMI-600R                | Camera      | S, T           | 1920x1080  |
| 4  | HIKVISION      | DS-2CD2025FWD-I         | Camera      | S, G, T        | 1920x1080  |
| 5  | HIKVISION      | DS-2CD2166G2-I          | Camera      | S, G, T        | 3200×1800  |
| 6  | HIKVISION      | DS-2CD1121-I            | Camera      | S              | 1920x1080  |
| 7  | Dahua          | DHI-NVR2104HS-P-S3      | NVR         | S, G, T        | 12MP       |
| 8  | Dahua          | IPC-HDBW3249E-AS-NI     | Camera      | S, G, T        | 1920×1080  |
| 9  | Dahua          | SD22204UEN-GN           | Camera      | S, G, T        | 1920×1080  |
| 10 | Dahua          | DH-IPC-HFW1230DT-STW-VN | Camera      | S, T           | 1920×1080  |
| 11 | Marruy         | IPC-A32E-L              | Camera      | S, T           | 2304×1296  |
| 12 | TP-Link        | Tapo C210               | Camera      | S              | 2304×1296  |

## General Steps to Enable ONVIF on IP Cameras

1. \*\*Log into the Camera’s Web Interface:\*\*Open a web browser, enter the camera’s IP address, and log in with admin credentials.
2. **Navigate to Network or Configuration Settings:**Find the**Network**or**Configuration**section.
3. \*\*Enable ONVIF Protocol:\*\*Enable ONVIF or Open Network Video Interface.
4. \*\*Set up an ONVIF Profile or User:\*\*Create an ONVIF-specific user profile if required.
5. \*\*Save and Test Connectivity:\*\*Save the settings and test ONVIF connection in BioStar Air.

## Additional Tips

* \*\*Firmware Updates:\*\*Keep your camera and readers updated to the latest firmware.
* \*\*Port Forwarding:\*\*Configure port forwarding for ONVIF if needed.
* \*\*Third-Party Tools:\*\*Use ONVIF Device Manager to verify camera settings and functionality.
