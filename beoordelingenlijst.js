/*
  top: je hebt het gewoon goed gedaan. het is kort
  tip: hou het vol.
*/
function getBeoordeling(cijfer) {
  var beoordeling;
  if (cijfer >= 0 && cijfer < 50) {
    beoordeling = "onvoldoende";
  } else if (cijfer > 49 && cijfer < 60) {
    beoordeling = "matig";
  } else if (cijfer > 59 && cijfer < 75) {
    beoordeling = "voldoende";
  } else if (cijfer > 75 && cijfer <= 100) {
    beoordeling = "goed";
  } else {
    beoordeling = null;
  }
  return beoordeling;
}

var buttons = document.getElementsByTagName("button");
var inputs = document.getElementsByTagName("input");

buttons[0].addEventListener("click", function() {
  var input = inputs[0].value;
  var beoordeling = getBeoordeling(input);
  if (beoordeling) {
    document.getElementById("resultaat").innerHTML += "het cijfer is " + input + " en het is dus " + beoordeling +".<br>";
  } else {
    document.getElementById("resultaat").innerHTML += "het cijfer klopt niet, het is onder de 0 of boven de 100<br>";
  }
});
buttons[1].addEventListener("click", function() {
  var input = inputs[1].value;
  var beoordeling = getBeoordeling(input);
  if (beoordeling) {
    document.getElementById("resultaat").innerHTML += "De beoordeling is "+ beoordeling +", want het cijfer is "+input+".<br>";
  } else {
    document.getElementById("resultaat").innerHTML += "het cijfer klopt niet, het is onder de 0 of boven de 100<br>";
  }
});
