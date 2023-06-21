let pincode = RegExp('^[0-9]{6}$');
let input = "400048B";

try{
    if (pincode.test(input))
    console.log("Pin Code is Valid");
    else throw "Pin Code is Invalid"
}
catch(e){
    console.log(e);
}
