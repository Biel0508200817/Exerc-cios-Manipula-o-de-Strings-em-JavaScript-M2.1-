/**
 * 3️⃣ **Extraindo parte de uma string**

- Declare uma variável `mensagem` com a string `"Aprendendo JavaScript"`.
- Use o método `.slice()` para extrair e exibir a palavra `"JavaScript"`.
 */
// Declare a variável 'mensagem' com a string desejada
let mensagem = "Aprendendo JavaScript";
// Use o método .slice() para extrair a palavra "JavaScript"
// A palavra "JavaScript" começa no índice 12 e termina no índice 22 (exclusivo)
let palavraExtraida = mensagem.slice(11, 22);
console.log("Palavra extraída:", palavraExtraida);