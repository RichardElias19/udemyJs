/** Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
 
Obs: Considere que todas as palavras só tão separadas por um espaço

contarPalavras("Sou uma frase") // retornará 3
contarPalavras("Me divirto aprendendo a programar") // retornará 5 */


function contarPalavras(frase) {
    if (frase.trim() === "") {
      return 0
    }
  
    return frase.split(" ").length
  }
  
 
  console.log(contarPalavras("Sou uma frase")); // retornará 3
  console.log(contarPalavras("Me divirto aprendendo a programar")); // retornará 5
  