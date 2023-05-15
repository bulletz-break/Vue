# Anotações de estudos do Vue

## Estrutura Vue

### HTML

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Vue - Instalação </title>
    <script src="https://unpkg.com/vue@next" defer></script>
    <script src="src/app.js" defer></script>
</head>
<body>
    <div id="app">
        <p> Meu nome é {{ name }} e tenho {{ idade }} anos
    </div>
</body>
</html>

### JS

const App = {
    data() {
        return {
            name: "Luiz",
            idade: 17
        };
    }
};

Vue.createApp(App).mount("#app");

### Dados exportados
Para usar dados exportados pela classe criada usando Vue, basta colocar `{{ var }}`.
`{{}}` é a forma de usar a variável e `var` é o nome da variável