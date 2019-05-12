new Vue({
  el: '#desafio',
  data: {
    nome: 'Kleiton Albuquerque',
    idade: 35,
    imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
  },
  methods: {
    triplicaIdade() {
      // idadeTriplicada = this.idade * 3
      // return idadeTriplicada
      return this.idade * 3
    },
    random() {
      return Math.random()
    }
  }
})
