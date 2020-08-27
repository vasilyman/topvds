<template>
  <div class="card border-0 sidebar sticky-bar">
    <div class="card-body p-0">
      <!-- FILTERS -->
      <div class="widget mt-4 pt-2">
        <h4 class="widget-title">Selected filters</h4>
        <ul class="list-unstyled mt-4 mb-0 blog-catagories">
          <li><a href="jvascript:void(0)">Men</a></li>
          <li><a href="jvascript:void(0)">Women</a></li>
          <li><a href="jvascript:void(0)">Electronics</a></li>
          <li><a href="jvascript:void(0)">Jewellery</a></li>
          <li><a href="jvascript:void(0)">Shoes</a></li>
          <li><a href="jvascript:void(0)">Kid’s Wear</a></li>
          <li><a href="jvascript:void(0)">Sports</a></li>
          <li><a href="jvascript:void(0)">Toys</a></li>
          <li><a href="jvascript:void(0)">Gift Corners</a></li>
        </ul>
        <a href="#" class="btn btn-block btn-secondary mt-2">Reset filters</a>
      </div>
      <!-- FILTERS -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: 'ffff',
    };
  },
  mounted() {
    console.log('mounted');
    this.$root.$emit('remove', 'emitted from filters');
  },
}
</script>
