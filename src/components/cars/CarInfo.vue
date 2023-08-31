<template>
  <div class="carInfo">
    <!-- <h1>{{ carFilId }}
              :src="getImageUrl(getCarInfo.name, getCarInfo.mainImage)"


    </h1>
    <h1>{{ getCarInfo.name }}</h1> -->
    <!--Main layout-->
    <div class="pt-1">
      <div class="container dark-grey-text mt-5">
        <!--Grid row-->
        <div class="row wow fadeIn">
          <!--Grid column-->
          <div class="col-md-6 mb-4">
            <img
              v-if="
                mainImageIs.length < 1
                  ? (mainImageIs = getImageUrl(
                      getCarInfo.name,
                      getCarInfo.mainImage
                    ))
                  : (mainImageIs = mainImageIs)
              "
              :src="mainImageIs"
              class="img-fluid rounded mainImage"
              alt=""
            />
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-md-6 mb-4">
            <!--Content-->
            <div class="p-4">
              <div class="mb-3">
                <a href="">
                  <span class="badge purple mr-1">{{ getCarInfo.name }}</span>
                </a>
                <a href="">
                  <span class="badge blue mr-1">{{ getCarInfo.model }}</span>
                </a>
                <a href="">
                  <span class="badge red mr-1">{{ getCarInfo.fillName }}</span>
                </a>
              </div>

              <p class="lead">
                <span class="mr-1">
                  <del>$200</del>
                </span>
                <span class="ms-4">{{ getCarInfo.price }}</span>
              </p>

              <p class="lead font-weight-bold fw-bold">Description</p>

              <p>
                {{ getCarInfo.description }} . Neque quibusdam quas a quis
                porro? Molestias illo neque eum in laborum.
              </p>

              <form class="d-flex gap-4 justify-content-left">
                <!-- Default input -->
                <input
                  type="number"
                  value="1"
                  aria-label="Search"
                  class="form-control"
                  style="width: 100px"
                />
                <button class="btn btn-primary btn-md my-0 p" type="submit">
                  Add to cart
                  <i class="fas fa-shopping-cart ml-1"></i>
                </button>
              </form>
            </div>
            <!--Content-->
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->

        <hr />

        <!--Grid row-->
        <div class="row d-flex justify-content-center wow fadeIn">
          <!--Grid column-->
          <div class="col-md-6 text-center">
            <h4 class="my-4 h4">Cars in the same brand</h4>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              suscipit modi sapiente illo soluta odit voluptates, quibusdam
              officia. Neque quibusdam quas a quis porro? Molestias illo neque
              eum in laborum.
            </p>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->

        <!--Grid row-->
        <div class="row wow fadeIn">
          <!--Grid column-->
          <div
            v-for="(eachCarImage, x) in getCarInfo.images"
            :key="x"
            class="col-lg-4 col-md-12 mb-4"
          >
            <img
              :src="getImageUrl(getCarInfo.name, eachCarImage)"
              @click="mainImageIs = getImageUrl(getCarInfo.name, eachCarImage)"
              class="img-fluid rounded"
              alt=""
            />
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <!-- <div class="col-lg-4 col-md-6 mb-4">
            <img
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/12.jpg"
              class="img-fluid"
              alt=""
            />
          </div> -->
          <!--Grid column-->

          <!--Grid column-->
          <!-- <div class="col-lg-4 col-md-6 mb-4">
            <img
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg"
              class="img-fluid"
              alt=""
            />
          </div> -->
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </div>
    </div>
    <!--Main layout-->
  </div>
</template>

<script>
// @ is an alias to /src

import getCarsInfo from "@/components/json/cars.json";
export default {
  name: "CarInfo",
  data() {
    return {
      myCarsDetails: getCarsInfo,
      carName: this.$route.params.carName,
      carFilId: this.$route.params.carFilId,
      mainImageIs: "",
    };
  },
  methods: {
    getImageUrl(folderName, imageName) {
      let image = require.context("@/assets/");
      return image("./" + folderName + "/" + imageName);
    },
  },
  computed: {
    getCarInfo() {
      let carData = "";
      for (let i = 0; i < this.myCarsDetails.length; i++) {
        if (this.myCarsDetails[i].fillName == this.carFilId) {
          carData = this.myCarsDetails[i];
        }
      }
      return carData;
    },
  },
};
</script>

<style>
.mainImage {
  height: 100% !important;
}
.badge {
  border-radius: 0.125rem;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  margin: 3px;
}
.purple {
  background-color: #9c27b0 !important;
}
.blue {
  background-color: #2196f3 !important;
}
.red {
  background-color: #f44336 !important;
}
</style>
