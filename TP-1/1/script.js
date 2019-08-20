const REGULAR_EXPRESION = {
    name: new RegExp("^[a-zA-Z]{1,20}$"),
    age:  new RegExp("^[0-9]{0,3}$"),
    email: new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@google.com|^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@iCloud.com|^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@outlook.com$"),
    pass: new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/)
}

function validateInfo(){
    var userInfo = {
        name: document.getElementById("name").value ,
        lastName: document.getElementById("last-name").value,
        email: document.getElementById("e-mail").value ,
        pass:  document.getElementById("password").value,
        age: document.getElementById("age").value
    }
    if(!REGULAR_EXPRESION.email.test(userInfo.email)){
           console.log("mail mal");
           return false;
    }
    if(!REGULAR_EXPRESION.name.test(userInfo.name)){
        console.log("name mal");
        return false;
    }
    if(!REGULAR_EXPRESION.name.test(userInfo.lastName)){
        console.log("lastName mal");
        return false;
    }
    if(!REGULAR_EXPRESION.age.test(userInfo.age)){
        console.log("age mal");
        return false;
    }
    if(!REGULAR_EXPRESION.pass.test(userInfo.pass)){
        console.log(userInfo.pass)
        console.log("pass mal");
        return false;
    }
    return true;
   
}

function isValid(){
    if(validateInfo()){
        console.log("OK")
    }
    else{
        console.log("NOT OK")
    }
}