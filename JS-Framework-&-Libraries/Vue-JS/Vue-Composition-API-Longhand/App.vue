// All the below demos use the Composition API
// Long hand version

<script>
import { ref } from 'vue'
export default {
  setup() {
    const name = ref('Lenny')
    const status = ref('sleeping')
    const tasks = ref(['Task 1', 'Task 2', 'Task 3'])
    const toggleStatus = () => {
      if (status.value === 'active') {
        status.value = 'pending'
      } else if (status.value === 'pending') {
        status.value = 'inactive'
      } else {
        status.value = 'active'
      }
    }
    return {
      name,
      status,
      tasks,
      toggleStatus,
    }
  },
}
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>
  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <button @click="toggleStatus">Change Status</button>
</template>

