<template>
  <div class="section">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-4 col-12 mb-3">
          <IndexFilters :ranges="ranges"/>
        </div>
        <div class="col-lg-9 col-md-8 col-12">
          <div class="row">
            <div class="col-lg-4 col-sm-12 mb-3" v-for="(item, i) in Array(3)" :key="i">
              <IndexHostInfo/>
            </div>
          </div>
          <div class="row">
            <div class="col-12 mb-5">
              <IndexFiltersHorizontal :ranges="ranges"/>
            </div>
            <div class="col-12">
              <Table :show-logo="true"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Ranges from '@/ranges';
export default {
  data() {
    return {
      ranges: {},
    }
  },
  created() {
    this.ranges = Ranges;
  }
}
</script>