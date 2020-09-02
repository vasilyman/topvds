<template>
  <IndexFilters :ranges="ranges"/>
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