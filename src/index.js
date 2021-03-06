import Vue from 'vue'
import Index from '@/views/Index.vue';
import Multiselect from 'vue-multiselect';
import "@/common.js";

Vue.component('IndexFilters', () => import(/* webpackChunkName: "IndexFilters" */ '@/components/IndexFilters.vue'));
Vue.component('IndexFiltersHorizontal', () => import(/* webpackChunkName: "IndexFiltersHorizontal" */ '@/components/IndexFiltersHorizontal.vue'));
Vue.component('IndexHostInfo', () => import(/* webpackChunkName: "IndexHostInfo" */ '@/components/IndexHostInfo.vue'));
Vue.component('Table', () => import(/* webpackChunkName: "Table" */ '@/components/Table.vue'));
Vue.component('Index2ndBlock', () => import(/* webpackChunkName: "Index2ndBlock" */ '@/components/Index2ndBlock.vue'));
Vue.component('Index3rdBlock', () => import(/* webpackChunkName: "Index3rdBlock" */ '@/components/Index3rdBlock.vue'));
Vue.component('multiselect', Multiselect);

new Vue({
  render: (h) => h(Index),
}).$mount('#app');
