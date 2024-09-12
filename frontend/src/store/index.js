import Vue from "vue";
import Vuex from "vuex"; //state management

Vue.use(Vuex); //vuex on

export default new Vuex.Store({
  state: {
    todos: [], // menyimpan daftar tugas 'array'
  },
  mutations: { //fungsi untuk mengubah atau memodifikasi state
    add(state, newTodo) { //membuat fungsi add,, data ketika add default false/belum selesai
      state.todos.push({ text: newTodo, completed: false });
    },
    delete(state, index) { //fungsi delete
      state.todos.splice(index, 1); //splice ntuk menghapus elemen array pada indeks tertentu
    },
    toggleComplete(state, index) { //fungsi ubah status Task
      state.todos[index].completed = !state.todos[index].completed; //status akan dibalik dari false ke true 
    },
  },
  getters: {
    todos: (state) => state.todos, //mengembalikan nilai array state
  },
});
