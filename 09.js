/**
 * 9️⃣ **Convertendo uma string em array e acessando um elemento específico**

- Declare uma variável `animais` com a string `"Cachorro,Gato,Elefante,Leão"`.
- Use `.split(",")` e exiba o segundo elemento do array resultante.
 */
// Declare a variável 'animais' com a string desejada
let animais = "Cachorro,Gato,Elefante,Leão";
// Use o método .split(",") para transformar a string em um array
let arrayAnimais = animais.split(",");
// Exiba o segundo elemento do array (índice 1)
console.log("Segundo animal:", arrayAnimais[1]);
