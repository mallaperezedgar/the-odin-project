
  let array =[0,1];

// forma iterativa
function fibo(){
    
  for(i=2;i<=8;i++){
    

    const nuevoNumero= array[i-1]+ array[i-2];
    array.push(nuevoNumero);


  }

  
console.log(array);



}


fibo();

function fiborecursiva(n){
    console.log("This was printed recursively");
// 🛑 Caso base 1
  if (n === 1) return [0];

  // 🛑 Caso base 2
  if (n === 2) return [0, 1];

  // 🔁 Llamada recursiva
  const arr = fiborecursiva(n - 1);

  // ➕ Crear el siguiente número
  const nuevoNumero = arr[arr.length - 1] + arr[arr.length - 2];

  // 📦 Agregarlo al array
  arr.push(nuevoNumero);

  return arr;


}
fiborecursiva(8);

function oddNumbersLessThanTen() {
  let currentNumber = 1;

  while (currentNumber < 10) {
    if (currentNumber % 2 !== 0) {
      console.log(currentNumber);
    }

    currentNumber += 1;
  }
}

