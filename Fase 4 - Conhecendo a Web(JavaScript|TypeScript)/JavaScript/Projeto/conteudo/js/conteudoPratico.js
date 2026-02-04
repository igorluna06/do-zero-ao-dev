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


// Conversão de Tipo de dados

let number = 1;

console.log(typeof number);

let float = parseFloat(number);

console.log(typeof float);

// Função abs() da Biblioteca Math

function depositarValor(){

    let valor = document.getElementById('valor').value;

    let numeroConvertido = Math.abs(valor); // retorna um numero com valor absoluto

    console.log(numeroConvertido);
}

// Funções de arredondamento

function arredondarMedia(){

    let media = document.getElementById('nota').value;

    let mediaConvertida = parseFloat(media);

    // Definindo casas decimais

    let arredondamentoCima = Math.ceil(mediaConvertida).toFixed(2);

    let arredondamentoBaixo = Math.floor(mediaConvertida).toFixed(1);

    document.getElementById('mediaCima').innerHTML = arredondamentoCima;

    document.getElementById('mediaBaixo').innerHTML = arredondamentoBaixo;
}

// Potenciação e Raiz quadrada

function calculoPotenciaRaiz(){

    let numero = document.getElementById('numero').value;
    let conversaoNumero = parseInt(numero);

    let potencia = Math.pow(2, conversaoNumero); // (Expoente, Base)

    let raiz = Math.sqrt(conversaoNumero);

    document.getElementById('potencia').innerHTML = "Potencia: " + potencia;

    document.getElementById('raiz').innerHTML = "Raiz: " + raiz;

}

// Calculo trigonometrico

function calculoTrigonometrico(){

    let numero1 = document.getElementById('numero1').value;
    let conversaoNumero = parseInt(numero1);

    let seno = Math.sin(conversaoNumero);
    let cosseno = Math.cos(conversaoNumero);
    let tangente = Math.tan(conversaoNumero);

    document.getElementById('seno').innerHTML = "seno: " + seno;

    document.getElementById('cosseno').innerHTML = "Cosseno: " + cosseno;

    document.getElementById('tangente').innerHTML = "Tangente: " + tangente;

}

// Min e max

let numeros = [1,2,3,4,6];

let minimo = min(numeros);
let maximo = max(numeros);

console.log(minimo);
console.log(maximo);

// ou 

let numeros1 = Math.min(1,2,3,5,1,2,5);
let numeros2 = Math.max(1,2,3,5,1,2,5);

console.log(numeros1);
console.log(numeros2);


// Declarando funções

function soma(n1,n2){

    return n1 + n2;
}

console.log(soma(1,1));

let multiplicacao = (num1,num2) => num1 * num2;

console.log(multiplicacao(2,2));

let subtrair = (n1,n2) => {

    let subtracao = n1 - n2;
    return subtracao;
}

console.log(subtrair(2,1));

// Manipulando Arrays

let frutas = ["Maçã", "Banana", "Laranja"];

frutas.push("Uva"); // Adiciona um elemento no final do array

console.log(frutas);

frutas.pop(); // Remove o ultimo elemento do array

console.log(frutas);

frutas.shift(); // Remove o primeiro elemento do array

console.log(frutas);

frutas.unshift("Morango"); // Adiciona um elemento no inicio do array

console.log(frutas);

let posicao = frutas.indexOf("Banana"); // Retorna a posição do elemento no array

console.log(posicao);

frutas.splice(1,1); // Remove o elemento da posição especificada (1º parâmetro) e a quantidade de elementos a serem removidos (2º parâmetro)

console.log(frutas);

// Iterando arrays

for(let i = 0; i < frutas.length; i++){
    
    console.log(frutas[i]);
}

for(let fruta of frutas){
    
    console.log(fruta);

}

frutas.forEach(function(fruta, index){

    console.log(index + " - " + fruta);
});





