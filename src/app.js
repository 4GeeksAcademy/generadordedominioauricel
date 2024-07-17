function generacionDeDominio(pronombres, adjetivos, sustantivos, dominios) {
  const ELEMENTOS_CONCATENADOS = [];
  for (let p = 0; p < pronombres.length; p++) {
    for (let a = 0; a < adjetivos.length; a++) {
      for (let s = 0; s < sustantivos.length; s++) {
        for (let d = 0; d < dominios.length; d++) {
          ELEMENTOS_CONCATENADOS.push(
            pronombres[p] + adjetivos[a] + sustantivos[s] + dominios[d]
          );
        }
      }
    }
  }
  return ELEMENTOS_CONCATENADOS;
}

const PRONOMBRES = ["Ella", "El", "tu"];
const ADJETIVOS = ["alto", "bajo", "simpático"];
const SUSTANTIVOS = ["Anastasia", "Eugenio", "Emilio"];
const DOMINIOS = [".com", ".net", ".es"];

//write your code here
console.log(generacionDeDominio(PRONOMBRES, ADJETIVOS, SUSTANTIVOS, DOMINIOS));
