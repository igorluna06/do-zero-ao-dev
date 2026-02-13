export function erroLogin(){

    let spanErroL = document.getElementById('spanErroLogin');

    spanErroL.innerHTML = "Login invalido";

}

export function erroCadastro(){

    let spanErroC = document.getElementById('spanErroCadastro');

    spanErroC.innerHTML = "Cadastro invalido";
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