import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/pages/Home.vue";
import AboutUs from "./components/pages/AboutUs.vue";
import Institution from "./components/pages/Institution.vue";
import Login from "./components/pages/Login.vue";
import Contact from "./components/pages/Contact.vue";
import Search from "./components/pages/Search.vue";
import NotFound from "./components/pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/home", component: Home },
    { path: "/about", component: AboutUs },
    { path: "/institution/:id", props: true, component: Institution },
    { path: "/login", component: Login },
    { path: "/contact", component: Contact },
    { path: "/search", component: Search },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});
export default router;
