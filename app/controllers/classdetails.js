// Arguments passed into this controller can be accessed via the `$.args` object directly or:
Alloy.Collections.webjson.fetch();
var args = $.args;

var City = args.City || {};
var Image = args.Image || {};
var details = args.details || {};
var pid = args.pid || {};

$.win.title = "RegionDetails";



$.Image.Image = Image;
$.City.text = City;
$.details.text = details;


$.win.addEventListener("close", function(){ 
    $.destroy();
});



function BuytableClick(e){
    var xhr = Ti.Network.createHTTPClient();
    xhr.onload = function(e) {
        alert(this.responseText);
    };
    xhr.open('POST','https://funfares-web.herokuapp.com/user/addbuy/');
    xhr.send({
        "pid": pid,
    });
};




function MaptableClick(e){
    //console.log(city);
    var mapController = Alloy.createController('map', {
        City:City,
    });
    
    Alloy.Globals.tabGroup.activeTab.open(mapController.getView());
};

