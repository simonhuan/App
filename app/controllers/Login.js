// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function loginFunction(e) {
    
    var xhr = Ti.Network.createHTTPClient();
    xhr.onload = function(e) {
        
        if (this.responseText == "login successfully") {
            // $.win.close();
            alert("login successfully");
        } else {
            alert("try again");
        }

    };
    xhr.open('POST','https://funfares-web.herokuapp.com/user/login');
    xhr.send({
        "username": $.textField.value,
        "password": $.textField2.value
    });

}

