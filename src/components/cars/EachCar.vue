<template>
  <div class="justify-content-evenly row foo">
    <div
      class="card each-car"
      style="width: 18rem"
      v-for="(car, i) in getCarInfo"
      :key="i"
    >
      <img :src="getImageUrl(car.name, car.mainImage)" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ car.name }}</h5>
        <p class="card-text">
          {{ car.description }}
        </p>
        <div class="text-center">
          <div class="float-start">
            <button type="button" class="btn btn-light">
              {{ car.price }}
            </button>
          </div>
          <div class="float-end">
            <RouterLink
              :to="{
                name: 'CarInfo',
                params: { carName: car.name, carFilId: car.fillName },
              }"
            >
              <button type="button" class="btn btn-primary">Details</button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import getCarsJson from "@/components/json/cars.json";
export default {
  name: "EachCar",
  data() {
    return {
      myCarsDetails: getCarsJson,
      carType: this.$route.params.carType,
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
      let carData = [];
      for (let i = 0; i < this.myCarsDetails.length; i++) {
        if (this.myCarsDetails[i].name == this.carType) {
          carData.push(this.myCarsDetails[i]);
        }
      }
      return carData;
    },
  },
};
</script>

<style lang="scss" scoped>
.each-car {
  background-color: white;
  padding: 0;
  border: 4px solid #eee;
  border-radius: 6px;
  img {
    width: 100%;
    height: 23vh;
    border-radius: 4px;
  }
  .info {
    padding: 10px;
  }
}
.foo {
  //   margin-top: 5rem;
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  //   height: 100vh;
}
</style>
