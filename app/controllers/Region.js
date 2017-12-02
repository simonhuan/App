// Arguments passed into this controller can be accessed via the `$.args` object directly or:
Alloy.Collections.webjson.fetch();
var args = $.args;

var City = args.City || {};

$.win.title = "Region";

$.win.addEventListener("close", function(){ 
    $.destroy();
});



function filterFunction(collection) {
    return collection.where({City:City});
    }

function RegiontableClick(e){
    console.log(e.row.classid);
    var RegionController = Alloy.createController('classdetails', {
        City: e.row.City,
        Image: e.row.Image,
        details: e.row.details
     
    });
    
    Alloy.Globals.tabGroup.activeTab.open(RegionController.getView());
};