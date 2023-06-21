let pincode = RegExp('^[0-9]{6}$');
let input = "560047";

try{
    if (pincode.test(input))
    console.log("Valid");
    else throw "Invalid"
}
catch(e){
    console.log(e);
}
