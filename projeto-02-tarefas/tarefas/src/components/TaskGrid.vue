<template>
  <div class="task-grid" v>
    <template v-if="tasks.length">
      <Task v-for="task in tasks" :key="task.name" :task="task">
        {{ task.name }}
      </Task>
    </template>
    <p v-else class="no-task">Sua vida está em dia :)</p>
  </div>
</template>

<script>
import Task from "./Task.vue";
export default {
  props: {
    tasks: { type: Array, required: true },
  },
  components: {
    Task,
  },
};
</script>

<style>
  .task-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap; /* quebrar linha no flex-box */
  }

  .task-grid .task {
    margin: 10px;
  }

  .no-task {
    color: #AAA;
    font-size: 1.7rem;
  }
</style>