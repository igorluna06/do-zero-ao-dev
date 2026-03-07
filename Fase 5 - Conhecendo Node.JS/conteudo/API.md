## Introdução à API 

**O que é uma API?**

- API (Application Programming Interface) é um conjunto de regras e definições que permitem que diferentes softwares se comuniquem entre si. Ela define como os desenvolvedores podem interagir com um sistema, serviço ou biblioteca, fornecendo uma interface para acessar suas funcionalidades.

- Ela pode ser usada para acessar dados, executar operações ou integrar diferentes sistemas. As APIs são amplamente utilizadas na construção de aplicativos web, móveis e de desktop, permitindo que os desenvolvedores aproveitem funcionalidades existentes sem precisar reinventar a roda.

Pra que serve uma API?

- Facilitar a integração entre diferentes sistemas e serviços, permitindo que eles se comuniquem e compartilhem dados de maneira eficiente.

Como funciona:

1. O cliente (aplicativo) faz uma requisição para a API, especificando o endpoint e os parâmetros necessários.

2. A API recebe a requisição, processa os dados e executa as operações necessárias no servidor.

3. O servidor retorna uma resposta para a API, que então envia essa resposta de volta para o cliente.

Exemplo na vida real: 

- Imagine que você está em um restaurante e quer pedir comida. O menu é a API, o garçom é o intermediário que recebe seu pedido e o chef é o sistema que processa o pedido e entrega a comida. Você não precisa saber como o chef prepara a comida, apenas precisa usar o menu (API) para fazer seu pedido.

Desenho de uma API:

```
Cliente (Aplicativo) <--> API (Interface) <--> Servidor (Processamento)
```

**O que são protocolos de comunicação:**

- Protocolos de comunicação são conjuntos de regras e padrões que governam a troca de informações entre sistemas ou dispositivos. Eles definem como os dados devem ser formatados, transmitidos e interpretados para garantir uma comunicação eficaz e segura.

**Protocolo de comunicação mais usados:**

1. HTTP/HTTPS: O protocolo mais comum para comunicação entre clientes e servidores, especialmente em APIs web.

2. TCP/IP: Protocolo de comunicação de baixo nível usado para comunicação entre sistemas em redes.

3. WebSocket: Protocolo de comunicação bidirecional usado para comunicação em tempo real entre clientes e servidores.

4. gRPC: Protocolo de comunicação de alto desempenho desenvolvido pelo Google, usado para comunicação entre serviços em ambientes distribuídos.

5. GraphQL: Protocolo de consulta para APIs que permite aos clientes solicitar exatamente os dados de que precisam, evitando o excesso de dados.

## Sentido semântico de uma API

**Real sentido semântico:**

- Application Programming -> Criar uma solução que sirva e atenda aos problemas de negócio, ou seja, uma aplicação que seja útil e funcional para os usuários.

- Interface -> Contrato, ou seja, um acordo entre o desenvolvedor da API e os consumidores da API sobre como a comunicação deve ocorrer. A interface define os métodos, parâmetros e formatos de dados que devem ser usados para interagir com a API.

- API -> Aplicacação que foi programada para servir dados para um negóciio, seguindo padronização de um tipo de contrato de programação.

**Resumo:**

- Aplicação para servir dados de maneira padronizada, seguindo um contrato de programação, para atender as necessidades de um negócio.

## Características de uma API

1. Ter um protocolo de comunicação rígido, tanto pra resposta(response) quanto para a requisição(request), ou seja, seguir um padrão de comunicação bem definido.

2. Sempre serve algum conteúdo(content), ou seja, a API deve fornecer dados ou funcionalidades úteis para os consumidores, seguindo o contrato estabelecido.

3. Padrões de arquitetura definidos, como REST que é o mais comum, ou seja, seguir um conjunto de princípios e práticas para projetar a API de forma consistente e escalável.

## REST (Representational State Transfer)

**Sentido semântico:**

- Representational -> Representação, ou seja, a forma como os recursos são representados e transmitidos entre o cliente e o servidor.

- State -> Estado, ou seja, a condição atual dos recursos e das interações entre o cliente e o servidor.

- Transfer -> Transferência, ou seja, a troca de informações entre o cliente e o servidor.

- REST -> Representação de estado transferida, ou seja, a transferência de informações sobre o estado dos recursos entre o cliente e o servidor.

## Características do REST:

**1.** Ter uma arquitetura cliente-servidor, ou seja, separar as responsabilidades entre o cliente (que consome a API) e o servidor (que fornece a API). Backend e frontend.

**2.** Comunicação stateless, ou seja, cada requisição do cliente para o servidor deve conter todas as informações necessárias para processar a requisição, sem depender de informações armazenadas no servidor.

**3.** Cache, ou seja, permitir que as respostas da API sejam armazenadas e retornadas rapidamente para melhorar o desempenho e reduzir a carga no servidor.

**4.** Interface uniforme, ou seja, seguir um conjunto de princípios e práticas para projetar a API de forma consistente e fácil de usar. Maneira que você vai estruturar os endpoints, os verbos HTTP, os formatos de dados, etc.

**5.** Sistema em camadas, ou seja, permitir que a API seja composta por camadas de servidores intermediários, como proxies, gateways e balanceadores de carga, para melhorar a escalabilidade e a segurança da API.


## RESTful API

- RESTful API é uma API que segue os princípios e características do REST, ou seja, é uma API que é projetada para ser fácil de usar, escalável e eficiente, seguindo as melhores práticas de design de APIs. Ela utiliza os verbos HTTP (GET, POST, PUT, DELETE) para realizar operações nos recursos da API e segue uma estrutura de endpoints consistente e intuitiva.

## REST vs RESTful

- REST segue os princípios e características do REST, mas não necessariamente implementa todos eles. Por exemplo, uma API pode ser considerada REST mesmo que não seja completamente stateless ou não tenha uma interface uniforme.

- RESTful API, por outro lado, é uma implementação completa dos princípios e características do REST, ou seja, é uma API que segue rigorosamente os princípios do REST e é projetada para ser fácil de usar, escalável e eficiente. Em resumo, todas as RESTful APIs são REST, mas nem todas as REST APIs são RESTful.













