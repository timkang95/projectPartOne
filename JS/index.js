function home() {
  document.getElementById("homeCard").style.visibility = "visible";
  document.getElementById("workExp").style.visibility = "hidden";
  document.getElementById("contactInfo").style.visibility = "hidden";
  document.getElementById("pageFooter").style.marginTop = "1900px";
  return false;
}

function workExp() {
  document.getElementById("homeCard").style.visibility = "hidden";
  document.getElementById("workExp").style.visibility = "visible";
  document.getElementById("contactInfo").style.visibility = "hidden";
  document.getElementById("pageFooter").style.marginTop = "500px";
  return false;
}

function contact() {
  document.getElementById("homeCard").style.visibility = "hidden";
  document.getElementById("workExp").style.visibility = "hidden";
  document.getElementById("contactInfo").style.visibility = "visible";
  document.getElementById("pageFooter").style.marginTop = "-710px";
  return false;
}

