
  if (middleCarbonFootprintScore >= 4) {
    document.getElementById("plant4").style.display = "hidden";
    document.getElementById("plant6").style.display = "hidden";
  } else if(highCarbonFootprintScore >= 4) {
    document.getElementById("plant3").style.display = 'none';
    document.getElementById("plant4").style.display = 'none';
    document.getElementById("plant5").style.display = 'none';
    document.getElementById("plant6").style.display = 'none';
  } else {
  }