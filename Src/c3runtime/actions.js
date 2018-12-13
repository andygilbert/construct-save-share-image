"use strict";

{
	C3.Plugins.CordovaSocialSharing.Acts =
	{
        ShareViaSMS(msg,file,number)
        {
            var exists = window["plugins"] && window["plugins"]["socialsharing"] && window["plugins"]["socialsharing"]["shareViaSMS"];
            if (exists)
                window["plugins"]["socialsharing"]["shareViaSMS"]({'message':msg, 'subject':'', 'image':file},number);
        
        },

        SaveImage(url)
        {
            var exists = window["plugins"] && window["plugins"]["socialsharing"] && window["plugins"]["socialsharing"]["saveToPhotoAlbum"];
            if (exists)
                window["plugins"]["socialsharing"]["saveToPhotoAlbum"](o);
        }
	};
}