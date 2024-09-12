<template>
  <div>
    <nav class="bg-blue-500 p-4">
      <router-link to="/" class="text-white mr-4 hover:text-gray-300">About</router-link>
      <router-link to="/todolist" class="text-white hover:text-gray-300">Todo List</router-link>
    </nav>
    <div class="p-4">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>