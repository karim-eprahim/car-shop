<template>
  <div class="home">
    <div class="sidebar">
      <!-- <div class="before"><i class="fa-solid fa-angles-right"></i></div> -->
      <sidebar class="move" :carsData="myCars"></sidebar>
    </div>
    <div class="col-10 fwidth">
      <cars :carsData="myCars"></cars>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from "@/components/sidebar/Sidebar.vue";
import Cars from "@/components/cars/Cars.vue";
import getCarsJson from "@/components/json/cars.json";
export default {
  name: "HomeView",
  data() {
    return {
      myCars: getCarsJson,
    };
  },
  components: {
    Sidebar,
    Cars,
  },
};
</script>

<style scoped>
.home {
  /* display: flex; */
  overflow: hidden;
  /* margin-top: 57px; */
}
.sidebar {
  float: left;
  position: fixed;
}
.fwidth {
  /* width: 100% !important; */
  width: calc(100vw - 303px);
  float: right;
}
@media (max-width: 787px) {
  .sidebar {
    display: none;
  }
  .fwidth {
    width: 100% !important;
  }
}
</style>
