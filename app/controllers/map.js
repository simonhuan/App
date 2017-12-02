// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

Alloy.Collections.consulate.fetch();

var City = args.City || {};

//console.log(city);


function transformFunction(model) { 
    var transform = model.toJSON(); 
    
    transform.title = "🤣" + transform.City;

    transform.longitude = parseFloat(transform.longitude);
    transform.latitude = parseFloat(transform.latitude);

    transform.rightButton = Titanium.UI.iOS.SystemButton.DISCLOSURE
    console.log(transform);
    return transform; 
}


function filterFunction(collection) {
    return collection.where({City:City});
}

