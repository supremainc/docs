# Lift Control API

API that configures the OM-120, which can control lifts.

- [BS2_GetLift](bs2_getlift): Retrieves selected lifts.

- [BS2_GetAllLift](bs2_getalllift): Retrieves all lifts.

- [BS2_GetLiftStatus](bs2_getliftstatus): Retrieves the status of selected lifts.

- [BS2_GetAllLiftStatus](bs2_getallliftstatus): Retrieves the status of all lifts.

- [BS2_SetLift](bs2_setlift): Configures a lift.

- [BS2_SetLiftAlarm](bs2_setliftalarm): Configures the alarm status of the lift.

- [BS2_RemoveLift](bs2_removelift): Removes selected lifts.

- [BS2_RemoveAllLift](bs2_removealllift): Removes all doors.

- [BS2_ReleaseFloor](bs2_releasefloor): Releases the activate/deactivate flag of the lift status. This initializes the priorities set to the lift.

- [BS2_ActivateFloor](bs2_activatefloor): Configures the priority of when the floor is activated. The activate priority must be higher than the deactivate to allow access to the floor.

- [BS2_DeActivateFloor](bs2_deactivatefloor): Configures the priority of when the floor is deactivated. The deactivate priority must be higher than the activate to deny access to the floor.

- [BS2_GetFloorLevel](bs2_getfloorlevel): Retrieves selected floor levels.

- [BS2_GetAllFloorLevel](bs2_getallfloorlevel): Retrieves all floor levels.

- [BS2_SetFloorLevel](bs2_setfloorlevel): Configures a floor level.

- [BS2_RemoveFloorLevel](bs2_removefloorlevel): Removes selected floor levels.

- [BS2_RemoveAllFloorLevel](bs2_removeallfloorlevel): Removes all floor levels.

## Structure

### BS2Lift

```cpp
typedef struct {
    BS2_LIFT_ID     liftID;             
    char            name[BS2_MAX_LIFT_NAME_LEN];

    BS2_DEVICE_ID           deviceID[BS2_MAX_DEVICES_ON_LIFT];      

    uint32_t        activateTimeout;    
    uint32_t        dualAuthTimeout;            

    uint8_t                 numFloors;      
    uint8_t                 numDualAuthApprovalGroups;  
    BS2_DUAL_AUTH_APPROVAL  dualAuthApprovalType;       
    BS2_BOOL            tamperOn;       

    BS2_BOOL                dualAuthRequired[BS2_MAX_DEVICES_ON_LIFT];          
    BS2_SCHEDULE_ID     dualAuthScheduleID;         

    BS2LiftFloor        floor[BS2_MAX_FLOORS_ON_LIFT];              
    BS2_ACCESS_GROUP_ID dualAuthApprovalGroupID[BS2_MAX_DUAL_AUTH_APPROVAL_GROUP_ON_LIFT];      

    BS2LiftAlarm            alarm[BS2_MAX_ALARMS_ON_LIFT];
    BS2LiftAlarm            tamper;

    BS2_LIFT_ALARM_FLAG alarmFlags;     
    uint8_t                 reserved[3];            
} BS2Lift;
```

1. `liftID`

   Lift ID

1. `name`

   Name of the lift.

1. `deviceID`

   ID of the device taht is connected to the lift.

1. `activateTimeout`

   Time for the lift to be closed after it has been opened. The unit is seconds.

1. `dualAuthTimeout`

   Interval between the first user's authentication and the second user's authentication. The unit is seconds.

1. `numFloors`

   Number of floors that is configured to the lift.

1. `numDualAuthApprovalGroups`

   Number of access groups having authority of dual authentication.

1. `dualAuthApprovalType`

   Decides whether to distinguish if the user belongs to an access group having authority when accessing the door .

   | Value | Description |
   | --- | --- |
   | 0 | None |
   | 1 | Check the last user's authority |

1. `tamperOn`

   The status of the tamper.

1. `dualAuthRequired`

   Flag that indicates whether dual authentication is enabled.

1. `dualAuthScheduleID`

   Schedule for the dual authentication. Set the value as 0 for disable, 1 for enable, or set a schedule ID.

1. `floor`

   Floor information of the lift, which can be configured up to 255 floors.

1. `dualAuthApprovalGroupID`

   List of access groups having dual authentication authority, which can be configured up to 16 access groups.

1. `alarm`

   Alarm that will be triggered when the sensor input gets detected, which can be configured up to 2 alarms.

1. `tamper`

   Alarm that will be triggered when the tamper gets detected on the lift.

1. `alarmFlags`

   Status of the door alarm.

1. `reserved`

   Reserved space.

### BS2LiftFloor

```cpp
typedef struct {
    BS2_DEVICE_ID   deviceID;       
    uint8_t     port;           
    BS2FloorStatus  status;     
} BS2LiftFloor;
```

1. `deviceID`

   Device ID.

1. `port`

   Relay port number.

1. `status`

   Status of the floor.

### BS2FloorStatus

```cpp
typedef struct {
    BS2_BOOL        activated;          
    BS2_FLOOR_FLAG      activateFlags;  
    BS2_FLOOR_FLAG      deactivateFlags;        
} BS2FloorStatus;
```

1. `activated`

   Determines whether the floor is activated or deactivated.

1. `activateFlags`

   The priority of when the floor gets activated, which will not operate if the priority is lower than the deactivate priority. For example, if the floor is activated with the operator priority, all users entry will not be allowed. The deactivateFlags and activateFlags cannot have the same priority besides the default priority NONE.

   | Value | Description | Priority |
   | --- | --- | --- |
   | 0 | None | Normal |
   | 1 | Scheduled | High |
   | 4 | Operator | Very High |
   | 2 | Emergency | Highest |

1. `deactivateFlags`

   The priority of when the floor gets deactivated, which will not operate if the priority is lower than the activateFlags priority.

   | Value | Description | Priority |
   | --- | --- | --- |
   | 0 | None | Normal |
   | 1 | Scheduled | High |
   | 4 | Operator | Very High |
   | 2 | Emergency | Highest |

### BS2LiftSensor

```cpp
typedef struct {
    BS2_DEVICE_ID           deviceID;       
    uint8_t         port;       
    BS2_SWITCH_TYPE     switchType;     
    uint16_t        duration;           
    BS2_SCHEDULE_ID     scheduleID;     
} BS2LiftSensor;
```

1. `deviceID`

   Device ID.

1. `port`

   Input port number.

1. `switchType`

   Type of the switch.

   | Value | Description |
   | --- | --- |
   | 0 | Normally open |
   | 1 | Normally closed |

1. `duration`

   다The time that will take to determine an input signal as a fire alarm. The unit is milliseconds.

1. `scheduleID`

   ID of the time schedule when to operate the lift.

### BS2LiftAlarm

```cpp
typedef struct {
    BS2LiftSensor sensor;
    BS2Action action;
} BS2LiftAlarm;
```

1. `sensor`

   Sensor that detects the activate/deactivate status of the lift.

1. `action`

   Action that the lift will execute.

### BS2LiftStatus

```cpp
typedef struct {
    BS2_LIFT_ID          liftID;        
    uint16_t             numFloors;     
    BS2_LIFT_ALARM_FLAG  alarmFlags;            
    BS2_BOOL             tamperOn;          
    BS2FloorStatus       floors[BS2_MAX_FLOORS_ON_LIFT];        
} BS2LiftStatus;
```

1. `liftID`

   Lift ID.

1. `numFloors`

   Number of floors that is allocated to the lift.

1. `alarmFlags`

   Alarm status of the lift.

   | Value | Description |
   | --- | --- |
   | 0 | None |
   | 1 | First alarm |
   | 2 | Second alarm |
   | 4 | Tamper |

1. `tamperOn`

   The status of the tamper.

1. `floors`

   Floor information of the lift, which can be configured up to 255 floors.

### BS2FloorLevel

```cpp
typedef struct {
    BS2_FLOOR_LEVEL_ID      id;     // id >= 32768 (BS2_ACCESS_LEVEL_ID < 32768)
    char                name[BS2_MAX_FLOOR_LEVEL_NAME_LEN];
    uint8_t             numFloorSchedules;
    uint8_t             reserved[3];
    BS2FloorSchedule        floorSchedules[BS2_MAX_FLOOR_LEVEL_ITEMS];
} BS2FloorLevel;
```

1. `id`

   Floor ID. The floor ID should start from 32768. This is due to the level ID used for access levels which is maximum 32767.

1. `name`

   Name of the floor.

1. `numFloorSchedules`

   Number of time schedules that is allocated to the floor.

   Reserved space.

1. `floorSchedules`

   List of time schedules allocated to the floor.

### BS2FloorSchedule

```cpp
typedef struct {
    BS2_LIFT_ID     liftID;
    uint16_t        floorIndex;
    uint8_t         reserved[2];
    BS2_SCHEDULE_ID         scheduleID;
} BS2FloorSchedule;

```

1. `liftID`

   Lift ID.

1. `floorIndex`

   Floor ID.

1. `reserved`

   Reserved Space.

1. `scheduleID`

   Time shceulde ID.
