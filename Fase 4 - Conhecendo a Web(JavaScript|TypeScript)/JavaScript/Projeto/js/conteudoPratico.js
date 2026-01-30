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

// Modificando elementos usando o Atributo ID

let tituloPrincipal = document.getElementById("tituloPrincipal");

console.log(tituloPrincipal);

tituloPrincipal.innerHTML = "Vai Corinthians";

// Modificando elementos usando o Atributo Classe

let titulos = document.getElementsByClassName("titulo");

console.log(titulos);

for(i in titulos){

    titulos[i].innerHTML = i + " Salve!";
}

// Modificando com precisão usando Tags

let pTags = document.getElementsByTagName("p");

console.log(pTags);

for(i in pTags){

    pTags[i].innerHTML = i + " Vai corinthians";
}

// Explorando eventos do Mouse

function pressionarMouse(){ //Função executada caso pressionar o mouse

    console.log("Pressionou o mouse!");
}

function passarMouse(){ //Função executada caso passar o mouse sobre o elemento

    console.log("Passou o mouse!");
}

function clicarMouse(){

    console.log("Clicou o mouse!");
}

// Explorando eventos de teclado

function pressionarTeclado(){

    let nome = document.getElementById('nome');
    let contador = nome.value.length;

    console.log("Pressionou a tecla!");

    document.getElementById('indicador').innerHTML = contador + " caracteres";
}

// Explorando eventos de Carregamento de página

function carregarTela(){

    document.getElementById('1').innerHTML = "Bem vindo!";
}

// Interações dinâmicas com addEventListener

let btnAcao = document.getElementById('btnAcao');
btnAcao.addEventListener('click', clicarMouse);

function clicarMouse(){

    document.getElementById('2').innerHTML = "Clicou";
}

// Estruturas condicionais

function comparaNumero(){

    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);

    if(num1.length == 0 || num2.length == 0){

        alert("Preencha os campos corretamente!");
        
    }

    // === Diferencia tambem o tipo de dado

    if(num1 === num2){

        document.getElementById('3').innerHTML = num1 + " é igual a " + num2;
    }
    else if(num1 < num2){

        document.getElementById('3').innerHTML = num2 + " é maior que " + num1;
    }
    else if(num1 > num2){

        document.getElementById('3').innerHTML = num1 + " é maior que " + num2;
    }
    else{

        document.getElementById('3').innerHTML = " Opção invalida! ";
    }

}

// Switch Case

function comparaMes(){

    let num = parseInt(document.getElementById('num').value); // Convertendo a saida do input de string pra inteiro

    let mes = document.getElementById('mes');

    switch(num){

        case 1:
            mes.innerHTML = "Janeiro";
            break;
        case 2:
            mes.innerHTML = "Fevereiro";
            break;
        case 3:
            mes.innerHTML = "Março";
            break;
        case 4:
            mes.innerHTML = "Abril";
            break;
        case 5:
            mes.innerHTML = "Maio";
            break;
        case 6:
            mes.innerHTML = "Junho";
            break;
        case 7:
            mes.innerHTML = "Julho";
            break;
        case 8:
            mes.innerHTML = "Agosto";
            break;
        case 9:
            mes.innerHTML = "Setembro";
            break;
        case 10:
            mes.innerHTML = "Outubro";
            break;
        case 11:
            mes.innerHTML = "Novembro";
            break;
        case 12:
            mes.innerHTML = "Dezembro";
            break;
        default:
            mes.innerHTML = "Mês inválido!";
    }
}





