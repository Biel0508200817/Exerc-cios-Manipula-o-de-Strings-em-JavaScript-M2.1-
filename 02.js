/**
 * 2️⃣ **Obtendo um caractere específico**

- Declare uma variável `palavra` com a string `"Programação"`.
- Use o método `.charAt()` para exibir o primeiro e o último caractere da palavra.
 */
// Declare a variável 'palavra' com a string desejada
let palavra = "Programação";
// Use o método .charAt() para obter o primeiro caractere (índice 0) e o último caractere (índice length - 1)
let primeiroCaractere = palavra.charAt(0);
let ultimoCaractere = palavra.charAt(palavra.length - 1);
console.log("Primeiro caractere:", primeiroCaractere);
console.log("Último caractere:", ultimoCaractere);