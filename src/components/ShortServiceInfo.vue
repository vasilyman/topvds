<template>
  <div>
    <div class="h-100 media text-left pb-3 ">
      <div class="text-primary h4 mb-0 pr-3 w-max-4 w-sm-auto" v-if="showLogo">
        <img src="https://via.placeholder.com/150" class="w-100 mb-2" alt="">
        <h5 class="title text-center">Tarif name</h5>
      </div>
      <div
        class="h-100 media-body pl-3"
      >
        <div class="h-100 d-flex flex-column flex-lg-row justify-content-between">
          <div class="d-flex flex-grow-1 flex-column">
            <div
              class="row  row-cols-sm-2 row-cols-lg-3 row-cols-xl-4"
              :class="showLogo ? 'row-cols-1' : 'row-cols-2'"
            >
              <div class="col mb-2" v-for="(option, i) in options" :key="i">
                <div class="media align-items-center text-left mt-1" data-toggle="tooltip" :title="option.title">
                  <div class="text-primary h4 mb-0">
                    <i class="uil" :class="option.icon"></i>
                  </div>
                  <div class="media-body pl-3">
                    {{option.value}}
                  </div>
                </div>
              </div>
            </div>
            <div class="text-right" v-show="!openServiceButton">
              <a
                class="btn btn-sm btn-outline-info table-card-row-more mb-1"
                data-toggle="collapse"
                :href="`#collapse-${_uid}`"
                :aria-controls="`collapse-${_uid}`"
                @click.prevent=""
              >More detailed
                <i class="uil uil-angle-down"></i>
              </a>
            </div>
          </div>
          <div v-show="openServiceButton">
            <div class="d-flex justify-content-end ml-3">
              <div class="text-right">
                <a
                  href="#"
                  class="btn btn-block btn-sm btn-primary mb-1 table-card-row-open text-nowrap"
                  data-toggle="modal"
                  :data-target="`#serviceModal-${service}`"
                  @click="$emit('open-service')"
                >Open service</a>
                <a
                  class="btn btn-block btn-sm btn-info table-card-row-more mb-1 text-nowrap"
                  href="https://site.com"
                  target="_blank"
                >{{options.filter((el) => el.name === 'price')[0].value}}
                  <i class="uil uil-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :id="`collapse-${_uid}`" class="collapse bg-light p-2 mb-3" aria-labelledby="headingfifone">
      <div class="row py-3">
        <ul class="col list-unstyled" v-for="(ul, i) in Array(4)" :key="i">
          <li v-for="(il, ii) in Array(4)" :key="ii"><i class="uil uil-check text-success" ></i> Info</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    options: Array,
    service: Number,
    openServiceButton: Boolean,
    showLogo: Boolean,
  }
}
</script>
