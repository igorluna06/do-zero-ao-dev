### 01 - HelloWorld

Codigo:
```javascript
console.log("Hello World");
```

Executando no node:

```bash
node HelloWorld.js
```

Explicação:

- Pega o nome do arquivo, que é `HelloWorld.js`, e executa o código dentro dele.

### 02-meu-primeiro-projeto

Criando um projeto:

```bash
npm init
```

- O comando `npm init` é usado para criar um novo projeto NodeJS. Ele irá solicitar informações sobre o projeto, como o nome, versão, descrição, ponto de entrada, etc. Depois de preencher essas informações, ele criará um arquivo `package.json` que contém as informações do projeto e as dependências.

<br>

- Porem, para criar um projeto de forma mais rápida, podemos usar o comando `npm init -y`, que irá criar um arquivo `package.json` com as configurações padrão, sem solicitar informações adicionais. Isso é útil quando queremos criar um projeto rapidamente e não precisamos personalizar as configurações do `package.json`.

<br>

- Arquivo `package.json`:
```json
{
  "name": "meu-primeiro-projeto",
  "version": "1.0.0",
  "description": "",
  "license": "ISC",
  "author": "igor luna",
  "type": "commonjs",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

Explicando o `package.json`:

- `name`: O nome do projeto.
- `version`: A versão do projeto.
- `description`: Uma descrição do projeto.
- `license`: A licença do projeto.
- `author`: O autor do projeto.
- `type`: O tipo de módulo usado no projeto (commonjs ou module).
- `main`: O ponto de entrada do projeto, ou seja, o arquivo que será executado quando o projeto for iniciado.
- `scripts`: Um objeto que contém scripts personalizados que podem ser executados usando o comando `npm run <script-name>`. No exemplo, há um script de teste que exibe uma mensagem de erro, mas você pode adicionar scripts personalizados para tarefas como iniciar o servidor, executar testes, etc.
- `keywords`: Um array de palavras-chave relacionadas ao projeto, que pode ajudar a melhorar a visibilidade do projeto em repositórios como o NPM.
- `dependencies`: Um objeto que lista as dependências do projeto, ou seja, as bibliotecas e pacotes que o projeto precisa para funcionar. Cada dependência é listada com seu nome e versão.

Para rodar os scripts definidos no `package.json`, você pode usar o comando `npm run <script-name>`. Por exemplo, se você tiver um script chamado `start`, você pode executá-lo com:

```bash
npm run test
```

- O comando `npm run test` irá executar o script de teste definido no `package.json`, que no exemplo exibe uma mensagem de erro. Você pode personalizar esse script para executar testes automatizados ou outras tarefas relacionadas ao desenvolvimento do projeto.

Criando a pasta `src`:

```bash
mkdir src
```

- A pasta `src` é comumente usada para armazenar o código-fonte do projeto. Ela ajuda a organizar os arquivos do projeto e a separar o código-fonte dos arquivos de configuração, documentação, etc. Dentro da pasta `src`, você pode criar subpastas para organizar melhor o código, como `controllers`, `models`, `routes`, etc., dependendo da estrutura do seu projeto.

Criando o arquivo `index.js` dentro da pasta `src`:

```bash
touch src/index.js
```

Maneira de rodar o projeto:

1. Usando o comando `node`:

```bash
node src/index.js
```

- O comando `node src/index.js` é usado para executar o arquivo `index.js` localizado dentro da pasta `src`. Ele irá iniciar a execução do código contido nesse arquivo, permitindo que você veja os resultados ou interaja com o aplicativo, dependendo do que o código faz.

2. Usando um script definido no `package.json`:

```json
"scripts": {
  "start": "node src/index.js"
}
```

```bash
npm run start
```

- O comando `npm run start` irá executar o script `start` definido no `package.json`, que por sua vez executa o comando `node src/index.js`. Isso é útil para padronizar a forma como o projeto é iniciado, permitindo que outros desenvolvedores ou scripts automatizados iniciem o projeto de maneira consistente usando o comando `npm run start`.

3. Usando o `node --watch` para desenvolvimento:

```bash
node --watch src/index.js
```

- O comando `node --watch src/index.js` é usado para iniciar o arquivo `index.js` em modo de desenvolvimento. Ele monitora as alterações no código-fonte e reinicia automaticamente o aplicativo sempre que uma mudança é detectada. Isso é útil para acelerar o processo de desenvolvimento, pois você não precisa reiniciar manualmente o aplicativo toda vez que fizer uma alteração no código.
