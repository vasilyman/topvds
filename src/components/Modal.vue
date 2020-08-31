<template>
  <div class="modal fade" :id="`serviceModal-${service}`" tabindex="-1" >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Service #{{service}} info</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <ShortServiceInfo :options="options" :show-logo="true"/>
          <div class="row">
            <div class="col-12 col-lg-8">
              <h2 class="text-center">Tariffs</h2>
              <table class="table">
                <thead class="bg-dark text-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Cores</th>
                    <th scope="col">RAM</th>
                    <th scope="col">Disk</th>
                  </tr>
                </thead>
                <tbody class="text-dark">
                  <tr v-for="(row, i) in Array(4)" :key="i">
                    <th scope="row">{{i+1}}</th>
                    <td>Name tariff {{i+1}}</td>
                    <td>200</td>
                    <td>200</td>
                    <td>200</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-12 col-lg-4">
              <div class="card bg-light rounded shadow border-0">
                <div class="card-body">
                  <div class="">
                    <h5 class="card-title">Payment methods:</h5>
                    <ul class="list-unstyled d-flex">
                      <li class="px-2">
                        <img class="w-100" src="../assets/images/payments/payment/master.png" alt="">
                      </li>
                      <li class="px-2">
                        <img class="w-100" src="../assets/images/payments/payment/paypals.png" alt="">
                      </li>
                      <li class="px-2">
                        <img class="w-100" src="../assets/images/payments/payment/rupay.png" alt="">
                      </li>
                    </ul>
                    <div class="row features">
                      <div class="col d-flex flex-column align-items-between">
                        <h5>Operating system:</h5>
                        <div class="icons rounded h1 text-center text-primary px-3" data-toggle="tooltip" title="Android">
                          <i class="uil uil-android"></i>
                        </div>
                      </div>
                      <div class="col d-flex flex-column justify-content-between">
                        <h5>Disk type:</h5>
                        <div class="icons rounded h1 text-center text-primary px-3" data-toggle="tooltip" title="HDD">
                          <i class="uil uil-hdd"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex mt-3 flex-column flex-sm-row">
            <h4 class="text-center text-secondary flex-grow-1 mr-sm-2">City: Moscow</h4>
            <div class="text-right">
              <button class="btn btn-primary mb-1">All tariffs</button>
              <button class="btn btn-warning mb-1">Go to the hoster site</button>
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
    service: Number,
    options: Array,
  },
  components: {
    'ShortServiceInfo': () => import(/* webpackChunkName: "ShortServiceInfo" */ '@/components/ShortServiceInfo.vue'),
  },
};
</script>
