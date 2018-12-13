# construct-save-share-image
Construct plugin to allow native builds (iOS and Android) image saving and sharing on iOS and Android.

## How does this differ from the "official plugin"?
The official plugin currently only allows to share text and URL links due to compatability requirements with Web API.

## What builds does this plugin work on?
Only Native iOS and Android builds. It does not work for HTML5 web builds. 

## Actions
### Save Image (Filename) 
**Filename** = *remote URL or CanvasSnapShot*

### Share file Via SMS (Message,Filename, Tel Number) 
**Message** = *Any text to pre-fill text message input box*

**Filename** = *remote URL or CanvasSnapShot.*

**Tel Number** = *Any telephone number to pre-fill telephone nuber input box*

## Supported Runtimes
Currently only C2 Runtime is supported, I have C3 runtime code in place but it is not working so I have disabled spport for C3 until further notice.
