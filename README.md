# construct-save-share-image
Construct plugin to allow native builds (iOS and Android) image saving (iOS only) and sharing vis SMS.

## How does this differ from the "official plugin"?
The official plugin currently only allows to share text and URL links due to compatability requirements with Web Share API.

This plugin is aimed for Native Apps (iOS and Android) that wish to save images to photo roll (iOS only) & share an image via SMS.

## What builds does this plugin work on?
Only Native iOS and Android builds. **It does not work for HTML5 web builds**. 

## Actions
### Save Image (Filename) (iOS only)
**Filename** = *remote URL or CanvasSnapShot*

### Share file Via SMS (Message,Filename, Tel Number) 
**Message** = *Any text to pre-fill text message input box*

**Filename** = *remote URL or CanvasSnapShot.*

**Tel Number** = *Any telephone number to pre-fill telephone number input box*

## Supported Runtimes
Currently only C2 Runtime is supported, C3 runtime code is in place but is not currently working so I have disabled spport for C3 until further notice.
