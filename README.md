## Instalação via Docker

* Executando o banco de dados, api e web sem dedicar o terminal para o docker:
	```
	$ docker-compose up -d
	```

* **Nota:** Remova o -d para continuar no terminal do docker. Caso ocorra algum problema em relação à conexão TCP/IP na porta 5432, reinicie o container sem deletá-lo.

* Encerrando o container sem estar no terminal do docker:
	```
	$ docker-compose stop
	```
* **Nota:** Caso esteja no terminal, utilize o comando ctrl+c.

* Com o docker-compose rodando, utilize o seguinte comando em um novo terminal:
  ```
  $ docker exec -it <id do container> sh
  ```
#### Endpoints
* Base endpoint:
      ```
        http://localhost:3333
      ```

### Cadastrar um novo post
Endpoint: /post
Method: POST

Request syntax:
```
{
    "message": String
}
```

Code 200 response syntax:
```
{
    "code": 200,
    {
      "message": string,
      "id": int
    }
}
```

### Retorna um post específico
Endpoint: /post/:id
Method: GET

Code 200 response syntax:
```
{
    "code": 200,
    {
      "id": int,
      "message": string
    }
}
```
##### Caso não exista um post com esse id
Code 404 response syntax:
```
{
    "code": 404,
    "message": "Not found"
}
```

### Retorna uma lista contendo todos posts 
Endpoint: /post
Method: GET

Code 200 response syntax:
```
{
  "code": 200,
  [
    {
      "id": int,
      "message": string
    },
    {
      "id": int,
      "message": string
    }
  ]
}
```

### Inserir um novo comentário em um determinado post
Endpoint: /posts/comments
Method: POST

Request syntax:
```
    {
        "comment": string,
        "post_id": int
    }

```
Code 200 response syntax:
```
{
  "code": 200,
  [
    {
      "comment": string,
      "post_id": int,
      "id": int
    }
  ]
}
```

### Retorna a lista de comentários para um determinado post
Endpoint: /post/:id/comments
Method: GET

Code 200 response syntax:
```
{
    "code": 200,
    {
      "comment": string,
      "post_id": int,
      "id": int
    }
}
```


