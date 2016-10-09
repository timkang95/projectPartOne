function home() {
  document.getElementById("homeCard").style.visibility = "visible";
  document.getElementById("workExp").style.visibility = "hidden";
  document.getElementById("contactInfo").style.visibility = "hidden";
  return false;
}

function workExp() {
  document.getElementById("homeCard").style.visibility = "hidden";
  document.getElementById("workExp").style.visibility = "visible";
  document.getElementById("contactInfo").style.visibility = "hidden";
  return false;
}

function contact() {
  document.getElementById("homeCard").style.visibility = "hidden";
  document.getElementById("workExp").style.visibility = "hidden";
  document.getElementById("contactInfo").style.visibility = "visible";
  return false;
}

