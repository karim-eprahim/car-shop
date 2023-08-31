<template>
  <div class="error-page-details">
    <img class="error-img" src="../../assets/error-page.svg" alt="" />
    <button type="button" @click="goBack()" class="btn error">Go Back</button>
    <!-- <router-link class="router" to="/">
      <button class="btn error">Home</button>
    </router-link> -->
  </div>
</template>

<script>
export default {
  name: "ErrorPageDetails",
  components: {},
  methods: {
    goBack() {
      console.log(this.$router.back());
      // this.$router.push({ path: "/" });
    },
  },
};
</script>

<style scoped>
.error-page-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  align-items: center;
  width: 69vw;
  margin: auto;
}
.error-img {
  max-width: 60%;
  min-width: 300px;
}
button.btn.error {
  background-color: #4ad295;
  padding: 7px 33px;
  font-weight: bold;
  color: #ffffff;
}
button.btn.error:hover {
  background-color: #70df70;
  color: rgb(255, 255, 255);
}
</style>
