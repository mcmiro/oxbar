<template>
  <div>
    <b-container class="pb-10" id="instagram">
      <b-row>
        <b-col cols="12">
          <h1><span class="gradient">#</span>Beers</h1>
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
          brand: "Guinness",
          logo: require("@/assets/images/brands/guinness.jpg"),
        },
        {
          brand: "Erdinger",
          logo: require("@/assets/images/brands/erdinger.jpg"),
        },
        {
          brand: "American Bud",
          logo: require("@/assets/images/brands/bud.jpg"),
        },
        {
          brand: "Budweiser",
          logo: require("@/assets/images/brands/budweiser.jpg"),
        },
        {
          brand: "BrauWerk",
          logo: require("@/assets/images/brands/brauwerk.jpg"),
        },
        {
          brand: "Corona",
          logo: require("@/assets/images/brands/corona.jpg"),
        },
        {
          brand: "Stella Artois",
          logo: require("@/assets/images/brands/stellaartois.jpg"),
        },
        {
          brand: "Fosters",
          logo: require("@/assets/images/brands/fosters.jpg"),
        },
        {
          brand: "Ottakringer",
          logo: require("@/assets/images/brands/ottakringer.jpg"),
        },
        {
          brand: "Heineken",
          logo: require("@/assets/images/brands/heineken.jpg"),
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