//Import stylesheets
import "./style.css";

/**
 * Verifica se todas as variaveis informadas retornam `null` ou `undefined`.
 * @param variables um spread que aloca as variaveis a serem testadas.
 * @author `Adriano Moda`
 */

const resultadoDocument = document.getElementById("resultado");
const buttonResult = document.getElementById("btn-resultado");
const titleInput = document.getElementById("titulo-input");
const title = document.getElementById("titulo");

titleInput.innerHTML = 'Valores Formulario'
title.innerHTML = 'Se Todas as variáveis são ou não nulas/undefined'

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
    retornoResposta(
      isNullOrUndefinedWithArray(valor_1_target, valor_2_target, valor_3_target)
    ));
};

var buttonReset = document.getElementById("btn-reset");
buttonReset.onclick = function() {
  for (let i = 1; i < 4; i++) {
    document.getElementById("input-valor-" + i.toString()).value = "";
  }
};

function retornoResposta(resposta) {
  return resposta ? 'Sim' : 'Não'  
}
