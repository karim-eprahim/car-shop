// import "mdb-vue-ui-kit/css/mdb.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./scss/main.scss";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";

createApp(App).use(store).use(router).mount("#app");
