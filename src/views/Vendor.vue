<template>
  <div class="section">
    <div class="container">
      <h1 class="display-4 text-center">Title</h1>
      <div class="row mb-3">
        <div class="col-lg-3 col-md-12 mb-3">
          <div class="d-flex flex-row-reverse flex-lg-column">
            <div class="flex-grow-1 px-3"><h2 class="text-center">Hoster name</h2></div>
            <div class=""><img class="w-100" src="https://via.placeholder.com/200" alt="logo"></div>
          </div>
        </div>
        <div class="col-lg-5 col-md-6 col-12 mb-3">
          <div class="mb-5">
            <div class="row">
              <div class="col-lg-12">
                <ul class="nav nav-pills nav-justified flex-row rounded" id="pills-tab" role="tablist">
                        
                  <li class="nav-item">
                    <a class="nav-link rounded active" id="pills-smart-tab" data-toggle="pill" href="#pills-smart" role="tab" aria-controls="pills-smart" aria-selected="true">
                      <div class="text-center pt-1 pb-1">
                        <h4 class="title font-weight-normal mb-0">About</h4>
                      </div>
                    </a><!--end nav link-->
                  </li><!--end nav item-->
                        
                  <li class="nav-item">
                    <a class="nav-link rounded" id="pills-apps-tab" data-toggle="pill" href="#pills-apps" role="tab" aria-controls="pills-apps" aria-selected="false">
                      <div class="text-center pt-1 pb-1">
                        <h4 class="title font-weight-normal mb-0">Cupons</h4>
                      </div>
                    </a><!--end nav link-->
                  </li><!--end nav item-->
                </ul><!--end nav pills-->
              </div><!--end col-->
            </div><!--end row-->

            <div class="row pt-2">
              <div class="col-12">
                <div class="tab-content" id="pills-tabContent">
                  
                  <div class="tab-pane fade show active" id="pills-smart" role="tabpanel" aria-labelledby="pills-smart-tab">
                    <p class="text-muted mb-0">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>                       
                  </div><!--end teb pane-->

                  <div class="tab-pane fade" id="pills-apps" role="tabpanel" aria-labelledby="pills-apps-tab">
                    <p class="text-muted mb-0">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>                       
                  </div><!--end teb pane-->
                </div><!--end tab content-->
              </div><!--end col-->
            </div><!--end row-->
          </div>
          <button class="btn btn-pills btn-soft-danger btn-block">Visit hoster</button>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <div class="card bg-light rounded shadow border-0">
            <div class="card-body py-5">
              <div class="">
                <h5 class="card-title text-center text-primary">Payment methods</h5>
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
                <div class="table-responsive">
                  <table class="table table-center table-padding mb-0">
                    <tbody>
                      <tr>
                        <td class="h6 border-0">Site</td>
                        <td class="text-right font-weight-bold border-0">timeweb.com</td>
                      </tr>
                      <tr>
                        <td class="h6">Tariffs num</td>
                        <td class="text-right font-weight-bold">20</td>
                      </tr>
                      <tr>
                        <td class="h6 border-0">Added date</td>
                        <td class="text-right font-weight-bold border-0">26.08.2017</td>
                      </tr>
                      <tr>
                        <td class="h6">Currency</td>
                        <td class="text-right font-weight-bold">RUB</td>
                      </tr>
                      <tr>
                        <td class="h6">Country</td>
                        <td class="text-right font-weight-bold">Russia</td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="mt-4 pt-2">
                    <a href="" class="btn btn-block btn-primary">Place Order</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>Tariffs</h2>
      <Table/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
}
</script>