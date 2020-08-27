<template>
  <div class="card border-light">
    <div class="card-body p-3">
      <h4 class="card-title">3rd block</h4>
      <div class="row no-gutters">
        <div class="col">
          <img class="card-img" src="https://via.placeholder.com/200" alt="">
        </div>
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