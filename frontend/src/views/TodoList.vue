<template>
    <div class="max-w-lg mx-auto mt-8 p-4 border rounded shadow-lg">
      <h1 class="text-2xl font-bold mb-4">To-do List</h1>
      
      <!-- Form untuk menambah tugas -->

      <!-- memanggil method add -->
      <form @submit.prevent="add" class="flex mb-4"> 
        <!-- menghubungkan data input dengan properti newTodo di state Vue -->
        <input
          type="text"
          v-model="newTodo"
          placeholder="Tambahkan tugas baru"
          class="flex-1 p-2 border border-gray-300 rounded-l"
        />
        <button type="submit" class="p-2 bg-blue-500 text-white rounded-r hover:bg-blue-600">
          Tambah
        </button>
      </form>
    
      <!-- Daftar tugas -->
      <ul class="list-disc pl-5">
        <!-- menampilkan daftar tugas (todos) yang diambil dari Store -->
        <li v-for="(todo, index) in todos" :key="index" class="flex items-center mb-2">
          <!-- menampilkan text-decoration coret jika tugas sudah completed -->
          <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }" class="flex-1">
            {{ todo.text }}
          </span>
          <button
            @click="toggleComplete(index)"
            class="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600">
            {{ todo.completed ? "Batal" : "Selesai" }}
          </button>
          <button
            @click="remove(index)"
            class="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">Hapus</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTodo: "",
      };
    },
    computed: {
      todos() {
        return this.$store.state.todos;
      },
    },
    methods: {
      add() {
        if (this.newTodo.trim() === "") return;
        this.$store.commit("add", this.newTodo);// menjalankan parameter yang ada di store 
        this.newTodo = "";
      },
      remove(index) {
        this.$store.commit("delete", index);
      },
      toggleComplete(index) {
        this.$store.commit("toggleComplete", index);
      },
    },
  };
  </script>
  
 