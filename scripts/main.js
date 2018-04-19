$(document).ready(function(){
$(".error").hide();
$(".input-group").filter(":even").addClass("even");
//first Name Error
$("#firstName").on('blur',function()
{
if($("#firstName").val()===""){
//$(".errorFirstName").fadeIn();
$("#firstName").closest(".input-group").find('.requiredMsg').fadeIn();
}

else{
//$(".errorFirstName").fadeOut();
$("#firstName").closest(".input-group").find('.requiredMsg').fadeOut();
}
}

);

//Last Name Error
$("#lastName").on('blur',function()
{
if($("#lastName").val()===""){
//$(".errorLasttName").fadeIn();
$("#lastName").closest(".input-group").find('.requiredMsg').fadeIn();
}

else{
//$(".errorLasttName").fadeOut();
$("#lastName").closest(".input-group").find('.requiredMsg').fadeOut();
}
}

);

//No Email  Error
$("#emailAddress").on('blur',function()
{
if($("#emailAddress").val()===""){
//$(".errorNoEmail").fadeIn();
$("#emailAddress").closest(".input-group").find('.requiredMsg').fadeIn();

}

else{
//$(".errorNoEmail").fadeOut();
$("#emailAddress").closest(".input-group").find('.requiredMsg').fadeOut();
}
}

);


//No Valid Email Error
$("#emailAddress").on('blur',function()
{
var emailValid= $("#emailAddress").val();

if(emailValid.indexOf("@") < 0 || emailValid.indexOf(".com") < 0){
//$(".errorEmailNotValid").fadeIn();
$("#emailAddress").closest(".input-group").find('.emailMsg').fadeIn();

}

else{
//$(".errorEmailNotValid").fadeOut();
$("#emailAddress").closest(".input-group").find('.emailMsg').fadeOut();
}
}

);











});