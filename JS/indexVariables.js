
//  the event handlers
var firstNameNode = document.getElementById("firstName");
var lastNameNode = document.getElementById("lastName");
var phoneNode = document.getElementById("phoneNumber");
var emailNode = document.getElementById("email");
var creditCardNode = document.getElementById("creditCard");
var moneyNode = document.getElementById("money");

phoneNode.addEventListener("change", chkPhone, false);
emailNode.addEventListener("change", chkEmail, false);
