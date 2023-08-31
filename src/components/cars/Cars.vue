<template>
  <!-- <div class="justify-content-evenly row">
    <div class="col-4 each-car" v-for="(car, i) in carsInfo" :key="i">
      <img
        :src="getImageUrl(car.name, car.mainImage)"
        class="rounded d-block mx-auto"
      />
      <div class="info">
        <h3>{{ car.name }}</h3>
        <div class="text-center">
          <div class="float-start">
            <button type="button" class="btn btn-light">{{ car.price }}</button>
          </div>
          <div class="float-end">
            <RouterLink to="/about">
              <button type="button" class="btn btn-primary">Details</button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="justify-content-evenly row">
    <div
      class="card each-car"
      style="width: 18rem"
      v-for="(car, i) in carsInfo"
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
            <button type="button" class="btn btn-light">{{ car.price }}</button>
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
export default {
  name: "HomeView",
  data() {
    return {
      carsInfo: this.$attrs.carsData,
    };
  },
  methods: {
    getImageUrl(folderName, imageName) {
      let image = require.context("@/assets/");
      return image("./" + folderName + "/" + imageName);
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
</style>
