<template>
  <div class="card border-light">
    <div class="card-header">Фильтры</div>
    <div class="card-body">
      <form id="filters" v-if="json">
        <div class="row row-cols-2 row-cols-lg-3 row-cols-xl-4 text-center">
          <div class="col">
            <h6 class="text-primary">Диск</h6>
            <div class="row">
              <div class="col-12 col-md-6 mb-2">
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
              <div class="col-12 col-md-6 mb-2">
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
          </div>
          <div class="col mb-2">
            <h6 class="text-primary">Память</h6>
            <div class="row">
              <div class="col-12 col-md-6 mb-2">
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
              <div class="col-12 col-md-6 mb-2">
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
          </div>
          <div class="col mb-2">
            <h6 class="text-primary">Частота ядра</h6>
            <div class="row">
              <div class="col-12 col-md-6 mb-2">
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
              <div class="col-12 col-md-6 mb-2">
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
          </div>
          <div class="col mb-2">
            <h6 class="text-primary">Ядра</h6>
            <div class="row">
              <div class="col-12 col-md-6 mb-2">
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
              <div class="col-12 col-md-6 mb-2">
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
          <div class="col mb-2">
            <h6 class="text-primary">Цена</h6>
            <div class="row">
              <div class="col-12 col-md-6 mb-2">
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
              <div class="col-12 col-md-6 mb-2">
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
          </div>
          <div class="col mb-2">
            <h6 class="text-primary">Страна</h6>
            <multiselect
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
          </div>
          <div class="col mb-2">
            <h6 class="text-primary">Виртуализация</h6>
            <multiselect
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
          </div>
          <div class="col mb-2">
            <h6 class="text-primary">Тип диска</h6>
            <multiselect
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
          <div class="col mb-2">
            <h6 class="text-primary">ОС</h6>
            <multiselect
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
          </div>
          <div class="col mb-2">
            <h6 class="text-primary">Способ оплаты</h6>
            <multiselect
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
          </div>
          <div class="col mb-2">
            <h6 class="text-primary">Трафик</h6>
            <multiselect
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
          </div>
          <div class="col mb-2">
            <h6 class="text-primary">Канал</h6>
            <multiselect
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
          </div>
          <div class="col mb-2">
            <h6 class="text-primary">Администрирование</h6>
            <multiselect
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
        <button class="btn btn-warning mt-3" @click.prevent="search">ПОДОБРАТЬ</button>
      </form>
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