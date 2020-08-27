<template>
  <div class="section">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-4 col-12 mb-3">
          <IndexFilters/>
        </div>
        <div class="col-lg-9 col-md-8 col-12">
          <div class="row">
            <div class="col-lg-4 col-sm-12 mb-3">
              <IndexHostInfo/>
            </div>
            <div class="col-lg-4 col-6 mb-3">
              <Index2ndBlock/>
            </div>
            <div class="col-lg-4 col-6">
              <Index3rdBlock/>
            </div>
          </div>
          <div class="row">
            <div class="col-12 mb-3">
              <IndexFiltersHorizontal :ranges="ranges"/>
            </div>
            <div class="col-12">
              <IndexTable/>
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
      ranges: Ranges,
    }
  },
}
</script>