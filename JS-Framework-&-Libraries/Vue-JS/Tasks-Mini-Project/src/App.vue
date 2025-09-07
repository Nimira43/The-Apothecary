<script setup>

import { ref, onMounted } from 'vue'

const name = ref('Lenny')
const status = ref('sleeping')
const tasks = ref(['Task 1', 'Task 2', 'Task 3'])
const newTask = ref('')

const toggleStatus = () => {
  if (status.value === 'active') {
    status.value = 'pending'
  } else if (status.value === 'pending') {
    status.value = 'inactive'
  } else {
    status.value = 'active'
  }
}

const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value)
    newTask.value = ''
  }
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1)
}

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    tasks.value = data.map((task) => task.title)
  } catch (error) {
    console.log('Error - cannot find tasks')
  }
})

</script>

<template>
  
  <h1>USER: {{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input 
      type="text" 
      id="newTask" 
      name="newTask"
      v-model="newTask"
      />
    <button type="submit">Submit</button>
  </form>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>{{ task }}</span>
      <button @click="deleteTask(index)">X</button>
    </li>
  </ul>
  <button @click="toggleStatus">Change Status</button>

</template>

<style>
  
  body {
    margin-left: 30%;  
    background-color: #111;
    color: #ff4500;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  form {
    width: 300px;
    display: flex;
    flex-direction: column;
  }

  label, input, button {
    margin-bottom: 10px;
  }

  input {
    background-color: transparent;
    outline: none;
    border: 1px solid #ff4500;
    border-radius: 5px;
    font-size: 20px;
    padding: 5px 10px;
    color: #ff4500;
  }

  li {
    list-style: none;
  }

  span { 
    margin-right: 20px;
  }

  button {
    background-color: #ff4500;
    color: #111;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
  }
  
</style>
