//Import stylesheets
import "./style.css";

/**
 * Verifica se todas as variaveis informadas retornam `null` ou `undefined`.
 * @param variables um spread que aloca as variaveis a serem testadas.
 * @author `Adriano Moda`
 */

const resultadoDocument = document.getElementById("resultado");
const buttonResult = document.getElementById("btn-resultado");

function isNullOrUndefinedWithArray(...variables) {
  const listObjects = [...variables];
  const isNullOrUndefined = listObjects.every(f => f == undefined || null);
  return isNullOrUndefined;
}

buttonResult.onclick = function() {
  var valor_1_target = document.querySelector("#input-valor-1");
  var valor_2_target = document.querySelector("#input-valor-2");
  var valor_3_target = document.querySelector("#input-valor-3");

  if (valor_1_target.value == "") {
    valor_1_target = null;
  }

  if (valor_2_target.value == "") {
    valor_2_target = null;
  }

  if (valor_3_target.value == "") {
    valor_3_target = null;
  }

  return (resultadoDocument.innerHTML =
    "São todas nulas? " +
    isNullOrUndefinedWithArray(valor_1_target, valor_2_target, valor_3_target));
};

var buttonReset = document.getElementById("btn-reset");
buttonReset.onclick = function() {
  document.getElementById("input-valor-1").value = "";
  document.getElementById("input-valor-2").value = "";
  document.getElementById("input-valor-3").value = "";
};