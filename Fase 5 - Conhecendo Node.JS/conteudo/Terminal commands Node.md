
### Lista de comandos de terminal para Node.js:

- `node <arquivo.js>`: Executa um arquivo JavaScript usando o Node.js.
<br>
- `npm init`: Cria um novo projeto Node.js e gera um arquivo `package.json` para gerenciar as dependências do projeto.
<br>
- `npm install <pacote>`: Instala um pacote específico e adiciona a dependência ao arquivo `package.json`.
<br>
- `npm install`: Instala todas as dependências listadas no arquivo `package.json`.
<br>
- `npm start`: Executa o script definido na seção "scripts" do arquivo `package.json` com o nome "start". Geralmente é usado para iniciar o servidor ou a aplicação.
<br>
- `npm run <script-name>`: Executa um script personalizado definido na seção "scripts" do arquivo `package.json`. Substitua `<script-name>` pelo nome do script que deseja executar.
<br>
- `npm test`: Executa o script de teste definido na seção "scripts" do arquivo `package.json` com o nome "test". Geralmente é usado para executar testes automatizados.
<br>
- `npm update`: Atualiza os pacotes instalados para as versões mais recentes, de acordo com as restrições de versão definidas no arquivo `package.json`.
<br>
- `npm uninstall <pacote>`: Remove um pacote específico e atualiza o arquivo `package.json` para refletir a remoção da dependência.
<br>
- `npm list`: Exibe uma lista de todas as dependências instaladas no projeto, incluindo suas versões e hierarquia de dependências.
<br>
- `npm outdated`: Verifica se há pacotes desatualizados no projeto e exibe as versões atuais, as versões mais recentes e as versões desejadas de cada pacote.
<br>
- `npm cache clean`: Limpa o cache do NPM, removendo arquivos temporários e pacotes baixados anteriormente.
<br>
- `npm config set <chave> <valor>`: Define uma configuração personalizada para o NPM. Substitua `<chave>` pela chave da configuração e `<valor>` pelo valor desejado.
<br>
- `npm config get <chave>`: Exibe o valor de uma configuração específica do NPM. Substitua `<chave>` pela chave da configuração que deseja verificar.
<br>
- `npm config delete <chave>`: Remove uma configuração personalizada do NPM. Substitua `<chave>` pela chave da configuração que deseja remover.
<br>
- `npm version <versão>`: Atualiza a versão do projeto no arquivo `package.json` e cria um commit e uma tag no controle de versão (se estiver usando um sistema de controle de versão como Git). Substitua `<versão>` pela nova versão desejada, seguindo as convenções de versionamento semântico (por exemplo, "1.0.0", "1.1.0", "2.0.0", etc.).
<br>
- `npm publish`: Publica o pacote do projeto no registro do NPM, tornando-o disponível para outros desenvolvedores instalarem e usarem. Certifique-se de que o projeto esteja configurado corretamente e que você tenha uma conta no NPM antes de usar este comando.
<br>
- `npm login`: Faz login na sua conta do NPM para autenticar suas ações, como publicar pacotes ou gerenciar dependências.
<br>
- `npm logout`: Faz logout da sua conta do NPM, revogando a autenticação para ações futuras.
<br>