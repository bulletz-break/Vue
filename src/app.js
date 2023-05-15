const App = {
    data() {
        return {
            name: "Luiz",
            idade: 17,
            input_name: "Seu nome"
        };
    },
    methods: {
        submit_form(e) {
            e.preventDefault(); // Impedindo que o form seja enviado para o servidor
            this.name = this.input_name;
        }
    }
};

Vue.createApp(App).mount("#app");