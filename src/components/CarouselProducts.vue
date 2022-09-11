<template>
  <!-- hooper slider start -->
  <hooper
    :itemsToShow="items"
    :itemsToSlide="1"
    :autoPlay="true"
    :infiniteScroll="true"
    :playSpeed="3000"
  >
    <!-- each slide loop -->
    <slide v-for="(product, index) in products" :key="index">
      <div class="card">
        <b-row>
          <b-col cols="7" class="description">
            <h3>{{ product.title }}</h3>
            <div class="pt-3"></div>
            <span class="price">€{{ product.price }}</span>
          </b-col>
          <b-col cols="5" class="product-img">
            <img :src="product.image" :alt="product.title" />
            <img :src="product.image" :alt="product.title" class="blured" />
          </b-col>
        </b-row>
      </div>
    </slide>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
  </hooper>
</template>

<script>
// Hooper Carousel
import { Hooper, Slide, Navigation as HooperPagination } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "CarouselProducts",
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },
  props: {
    items: Number,
  },
  data() {
    return {
      products: [
        {
          title: "GROSSES OFFENES BIER",
          price: "4,20",
          image: require("@/assets/images/products/beer.png"),
        },
        {
          title: "HOPS BIER FLASCHE 0,33l",
          price: "4,90",
          image: require("@/assets/images/products/bottle.png"),
        },
        {
          title: "AMERICAN SMALL BIER",
          price: "4,20",
          image: require("@/assets/images/products/bottle-green.png"),
        },
        {
          title: "RED BULL DOSE 0,25l",
          price: "4,90",
          image: require("@/assets/images/products/red-bull.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.hooper {
  outline: none !important;

  .hooper-navigation {
    position: absolute;

    .hooper-next,
    .hooper-prev {
      top: 100% !important;
      position: relative !important;
      outline: none !important;
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 8px 20px 0 rgba(0, 30, 60, 0.12);
      margin: 0 5px;
      height: 40px;
      width: 40px;
      padding: 0 !important;
    }
  }

  .hooper-slide {
    .card {
      background-color: #fff;
      border-radius: 20px;
      box-shadow: 0 8px 15px 0 rgba(0, 30, 60, 0.12);
      border: none;
      padding: 1.6rem 2rem;

      [class*="col-"] {
        padding: 0 5px !important;
      }

      .description {
        h3 {
          font-weight: 700;
        }

        .price {
          font-weight: 400;
          color: #a7a7a7;
        }
      }

      .product-img {
        img {
          width: 120%;
          z-index: 999;
          position: relative;
        }

        .blured {
          filter: blur(6px);
          -webkit-filter: blur(6px);
          position: absolute;
          top: 15px;
          right: 0px;
          z-index: 1;
          opacity: 0.6;
          width: 100%;
        }
      }
    }
  }
}

@media only screen and (min-width: 769px) {
  .hooper {
    margin-left: -15px;
    margin-top: 30px;
    .hooper-navigation {
      right: 0;
    }
    .hooper-slide {
      padding-left: 20px;
      .card {
        width: 95%;
        height: 80%;
        .description {
          h3 {
            font-size: 1rem;
          }

          .price {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .hooper {
    height: auto;
    margin-top: 0;
    margin-left: 0;
    .hooper-navigation {
      right: 10px;
      margin-top: 20px;
    }
    .hooper-slide {
      padding: 25px 15px;
      .card {
        width: 100%;
        height: 95%;
        .description {
          h3 {
            font-size: 1.6rem;
          }
          .price {
            font-size: 1.3rem;
          }
        }
      }
    }
  }
}
</style>