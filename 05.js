/**
 * 5️⃣ **Limitando o número de divisões**

- Declare uma variável `texto` com a string `"O céu é azul e lindo"`.
- Use `.split(" ", 3)` para dividir a string em um array com **no máximo 3 elementos** e exiba o resultado.
 */
// Declare a variável 'texto' com a string desejada
let texto = "O céu é azul e lindo";
// Use o método .split(" ", 3) para dividir a string em um array com no máximo 3 elementos
let arrayTexto = texto.split(" ", 3);
console.log("Array com no máximo 3 elementos:", arrayTexto);