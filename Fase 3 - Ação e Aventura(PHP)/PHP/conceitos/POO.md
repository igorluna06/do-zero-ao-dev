### POO (Programação Orientada a Objetos)

- A Programação Orientada a Objetos (POO) é um paradigma de programação que utiliza "objetos" para representar dados e funcionalidades. Em PHP, a POO permite organizar o código de maneira mais modular e reutilizável.

#### Conceitos Básicos da POO

1. **Classe**: Uma classe é um molde ou uma estrutura que define as propriedades (atributos) e comportamentos (métodos) de um objeto. É como um plano para criar objetos.

   ```php
   class Carro {
       public $cor;
       public $modelo;

       public function acelerar() {
           echo "O carro está acelerando!";
       }
   }
   ```

2. **Objeto**: Um objeto é uma instância de uma classe. Ele contém valores específicos para as propriedades definidas na classe.

   ```php
   $meuCarro = new Carro();
   $meuCarro->cor = "vermelho";
   $meuCarro->modelo = "Fusca";
   $meuCarro->acelerar(); // Saída: O carro está acelerando!
   ```

3. **Propriedades**: São as variáveis que pertencem a uma classe. Elas armazenam os dados do objeto.

    ```php
    class Pessoa {
         public $nome;
         public $idade;
    }
    ```

4. **Métodos**: São as funções que pertencem a uma classe. Eles definem os comportamentos do objeto.

    ```php
    class Pessoa {
        public $nome;
        public $idade;
        public function apresentar() {
            echo "Olá, meu nome é " . $this->nome . " e eu tenho " . $this->idade . " anos.";
        }
    }
    ```

5. **Herança**: A herança permite que uma classe (classe filha) herde propriedades e métodos de outra classe (classe pai). Isso promove a reutilização de código.

    ```php
    class Animal {
        public function fazerSom() {
            echo "Som genérico de animal";
        }
    }

    class Cachorro extends Animal {
        public function fazerSom() {
            echo "Latido";
        }
    }
    ```

6. **Encapsulamento**: O encapsulamento é o conceito de restringir o acesso direto a algumas propriedades e métodos de um objeto. Isso é feito usando modificadores de acesso como `public`, `protected` e `private`.

    ```php
    class ContaBancaria {
        private $saldo = 0;
        public function depositar($valor) {
            $this->saldo += $valor;
        }
        public function getSaldo() {
            return $this->saldo;
        }
    }
    ```

7. **Polimorfismo**: O polimorfismo permite que métodos com o mesmo nome se comportem de maneira diferente em classes diferentes. Isso é frequentemente usado em conjunto com a herança.

    ```php
    class Gato extends Animal {
        public function fazerSom() {
            echo "Miau";
        }
    }
    ```

#### Modificadores de Acesso

- **Public**: A propriedade ou método pode ser acessado de qualquer lugar.
- **Protected**: A propriedade ou método pode ser acessado apenas dentro da classe e por classes derivadas.
- **Private**: A propriedade ou método só pode ser acessado dentro da própria classe.


#### Vantagens da POO

- **Modularidade**: O código é organizado em classes e objetos, facilitando a manutenção e a compreensão.
- **Reutilização**: Classes podem ser reutilizadas em diferentes partes do programa ou em outros projetos
- **Facilidade de Manutenção**: Alterações em uma classe podem ser feitas sem afetar outras partes do código.
- **Abstração**: Permite focar nos aspectos essenciais de um objeto, ignorando detalhes desnecessários.

A POO é amplamente utilizada em PHP, especialmente em frameworks modernos como Laravel e Symfony, que aproveitam os conceitos de POO para criar aplicações robustas e escaláveis.

#### Exemplo

Classe Principal: 

![classe principal](imagensConteudo/cadastroPessoa.png)

Seus atributos :

- Nome, Idade, email, cpf, login, senha, apiKey.

Seus métodos:

- getNome, getIdade, getEmail.

----

Classe que herda da classe principal:

![classe que herda](imagensConteudo/Programador.png)

Seus atributos:

- linguagem, nivel, tempo de atuação, link do Github.

Seus métodos:

- getLinguagem, getNivel, getTempoAtuacao, getLinkGithub.

---

Criando um objeto e atribuindo valores ao objeto:

![objeto](imagensConteudo/atribuindoValores.png)

---

Exibindo o estado do objeto Programador com o método print_r:

![exibindo estado do objeto](imagensConteudo/outputExemplo.png)


Explicação do exemplo:

- No exemplo acima, temos uma classe principal chamada `Pessoa` com atributos como nome, idade, email, cpf, login, senha e apiKey, além de métodos para obter o nome, idade e email.

- A classe `Programador` herda da classe `Pessoa` e adiciona seus próprios atributos, como linguagem, nível, tempo de atuação e link do GitHub, juntamente com métodos para obter esses valores.

- Criamos um objeto da classe `Programador` e atribuímos valores a seus atributos. Finalmente, usamos o método `print_r` para exibir o estado do objeto, mostrando todos os atributos e seus valores.





