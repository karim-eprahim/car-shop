<template>
  <div id="app">
    <Mainmenu class="fixed-top"></Mainmenu>
  </div>
  <router-view class="sens" />
</template>

<script>
import Mainmenu from "./components/navbar/Mainmenu.vue";
const components = {
  Mainmenu,
};
export default {
  components,
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
.sens {
  padding-top: 67px;
  margin-top: 0;
}
</style>
