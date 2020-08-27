<template>
  <div class="row">
    <div class="col-12 mb-3" v-for="(item, index) in Array(5)" :key="index">
      <div class="media text-left mt-1 border-bottom">
        <div class="text-primary h4 mb-0 pr-3 w-4 w-sm-3 w-lg-2">
          <img src="https://via.placeholder.com/150" class="card-img mb-2" alt="">
          <h5 class="title text-center">Tarif name</h5>
        </div>
        <div class="media-body pl-3 border-left">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
            <div class="col" v-for="(option, i) in options" :key="i">
              <div class="media align-items-center text-left mt-1">
                <div class="text-primary h4 mb-0">
                  <i class="uil uil-file"></i>
                </div>
                <div class="media-body pl-3">
                  {{option.title}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          title: '1 core',
        },
        {
          title: '1 Gb RAM',
        },
        {
          title: '20 Gb NVMe',
        },
        {
          title: '32 Tb / 1000 Mbit',
        },
      ],
    };
  },
  mounted() {
  },
  methods: {
  },
}
</script>