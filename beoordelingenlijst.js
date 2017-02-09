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
buttons[0].addeventlistner("click", function() {
  var input = document.getElementById("input").value;
  document.getElementById("resultaat").innerHTML += "het cijfer is " + input + " en het is dus " + getBeoordeling(input);
});
