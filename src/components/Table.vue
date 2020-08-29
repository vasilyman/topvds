<template>
  <div class="row" id="accordionExample2">
    <div
      v-for="(item, index) in Array(5)"
      :key="index"
      class="col-12 pt-3 table-card-row"
      :class="index === 2 ? 'table-card-row-active' : ''"
    >
      <ShortServiceInfo :options="options" :service="index" :open-service-button="true" @open-service="openModal(index)"/>
    </div>
    <div class="col-12 mt-5">
      <Pagination/>
    </div>
    <Modal :service="service" :options="options" />
  </div>
</template>
<script>
export default {
  components: {
    'Pagination': () => import(/* webpackChunkName: "Pagination" */ '@/components/Pagination.vue'),
    'Modal': () => import(/* webpackChunkName: "Modal" */ '@/components/Modal.vue'),
    'ShortServiceInfo': () => import(/* webpackChunkName: "ShortServiceInfo" */ '@/components/ShortServiceInfo.vue'),
  },
  data() {
    return {
      options: [
        {
          title: '1 core',
          icon: 'uil-processor',
        },
        {
          title: '1 Gb RAM',
          icon: 'uil-sim-card',
        },
        {
          title: '20 Gb NVMe',
          icon: 'uil-server',
        },
        {
          title: '32 Tb / 1000 Mbit',
          icon: 'uil-channel',
        },
      ],
      service: null,
    };
  },
  mounted() {
  },
  methods: {
    openModal(service) {
      this.service = service;
    },
  },
}
</script>