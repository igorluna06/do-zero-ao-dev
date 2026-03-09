# Podcast Manager

### Descrição
- Um app ao estilo netflix, aonde possa centralizar diferentes episódios de podcast separados por categoria

### Domínio
- Podcasts feitos em vídeo

### Features
- Listar os podcasts em sessões de categorias
    - [Saúde, bodybuilder, mentalidade, humor]

- Filtrar episódios por nome de podcast

## Como

#### Feature: 

- Listar os podcasts em sessões de categorias

### Como vou implementar:
GET: Retorna lista de episódios


response: 
```json
[
{
    podcastName: "Flow",
    episode: "CBUM - Flow #319",
    videoId: "pQSuQmUfS30",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCeNGQeHGq3EN9VBoh7CCsKQU0L4Q",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30&pp=ygUJZmxvdyBjYnVt",
    categories: ["saúde", "esporte", "bodybuilder"]
},
{
    podcastName: "Flow",
    episode: "RUBENS BARRICHELLO - Flow #339",
    videoId: "4KDGTdiOV4I",
    cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDgyHAUb9vIwNYXr8G6ZPXKWyU__A",
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I&pp=ygUXZmxvdyBydWJlbnMgYmFycmljaGVsbG8%3D",
    categories: ["esporte", "corrida"]
},
]
```

GET: Retorna lista de episódios baseado em um parametro enviado pelo cliente do nome do podcast




