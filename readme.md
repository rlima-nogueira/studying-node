``` npm init -y ```

``` npm i -D typescript -D ```

``` npm i -D nodemon ``` 

Criar o arquivo nodemon.json com o seguinte conteudo: 
```
{
    "watch": ["src"],
    "ext": "ts",
    "execMap": {
        "ts": "sucrase-node src/index.ts"
    }
}
```