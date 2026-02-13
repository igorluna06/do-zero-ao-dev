import { CaixaEletronico } from "../caixaEletronico.js";
import * as render from "./render.js";

const caixa = new CaixaEletronico();

// Login

function entrarLogin(){

    const cpfOutput = document.getElementById('CPF').value;
    const senhaOutput = document.getElementById('senha').value;

    const verificacaoLogin = caixa.login(cpfOutput, senhaOutput);

    if(verificacaoLogin === false) {render.erroLogin(); return;}


    render.mudarTelaMenu();

}


const botaoEntrar = document.getElementById('entrarLogin');

if(botaoEntrar != null) botaoEntrar.addEventListener("click", entrarLogin);



function entrarCadastro(){

    render.mudarTelaCadastro();
}

const botaoCadastrar = document.getElementById('cadastrar');

if(botaoCadastrar != null) botaoCadastrar.addEventListener("click", entrarCadastro);

// Cadastro 

function criarConta(){

    const nomeOutput = document.getElementById('nome').value;
    const cpfCadastroOutput = document.getElementById('cadastroCPF').value;
    const senhaCadastro = document.getElementById('cadastroSenha').value;

    const verificacaoContaCriada = caixa.banco.criarConta(nomeOutput, cpfCadastroOutput, senhaCadastro);

    if(verificacaoContaCriada === false) {render.erroCadastro(); return;}

    render.mudarTelaLogin();

}

const botaoCriarConta = document.getElementById('criarConta');

if(botaoCriarConta != null) botaoCriarConta.addEventListener("click", criarConta);



