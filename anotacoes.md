# Anotações de estudos do Vue

## Estrutura Vue
### Importando Vue

É necessário importar a biblioteca do Vue no HTML

### Objeto Vue

O Vue precisa de um objeto JS para funcionar

### Estrutura do seu objeto que será passado para o Vue
- `data()` É uma função que deve retornar os dados necessários para sua aplicação
- `methods` É uma propriedade que vai armazenar as funções da aplicação Vue

### Dados exportados

Para usar dados exportados pela classe criada usando Vue, basta colocar `{{ var }}`.
`{{}}` é a forma de usar a variável e `var` é o nome da variável

### Data Bidding
- `v-model` É a propriedade HTML para informar o nome para um elemento. Ex: `<input type="text" v-model="your_name"/>`
    - Para usar o valor deste input `your_name`, basta usar a variável: `{{ your_name }}` e o valor será atualizado em tempo real
- `v-on:click` Serve para registrar um evento naquele elemento. Quando esse evento ocorrer, a função informada será chamada do seu objeto Vue 
    - Para registrar um evento de click, basta inserir `v-model="funcao()"` no elemento desejado

### Criação do objeto Vue

É necessário criar a aplicação usando o método `Vue.createApp(app_object).mount("#id_element")`.
- `Vue.CreateApp()` é a função que cria um objeto Vue e recebe o seu objeto
- `mount()` é a função que o informa o ID do elemento HTML que o Vue vai manipular