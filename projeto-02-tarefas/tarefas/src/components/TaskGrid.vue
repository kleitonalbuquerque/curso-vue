<template>
  <div class="task-grid">
    <Task v-for="task in tasks" :key="task.name" :task="task"> 
      {{ task.name }}
    </Task>
  </div>
</template>

<script>
import Task from './Task.vue'
export default {
  props: {
    tasks: { type: Array, required: true }
  },
  components: {
    Task
  }
}
</script>

<style>
  
</style>