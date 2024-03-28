/** A fim de criar um mecanismo de busca para sua aplicação, você precisar iniciar craindo uma função para identificar palavras semelhantes. 
 
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de strings. a função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.

buscarPalavrasSemelhantes("pro", ["programaçãop", "mobile", "profissional"]) // retornará ["programaçãop","profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []
*/



function buscarPalavrasSemelhantes(string, arrayDeStrings) {
    return arrayDeStrings.filter(palavra => palavra.includes(string))

}

buscarPalavrasSemelhantes("pro", ["programaçãop", "mobile", "profissional"]) // retornará ["programaçãop","profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []

