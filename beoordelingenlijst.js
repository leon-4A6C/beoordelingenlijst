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
    beoordeling = "je hebt iets verkeerd ingevoerd, probeer het opnieuw";
  }
  return beoordeling;
}

var buttons = document.getElementsByTagName("button");
var inputs = document.getElementsByTagName("input");

buttons[0].addEventListener("click", function() {
  var input = inputs[0].value;
  document.getElementById("resultaat").innerHTML += "het cijfer is " + input + " en het is dus " + getBeoordeling(input)+".<br>";
});
buttons[1].addEventListener("click", function() {
  var input = inputs[1].value;
  document.getElementById("resultaat").innerHTML += "De beoordeling is "+getBeoordeling(input)+", want het cijfer is "+input+".<br>"
});
