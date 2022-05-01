import { createStore } from "vuex";
import Schools from "./modules/schools/index.js";

const store = createStore({
  modules: {
    Schools: Schools,
  },
});
export default store;
