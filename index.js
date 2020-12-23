// Import stylesheets
import "./style.css";

/**
  * Verifica se todas as variaveis informadas retornam `null` ou `undefined`.
  * @param variables um spread que aloca as variaveis a serem testadas.
  * @author `Adriano Moda`
*/
const isDivTrue = document.getElementById("exibeSeVerdadeiro");
const isDivFalse = document.getElementById("exibeSeFalso")
const a = null;
const b = undefined;
const c = null;
const d = 'Gandalf'
const e = 'Bilbo'
const f = 'Frodo'
isDivTrue.innerHTML = isNullOrUndefinedWithArray(a, b, c);
isDivFalse.innerHTML = isNullOrUndefinedWithArray(d, e, f);


function isNullOrUndefinedWithArray(...variables) {
  const listObjects = [...variables];
  const isNullOrUndefined = listObjects.every(f => f == undefined || null);
  return isNullOrUndefined
}

