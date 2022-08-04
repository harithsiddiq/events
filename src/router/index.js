import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import AboutView from "../views/AboutView.vue";
import LayoutCom from '../views/event/LayoutCom.vue'
import DetailsComponent from '../views/event/DetailsComponent.vue'
import RegisterComponent from '../views/event/RegisterComponent.vue'
import EditComponent from '../views/event/EditComponent.vue'
import CardOne from "../components/CardOne.vue";
import RegisterAuth from '../views/auth/RegisterCom.vue'
import LoginAuth from '../views/auth/LoginCom.vue'
import AuthLayout from '../views/auth/AuthLayout.vue'
const routes = [
  {
    path: "/",
    name: "Home",
    props: function(route) {
      return {page: parseInt(route.query.page) || 1}
    },
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
    name: "LayoutCom",
    component: LayoutCom,
    children: [
      {
        path: "",
        name: "EventDetails",
        component: DetailsComponent
      },
      {
        path: "auth",
        name: "AuthLayout",
        component: AuthLayout,
        children: [
          {
            path: "register",
            name: "RegisterAuth",
            component: RegisterAuth
          },
          {
            path: "login",
            name: "LoginAuth",
            component: LoginAuth
          }
        ]
      },
      {
        path: "edit",
        name: "Edit",
        component: EditComponent
      },
    ]
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