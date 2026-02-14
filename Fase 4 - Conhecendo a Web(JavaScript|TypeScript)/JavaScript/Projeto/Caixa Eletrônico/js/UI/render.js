export function erroLogin(){

    let spanErroL = document.getElementById('spanErroLogin');

    spanErroL.innerHTML = "Login invalido";

}

export function erroCadastro(){

    let spanErroC = document.getElementById('spanErroCadastro');

    spanErroC.innerHTML = "Cadastro invalido";
}

export function erroSaque(){

    let spanErroS = document.getElementById('spanErroSaque');

    spanErroS.innerHTML = "Saque invalido";
}

export function erroDeposito(){

    let spanErroD = document.getElementById('spanErroDeposito');

    spanErroD.innerHTML = "Deposito invalido";
}

export function mudarTelaCadastro(){

    window.location.href = "./cadastro.html";
}

export function mudarTelaLogin(){

    window.location.href = "./login.html";
}

export function mudarTelaMenu(){

    window.location.href = "./menu.html";
}

export function mudarTelaSaque(){

    window.location.href = "./saque.html";
}

export function mudarTelaDeposito(){

    window.location.href = "./deposito.html";
}

export function mudarTelaExtrato(){

    window.location.href = "./extrato.html";
}

export function atualizarApresentacao(valorNome){

    let tituloNome = document.querySelector('#menu #tituloSecundario');

    if(!tituloNome) return false;

    tituloNome.innerHTML = "Olá, " + valorNome;

}

export function atualizarSaldo(valorSaldo){

    let spanSaldo = document.querySelector('.spanSaldo');

    const formatador = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    spanSaldo.innerHTML = "Saldo: " + formatador.format(valorSaldo);

}