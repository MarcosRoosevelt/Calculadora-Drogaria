function calcular() {
  const medida = parseFloat(document.getElementById("medida-input").value);
  const peso = parseFloat(document.getElementById("peso-input").value);
  const soro = parseFloat(document.getElementById("soro-input").value);
  const ml = parseFloat(document.getElementById("ml-input").value);

  const concentration = soro / ml;
  const concentration__by_flow_rate = concentration * medida;
  const outcome = concentration__by_flow_rate / peso;
  
  document.getElementById("outcome-div").innerHTML = outcome + " mcg/kg/min";
}

function zerarInputs() {
  document.getElementById("medida-input").value = "";
  document.getElementById("peso-input").value = "";
  document.getElementById("soro-input").value = "";
  document.getElementById("ml-input").value = "";
  document.getElementById("outcome-div").innerHTML = "";
}
