<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav>
      <div class="branding">
        <h1>Lecture Doc</h1>
      </div>
      <ul v-show="!mobile" class="navigation">
        <li><router-link class="link" to="/home">Home</router-link></li>
        <li><router-link class="link" to="/about">About us</router-link></li>
        <li>
          <router-link class="link" to="/institution">Institution</router-link>
        </li>
        <li><router-link class="link" to="/contact">Contact</router-link></li>
        <li>
          <router-link class="link nav-grn" to="/login">Login</router-link>
        </li>
      </ul>
      <div class="icon">
        <div
          @click="toggleMobileNav"
          v-show="mobile"
          class="fa fa-bars"
          :class="{ 'icon-active': mobileNav }"
        >
          &#9776;
        </div>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <router-link @click="closeMobileNav" class="link" to="/home"
              >Home</router-link
            >
          </li>
          <li>
            <router-link @click="closeMobileNav" class="link" to="/about"
              >About us</router-link
            >
          </li>
          <li>
            <router-link @click="closeMobileNav" class="link" to="/institution"
              >Institution</router-link
            >
          </li>
          <li>
            <router-link @click="closeMobileNav" class="link" to="/contact"
              >Contact</router-link
            >
          </li>
          <li>
            <router-link @click="closeMobileNav" class="link" to="/login"
              >Logins</router-link
            >
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    this.checkScreen();
    window.addEventListener("resize", this.checkScreen);
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    closeMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 800) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>
<style scoped>
a:active,
a:hover,
a.router-link-active {
  border-top: 3px solid rgb(90, 231, 90);
  background: rgb(90, 231, 90);
  padding: 4px 10px;
}
header {
  background-color: transparent;
  z-index: 90;
  width: 100%;
  position: fixed;
  transition: 0.3s ease all;
  color: white;
  top: 0;
  left: 0;
  right: 0;
}

header nav {
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 2px 0;
  transition: 0.3s ease all;
  width: 90%;
  margin: 0 29px;
  @media (min-width: 1140px;) {
    max-width: 1140px;
  }
}
header nav ul,
.link {
  font-weight: 500;
  color: white;
  list-style: none;
  text-decoration: none;
}
header nav li {
  padding: 15px;
  margin-left: 15px;
}
header nav .link {
  font-size: 14px;
  transition: 0.5 ease all;
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;
}
/* header nav .link:hover {
  color: #ec30cd;
  border-color: #ec30cd;
} */
header nav .branding {
  display: flex;
  align-items: center;
}
header nav .branding img {
  width: 50px;
  transition: 0.5s ease all;
}
header nav .navigation {
  display: flex;
  align-content: center;
  flex: 1;
  justify-content: flex-end;
}
header nav .icon {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 24px;
  height: 100%;
}
header nav .icon div {
  cursor: pointer;
  font-size: 24px;
  transition: 0.8s ease all;
}
header nav .icon-active {
  transform: rotate(180deg);
}
header nav .nav-grn {
  background: rgb(90, 231, 90);
  border-radius: 12px;
  padding: 6px 10px;
}
header nav .dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 290px;
  height: 100%;
  background-color: rgb(49, 47, 47);
  top: 0;
  left: 0;
  margin: 0;
}
header nav .dropdown-nav li {
  margin-left: 0;
}
header nav .dropdown-nav .link {
  color: whitesmoke;
}
.scrolled-nav {
  background-color: rgb(90, 231, 90);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.scrolled-nav nav {
  padding: 0;
}
.scrolled-nav nav .branding img {
  width: 40px;

  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 0.3s ease-in-out all;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translatex(-250px);
}

.mobile-nav-enter-to,
.mobile-nav-leave-from {
  transform: translatex(0);
}
</style>
