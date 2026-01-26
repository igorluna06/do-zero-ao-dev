<?php

    $email = 'teste@gmail.com';
    $senha = '@#1234';

    $emailCorreto = 'teste@gmail.com'; 
    $senhaCorreta = '@#1234';

    if($email == $emailCorreto && $senha == $senhaCorreta){

        echo "Login validado";
    }else{

        echo "Login invalidado";
    }

?>