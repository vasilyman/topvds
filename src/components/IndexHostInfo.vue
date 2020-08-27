<template>
  <div class="card">
    <div class="card-body p-3">
      <h4 class="card-title">Hosting name</h4>
      <div class="row no-gutters">
        <div class="col-5 pr-3">
          <img class="card-img" src="https://via.placeholder.com/120" alt="">
        </div>
        <div class="col-7">
          <div class="media align-items-center text-left mt-1">
            <div class="text-primary h4 mb-0 mr-1">
              <i class="uil uil-file"></i>
            </div>
            <div class="media-body">
              <a href="javascript:void(0)" class="text-dark">1 Core</a>
            </div>
          </div>
          <div class="media align-items-center text-left mt-1">
            <div class="text-primary h4 mb-0 mr-1">
              <i class="uil uil-file"></i>
            </div>
            <div class="media-body">
              <a href="javascript:void(0)" class="text-dark">1 Gb RAM</a>
            </div>
          </div>
          <div class="media align-items-center text-left mt-1">
            <div class="text-primary h4 mb-0 mr-1">
              <i class="uil uil-file"></i>
            </div>
            <div class="media-body">
              <a href="javascript:void(0)" class="text-dark">20 Gb SSD</a>
            </div>
          </div>
          <div class="media align-items-center text-left mt-1">
            <div class="text-primary h4 mb-0 mr-1">
              <i class="uil uil-file"></i>
            </div>
            <div class="media-body">
              <a href="javascript:void(0)" class="text-dark">32 Tb NETWORK</a>
            </div>
          </div>
        </div>
      </div>
      <h6 class="mb-1">Options:</h6>
      <div class="m-1">
        <span class="badge badge-secondary rounded">Annual billing</span>
        <span class="badge badge-secondary rounded">Nat IPv4</span>
      </div>
      <div class="mt-3">
        <a href="#" class="btn btn-block btn-primary">Bye</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'llyl',
    };
  },
  mounted() {
    console.log('table mounted');
  },
  methods: {
    emitted() {
      console.log('emitted');
    }
  },
}
</script>