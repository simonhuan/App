// Arguments passed into this controller can be accessed via the `$.args` object directly or:
Alloy.Collections.webjson.fetch();
var args = $.args;

var classid = args.classid || {};
var priceid = args.priceid || {};

$.win.title = "ClassDetails";

$.win.addEventListener("close", function(){ 
    $.destroy();
});


function filterFunction(collection) {
    return collection.filter(function(model){
        if (priceid == "under7000"){
           return (model.get("Class") == classid && model.get("Price")<7000);
         }
         else if (priceid == "above7000"){
           return (model.get("Class") == classid && model.get("Price")>=7000);
        }
        else if (priceid == "under5000"){
           return (model.get("Class") == classid && model.get("Price")<5000);
        }
        else if (priceid == "above5000"){
           return (model.get("Class") == classid && model.get("Price")>=5000);
        }
    });
}

function classdetailstableClick(e) {
 
    var ClassController = Alloy.createController('classdetails', {
        City: e.row.City,
        Image: e.row.Image,
        details: e.row.details
       

    });
    Alloy.Globals.tabGroup.activeTab.open(ClassController.getView());
};
