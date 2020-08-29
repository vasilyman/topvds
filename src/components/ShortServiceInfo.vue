<template>
  <div class="h-100 media text-left pb-3 ">
    <div class="text-primary h4 mb-0 pr-3 w-4 w-sm-3 w-lg-2">
      <img src="https://via.placeholder.com/150" class="card-img mb-2" alt="">
      <h5 class="title text-center">Tarif name</h5>
    </div>
    <div
      class="h-100 media-body pl-3"
    >
      <div class="h-100 d-flex flex-column justify-content-between">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
          <div class="col" v-for="(option, i) in options" :key="i">
            <div class="media align-items-center text-left mt-1">
              <div class="text-primary h4 mb-0">
                <i class="uil uil-file"></i>
              </div>
              <div class="media-body pl-3">
                {{option.title}}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="d-flex justify-content-end mt-5">
            <div class="text-right">
              <a
                href="#"
                class="btn btn-sm btn-primary mb-1"
                data-toggle="modal"
                :data-target="`#serviceModal-${service}`"
                @click="$emit('open-service')"
              >Open service</a>
              <a
                class="btn btn-sm btn-outline-info table-card-row-more mb-1"
                data-toggle="collapse"
                :href="`#collapse-${_uid}`"
                :aria-controls="`collapse-${_uid}`"
                @click.prevent=""
              >More detailed</a>
            </div>
          </div>
          <div :id="`collapse-${_uid}`" class="collapse" aria-labelledby="headingfifone">
            <div class="py-3">
              <p class="mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    options: Array,
    service: Number,
  }
}
</script>
