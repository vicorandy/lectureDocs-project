<template>
  <navigation-bar></navigation-bar>
  <router-view v-slot="slotProps">
    <transition name="route">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import NavigationBar from "./components/layout/Navigationbar.vue";
//testing
export default {
  components: { NavigationBar },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
#app {
  font-family: Poppins;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin: 0px;
  padding: 0px;
}
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-activie {
  transition: all 0.3s ease-in;
}
.route-leave-from,
.route-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
