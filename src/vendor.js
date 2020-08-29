import Vue from 'vue'
import "@/assets/scss/style.scss";
import Vendor from '@/views/Vendor.vue';
import '@/assets/js/unicons-2.1.9.bundle.js';
import '@/assets/js/bootstrap.bundle.min.js';
import '@/assets/js/theme.js';

Vue.component('Table', () => import(/* webpackChunkName: "Table" */ '@/components/Table.vue'));

new Vue({
  render: (h) => h(Vendor),
}).$mount('#app');
