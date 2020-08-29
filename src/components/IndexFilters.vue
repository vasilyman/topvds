<template>
  <div class="card border-0 sidebar sticky-bar">
    <div class="card-body p-0">
      <!-- FILTERS -->
      <div class="widget mt-4 pt-2">
        <h4 class="widget-title">Filters</h4>
        <div class="accordion" id="accordionExample">
          <div class="card border-0 rounded mb-2">
            <a data-toggle="collapse" href="#collapseone" class="faq position-relative" aria-expanded="true" aria-controls="collapseone">
              <div class="card-header border-0 bg-light p-3 pr-5" id="headingfifone">
                <h6 class="title mb-0">Set one</h6>
              </div>
            </a>
            <div id="collapseone" class="collapse show" data-parent="#accordionExample">
              <div class="card-body px-2 py-4">
                <h6 class="mb-3">Диск</h6>
                <div class="row mx-n2 mb-3">
                  <div class="col-6 px-2">
                    <multiselect
                      v-model="json.selected.disk_volume_from"
                      :options="json.options.disk_volume_from"
                      placeholder="От"
                      :showLabels="false"
                      tag-placeholder="Add this as new tag"
                      :searchable="false"
                      label="name"
                      track-by="value"
                      :taggable="false"
                      open-direction="bottom"
                    ></multiselect>
                  </div>
                  <div class="col-6 px-2">
                    <multiselect
                      v-model="json.selected.disk_volume_to"
                      :options="json.options.disk_volume_to"
                      placeholder="До"
                      :showLabels="false"
                      tag-placeholder="Add this as new tag"
                      :searchable="false"
                      label="name"
                      track-by="value"
                      :taggable="false"
                      open-direction="bottom"
                    ></multiselect>
                  </div>
                </div>
                <h6 class="">Память</h6>
                <div class="row mx-n2 mb-3">
                  <div class="col-6 px-2">
                    <multiselect
                      v-model="json.selected.ram_from"
                      :options="json.options.ram_from"
                      placeholder="От"
                      :showLabels="false"
                      tag-placeholder="Add this as new tag"
                      :searchable="false"
                      label="name"
                      track-by="value"
                      :taggable="false"
                      open-direction="bottom"
                    ></multiselect>
                  </div>
                  <div class="col-6 px-2">
                    <multiselect
                      v-model="json.selected.ram_to"
                      :options="json.options.ram_to"
                      placeholder="До"
                      :showLabels="false"
                      tag-placeholder="Add this as new tag"
                      :searchable="false"
                      label="name"
                      track-by="value"
                      :taggable="false"
                      open-direction="bottom"
                    ></multiselect>
                  </div>
                </div>
                <h6 class="">Частота ядра</h6>
                <div class="row mx-n2 mb-3">
                  <div class="col-6 px-2">
                    <multiselect
                      v-model="json.selected.cpu_freq_from"
                      :options="json.options.cpu_freq_from"
                      placeholder="От"
                      :showLabels="false"
                      tag-placeholder="Add this as new tag"
                      :searchable="false"
                      label="name"
                      track-by="value"
                      :taggable="false"
                      open-direction="bottom"
                    ></multiselect>
                  </div>
                  <div class="col-6 px-2">
                    <multiselect
                      v-model="json.selected.cpu_freq_to"
                      :options="json.options.cpu_freq_to"
                      placeholder="До"
                      :showLabels="false"
                      tag-placeholder="Add this as new tag"
                      :searchable="false"
                      label="name"
                      track-by="value"
                      :taggable="false"
                      open-direction="bottom"
                    ></multiselect>
                  </div>
                </div>
                <h6 class="">Ядра</h6>
                <div class="row mx-n2 mb-3">
                  <div class="col-6 px-2">
                    <multiselect
                      v-model="json.selected.cpu_cores_from"
                      :options="json.options.cpu_cores_from"
                      placeholder="От"
                      :showLabels="false"
                      tag-placeholder="Add this as new tag"
                      :searchable="false"
                      label="name"
                      track-by="value"
                      :taggable="false"
                      open-direction="bottom"
                    ></multiselect>
                  </div>
                  <div class="col-6 px-2">
                    <multiselect
                      v-model="json.selected.cpu_cores_to"
                      :options="json.options.cpu_cores_to"
                      placeholder="До"
                      :showLabels="false"
                      tag-placeholder="Add this as new tag"
                      :searchable="false"
                      label="name"
                      track-by="value"
                      :taggable="false"
                      open-direction="bottom"
                    ></multiselect>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card border-0 rounded mb-2">
            <a data-toggle="collapse" href="#collapsetwo" class="faq position-relative collapsed" aria-expanded="false" aria-controls="collapsetwo">
              <div class="card-header border-0 bg-light p-3 pr-5" >
                <h6 class="title mb-0">Set two</h6>
              </div>
            </a>
            <div id="collapsetwo" class="collapse" data-parent="#accordionExample">
              <div class="card-body px-2 py-4">
                <h6 class="">Цена</h6>
                <div class="row mx-n2 mb-3">
                  <div class="col-6 px-2">
                    <multiselect
                      v-model="json.selected.price_from"
                      :options="json.options.price_from"
                      placeholder="От"
                      :showLabels="false"
                      tag-placeholder="Add this as new tag"
                      :searchable="false"
                      label="name"
                      track-by="value"
                      :taggable="false"
                      open-direction="bottom"
                    ></multiselect>
                  </div>
                  <div class="col-6 px-2">
                    <multiselect
                      v-model="json.selected.price_to"
                      :options="json.options.price_to"
                      placeholder="До"
                      :showLabels="false"
                      tag-placeholder="Add this as new tag"
                      :searchable="false"
                      label="name"
                      track-by="value"
                      :taggable="false"
                      open-direction="bottom"
                    ></multiselect>
                  </div>
                </div>
                <h6 class="">Страна</h6>
                <multiselect
                  class="mb-3"
                  v-model="json.selected.location"
                  :options="json.options.location"
                  placeholder="Местоположение"
                  :showLabels="false"
                  tag-placeholder="Add this as new tag"
                  :searchable="false"
                  :hideSelected="true"
                  :close-on-select="false"
                  label="name"
                  track-by="value"
                  :multiple="true"
                  :taggable="false"
                  open-direction="bottom"
                ></multiselect>
                <h6 class="">Виртуализация</h6>
                <multiselect
                  class="mb-3"
                  v-model="json.selected.vz"
                  :options="json.options.vz"
                  placeholder="Виртуализация"
                  :showLabels="false"
                  tag-placeholder="Add this as new tag"
                  :searchable="false"
                  :hideSelected="true"
                  :close-on-select="false"
                  label="name"
                  track-by="value"
                  :multiple="true"
                  :taggable="false"
                  open-direction="bottom"
                ></multiselect>
                <h6 class="">Тип диска</h6>
                <multiselect
                  class="mb-3"
                  v-model="json.selected.disk_type"
                  :options="json.options.disk_type"
                  placeholder="Тип диска"
                  :showLabels="false"
                  tag-placeholder="Add this as new tag"
                  :searchable="false"
                  :hideSelected="true"
                  :close-on-select="false"
                  label="name"
                  track-by="value"
                  :multiple="true"
                  :taggable="false"
                  open-direction="bottom"
                ></multiselect>
              </div>
            </div>
          </div>
          <div class="card border-0 rounded mb-2">
            <a data-toggle="collapse" href="#collapsethree" class="faq position-relative collapsed" aria-expanded="false" aria-controls="collapsethree">
              <div class="card-header border-0 bg-light p-3 pr-5" id="headingthree">
                <h6 class="title mb-0">Set three</h6>
              </div>
            </a>
            <div id="collapsethree" class="collapse" aria-labelledby="headingthree" data-parent="#accordionExample">
              <div class="card-body px-2 py-4">
                <h6 class="">ОС</h6>
                <multiselect
                  class="mb-3"
                  v-model="json.selected.os"
                  :options="json.options.os"
                  placeholder="Образы системы"
                  :showLabels="false"
                  tag-placeholder="Add this as new tag"
                  :searchable="false"
                  :hideSelected="true"
                  :close-on-select="false"
                  label="name"
                  track-by="value"
                  :multiple="true"
                  :taggable="false"
                  open-direction="bottom"
                ></multiselect>
                <h6 class="">Способ оплаты</h6>
                <multiselect
                  class="mb-3"
                  v-model="json.selected.payment_type"
                  :options="json.options.payment_type"
                  placeholder="Способ оплаты"
                  :showLabels="false"
                  tag-placeholder="Add this as new tag"
                  :searchable="false"
                  :hideSelected="true"
                  :close-on-select="false"
                  label="name"
                  track-by="value"
                  :multiple="true"
                  :taggable="false"
                  open-direction="bottom"
                ></multiselect>
                <h6 class="">Трафик</h6>
                <multiselect
                  class="mb-3"
                  v-model="json.selected.bandwidth_limit"
                  :options="json.options.bandwidth_limit"
                  placeholder="Лимит трафика"
                  :showLabels="false"
                  tag-placeholder="Add this as new tag"
                  :searchable="false"
                  label="name"
                  track-by="value"
                  :taggable="false"
                  open-direction="bottom"
                ></multiselect>
                <h6 class="">Канал</h6>
                <multiselect
                  class="mb-3"
                  v-model="json.selected.bandwidth"
                  :options="json.options.bandwidth"
                  placeholder="Скорость канала"
                  :showLabels="false"
                  tag-placeholder="Add this as new tag"
                  :searchable="false"
                  :hideSelected="true"
                  :close-on-select="false"
                  label="name"
                  track-by="value"
                  :multiple="true"
                  :taggable="false"
                  open-direction="bottom"
                ></multiselect>
                <h6 class="">Администрирование</h6>
                <multiselect
                  class="mb-3"
                  v-model="json.selected.managed"
                  :options="json.options.managed"
                  placeholder="Администрирование"
                  :showLabels="false"
                  tag-placeholder="Add this as new tag"
                  :searchable="false"
                  :hideSelected="true"
                  :close-on-select="false"
                  label="name"
                  track-by="value"
                  :multiple="true"
                  :taggable="false"
                  open-direction="bottom"
                ></multiselect>
              </div>
            </div>
          </div>
      </div>
        <button class="btn btn-block btn-primary mt-2" @click.prevent="search">ПОДОБРАТЬ</button>
        <a href="javascript:void(0)" class="btn btn-block btn-light mt-2">СБРОСИТЬ</a>
      </div>
      <!-- FILTERS -->
    </div>
  </div>
</template>
<script>
export default {
  name: "filters",
  props: {
    ranges: Object,
  },
  data() {
    return {
      selected: "",
      debug: "",
      r: false,
      json: false,
      sliderOpts: {
        tooltip: "none",
        "enable-cross": false,
        dotSize: 17,
        height: 7
      }
    };
  },
  computed: {
    discData() {
      return this.json.options.disk_volume_from.map(el => el.value);
    },
    ramData() {
      return this.json.options.ram_from.map(el => el.value);
    },
    freqData() {
      return this.json.options.cpu_freq_from.map(el => el.value);
    },
    coreData() {
      return this.json.options.cpu_cores_from.map(el => el.value);
    },
    priceData() {
      return this.json.options.price_from.map(el => el.value);
    },
    discFilter: {
      get() {
        let from = this.json.selected.disk_volume_from;
        let to = this.json.selected.disk_volume_to;
        if (from === undefined) {
          from = this.json.options.disk_volume_from[0].value;
        }
        if (to === undefined) {
          to = this.json.options.disk_volume_to[
            this.json.options.disk_volume_to.length - 1
          ].value;
        }
        return [from, to];
      },
      set(val) {
        this.$set(this.json.selected, "disk_volume_from", val[0]);
        this.$set(this.json.selected, "disk_volume_to", val[1]);
      }
    },
    ramFilter: {
      get() {
        let from = this.json.selected.ram_from;
        let to = this.json.selected.ram_to;
        if (from === undefined) {
          from = this.json.options.ram_from[0].value;
        }
        if (to === undefined) {
          to = this.json.options.ram_to[this.json.options.ram_to.length - 1]
            .value;
        }
        return [from, to];
      },
      set(val) {
        this.$set(this.json.selected, "ram_from", val[0]);
        this.$set(this.json.selected, "ram_to", val[1]);
      }
    },
    freqFilter: {
      get() {
        let from = this.json.selected.cpu_freq_from;
        let to = this.json.selected.cpu_freq_to;
        if (from === undefined) {
          from = this.json.options.cpu_freq_from[0].value;
        }
        if (to === undefined) {
          to = this.json.options.cpu_freq_to[
            this.json.options.cpu_freq_to.length - 1
          ].value;
        }
        return [from, to];
      },
      set(val) {
        this.$set(this.json.selected, "cpu_freq_from", val[0]);
        this.$set(this.json.selected, "cpu_freq_to", val[1]);
      }
    },
    coreFilter: {
      get() {
        let from = this.json.selected.cpu_cores_from;
        let to = this.json.selected.cpu_cores_to;
        if (from === undefined) {
          from = this.json.options.cpu_cores_from[0].value;
        }
        if (to === undefined) {
          to = this.json.options.cpu_cores_to[
            this.json.options.cpu_cores_to.length - 1
          ].value;
        }
        return [from, to];
      },
      set(val) {
        this.$set(this.json.selected, "cpu_cores_from", val[0]);
        this.$set(this.json.selected, "cpu_cores_to", val[1]);
      }
    },
    priceFilter: {
      get() {
        let from = this.json.selected.price_from;
        let to = this.json.selected.price_to;
        if (from === undefined) {
          from = this.json.options.price_from[0].value;
        }
        if (to === undefined) {
          to = this.json.options.price_to[this.json.options.price_to.length - 1]
            .value;
        }
        return [from, to];
      },
      set(val) {
        this.$set(this.json.selected, "price_from", val[0]);
        this.$set(this.json.selected, "price_to", val[1]);
      }
    }
  },
  mounted() {
    this.json = this.ranges;
    console.log(this.json);
  },
  methods: {
    countryChange(show, value) {
      console.log('change', show, value)
      if (!this.json.selected.location) this.json.selected.location = [];
      if (show) {
        this.json.selected.location.push(value);
      } else {
        this.removeValue(this.json.selected.location, value);
      }
    },
    removeValue(arr, value) {
      let idx = arr.findIndex(value);
      if (idx >= 0) {
        arr.splice(idx, 1);
      }
    },
    search() {
      var query;
      console.log(this.json);
      query = _.pickBy(this.json.selected, function(v, k) {
        return !_.isEmpty(v) || _.isNumber(v);
      });
      let q = {};
      for (let key in query) {
        let v = query[key];
        console.log(key);
        if (_.isArray(v)) {
          q[key] = _.map(v, function(val) {
            return typeof val === "object" ? val.value : val;
          })
            .sort()
            .join(",");
        } else {
          if (typeof v === "object") {
            q[key] = v.value;
          } else {
            q[key] = v;
          }
        }
      }
      query = q;
      // query = _.mapValues(query, function(v, k) {
      //   console.log(v, k);
      //   if (_.isArray(v)) {
      //     return _.map(v, function(val) {
      //       return typeof val === "object" ? val.value : val;
      //     })
      //       .sort()
      //       .join(",");
      //   } else {
      //     if (typeof v === "object") {
      //       console.log("returning obj", v);
      //       return v.value;
      //     } else {
      //       console.log("returning ", v);
      //       return v;
      //     }
      //   }
      // });
      console.log(query);
      var query_string = "?" + $.param(query);
      axios
        .get("/" + query_string + "&timestamp=" + new Date().getTime())
        .then(response => {
          window.stats_data = response.data.stats;
          window.stats_data.type = "show";
          window.history.pushState(response.data, "Filter", query_string);
          addEventListener("popstate", this.onHistoryMove);
          this.makeFilter(response.data);
        });
    },
    makeFilter(data) {
      $("#head").html(data.head);
      $("ul.pagination").html(data.pagination);
      $("#tarif-list").html(data.html);
      window.stats.default.fp(data.stats);
    },
    reset() {
      this.json.selected = {};
      this.search();
    },
    onHistoryMove(e) {
      console.log(e);
      if (e.state) {
        this.makeFilter(e.state);
      } else {
        document.location.reload(true);
      }
      this.json = this.ranges;
    },
    onSelect(option, id) {
      console.log(this.selected);
      //console.log(id);
    }
  },
  filters: {
    gb(val) {
      let num = parseInt(val);
      if (num >= 1024) {
        num /= 1024;
        num = Math.round(num);
        num += " GB";
      } else {
        num += " MB";
      }
      return num;
    }
  }
};
</script>
