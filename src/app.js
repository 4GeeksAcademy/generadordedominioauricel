const pronombres = ["Ella", "El", "tu"];
const adjetivos = ["alto", "bajo", "simpático"];
const sustantivos = ["Anastasia", "Eugenio", "Emilio"];
const dominios = [".com", ".net", ".es"];

const elementosConcatenados = [];
for (let p = 0; p < pronombres.length; p++) {
  for (let a = 0; a < adjetivos.length; a++) {
    for (let s = 0; s < sustantivos.length; s++) {
      for (let d = 0; d < dominios.length; d++) {
        elementosConcatenados.push(
          pronombres[p] + adjetivos[a] + sustantivos[s] + dominios[d]
        );
      }
    }
  }
}

//write your code here
console.log(elementosConcatenados);
