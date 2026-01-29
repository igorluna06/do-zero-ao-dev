//Comando de saída de dados (simples)

console.log("Curso JS"); // Saída no console

alert("Curso JS"); // Saída na notificação de alerta do navegador

// Váriaveis (tipagem dinamica)

/* Estrutura de escopo 

var - global, podendo ser acessada de qualquer lugar
let - local, podendo ser acessada apenas dentro do escopo onde foi criada
const - local e imutável, ou seja, não pode ser alterada após a sua criação

*/

var nome = "Igor";

if(nome == "Igor"){ // Acessando a variável dentro do escopo var(global)

    console.log(nome);
}

console.log(nome);

if(true){ // Acessando a variável dentro do escopo let(local)
    
    let idade = 21;
    console.log(idade);
}

// Caso o acesso do console.log a variavel 'idade' fosse fora do escopo do if(local), haveria um erro, pois o let é de acesso apenas local.

const cidade = "São Paulo";

console.log(cidade);

// Identificação de Tipos de variáveis

let numero = 20;
var string = "A";
const v = true;

console.log(typeof numero); // Output - Number
console.log(typeof string); // Output - String
console.log(typeof v); // Output - boolean




