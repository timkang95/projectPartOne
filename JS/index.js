
function chkPhone(event) {
  // Get the target node of the event
  var myPhone = event.currentTarget;
  // check format of number
  var pos = myPhone.value.search(/^\d{3}-\d{3}-\d{4}$/);

  if (pos != 0) {
    alert("The phone number you entered (" + myPhone.value +
          ") is not in the correct form. \n" +
          "The correct form is: ddd-ddd-dddd \n" +
          "Please go back and fix your phone number");
  }
}

function chkEmail(event) {
  // Get the target node of the event
  var email = event.currentTarget;
  // check format of number
  var pos = email.value.search(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  if (pos != 0) {
    alert("Please enter a valid email");
  }
}

function submitted() {
  document.getElementById("success").style.visibility = "visible";
  document.getElementById("scamForm").style.visibility = "hidden";
  return false;
}


