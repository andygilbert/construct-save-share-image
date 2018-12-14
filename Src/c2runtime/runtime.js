// ECMAScript 5 strict mode
"use strict";

assert2(cr, "cr namespace not created");
assert2(cr.plugins_, "cr.plugins_ not created");

/////////////////////////////////////
// Plugin class
cr.plugins_.ImageSaveShareSMS = function(runtime)
{
	this.runtime = runtime;
};

(function ()
{
    
    function saveimg(o){
        var exists = window["plugins"] && window["plugins"]["socialsharing"] && window["plugins"]["socialsharing"]["saveToPhotoAlbum"];
		if (exists)
			window["plugins"]["socialsharing"]["saveToPhotoAlbum"](o);
    }
	
	var pluginProto = cr.plugins_.ImageSaveShareSMS.prototype;
		
	/////////////////////////////////////
	// Object type class
	pluginProto.Type = function(plugin)
	{
		this.plugin = plugin;
		this.runtime = plugin.runtime;
	};

	var typeProto = pluginProto.Type.prototype;

	typeProto.onCreate = function()
	{
	};

	/////////////////////////////////////
	// Instance class
	pluginProto.Instance = function(type)
	{
		this.type = type;
		this.runtime = type.runtime;
		
		// Initialise object properties
		this.testProperty = 0;
	};
	
	var instanceProto = pluginProto.Instance.prototype;
	
	instanceProto.onCreate = function()
	{
		// Read properties set in C3
		this.testProperty = this.properties[0];
	};
	
	instanceProto.saveToJSON = function ()
	{
		return {};
	};
	
	instanceProto.loadFromJSON = function (o)
	{
	};
	
	/**BEGIN-PREVIEWONLY**/
	instanceProto.getDebuggerValues = function (propsections)
	{
	};
	/**END-PREVIEWONLY**/

	//////////////////////////////////////
	// Conditions
	function Cnds() {};
		
	pluginProto.cnds = new Cnds();

	//////////////////////////////////////
	// Actions
	function Acts() {};

    Acts.prototype.ShareViaSMS = function (msg,file,number)
    {
        var exists = window["plugins"] && window["plugins"]["socialsharing"] && window["plugins"]["socialsharing"]["shareViaSMS"];
		if (exists)
			window["plugins"]["socialsharing"]["shareViaSMS"]({'message':msg, 'subject':'', 'image':file},number);
    };
    
    Acts.prototype.SaveImage = function (url)
	{
		saveimg(url);
	};
	
	pluginProto.acts = new Acts();

	//////////////////////////////////////
	// Expressions
	function Exps() {};
		
	pluginProto.exps = new Exps();

}());
