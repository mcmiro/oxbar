<template>
  <div :style="{ backgroundColor: theme[activeTheme].backgroundColor }">
    <b-container>
      <div class="pt-3"></div>
      <NavBar :logo="theme[activeTheme].logo" :menu="theme[activeTheme].menu" />
      <div class="pt-3"></div>
      <Header />
    </b-container>
    <div class="pt-5"></div>
    <Hello :class="theme[activeTheme].menu.class" />
    <Bar />
    <Instagram :class="theme[activeTheme].menu.class" />
    <MenuCard :class="theme[activeTheme].menu.class" />
    <div class="bg-white">
      <div class="pt-5"></div>
      <Footer />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Header,
    // lazy loading components
    Hello: () => import(/* webpackPrefetch: true */ "./components/Hello.vue"),
    Bar: () => import(/* webpackPrefetch: true */ "./components/Bar.vue"),
    Instagram: () =>
      import(/* webpackPrefetch: true */ "./components/Instagram.vue"),
    MenuCard: () =>
      import(/* webpackPrefetch: true */ "./components/MenuCard.vue"),
    Footer,
  },
  data() {
    return {
      activeTheme: "dark",
      theme: {
        yellow: {
          logo: {
            url: require("@/assets/images/logo.svg"),
          },
          menu: {
            url: require("@/assets/images/tools/menu-line.svg"),
            class: "light",
          },
          backgroundColor: "#F8D247 !important",
        },
        light: {
          logo: {
            url: require("@/assets/images/logo.svg"),
          },
          menu: {
            url: require("@/assets/images/tools/menu-line.svg"),
            class: "light",
          },
          backgroundColor: "rgba(249,249,249,1) !important",
        },
        dark: {
          logo: {
            url: require("@/assets/images/logo-white.svg"),
          },
          menu: {
            url: require("@/assets/images/tools/menu-line-white.svg"),
            class: "dark",
          },
          backgroundColor: "rgba(0,0,0,1) !important",
        },
      },
    };
  },
};
</script>

<style lang="scss">
.themeChooser {
  position: fixed;
  right: 10px;
  bottom: 20px;
  background-color: #fff;
  border-radius: 50px;
  box-shadow: 0 8px 20px 0 rgba(0, 30, 60, 0.12);
  z-index: 999999;
  .colorPicker {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 5px;

    &.dark {
      background-color: #000;
    }
    &.yellow {
      background-color: #f8d247;
    }
    &.light {
      background-color: rgba(249, 249, 249, 1);
    }
  }
}
</style>