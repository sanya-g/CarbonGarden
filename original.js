var questionCount=0;
var lowCarbonFootprintScore=0;
var middleCarbonFootprintScore=0;
var highCarbonFootprintScore=0;

var q1a1=document.getElementById("q1a1");
var q1a2=document.getElementById("q1a2");
var q1a3=document.getElementById("q1a3");

var q2a1=document.getElementById("q2a1");
var q2a2=document.getElementById("q2a2");
var q2a3=document.getElementById("q2a3");

var q3a1=document.getElementById("q3a1");
var q3a2=document.getElementById("q3a2");
var q3a3=document.getElementById("q3a3");

var q4a1=document.getElementById("q4a1");
var q4a2=document.getElementById("q4a2");
var q4a3=document.getElementById("q4a3");

var q5a1=document.getElementById("q5a1");
var q5a2=document.getElementById("q5a2");
var q5a3=document.getElementById("q5a3");

var q6a1=document.getElementById("q6a1");
var q6a2=document.getElementById("q6a2");
var q6a3=document.getElementById("q6a3");

var q7a1=document.getElementById("q7a1");
var q7a2=document.getElementById("q7a2");
var q7a3=document.getElementById("q7a3");

console.log(q1a1);

q1a3.addEventListener("click", highCarbonFootprint);
q1a2.addEventListener("click", middleCarbonFootprint);
q1a1.addEventListener("click", lowCarbonFootprint);

q2a1.addEventListener("click", lowCarbonFootprint);
q2a2.addEventListener("click", middleCarbonFootprint);
q2a3.addEventListener("click", highCarbonFootprint);

q3a1.addEventListener("click", lowCarbonFootprint);
q3a2.addEventListener("click", middleCarbonFootprint);
q3a3.addEventListener("click", highCarbonFootprint);

q4a1.addEventListener("click", lowCarbonFootprint);
q4a2.addEventListener("click", middleCarbonFootprint);
q4a3.addEventListener("click", highCarbonFootprint);

q5a1.addEventListener("click", lowCarbonFootprint);
q5a2.addEventListener("click", middleCarbonFootprint);
q5a3.addEventListener("click", highCarbonFootprint);

q6a1.addEventListener("click", lowCarbonFootprint);
q6a2.addEventListener("click", middleCarbonFootprint);
q6a3.addEventListener("click", highCarbonFootprint);

q7a1.addEventListener("click", lowCarbonFootprint);
q7a2.addEventListener("click", middleCarbonFootprint);
q7a3.addEventListener("click", highCarbonFootprint);

function lowCarbonFootprint() {
  console.log("running")
  lowCarbonFootprintScore += 1;
  questionCount += 1;
  if (questionCount >= 7){
    updateResult();
  }
}
function middleCarbonFootprint() {
  middleCarbonFootprintScore += 1;
  questionCount +=1;
  if (questionCount >= 7){
    updateResult();
  }
}
function highCarbonFootprint() {
  highCarbonFootprintScore += 1;
  questionCount +=1;
  if (questionCount >= 7){
    updateResult();
  }
}

function updateResult() {
  if (lowCarbonFootprintScore >= 4) {
    result.innerHTML = "You have a low carbon footprint!";
  } else if (middleCarbonFootprintScore >= 4) {
    result.innerHTML = "You have an average carbon footprint!";
  } else if(highCarbonFootprintScore >= 4) {
    result.innerHTML = "You have a high carbon footprint!";
  } else {
    result.innerHTML = "Your carbon footprint could not be determined. Try again!";
  }
}
