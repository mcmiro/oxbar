<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <b-navbar-brand href="/" class="logo-top"><img :src="logo.url"
          alt="Logo OX Sports Bar"></b-navbar-brand>
      <div class="navbar-toggler-custom" :class="{open: show}" @click="show = !show">
        <div class="menu-line-a"><img :src="menu.url" alt=""></div>
        <div class="menu-line-b"><img :src="menu.url" alt=""></div>
        <div class="menu-line-c"><img :src="menu.url" alt=""></div>
      </div>
      <div class="navbar-collapse" :class="{show: show}">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav :class="menu.class">
            <b-nav-item href="/">HOME</b-nav-item>
            <b-nav-item href="#" @click="show = false" v-scroll-to="'#hello'">HELLO</b-nav-item>
            <b-nav-item href="#" @click="show = false" v-scroll-to="'#bar'">BAR</b-nav-item>
            <b-nav-item href="#" @click="show = false" v-scroll-to="'#instagram'">INSTAGRAM</b-nav-item>
            <b-nav-item href="#" @click="show = false" v-scroll-to="'#location'">KONTAKT</b-nav-item>
            <b-nav-item href="#" @click="show = false" v-scroll-to="'#location'" class="nav-item-img"><img :src="require('@/assets/images/icons/location.svg')"
                alt="Logo OX Sports Bar"></b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </div>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    props: {
      logo: {
        url: String,
        required: true
      },
      menu: {
        url: String,
        class: String,
        required: true
      },
    },
    data() {
      return {
        show: false,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .navbar-light {
    .navbar-nav {
      .nav-item {
        &:not(.nav-item-img) {
          font-weight: 700;
          padding-right: 20px;
        }
      }
    }
  }

  .logo-top {
    width: 80px
  }

  .nav-item-img {
    width: 35px;
    height: 35px;
    padding: 3px;
    background-color: #fff;
    border-radius: 20px;

    img {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -25%);
    }
  }

  @media only screen and (min-width: 992px) {
    .navbar-light {
      .navbar-nav {
        .nav-item {
          &:not(.nav-item-img) {
            font-size: .9rem;
            margin-top: .1rem;
          }
        }
        &.light {
          .nav-item {
            &:not(.nav-item-img) {
              color: #000;
            }
          }
    
          .nav-link {
            color: #000;
          }
        }
        &.dark {
          .nav-item {
            &:not(.nav-item-img) {
              color: #fff;
            }
          }
    
          .nav-link {
            color: #fff;
          }
        }
      }
    }

    .navbar-toggler-custom {
      display: none;
    }
  }
  @media only screen and (max-width: 991px) {
    .navbar-light {
      .navbar-nav {
        .nav-item {
          font-size: 1.3rem;
          margin-top: .8rem;
        }
        &.light {
          .nav-item {
            &:not(.nav-item-img) {
              color: #000;
            }
          }
    
          .nav-link {
            color: #000;
          }
        }
        &.dark {
          .nav-item {
            &:not(.nav-item-img) {
              color: #000;
            }
          }
    
          .nav-link {
            color: #000;
          }
        }
      }
    }
    .navbar-toggler-custom {
      position: relative;
      width: 40px;
      top: -10px;
      
      .menu-line-a,
      .menu-line-b, 
      .menu-line-c {
        height: 10px;
        position: relative;
        transition: all .2s;
        transition-timing-function: cubic-bezier(.34,.39,.72,.66);
      }
      &.open {
        .menu-line-a,
        .menu-line-b,
        .menu-line-c {
          transition: all .2s;
          transition-timing-function: cubic-bezier(.34,.39,.72,.66);
        }
        .menu-line-b {
          opacity: 0;
        }
        .menu-line-a {
          transform: translate(10%) rotate(35deg);
          transform-origin: 10% 50%;
        }
        .menu-line-c {
          transform: translate(-10%) rotate(-35deg);
          transform-origin: 0% 50%;
        }
      }
    }
    .navbar-collapse {
      position: fixed;
      z-index: 9999;
      display: block;
      top: 2%;
      left: -100%;
      padding: 3rem 2rem;
      background-color: rgba(255, 255, 255, .98);
      height: 96%;
      width: 60%;
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
      transition: left .4s;
      transition-timing-function: cubic-bezier(.34,.39,.72,.66);
      box-shadow: 0 16px 32px 0 rgba(0, 30, 60, .12);
      &.show {
        transition: left .4s;
        transition-timing-function: cubic-bezier(.34,.39,.72,.66);
        left: 0;
      }
    }
  }
</style>