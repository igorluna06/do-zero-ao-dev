import { CaixaEletronico } from "../caixaEletronico.js";
import * as render from "./render.js";

const caixa = new CaixaEletronico();

function atualizarInterfaceConta(){

    const spanSaldo = document.querySelector('.spanSaldo');
    if(caixa.banco.contaAtiva && spanSaldo) render.atualizarSaldo(caixa.banco.contaAtiva.getSaldo());

    if(caixa.banco.contaAtiva) render.atualizarApresentacao(caixa.banco.contaAtiva.getNome());

}



document.addEventListener("DOMContentLoaded", () => {
    atualizarInterfaceConta();
});

function voltarMenu(){

    render.mudarTelaMenu();
}

const botaoVoltarMenu = document.querySelector('.botaoSair');
if(botaoVoltarMenu != null) botaoVoltarMenu.addEventListener("click", voltarMenu);


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

// Menu

function entrarSaque(){

    render.mudarTelaSaque();

}

const botaoSaque = document.getElementById('botaoSaque');
if(botaoSaque != null) botaoSaque.addEventListener("click", entrarSaque);

function entrarDeposito(){

    render.mudarTelaDeposito();

}

const botaoDeposito = document.getElementById('botaoDeposito');
if(botaoDeposito != null) botaoDeposito.addEventListener("click", entrarDeposito);

function entrarExtrato(){

    render.mudarTelaExtrato();

}

const botaoExtrato = document.getElementById('botaoExtrato');
if(botaoExtrato != null) botaoExtrato.addEventListener("click", entrarExtrato);

function sairConta(){

    caixa.logout();
    render.mudarTelaLogin();
}

const botaoSairConta = document.getElementById('botaoLogout');
if(botaoSairConta != null) botaoSairConta.addEventListener("click", sairConta);

// Saque

function sacar(){

    const saldoSacado = document.getElementById('inputSaque').value;

    const saldoSacadoConvertido = saldoSacado.replace(",",".");

    saque = caixa.sacar(saldoSacadoConvertido);

    if(!saque){

        render.erroSaque();
        return;
    }

    render.mudarTelaMenu();
}

const botaoSacar = document.getElementById('confirmarSaque');
if(botaoSacar != null) botaoSacar.addEventListener("click", sacar);

// Deposito

function depositar(){

    const saldoDepositado = document.getElementById('inputDeposito').value;

    const saldoDepositadoConvertido = saldoDepositado.replace(",",".");

    deposito = caixa.depositar(saldoDepositadoConvertido);

    if(!deposito){

        render.erroDeposito();
        return;
    }

    render.mudarTelaMenu();
}

const botaoDepositar = document.getElementById('confirmarDeposito');
if(botaoDepositar != null) botaoDepositar.addEventListener("click", depositar);








