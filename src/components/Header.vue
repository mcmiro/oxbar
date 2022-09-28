<template>
  <div>
    <b-container class="rounded header">
      <b-row>
        <b-col cols="12" md="7" class="brand-info">
          <b-card
            :img-src="require('@/assets/images/logo.svg')"
            img-alt="OX Sports Bar Logo"
            img-top
            tag="article"
            class="mb-2 border-0"
          >
            <!-- tv chanels & brands -->
            <b-card-text>
              <b-button variant="outline-dark" class="btn-img">
                <img
                  :src="require('@/assets/images/icons/sky.svg')"
                  alt="SKY Übertragung"
                />
              </b-button>
              <b-button variant="outline-dark" class="btn-img">
                <img
                  :src="require('@/assets/images/icons/nfl.svg')"
                  alt="NFL Übertragung"
                />
              </b-button>
              <b-button variant="outline-dark" class="btn-img">
                <img
                  :src="require('@/assets/images/icons/nba.svg')"
                  alt="NBA Übertragung"
                />
              </b-button>
              <b-button variant="outline-dark" class="btn-img">
                <img
                  :src="require('@/assets/images/icons/uefa.svg')"
                  alt="Champions League Übertragung"
                />
              </b-button>
            </b-card-text>
          </b-card>
          <!-- carousel start beer brands -->
          <CarouselProducts :items="items" :key="componentKey" />
        </b-col>
        <b-col cols="12" md="5" class="header-slider-image">
          <!-- icon animation behind the player image -->
          <AnimIcons
            v-for="(icon, index) in animIcons"
            :key="index"
            :img="icon.img"
            :position="icon.position"
            :animation="icon.animation"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CarouselProducts from "./CarouselProducts";
import AnimIcons from "./AnimIcons";

export default {
  components: {
    CarouselProducts,
    AnimIcons,
  },
  name: "Header",
  data() {
    return {
      componentKey: 0,
      items: 2,
      windowWidth: window.innerWidth,
      animIcons: [
        {
          img: {
            url: require("../assets/images/icons/stadion.svg"),
            height: 60,
          },
          position: {
            top: 40,
            right: 290,
          },
          animation: {
            start: 0,
            duration: 2.9,
          },
        },
        {
          img: {
            url: require("../assets/images/icons/beer.svg"),
            height: 65,
          },
          position: {
            top: 120,
            right: 140,
          },
          animation: {
            start: 0,
            duration: 2.2,
          },
        },
        {
          img: {
            url: require("../assets/images/icons/ball.svg"),
            height: 75,
          },
          position: {
            top: -40,
            right: 100,
          },
          animation: {
            start: 0,
            duration: 1.6,
          },
        },
        {
          img: {
            url: require("../assets/images/icons/dress.svg"),
            height: 85,
          },
          position: {
            top: 420,
            right: 150,
          },
          animation: {
            start: 0,
            duration: 1.4,
          },
        },
      ],
    };
  },
  watch: {
    windowWidth() {
      if (this.windowWidth <= 991) {
        this.items = 1;
        this.rerenderCarousel();
      } else if (this.windowWidth > 992) {
        this.items = 2;
        this.rerenderCarousel();
      }
    },
  },
  methods: {
    rerenderCarousel() {
      this.componentKey += 1;
    },
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 768) {
        this.items = 1;
        this.rerenderCarousel();
      } else if (this.windowWidth > 768) {
        this.items = 2;
        this.rerenderCarousel();
      }
      window.addEventListener("resize", this.onResize);
    });
  },
};
</script>

<style lang="scss" scoped>
@keyframes iconAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.header {
  background-color: #fff;
  border-radius: 25px !important;
  animation-name: iconAnimation;
  animation-duration: 0.4s;
}

.card {
  width: 290px;

  .card-img-top {
    width: 270px;
    position: relative;
    margin: 0 auto;
  }

  .card-body {
    padding: 20px 0;
  }

  .btn-img {
    &:not(:last-child) {
      margin-right: 5px;
      margin-left: 5px;
    }
    padding: 3px 10px;
    border-radius: 10px;
    &:hover {
      background-color: rgba(0, 0, 0, 0);
      cursor: default !important;
    }
    &:focus {
      box-shadow: none !important;
    }
    img {
      height: 25px;
    }
  }
}

@media only screen and (min-width: 992px) {
  .header {
    padding: 4rem 4rem 0 4rem;
    min-height: 570px;
    background: #ffffff url("../assets/images/header/header.jpg") no-repeat
      right bottom / auto 90%;

    .brand-info {
      padding-bottom: 4rem;
    }
  }
}

@media only screen and (min-width: 769px) and (max-width: 991px) {
  .header {
    background: #ffffff url("../assets/images/header/header.jpg") no-repeat
      right bottom / auto 71%;
    top: 20px;
    position: relative;
    z-index: 999;
    padding: 4rem 1rem 0 1rem;
    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 50px;
      background-color: #fff;
      position: relative;
      z-index: -1;
      margin-top: -75px;
      opacity: 0.6;
      border-radius: 25px !important;
    }
    .brand-info {
      padding-bottom: 4rem;
    }
  }
  .card {
    position: relative;
    margin: 0 auto;
  }
}

@media only screen and (max-width: 768px) {
  .header {
    top: 20px;
    position: relative;
    z-index: 999;
    padding: 4rem 1rem 0 1rem;
    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 50px;
      background-color: #fff;
      position: relative;
      z-index: -1;
      margin-top: -75px;
      opacity: 0.6;
      border-radius: 25px !important;
    }
    .brand-info {
      padding-bottom: 4rem;
    }
  }
  .card {
    position: relative;
    margin: 0 auto;
  }
}
</style>