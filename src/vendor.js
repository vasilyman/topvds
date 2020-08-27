import Vue from 'vue'
import "@/assets/scss/style.scss";
import Index from '@/views/Index.vue';

// Vue.component('Filters', () => import(/* webpackChunkName: "filters" */ '@/components/Filters.vue'));
// Vue.component('Table', () => import(/* webpackChunkName: "table" */ '@/components/Table.vue'));

new Vue({
  render: (h) => h(Index),
}).$mount('#app');
