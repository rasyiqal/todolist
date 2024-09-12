import Vue from "vue"; // impor library Vue untuk membangun aplikasi Vue
import VueRouter from "vue-router"; // impor VueRouter untuk mengelola routing

Vue.use(VueRouter); //VueRouter on

//array berisi daftar route dan komponen
const indexRoutes = [
  {
    path: "/", // URL path 
    component: () => import("@/views/About.vue"), // load komponen 
    name: "About", // nama route 
    props: {
      title: "I'm Programmer", // Mengirimkan properti 'title' ke komponen About
    },
    meta: {
      name: "about page", // Metadata tambahan untuk route ini (bisa digunakan untuk tujuan lain, seperti autentikasi).
    },
  },
  {
    path: "/todolist", // URL path
    component: () => import("@/views/TodoList.vue"), // load komponen 'TodoList.vue'
    name: "TodoList", // Nama route untuk digunakan dalam navigasi programatik.
    meta: {
      name: "todo list page", // Metadata tambahan untuk route ini.
    },
  },
];

// inisialisasi dengan mode 'history'
const router = new VueRouter({
  mode: "history", //menghilangkan hash (#) di URL.
  routes: indexRoutes, // menghubungkan route yang sudah didefinisikan
});

export default router; // membagikan konfigurasi route ke main.js
