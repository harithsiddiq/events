import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import AboutView from "../views/AboutView.vue";
import EventDetails from "../views/EventDetails.vue";
import CardOne from "../components/CardOne.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: EventList,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView
  },
  {
    path: "/event/:id",
    props: true,
    name: "EventDetails",
    component: EventDetails
  },
  {
    path: "/page",
    name: "Page",
    component: CardOne
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;




// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
//   component: () =>
//     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),