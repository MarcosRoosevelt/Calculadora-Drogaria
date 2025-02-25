function calcular() {
  const medida = parseFloat(document.getElementById("medida-input").value);
  const peso = parseFloat(document.getElementById("peso-input").value);
  const soro = parseFloat(document.getElementById("soro-input").value);
  const soro_unit = document.getElementById("soro-unit-input").value;
  const ml = parseFloat(document.getElementById("ml-input").value);

  const concentration = soro / ml;
  const concentration__by_flow_rate = concentration * medida;
  const outcome = concentration__by_flow_rate / peso;

  document.getElementById("outcome-div").innerHTML = Math.floor(outcome * 100) / 100  + " " + soro_unit + "/kg/h";
}

function zerarInputs() {
  document.getElementById("medida-input").value = "";
  document.getElementById("peso-input").value = "";
  document.getElementById("soro-input").value = "";
  document.getElementById("ml-input").value = "";
  document.getElementById("soro-unit-input").value = "";
  document.getElementById("outcome-div").innerHTML = "";
}
