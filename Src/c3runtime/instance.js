"use strict";

{
	C3.Plugins.ImageSaveShareSMS.Instance = class ImageSaveShareSMSInstance extends C3.SDKInstanceBase
	{
		constructor(inst, properties)
		{
			super(inst);
			
			
			if (properties)		// note properties may be null in some cases
			{
				
			}
		}
		
		Release()
		{
			super.Release();
		}
		
		SaveToJson()
		{
			return {
				// data to be saved for savegames
			};
		}
		
		LoadFromJson(o)
		{
			// load state for savegames
		}
	};
}
