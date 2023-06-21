let pincode = RegExp('^[0-9 ]{3}[ ]?[0-9]{3}$');
let input = "400 048";

try{
    if (pincode.test(input))
    console.log("Pin Code is Valid");
    else throw "Pin Code is Invalid"
}
catch(e){
    console.log(e);
}
