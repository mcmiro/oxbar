<template>
  <div>
    <b-container class="pb-10">
      <b-row>
        <b-col cols="12">
          <h1><span class="gradient">#</span>Instagram</h1>
          <h2>Verpasse keinen einzigen <span class="gradient">feed</span></h2>
          <p class="pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum aperiam odit
            perspiciatis
            officia provident reprehenderit quisquam iusto, eum fugit ducimus culpa at itaque rem ea tempora soluta
            ullam? Cumque.</p>
        </b-col>
      </b-row>
      <!-- instagram feeds -->
      <b-row>
        <b-col cols="6" md="3">
          <b-card overlay :img-src="require('@/assets/images/content/beer-4.jpg')" img-alt="" text-variant="white"
            class="border-0 card-bottom">
          </b-card>
        </b-col>
        <b-col cols="6" md="3">
          <b-card overlay :img-src="require('@/assets/images/content/beer-4.jpg')" img-alt="" text-variant="white"
            class="border-0 card-bottom">
          </b-card>
        </b-col>
        <b-col cols="6" md="3">
          <b-card overlay :img-src="require('@/assets/images/content/beer-4.jpg')" img-alt="" text-variant="white"
            class="border-0 card-bottom">
          </b-card>
        </b-col>
        <b-col cols="6" md="3">
          <b-card overlay :img-src="require('@/assets/images/content/beer-4.jpg')" img-alt="" text-variant="white"
            class="border-0 card-bottom">
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'Instagram',
    data() {
      return {

      }
    },
    methods: {

    },
    mounted() {

    },
  }
</script>

<style lang="scss" scoped>
  h1 {
    font-size: 54px;
    font-weight: 800;
  }

  .gradient {
    background-image: linear-gradient(45deg, red, rgb(226, 12, 226));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>