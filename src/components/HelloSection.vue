<template>
  <div>
    <img :src="require('@/assets/images/tools/section-separator.svg')" alt="">
    <div class="content">
      <b-container>
        <b-row>
          <b-col cols="12" md="2">
            <div class="headline-img text-left">
              <img :src="require('@/assets/images/header/beer.png')" alt="">
            </div>
          </b-col>
          <b-col cols="12" md="10">
            <span class="big-number">
              26
            </span>
            <h1>Hello!</h1>
            <h2>Ein kühles Bier?</h2>
            <h5>Mit 26 Sroten Bier, treffen wir jedes Geschmack</h5>
          </b-col>
          <b-col cols="12" class="pt-5 text-center">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum aperiam odit perspiciatis
              officia provident reprehenderit quisquam iusto, eum fugit ducimus culpa at itaque rem ea tempora soluta
              ullam? Cumque.</p>
          </b-col>
          <b-col cols="12" class="pt-5 text-center">
            <b-row>
              <b-col>
                <b-card title="Guinness" :img-src="require('@/assets/images/header/card-product.png')" img-alt="Beer" img-top
                  tag="article" style="max-width: 20rem;" class="mb-2 border-0 brown">
                  <b-card-text>
                    Dark
                  </b-card-text>
                </b-card>
              </b-col>
              <b-col>
                <b-card title="IPA" :img-src="require('@/assets/images/header/card-product.png')" img-alt="Beer" img-top
                  tag="article" style="max-width: 20rem;" class="mb-2 border-0 blue">
                  <b-card-text>
                    Light
                  </b-card-text>
                </b-card>
              </b-col>
              <b-col>
                <b-card title="Hops" :img-src="require('@/assets/images/header/card-product.png')" img-alt="Beer" img-top
                  tag="article" style="max-width: 20rem;" class="mb-2 border-0 yellow">
                  <b-card-text>
                    Fruchtig
                  </b-card-text>
                </b-card>
              </b-col>
            </b-row>

          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloSection',
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
  h1,
  h2 {
    font-weight: 700;
    line-height: 1;
    font-size: 44px;
  }

  h5 {
    color: rgba(0, 0, 0, .6);
  }

  .content {
    background-color: rgba(255, 255, 255, 1);

    p {
      font-size: 16px;
      letter-spacing: 0.02rem;
      line-height: 1.5rem;
    }
    .card {
      // &.brown {
      //   background-color: #fcf4eb;
      // }
      // &.blue {
      //   background-color: #ebf9fc;
      // }
      // &.yellow {
      //   background-color: #fcfceb;
      // }
      overflow: hidden;
      border-radius: 15px;
      padding: 2rem;
      box-shadow: 0 8px 15px 0 rgba(0, 30, 60, .12);
      img {
        max-width: 90px;
        position: relative;
        margin: 0 auto;
      }
    }
  }

  .headline-img {
    img {
      width: 140px;
      margin-top: -130px
    }
  }

  span {
    &.big-number {
      font-size: 9rem;
      color: rgba(0, .0, .0, .07);
      font-weight: 700;
      position: relative;
      line-height: 0;
    }
  }

  @media only screen and (min-width: 769px) {}

  @media only screen and (max-width: 768px) {}
</style>