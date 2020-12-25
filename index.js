// Import stylesheets
import "./style.css";

/**
  * Verifica se todas as variaveis informadas retornam `null` ou `undefined`.
  * @param variables um spread que aloca as variaveis a serem testadas.
  * @author `Adriano Moda`
*/
const isDivTrue = document.getElementById("exibeSeVerdadeiro");
const isDivFalse = document.getElementById("exibeSeFalso");
const valueABC = document.getElementById("valueABC");
const valueDEF = document.getElementById("valueDEF");
const a = null;
const b = undefined;
const c = null;
var arrayABC = [a,b,c];
var txtABC = "";
const d = 'Gandalf';
const e = 'Bilbo';
const f = 'Frodo';
var arrayDEF = [d,e,f];
var txtDEF = "";
isDivTrue.innerHTML = isNullOrUndefinedWithArray(a, b, c);
isDivFalse.innerHTML = isNullOrUndefinedWithArray(d, e, f);

arrayABC.forEach(displayArrayValuesABC)
document.getElementById("valor-abc").innerHTML = txtABC

arrayDEF.forEach(displayArrayValuesDEF)
document.getElementById("valor-def").innerHTML = txtDEF

function isNullOrUndefinedWithArray(...variables) {
  const listObjects = [...variables];
  const isNullOrUndefined = listObjects.every(f => f == undefined || null);
  return isNullOrUndefined
}

function displayArrayValuesABC(value){
  txtABC = txtABC + value + ", ";
}

function displayArrayValuesDEF(value){
  txtDEF = txtDEF + value + ", ";
}