HickoryHomeAutomation
=====================

Automation flows for home

### About

I used Node-Red for almost 100% of my automations.
I have a couple of HA scripts for my Node-Red watchdog, and setting a theme @ startup (I like it dark), but that's it.

## Current Flows (Automations)

- HA Backup
    Automated daily backups, stored in DropBox
- Watchdog Routines
    This flow is for keeping an eye on things, like node-red itself
- Housemose
    Set the "mode" of the house based on time of day (i.e. morning, day, evening)
    This is intended for future automations to be triggered or limited based on the house mode
- IsAnyoneHome
    Presence tracking
- SunBasedLights
    We have lots of lighting, this is the flow to control the lights based on time and the sun (i.e. turn on exterior lights at sundown)
- Motion Lighting
    Self-explanatory?
- CJ Wake up/Jen Wake up
    Automation for each of our wakeup lights
- House wake up
    An automation to trigger wake lights for the whole house instead of an individual (this is just a centralized time trigger)
- AutoAlarm
    This flow handles turning on the alarm/wake lights for each person automatically in case we forget (great for workdays/weekends)
- Weekly TTS Test
    Like the monthly tornado siren test, this test having HA make Alexa talk each Saturday @ 1pm
- Current State
    This is to get some current state information from each of our tracked phones (i.e. Battery, latitude/longitude)
- System Monitor
    A flow to keep an eye on if/when devices have/need updates and provide a notification/persistent notification
    The production version of this send it to my mobile phone too

## NOTES:

I have included a snapshot of each flow, so that you can see how I have set them up.  You will find them in the images folder.
Some flows are very large and will have multiple images.
