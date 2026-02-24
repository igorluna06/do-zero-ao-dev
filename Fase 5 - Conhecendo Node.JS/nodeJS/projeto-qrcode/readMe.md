### Projeto: Gerador de senha e qrcode

**Objetivo**: Criar um gerador de senha e qrcode utilizando pacotes do npm e variaveis de ambiente.

**Tecnologias utilizadas**: Node.js, npm, dotenv, qrcode-terminal, javaScript, chalk, prompt.

**Funcionalidades**:

- Gerar senha aleatória com base em critérios definidos pelas variaveis de ambiente.
- Gerar um QR code a partir de uma string fornecida pelo usuário.
- Exibir a senha gerada e o QR code no terminal de forma estilizada utilizando o pacote chalk.

**Estrutura do projeto**:

```
- src/
  - prompts/
    - prompt-main.js
    - prompt-qrcode.js
  - services/
    - password/
        - create.js
        - handle.js
    - qrcode/
        - create.js
        - handle.js
  - index.js
- .env
- package.json
- readMe.md
```