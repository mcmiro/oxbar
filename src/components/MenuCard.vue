<template>
  <div>
    <b-container class="pb-10" id="instagram">
      <b-row>
        <b-col cols="12">
          <h1><span class="gradient">#</span>Drinks</h1>
        </b-col>
      </b-row>
      <!-- beer brands -->
      <b-row>
        <b-col cols="6" md="3" v-for="(beer, index) in beers" :key="index">
          <b-card
            no-body
            overlay
            text-variant="white"
            class="border-0 card-bottom mb-4"
          >
            <b-card-img-lazy
              :src="beer.logo"
              :alt="beer.brand"
            ></b-card-img-lazy>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "MenuCard",
  data() {
    return {
      beers: [
        {
          brand: "Absolut Vodka",
          logo: require("@/assets/images/brands/absolut.png"),
        },
        {
          brand: "Beefeater",
          logo: require("@/assets/images/brands/beefeater.png"),
        },
        {
          brand: "Chovas",
          logo: require("@/assets/images/brands/chivas.png"),
        },
        {
          brand: "Guinness",
          logo: require("@/assets/images/brands/guinness.jpg"),
        },
        {
          brand: "Havana",
          logo: require("@/assets/images/brands/havana.png"),
        },
        {
          brand: "Heineken",
          logo: require("@/assets/images/brands/heineken.jpg"),
        },
        {
          brand: "Jameson",
          logo: require("@/assets/images/brands/jameson.png"),
        },
        {
          brand: "Jim Beam",
          logo: require("@/assets/images/brands/jameson.png"),
        },
        {
          brand: "Kilkenny",
          logo: require("@/assets/images/brands/kilkenny.png"),
        },
        {
          brand: "Laphroaig",
          logo: require("@/assets/images/brands/laphroaig.png"),
        },
        {
          brand: "Maker's Mark",
          logo: require("@/assets/images/brands/makers-mark.png"),
        },
        {
          brand: "Monkey 47",
          logo: require("@/assets/images/brands/monkey-47.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  padding: 20px;
  img {
    width: 120px;
    position: relative;
    margin: 0 auto;
  }
}
</style>