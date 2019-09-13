import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    }
  ]
});
