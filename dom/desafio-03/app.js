new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado() {
           return this.valor == 37 ? 'Valor igual' : 'Valor Diferente'
         }
    },
    watch: {
        valor() {
            if (this.valor >= 37) {
                setTimeout(() => {
                    this.valor = 0
                }, 5000)
            }
        }
    },
    // methods: {
    // aumentaUm() {
    //     this.valor++
    // }, 
    // aumentaCinco() {
    //     this.valor += 5
    // },
    // resultado() {
    //     this.valor < 37 ? 'Valor Diferente' : 'Valor igual'
    //   }  
    // },
});