var lOWLS = localStorage.getItem("lOWLocalStorage");
var mIDDLELS = localStorage.getItem("mIDDLELocalStorage");
var hIGHLS = localStorage.getItem("hIGHLocalStorage");

middleCarbonFootprint = Number(lOWLS);
highCarbonFootprint = Number(hIGHLS);

if (middleCarbonFootprint >= 4) {
    document.getElementById("plant4").style.display = "hidden";
    document.getElementById("plant6").style.display = "hidden";
  } else if(highCarbonFootprint >= 4) {
    document.getElementById("plant3").style.display = 'none';
    document.getElementById("plant4").style.display = 'none';
    document.getElementById("plant5").style.display = 'none';
    document.getElementById("plant6").style.display = 'none';
  } else {
  }
