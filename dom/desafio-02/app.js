new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Curso Vue')
        },
        alterarValor(event) {
            this.valor = event.target.value
        }
    },
})