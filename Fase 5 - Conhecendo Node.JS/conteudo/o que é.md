# NodeJS o que é?

- NodeJS é um ambiente de execução de JavaScript do lado do servidor. Ele permite que os desenvolvedores criem aplicativos de rede escaláveis e de alto desempenho usando JavaScript. NodeJS é construído sobre o mecanismo V8 do Google Chrome, o que o torna rápido e eficiente para lidar com operações de E/S. Ele é amplamente utilizado para criar servidores web, APIs, aplicativos em tempo real e muito mais. NodeJS é conhecido por sua arquitetura orientada a eventos, que permite que ele lide com muitas conexões simultâneas sem bloquear o processo principal.

#### Características

- **Assíncrono e Orientado a Eventos**: NodeJS é projetado para ser assíncrono, o que significa que ele pode lidar com várias operações ao mesmo tempo sem bloquear o processo principal. Ele usa um modelo de eventos para gerenciar as operações de E/S, permitindo que os desenvolvedores escrevam código eficiente e responsivo.

- **V8 Engine**: NodeJS é construído sobre o mecanismo V8 do Google Chrome, que é conhecido por sua velocidade e eficiência. Isso permite que os aplicativos NodeJS sejam rápidos e responsivos.

- **NPM (Node Package Manager)**: NodeJS vem com um gerenciador de pacotes chamado NPM, que facilita a instalação e gerenciamento de bibliotecas e dependências. Com NPM, os desenvolvedores podem facilmente compartilhar e reutilizar código, o que acelera o desenvolvimento de aplicativos.

- **Escalabilidade**: NodeJS é projetado para ser escalável, o que significa que ele pode lidar com um grande número de conexões simultâneas. Ele é ideal para aplicativos em tempo real, como chats e jogos online, onde a latência é crítica.

- **Comunidade Ativa**: NodeJS tem uma comunidade ativa de desenvolvedores que contribuem com bibliotecas, ferramentas e recursos. Isso significa que os desenvolvedores têm acesso a uma ampla gama de recursos e suporte para ajudá-los a criar aplicativos de alta qualidade.

#### No contexto de IA

- NodeJS é frequentemente usado em conjunto com bibliotecas e frameworks de inteligência artificial (IA) para criar aplicativos que utilizam aprendizado de máquina, processamento de linguagem natural e outras técnicas de IA. Por exemplo, os desenvolvedores podem usar bibliotecas como TensorFlow.js para criar modelos de aprendizado de máquina que podem ser executados diretamente no navegador ou no servidor usando NodeJS. Além disso, NodeJS pode ser usado para criar APIs que fornecem acesso a serviços de IA, permitindo que os desenvolvedores integrem facilmente recursos de IA em seus aplicativos.

#### RoadMap 

Fundamentos de NodeJS:
- Entender o que é NodeJS e suas características.
- Aprender sobre o ambiente de execução do NodeJS e como ele funciona.
- Explorar o modelo de eventos e a arquitetura orientada a eventos do NodeJS.
- Familiarizar-se com o V8 Engine e como ele contribui para a performance do NodeJS.
- Conhecer o NPM e como gerenciar pacotes e dependências em projetos NodeJS
- Compreender a escalabilidade do NodeJS e como ele lida com conexões simultâneas.
- Explorar a comunidade ativa de NodeJS e os recursos disponíveis para desenvolvedores.

Node Modules:
- Aprender sobre os módulos nativos do NodeJS e como usá-los.
- Entender como criar e exportar módulos personalizados em NodeJS.
- Explorar o sistema de módulos do NodeJS e como ele gerencia dependências.
- Conhecer as melhores práticas para organizar e estruturar projetos NodeJS usando módulos.
- Aprender a usar o NPM para instalar e gerenciar pacotes de terceiros em projetos NodeJS.
- Explorar as bibliotecas e frameworks populares disponíveis para NodeJS e como integrá-los em projetos.

NPM (Node Package Manager):
- Entender o que é o NPM e como ele funciona.
- Aprender a usar o NPM para instalar, atualizar e remover pacotes em projetos NodeJS.
- Compreender o conceito de dependências e como gerenciá-las usando o NPM.
- Explorar as melhores práticas para criar e publicar pacotes no NPM.
- Conhecer as ferramentas e recursos disponíveis para desenvolvedores que usam o NPM, como o NPM Registry e o NPM CLI.
- Aprender a usar o NPM para criar scripts personalizados e automatizar tarefas em projetos NodeJS.
- Explorar as bibliotecas e frameworks populares disponíveis no NPM e como integrá-los em projetos NodeJS.
- Compreender as práticas recomendadas para gerenciar dependências e evitar conflitos em projetos NodeJS usando o NPM.

Qualidade de Código:
- Aprender sobre as melhores práticas para escrever código limpo e legível em NodeJS.
- Compreender os princípios de design de software e como aplicá-los em projetos NodeJS.
- Explorar as ferramentas de linting e formatação de código disponíveis para NodeJS, como ESLint e Prettier.
- Conhecer as práticas recomendadas para organizar e estruturar projetos NodeJS, como a separação de responsabilidades e o uso de padrões de design.
- Aprender a escrever testes automatizados para garantir a qualidade do código em projetos NodeJS, usando frameworks como Mocha e Chai.
- Explorar as melhores práticas para lidar com erros e exceções em projetos NodeJS, como o uso de try/catch e a criação de middleware de tratamento de erros.

Aplicações Web:
- Aprender a criar servidores web usando o módulo HTTP do NodeJS.
- Compreender o conceito de middleware e como usá-lo para criar aplicativos web em NodeJS.
- Explorar os frameworks web populares para NodeJS, como Express.js e Koa.js, e como usá-los para criar aplicativos web robustos.
- Conhecer as melhores práticas para lidar com rotas, autenticação e autorização em aplicativos web NodeJS.
- Aprender a usar bancos de dados em aplicativos web NodeJS, como MongoDB e MySQL, e como integrá-los usando bibliotecas como Mongoose e Sequelize.
- Explorar as melhores práticas para otimizar o desempenho e a segurança de aplicativos web NodeJS, como o uso de cache, compressão e proteção contra ataques comuns como XSS e CSRF.

APIs:
- Aprender a criar APIs RESTful usando NodeJS e frameworks como Express.js.
- Compreender os princípios de design de APIs e como aplicá-los em projetos NodeJS.
- Explorar as melhores práticas para lidar com autenticação e autorização em APIs NodeJS, como o uso de tokens JWT e OAuth.
- Conhecer as melhores práticas para documentar APIs NodeJS, como o uso de ferramentas como Swagger e API Blueprint.
- Aprender a usar bancos de dados em APIs NodeJS, como MongoDB e MySQL, e como integrá-los usando bibliotecas como Mongoose e Sequelize.
- Explorar as melhores práticas para otimizar o desempenho e a segurança de APIs NodeJS, como o uso de cache, compressão e proteção contra ataques comuns como DDoS e injeção de SQL.

#### Modularização de Projetos NodeJS com CommonJS

O que é modularização?

- Modularização é o processo de dividir um programa em partes menores e mais gerenciáveis, chamadas módulos. Cada módulo é responsável por uma funcionalidade específica do programa, o que torna o código mais organizado, reutilizável e fácil de manter. A modularização permite que os desenvolvedores trabalhem em partes específicas do código sem afetar o restante do programa, facilitando a colaboração e a manutenção do código a longo prazo.

Exemplos de modularização:

- Em um projeto NodeJS, um módulo pode ser criado para lidar com a autenticação de usuários, outro módulo para gerenciar a conexão com o banco de dados e outro módulo para lidar com as rotas da aplicação. Cada módulo pode ser desenvolvido e testado de forma independente, o que torna o processo de desenvolvimento mais eficiente e organizado.

- O que é CommonJS?

- CommonJS é um padrão de módulo para JavaScript que é amplamente utilizado em ambientes de execução como NodeJS. Ele define uma maneira de organizar e modularizar o código JavaScript, permitindo que os desenvolvedores criem módulos reutilizáveis e compartilhem código entre diferentes arquivos.

- Como funciona o CommonJS?

- No CommonJS, cada arquivo JavaScript é tratado como um módulo separado. Para exportar funcionalidades de um módulo, os desenvolvedores usam a palavra-chave `module.exports`. Para importar funcionalidades de outro módulo, eles usam a função `require()`. Isso permite que os desenvolvedores criem uma estrutura modular para seus projetos, facilitando a manutenção e a reutilização do código.

- Vantagens do CommonJS:

- Modularização: O CommonJS permite que os desenvolvedores organizem seu código em módulos separados, o que torna o código mais fácil de entender e manter.

Exemplo de modularização usando CommonJS:

```javascript
const auth = require('./auth');

auth.login('username', 'password');
```

CommonJS x ES Modules:

- CommonJS é um padrão de módulo mais antigo e amplamente utilizado em ambientes de execução como NodeJS, enquanto os ES Modules são um padrão mais recente que é nativo do JavaScript e é suportado em navegadores modernos. O CommonJS usa `module.exports` e `require()`, enquanto os ES Modules usam `export` e `import`. Os ES Modules também suportam recursos como importação dinâmica e exportação nomeada, o que os torna mais flexíveis em comparação com o CommonJS. No entanto, o CommonJS ainda é amplamente utilizado em muitos projetos NodeJS devido à sua simplicidade e compatibilidade com versões anteriores.

Exemplo de ES Modules:

```javascript
import { login } from './auth.js';

export const auth = {
  login: login
};
```

EcmaScript Modules (ES Modules) são um padrão de módulo nativo do JavaScript que foi introduzido na especificação ECMAScript 2015 (ES6). Eles permitem que os desenvolvedores organizem seu código em módulos separados, usando as palavras-chave `export` e `import`. Os ES Modules são suportados em navegadores modernos e também podem ser usados em ambientes de execução como NodeJS a partir da versão 12. Eles oferecem recursos avançados, como importação dinâmica e exportação nomeada, tornando-os uma escolha popular para projetos JavaScript modernos.

Habilitando o ES Modules no NodeJS:

- Para habilitar o suporte a ES Modules no NodeJS, você pode usar a extensão `.mjs` para seus arquivos de módulo ou adicionar a propriedade `"type": "module"` no arquivo `package.json` do seu projeto. Isso permitirá que você use a sintaxe de importação e exportação dos ES Modules em seus arquivos JavaScript.

Exemplo de habilitação de ES Modules usando `package.json`:

```json
{
  "name": "meu-projeto",
  "version": "1.0.0",
  "type": "module", // Habilita o suporte a ES Modules
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    // suas dependências aqui
  }
}
```

O que são arquivos mjs?

- Arquivos com a extensão `.mjs` são arquivos de módulo ES Modules (ECMAScript Modules) em JavaScript. Eles são usados para indicar que o arquivo é um módulo que utiliza a sintaxe de importação e exportação dos ES Modules. Ao usar a extensão `.mjs`, o NodeJS reconhece automaticamente que o arquivo é um módulo ES Modules, permitindo que você use a sintaxe de importação e exportação sem precisar configurar o `package.json`. Essa é uma maneira simples de habilitar o suporte a ES Modules em projetos NodeJS.

Por isso quando importamos precisamos colocar a extensão do arquivo, para o NodeJS entender que é um módulo ES Modules:

```javascript
import { login } from './auth.mjs'; // Importando um módulo ES Modules usando a extensão .mjs
``` 

ou 

```javascript
import { login } from './auth.js'; // Importando um módulo ES Modules usando a extensão .js, com "type": "module" no package.json
``` 

Porem a muitos projetos que os arquivos estão coom sua extensão .cjs, isso acontece porque o projeto está usando o CommonJS, e nesse caso a extensão .cjs é usada para indicar que o arquivo é um módulo CommonJS. O NodeJS reconhece automaticamente que os arquivos com a extensão .cjs são módulos CommonJS, permitindo que você use a sintaxe de `module.exports` e `require()` sem precisar configurar o `package.json`. Essa é uma maneira simples de habilitar o suporte a CommonJS em projetos NodeJS.

```javascript
const auth = require('./auth.cjs'); // Importando um módulo CommonJS usando a extensão .cjs
```

### o que é um pacote?

- Um pacote é uma coleção de arquivos e recursos que são agrupados juntos para fornecer funcionalidades específicas. Em NodeJS, um pacote é geralmente um módulo ou uma biblioteca que pode ser instalado e usado em projetos. Os pacotes são gerenciados usando o NPM (Node Package Manager), que permite aos desenvolvedores instalar, atualizar e remover pacotes facilmente. Os pacotes podem conter código JavaScript, arquivos de configuração, documentação e outros recursos necessários para a funcionalidade do pacote. Eles são uma parte fundamental do ecossistema NodeJS, permitindo que os desenvolvedores compartilhem e reutilizem código de forma eficiente.

### o que é uma dependência?

- Uma dependência é um pacote ou módulo que um projeto precisa para funcionar corretamente. Em NodeJS, as dependências são gerenciadas usando o NPM (Node Package Manager), que permite aos desenvolvedores instalar e gerenciar as dependências de seus projetos. As dependências podem ser bibliotecas de terceiros, módulos personalizados ou até mesmo outros pacotes que o projeto utiliza. Elas são listadas no arquivo `package.json` do projeto, onde os desenvolvedores especificam quais pacotes são necessários para o projeto funcionar. Gerenciar as dependências corretamente é crucial para garantir que o projeto funcione como esperado e para evitar conflitos entre diferentes versões de pacotes.

**o que é uma DevDependência?**

- Uma devDependência é um tipo específico de dependência que é necessária apenas durante o desenvolvimento de um projeto, mas não é necessária para a execução do projeto em produção. Em NodeJS, as devDependências são gerenciadas usando o NPM (Node Package Manager) e são listadas no arquivo `package.json` do projeto sob a seção `devDependencies`. Exemplos comuns de devDependências incluem ferramentas de teste, linters, transpiladores e outras ferramentas de desenvolvimento que ajudam os desenvolvedores a escrever código de alta qualidade e a manter o projeto durante o processo de desenvolvimento. As devDependências não são instaladas quando o projeto é instalado em produção, o que ajuda a reduzir o tamanho do pacote e a melhorar o desempenho.

**Npmjs Repository**: O NPM Repository é um repositório online onde os desenvolvedores podem publicar e compartilhar seus pacotes NodeJS. Ele é mantido pela equipe do NPM e é o local principal para encontrar e instalar pacotes de terceiros para projetos NodeJS. Os desenvolvedores podem criar uma conta no NPM e publicar seus pacotes, tornando-os disponíveis para a comunidade. O NPM Repository é uma parte fundamental do ecossistema NodeJS, permitindo que os desenvolvedores compartilhem e reutilizem código de forma eficiente.


### Instalação de Dependências

Dependências de produção:

```bash
npm install express
```

Dependências de desenvolvimento:

```bash
npm i log-symbols -D
```

Exemplo de resultado:

```json
{
  "name": "meu-projeto",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "log-symbols": "^4.1.0"
  }
}
```

Pra listar as dependências instaladas:

```bash 
npm fund
```

Para remover uma dependência:

```bash
npm uninstall express
```

Para atualizar uma dependência:

```bash
npm update express
```

Porem, temos que ter cuidado ao atualizar dependências, pois isso pode causar problemas de compatibilidade e quebrar o código existente. É importante ler as notas de lançamento e verificar as mudanças antes de atualizar uma dependência, especialmente se for uma dependência crítica para o projeto. Além disso, é recomendável usar ferramentas como `npm outdated` para verificar quais dependências estão desatualizadas e planejar as atualizações de forma cuidadosa.


### NPM Scripts

- NPM Scripts são comandos personalizados que podem ser definidos no arquivo `package.json` de um projeto NodeJS. Eles permitem que os desenvolvedores criem scripts para automatizar tarefas comuns, como iniciar o servidor, executar testes, compilar código e muito mais. Os NPM Scripts são executados usando o comando `npm run <script-name>`, onde `<script-name>` é o nome do script definido no `package.json`. Eles são uma maneira conveniente de organizar e automatizar tarefas de desenvolvimento, tornando o processo de desenvolvimento mais eficiente e consistente.

Exemplo de NPM Scripts:

```json
{
  "name": "meu-projeto",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "mocha tests/",
    "build": "webpack --config webpack.config.js"
  },
  "dependencies": {
    // suas dependências aqui
  },
  "devDependencies": {
    // suas devDependências aqui
  }
}
```

Nesse exemplo, temos três NPM Scripts definidos: `start`, `test` e `build`. O script `start` inicia o servidor usando o comando `node index.js`, o script `test` executa os testes usando o framework Mocha, e o script `build` compila o código usando o Webpack. Os desenvolvedores podem executar esses scripts usando os comandos `npm run start`, `npm run test` e `npm run build`, respectivamente. Isso ajuda a organizar e automatizar tarefas comuns de desenvolvimento, tornando o processo mais eficiente e consistente.

Nomes comuns para NPM Scripts:

- `start`: Usado para iniciar o servidor ou a aplicação.
- `start:dev`: Usado para iniciar o servidor ou a aplicação em modo de desenvolvimento, geralmente com recursos adicionais como hot-reloading.
- `prebuild`: Usado para executar tarefas antes do processo de build, como limpar diretórios ou preparar arquivos.
- `start:watch`: Usado para iniciar o servidor ou a aplicação em modo de observação, onde ele reinicia automaticamente quando arquivos são alterados.
- `test`: Usado para executar testes automatizados.
- `build`: Usado para compilar o código, geralmente para produção.
- `lint`: Usado para executar ferramentas de linting para verificar a qualidade do código.
- `format`: Usado para executar ferramentas de formatação de código, como Prettier
- `deploy`: Usado para executar tarefas relacionadas ao processo de implantação do aplicativo.
- `prestart`: Usado para executar tarefas antes do script `start`, como configurar variáveis de ambiente ou preparar arquivos.
- `poststart`: Usado para executar tarefas após o script `start`, como limpar recursos
- `pretest`: Usado para executar tarefas antes do script `test`, como configurar o ambiente de teste ou preparar dados de teste.
- `posttest`: Usado para executar tarefas após o script `test`, como limpar recursos ou gerar relatórios de teste.

Como dar bons nomes para NPM Scripts:

- Use nomes descritivos: Escolha nomes que descrevam claramente a função do script, para que outros desenvolvedores possam entender facilmente o que o script faz apenas pelo nome.

- Use convenções de nomenclatura: Siga convenções de nomenclatura comuns, como usar `start` para iniciar o servidor, `test` para executar testes e `build` para compilar o código. Isso ajuda a manter a consistência e facilita a compreensão do propósito de cada script.

- Evite abreviações confusas: Evite usar abreviações que possam ser confusas ou ambíguas. Por exemplo, em vez de usar `st` para `start`, use o nome completo para evitar confusão.

- Use prefixos para scripts relacionados: Se você tiver vários scripts relacionados, como `start`, `start:dev` e `start:watch`, use um prefixo comum para indicar que eles estão relacionados, como `start:`. Isso ajuda a organizar os scripts e torna mais fácil identificar quais scripts estão relacionados entre si.

- Evite usar nomes genéricos: Evite usar nomes genéricos como `run` ou `execute`, pois eles não fornecem informações claras sobre o que o script faz. Em vez disso, escolha nomes específicos que descrevam a função do script.

- Sempre use o contexto do projeto: Considere o contexto do projeto ao nomear os scripts. Por exemplo, se o projeto é um aplicativo web, use nomes como `start` para iniciar o servidor e `build` para compilar o código. Se o projeto é uma biblioteca, use nomes como `test` para executar testes e `lint` para verificar a qualidade do código. Adaptar os nomes dos scripts ao contexto do projeto ajuda a tornar os scripts mais intuitivos e fáceis de entender para outros desenvolvedores que possam trabalhar no projeto no futuro.


### Manipulando variáveis de ambiente em NodeJS

**O que são variáveis de ambiente?**

- Variáveis de ambiente são variáveis que são definidas no ambiente de execução do sistema operacional e podem ser acessadas por aplicativos em execução. Elas são usadas para armazenar informações de configuração, como credenciais de banco de dados, chaves de API, configurações de ambiente (desenvolvimento, produção, etc.) e outras informações sensíveis que não devem ser hardcoded no código-fonte. Em NodeJS, as variáveis de ambiente podem ser acessadas usando o objeto `process.env`, o que permite que os desenvolvedores leiam e usem essas variáveis em seus aplicativos.

.Env File:

- Um arquivo `.env` é um arquivo de texto simples que contém variáveis de ambiente e seus valores. Ele é usado para armazenar informações de configuração sensíveis, como credenciais de banco de dados, chaves de API e outras configurações que não devem ser hardcoded no código-fonte. O arquivo `.env` é geralmente colocado na raiz do projeto e é carregado usando bibliotecas como `dotenv` em NodeJS. Isso permite que os desenvolvedores mantenham as informações de configuração separadas do código-fonte, facilitando a manutenção e a segurança do aplicativo.

Padrões de nomenclatura para variáveis de ambiente:

- Use letras maiúsculas: É comum usar letras maiúsculas para nomear variáveis de ambiente, como `DATABASE_URL` ou `API_KEY`. Isso ajuda a diferenciá-las de outras variáveis no código e torna mais fácil identificá-las como variáveis de ambiente.

- Use underscores para separar palavras: Use underscores (`_`) para separar palavras em nomes de variáveis de ambiente, como `DATABASE_URL` ou `API_KEY`. Isso melhora a legibilidade e torna os nomes mais fáceis de entender.

- Seja descritivo: Escolha nomes de variáveis de ambiente que sejam descritivos e indiquem claramente o propósito da variável. Por exemplo, `DATABASE_URL` é mais descritivo do que `DB_URL`, pois indica claramente que a variável contém a URL do banco de dados.

Padrões de nomenclatura para arquivos .env:

- Use o nome `.env` para o arquivo principal de variáveis de ambiente, como `.env` ou `.env.development` para um ambiente de desenvolvimento específico. Isso ajuda a manter a consistência e facilita a identificação do arquivo de variáveis de ambiente.

- Use arquivos separados para diferentes ambientes: Se o projeto tiver diferentes ambientes (desenvolvimento, produção, teste, etc.), é recomendável usar arquivos `.env` separados para cada ambiente, como `.env.development`, `.env.production`, etc. Isso ajuda a manter as configurações específicas de cada ambiente organizadas e facilita a troca entre ambientes durante o desenvolvimento e implantação.



