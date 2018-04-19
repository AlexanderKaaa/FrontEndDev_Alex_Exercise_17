$(document).ready(function(){
$(".error").hide();
$(".input-group").filter(":even").addClass("even");
//first Name Error
$("#firstName").on('blur',function()
{
if($("#firstName").val()===""){
$(".errorFirstName").fadeIn();

}

else{
$(".errorFirstName").fadeOut();
}
}

);

//Last Name Error
$("#lastName").on('blur',function()
{
if($("#lastName").val()===""){
$(".errorLasttName").fadeIn();

}

else{
$(".errorLasttName").fadeOut();
}
}

);

//No Email  Error
$("#emailAddress").on('blur',function()
{
if($("#emailAddress").val()===""){
$(".errorNoEmail").fadeIn();

}

else{
$(".errorNoEmail").fadeOut();
}
}

);


//No Valid Email Error
$("#emailAddress").on('blur',function()
{
var emailValid= $("#emailAddress").val();

if(emailValid.indexOf("@") < 0 || emailValid.indexOf(".com") < 0){
$(".errorEmailNotValid").fadeIn();

}

else{
$(".errorEmailNotValid").fadeOut();
}
}

);











});