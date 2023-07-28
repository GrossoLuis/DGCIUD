// 1 - Dada una lista de N números positivos, intercambiar los extremos si el valor de la
// izquierda es mayor al de la derecha. Por ejemplo:
// • Dada la lista 36, 42, 8, 38, 31, 56, 59, 24, 96, 3, 88
// • Se obtiene    36, 3 , 8 ,24, 31, 56, 59, 38, 96, 42, 88
// Dado que
// • 36 es menor que 88, no se intercambia
// • 42 es mayor que 3, se intercambia
// • 8 es menor que 96, no se intercambia

function intercambioDeExtremos(lista) {
    let i = 0;
    let j = lista.length - 1;
  
    while (i < j) {
      if (lista[i] > lista[j]) {
        // Intercambiar los valores de los extremos
        const temp = lista[i];
        lista[i] = lista[j];
        lista[j] = temp;
      }
  
      i++;
      j--;
    }
  
    return lista;
  }
  
  const numeros = [100, 42, 8, 3, 31, 56, 59, 24, 96, 3, 88];
  const resultado = intercambioDeExtremos(numeros);
  console.log(resultado);



//   2 - El factorial de un entero positivo n, el factorial de n o n factorial se define en principio
// como el producto de todos los números enteros positivos desde 1 (es decir, los números
// naturales) hasta n. Por ejemplo:
// 5! = 1 x 2 x 3 x 4 x 5 = 120
// Escribir una función que calcule el Factorial de N.

// a) Forma imperativa:

function factImperativo(n) {
    if (n < 0) {
      return "No es un numero positivo"; 
    }
  
    let resultado = 1;
  
    for (let i = 1; i <= n; i++) {
      resultado *= i;
    }
  
    return resultado;
  }
  
  // Ejemplo de uso:
  console.log(factImperativo(5)); 


//  b) Forma funcional (con recursión):


  function factRecursivo(n) {
    if (n === 0) {
      return 1; // Caso base: el factorial de 0 es 1
    }
  
    if (n < 0) {
      return "No es un numero positivo";  
    }
  
    return n * factRecursivo(n - 1);
  }
  
  // Ejemplo de uso:
  console.log(factRecursivo(-5)); 