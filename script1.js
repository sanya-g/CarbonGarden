//var lOWLS = localStorage.getItem("lOWLocalStorage");
//var mIDDLELS = localStorage.getItem("mIDDLELocalStorage");
//var hIGHLS = localStorage.getItem("hIGHLocalStorage");

//var number = 123;  
//localStorage.setItem("lOWLS", number);  
//var value = localStorage.getItem("lOWLS"); 
//var middleCarbonFootprint = Number(value);  

//middleCarbonFootprint = Number(lOWLS);
//highCarbonFootprint = Number(hIGHLS);

import(middleCarbonFootprintScore, highCarbonFootprintScore);

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
