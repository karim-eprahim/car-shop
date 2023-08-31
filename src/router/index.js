import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import Categories from "../views/Categories.vue";
import Contact from "../views/Contact.vue";
import ErrorPage from "../views/ErrorPage.vue";
import CarInfo from "../components/cars/CarInfo.vue";
import EachCar from "../components/cars/EachCar.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/categories",
    name: "Categories",
    component: Categories,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/view/car/:carType",
    name: "EachCar",
    component: EachCar,
  },
  {
    path: "/view/car/:carName/:carFilId",
    name: "CarInfo",
    component: CarInfo,
  },
  {
    path: "/:catchAll(.*)",
    name: "ErrorPage",
    component: ErrorPage,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.afterEach((to) => {
  // console.log(from.name);
  // console.log(to.name);
  let home = to.name;
  if (home == "home") {
    home = "";
  }
  document.title = `${process.env.VUE_APP_TITLE} / ${home}`;
  // next();
});

export default router;
