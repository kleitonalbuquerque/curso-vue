<template lang="">
  <div>
    <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
                {{ menu }}
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
  </div>
</template>
<script>
export default {
  data() {
		return {
			menu: 'Menu'
		}
	},
  components: {

  }
}
</script>
<style lang="">
  
</style>