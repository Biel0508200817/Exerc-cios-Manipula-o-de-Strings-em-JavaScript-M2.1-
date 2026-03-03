/**
 * 🔟 **Contando quantas palavras há em uma frase**

- Declare uma variável `texto` com a string `"Eu amo desenvolver aplicações web"`.
- Use `.split(" ")` para transformar a string em um array de palavras e exiba o tamanho desse array com `.length`.
 */
// Declare a variável 'texto' com a string desejada
let texto = "Eu amo desenvolver aplicações web";
// Use o método .split(" ") para transformar a string em um array de palavras
let palavras = texto.split(" ");
// Exiba o número de palavras usando .length
console.log("Número de palavras:", palavras.length);