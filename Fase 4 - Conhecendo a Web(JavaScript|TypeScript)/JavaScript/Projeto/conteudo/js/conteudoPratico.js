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

frutas.sort(); // Ordena os elementos do array em ordem alfabética

console.log(frutas);

// Verificando se um elemento existe no array

let existe = frutas.includes("Laranja"); // Retorna true se o elemento existir no array, caso contrário, retorna false

console.log(existe);

// Buscando o indice do ultimo elemento do array

let indice = frutas.lastIndexOf("Banana"); // Retorna o indice do ultimo elemento encontrado no array, caso contrário, retorna -1

console.log(indice);

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

/* forEach vai 3 parametros que são

1. Valor atual - valor do elemento atual do array
2. Índice - índice do elemento atual do array
3. Array original - o array original que está sendo iterado

*/

// Usando array.map()

let numerosArray = [1,2,3,4,5];

let numerosDobrados = numerosArray.map(function(numero){

    return numero * 2;
});

/* Map vai 3 parametros que são

1. Valor atual - valor do elemento atual do array
2. Índice - índice do elemento atual do array
3. Array original - o array original que está sendo iterado

*/

console.log(numerosDobrados);

// Usando array.filter()

let numerosPares = numerosArray.filter(function(numero){

    return numero % 2 === 0;
});

console.log(numerosPares);

/* Filter vai 3 parametros que são

1. Valor atual - valor do elemento atual do array
2. Índice - índice do elemento atual do array
3. Array original - o array original que está sendo iterado

*/

// Usando array.reduce()

let somaTotal = numerosArray.reduce(function(acumulador, numero){

    return acumulador + numero;
}, 0); // O segundo parâmetro é o valor inicial do acumulador

console.log(somaTotal);

/* Reduce vai 4 parametros que são 

1. Acumulador - valor acumulado das iterações
2. Valor atual - valor do elemento atual do array
3. Índice - índice do elemento atual do array
4. Array original - o array original que está sendo iterado

*/

// Manipulando strings

let texto = "Olá, mundo!";

console.log(texto.length); // Retorna o tamanho da string

console.log(texto.toUpperCase()); // Converte a string para maiúscula

console.log(texto.toLowerCase()); // Converte a string para minúscula

console.log(texto.includes("mundo")); // Retorna true se a string contém a palavra "mundo", caso contrário, retorna false

console.log(texto.indexOf("mundo")); // Retorna a posição da palavra "mundo" na string, caso contrário, retorna -1

console.log(texto.replace("mundo", "JS")); // Substitui a palavra "mundo" por "JS" na string

console.log(texto.split(", ")); // Divide a string em um array de substrings usando o separador ", "

console.log(texto.trim()); // Remove os espaços em branco do início e do fim da string

console.log(texto.charAt(0)); // Retorna o caractere na posição 0 da string

console.log(texto.substring(0, 5)); // Retorna a substring da posição 0 até a posição 5 (exclusiva) da string

console.log(texto.startsWith("Olá")); // Retorna true se a string começa com "Olá", caso contrário, retorna false

console.log(texto.endsWith("!")); // Retorna true se a string termina com "!", caso contrário, retorna false

// Concatenação de strings

let nome = "Igor";
let sobrenome = "Santos";

let nomeCompleto = nome + " " + sobrenome; // Concatenação usando o operador +

console.log(nomeCompleto);

let nomeCompletoTemplate = `${nome} ${sobrenome}`; // Concatenação usando template literals

console.log(nomeCompletoTemplate);

// Metodo replace()

let frase = "O rato roeu a roupa do rei de Roma";

let novaFrase = frase.replace("rato", "gato"); // Substitui a primeira ocorrência de "rato" por "gato"

console.log(novaFrase);

let novaFraseGlobal = frase.replace(/rato/g, "gato"); // Substitui todas as ocorrências de "rato" por "gato" usando expressão regular com flag global

console.log(novaFraseGlobal);

// Metodo replaceAll()

let novaFraseReplaceAll = frase.replaceAll("rato", "gato"); // Substitui todas as ocorrências de "rato" por "gato" usando o método replaceAll()

console.log(novaFraseReplaceAll);

// Verificando string com StartsWith e EndsWith

let texto2 = "JavaScript é uma linguagem de programação.";

console.log(texto2.startsWith("JavaScript")); // Retorna true se a string começa com "JavaScript", caso contrário, retorna false

console.log(texto2.endsWith(".")); // Retorna true se a string termina com ".", caso contrário, retorna false

// Trabalhando com Template Strings

let nome2 = "Maria";
let idade2 = 30;

let apresentacao = `Olá, meu nome é ${nome2} e tenho ${idade2} anos.`; // Usando template literals para criar uma string com variáveis

console.log(apresentacao);

// Usando PadStart e PadEnd

let numeroString = "5";

let numeroComPadStart = numeroString.padStart(3, "0"); // Adiciona zeros à esquerda até a string ter 3 caracteres

console.log(numeroComPadStart);

let numeroComPadEnd = numeroString.padEnd(3, "0"); // Adiciona zeros à direita até a string ter 3 caracteres

console.log(numeroComPadEnd);

// Repetindo strings com Repeat

let textoRepetido = "Olá! ".repeat(3); // Repete a string "Olá! " 3 vezes

console.log(textoRepetido);

// Introdução a Orientação a Objetos

class Pessoa { // Definindo a classe Pessoa

    constructor(nome, idade){

        this.nome = nome;
        this.idade = idade;
    }

    apresentar(){

        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

let pessoa1 = new Pessoa("João", 25); // Criando um objeto da classe Pessoa com o nome "João" e idade 25

console.log(pessoa1.apresentar()); // Chamando o método apresentar() do objeto pessoa1, que retorna a string de apresentação com o nome e idade da pessoa.

// Acessando metodos e atributos de um objeto

console.log(pessoa1.nome); // Acessando o atributo nome do objeto pessoa1

console.log(pessoa1.idade); // Acessando o atributo idade do objeto pessoa1

pessoa1.idade = 26; // Modificando o atributo idade do objeto pessoa1

console.log(pessoa1.apresentar()); // Verificando a apresentação atualizada do objeto pessoa1 com a nova idade

// Usando getters e setters

class Carro {
    
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }

    get descricao(){
        return `Carro: ${this.marca} ${this.modelo}`;
    }

    set alterarModelo(novoModelo){
        this.modelo = novoModelo;
    }
}

let carro1 = new Carro("Toyota", "Corolla");

console.log(carro1.descricao); // Usando o getter para obter a descrição do carro

carro1.alterarModelo = "Camry"; // Usando o setter para alterar o modelo do carro

console.log(carro1.descricao); // Verificando a descrição atualizada do carro   

// Herança em classes

class Animal {
    
    constructor(nome){
        this.nome = nome;
    }

    fazerSom(){
        return "Som genérico de animal";
    }
}

class Cachorro extends Animal { // A classe Cachorro herda da classe Animal

    constructor(nome, raca){
        super(nome); // Chama o construtor da classe pai (Animal)
        this.raca = raca;
    }

    fazerSom(){ // Sobrescreve o método fazerSom() da classe pai
        return "Latido";
    }
}

let cachorro1 = new Cachorro("Rex", "Labrador");

console.log(cachorro1.nome); // Acessando a propriedade nome herdada da classe Animal

console.log(cachorro1.raca); // Acessando a propriedade raca da classe Cachorro

console.log(cachorro1.fazerSom()); // Chamando o método fazerSom() sobrescrito na classe Cachorro

// Trabalhando com Polimorfismo

class Forma { // Classe base
    
    area(){
        return 0;
    }
}

class Retangulo extends Forma { // Classe derivada
    
    constructor(largura, altura){
        super();
        this.largura = largura;
        this.altura = altura;
    }

    area(){ // Sobrescreve o método area() da classe Forma
        return this.largura * this.altura;
    }
}

class Circulo extends Forma { // Classe derivada
    
    constructor(raio){
        super();
        this.raio = raio;
    }

    area(){ // Sobrescreve o método area() da classe Forma
        return Math.PI * Math.pow(this.raio, 2);
    }
}

let formas = [new Retangulo(5, 10), new Circulo(7)]; // Array de formas (Retangulo e Circulo)

formas.forEach(function(forma){ // Itera sobre cada forma no array

    console.log("Área: " + forma.area()); // Chama o método area() apropriado para cada forma (Retangulo ou Circulo)
});

// Trabalhando com construtor com herança

class PessoaFisica extends Pessoa { // A classe PessoaFisica herda da classe Pessoa

    constructor(nome, idade, cpf){
        super(nome, idade); // Chama o construtor da classe pai (Pessoa)
        this.cpf = cpf;
    }

    apresentar(){ // Sobrescreve o método apresentar() da classe Pessoa
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu CPF é ${this.cpf}.`;
    }
}

let pessoa2 = new PessoaFisica("Ana", 28, "123.456.789-00");

console.log(pessoa2.apresentar()); // Chamando o método apresentar() do objeto pessoa2, que retorna a string de apresentação com o nome, idade e CPF da pessoa. 






