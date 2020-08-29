import Vue from 'vue'
import Vendor from '@/views/Vendor.vue';
import "@/common.js";

Vue.component('Table', () => import(/* webpackChunkName: "Table" */ '@/components/Table.vue'));

new Vue({
  render: (h) => h(Vendor),
}).$mount('#app');
