<template>
  <div class="card border-0 sidebar sticky-bar">
    <div class="card-body p-0">
      <!-- FILTERS -->
      <div class="widget mt-4 pt-2">
        <h4 class="widget-title">Filters</h4>
        <div class="accordion faq-content" id="accordionExample">
          <template v-for="(control, i) in [
              {
                title: 'Диск',
                key: 'disk_volume_from',
                key2: 'disk_volume_to',
              },
              {
                title: 'Память',
                key: 'ram_from',
                key2: 'ram_to',
              },
              {
                title: 'Частота ядра',
                key: 'cpu_freq_from',
                key2: 'cpu_freq_to',
              },
              {
                title: 'Ядра',
                key: 'cpu_cores_from',
                key2: 'cpu_cores_to',
              },
              {
                title: 'Цена',
                key: 'price_from',
                key2: 'price_to',
              },
              {
                title: 'Трафик',
                key: 'bandwidth_limit',
              },
            ]">
            <div class="card border-0 rounded mb-2" :key="`${control.key}`">
              <a data-toggle="collapse" :href="`#option-slider-${i}`" class="faq position-relative collapsed" :aria-controls="`option-slider-${i}`">
                <div class="card-header border-0 bg-light p-3 pr-5">
                  <h6 class="title mb-0">{{control.title}}</h6>
                </div>
              </a>
              <div
                :id="`option-slider-${i}`"
                class="collapse"
                data-parent="#accordionExample"
              >
                <div class="card-body px-2 py-4">
                  <vue-slider
                    v-if="'key2' in control"
                    :value="[
                      Number.parseInt(json.selected[control.key] || min(json.options[control.key])),
                      Number.parseInt(json.selected[control.key2] || max(json.options[control.key2]))
                    ]"
                    :tooltip-formatter="(v) => getOptionNameByValue(control.key, Number.parseInt(v)) || v"
                    :adsorb="true"
                    :data="json.options[control.key].map(el => Number.parseInt(el.value))"
                    :min="min(json.options[control.key])"
                    :max="max(json.options[control.key2])"
                    :lazy="true"
                    :duration="0"
                    @change="(value, index) => {
                      $set(json, 'selected', {
                        ...json.selected,
                        [control.key]: value[0],
                        [control.key2]: value[1],
                      })
                    }"
                    :tooltip="'always'"
                    :enable-cross="false">
                  </vue-slider>
                  <vue-slider
                    v-else
                    :value="Number.parseInt(json.selected[control.key] || min(json.options[control.key]))"
                    :tooltip-formatter="(v) => getOptionNameByValue(control.key, Number.parseInt(v)) || v"
                    :adsorb="true"
                    :data="json.options[control.key].map(el => Number.parseInt(el.value))"
                    :min="min(json.options[control.key])"
                    :max="max(json.options[control.key])"
                    :lazy="true"
                    :duration="0"
                    @change="(value, index) => {
                      $set(json, 'selected', {
                        ...json.selected,
                        [control.key]: value,
                      })
                    }"
                    :tooltip="'always'"
                    :enable-cross="false">
                  </vue-slider>
                </div>
              </div>
              <div class="card-footer" v-if="control.key in json.selected">
                <small class="text-muted" v-if="'key2' in control">
                  {{getOptionNameFromSelected(control.key) || json.selected[control.key]}} -
                  {{getOptionNameFromSelected(control.key2) || json.selected[control.key2]}}
                </small>
                <small class="text-muted" v-else>
                  {{getOptionNameFromSelected(control.key) || json.selected[control.key]}}
                </small>
              </div>
            </div>
          </template>
          <template v-for="(control, i) in [
              {
                title: 'Страна',
                key: 'location',
              },
              {
                title: 'Виртуализация',
                key: 'vz',
              },
              {
                title: 'Тип диска',
                key: 'disk_type',
              },
              {
                title: 'ОС',
                key: 'os',
              },
              {
                title: 'Способ оплаты',
                key: 'payment_type',
              },
              {
                title: 'Канал',
                key: 'bandwidth',
              },
              {
                title: 'Администрирование',
                key: 'managed',
              },
            ]">
            <div class="card border-0 rounded mb-2" :key="`${control.key}`">
              <a data-toggle="collapse" :href="`#option-select-${i}`" class="faq position-relative collapsed" :aria-controls="`option-select-${i}`">
                <div class="card-header border-0 bg-light p-3 pr-5" >
                  <h6 class="title mb-0">{{control.title}}</h6>
                </div>
              </a>
              <div :id="`option-select-${i}`" class="collapse" data-parent="#accordionExample">
                <div class="card-body px-2 py-4">
                  <multiselect
                    class="mb-3"
                    v-model="json.selected[control.key]"
                    :options="json.options[control.key]"
                    :placeholder="control.title"
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
              <div class="card-footer" v-if="control.key in json.selected">
                <div class="">
                  <span class="badge badge-outline-secondary mr-2 mb-2" v-for="(badge, ii) in json.selected[control.key]" :key="ii">{{badge.name}}</span>
                </div>
              </div>
            </div>
          </template>
        </div>
        <button class="btn btn-block btn-primary mt-2" @click.prevent="search">ПОДОБРАТЬ</button>
        <a href="javascript:void(0)" class="btn btn-block btn-light mt-2">СБРОСИТЬ</a>
      </div>
      <!-- FILTERS -->
    </div>
  </div>
</template>
<script>
import VueSlider from 'vue-slider-component';
import axios from 'axios';

export default {
  name: "filters",
  components: {
    VueSlider,
  },
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
      },
      disk: {
        value: [0, 100],
        min: 0,
        max: 100,
      },
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
    min(nums) {
      return Math.min(...nums.map((el) => Number.parseInt(el.value)).filter((el) => !Number.isNaN(el)));
    },
    max(nums) {
      return Math.max(...nums.map((el) => Number.parseInt(el.value)).filter((el) => !Number.isNaN(el)));
    },
    getOptionNameFromSelected(key) {
      return this.getOptionNameByValue(key, this.json.selected[key])
    },
    getOptionNameByValue(key, val) {
      const filtered = this.json.options[key]
        .filter(el => el.value === val)[0]
      return filtered ? filtered.name : false;
    },
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
        .get("http://topvds.ru/" + query_string + "&timestamp=" + new Date().getTime())
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
<style lang="scss">
  /* Set the theme color of the component */
  $themeColor: #6fcc8b;

  /* import theme style */
  @import '~vue-slider-component/lib/theme/default.scss';

  .vue-slider {
    margin: 35px 25px 0px 25px;
  }
</style>
