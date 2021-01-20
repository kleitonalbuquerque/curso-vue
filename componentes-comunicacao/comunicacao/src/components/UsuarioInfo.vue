<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>
      Usuário: <strong> {{ inverterNome() }} </strong>
    </p>
    <button @click="reinicializarNome">Reinicializar Nome</button>
  </div>
</template>

<script>
export default {
  props: {
    nome: {
      type: String,
      // required: true
      // default: 'Anônimo',
      default: function() {
        return Array(10).fill(0).join(',')
      }
    }
  },
  methods: {
    inverterNome() {
      return this.nome.split('').reverse().join('')
    },
    reinicializarNome() {
      // const antigo = this.nome
      this.nome = 'Pedro'
      this.$emit('nomeMudou', this.nome)
    }
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
