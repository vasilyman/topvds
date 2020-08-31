<template>
  <div class="row" id="accordionExample2">
    <div
      v-for="(item, index) in Array(5)"
      :key="index"
      class="col-12 pt-3 table-card-row"
      :class="index === 2 ? 'table-card-row-active' : ''"
    >
      <ShortServiceInfo
        :options="options"
        :service="index"
        :open-service-button="true"
        :show-logo="showLogo"
        @open-service="openModal(index)"
      />
    </div>
    <div class="col-12 mt-5">
      <Pagination/>
    </div>
    <Modal :service="service" :options="options" />
  </div>
</template>
<script>
export default {
  props: {
    showLogo: Boolean,
  },
  components: {
    'Pagination': () => import(/* webpackChunkName: "Pagination" */ '@/components/Pagination.vue'),
    'Modal': () => import(/* webpackChunkName: "Modal" */ '@/components/Modal.vue'),
    'ShortServiceInfo': () => import(/* webpackChunkName: "ShortServiceInfo" */ '@/components/ShortServiceInfo.vue'),
  },
  data() {
    return {
      options: [
        {
          title: 'Processor',
          value: '1 core',
          icon: 'uil-processor',
        },
        {
          title: 'RAM',
          value: '1 Gb',
          icon: 'uil-sim-card',
        },
        {
          title: 'Disk',
          value: '20 Gb NVMe',
          icon: 'uil-server',
        },
        {
          title: 'Net',
          value: '32 Tb / 1000 Mbit',
          icon: 'uil-channel',
        },
        {
          title: 'Price',
          name: 'price',
          value: '300 $',
          icon: 'uil-bill',
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