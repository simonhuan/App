$.index.open();

Alloy.Collections.webjson.fetch();
Alloy.Collections.consulate.fetch();
Alloy.Globals.tabGroup = $.index;

function IndextableClick(e) {
    console.log(e.row.Image);
    var classdetailsController = Alloy.createController('classdetails', {
        Image: e.row.Image,
        City: e.row.City,
        details: e.row.details,
        pid:e.row.pid
    });
    $.index.activeTab.open(classdetailsController.getView());
};

function ClasstableClick(e) {

    var ClassController = Alloy.createController('Class', {
      
        classid: e.row.classid,
        priceid: e.row.priceid
       

    });
    $.index.activeTab.open(ClassController.getView());
};

function RegiontableClick(e){
    console.log(e.row.City);
    var RegionController = Alloy.createController('Region', {
        City: e.row.City,
    });
    
    $.index.activeTab.open(RegionController.getView());
};



function mapClicked(e) {
    
    if (e.clicksource == 'rightButton') {
            
        var RegionController = Alloy.createController('Region', {
            City: e.annotation.City,
        });
        
        $.index.activeTab.open(RegionController.getView());
     
        
    }   
}



var previousRegion;

function transform(model) {
    var transform = model.toJSON();

    if (previousRegion == transform.Region)
        transform.Region = null;
    
    previousRegion = transform.Region;
    return transform; 
}




function transformFunction(model) { 
    var transform = model.toJSON(); 
    
    transform.title = "🤣" + transform.City;


    transform.rightButton = Titanium.UI.iOS.SystemButton.DISCLOSURE

    return transform; 
}

function BookedPackagestableClick(e) {
    var classdetailsController = Alloy.createController('Bookedpackages', {
    });
    $.index.activeTab.open(classdetailsController.getView());
};


function gotologinFunction(e) {
    var classdetailsController = Alloy.createController('Login', {
    });
    $.index.activeTab.open(classdetailsController.getView());
};










