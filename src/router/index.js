import Vue from "vue";
import VueRouter from "vue-router";
import costConsumption from "../view/costConsumption/index.vue";
import costBreakdown from "../view/costBreakdown/index.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "/costConsumption"
  },
  {
    path: "/costConsumption",
    component: costConsumption
  },
  {
    path: "/costBreakdown",
    component: costBreakdown
  }
];
const router = new VueRouter({
  routes
});
export default router;
