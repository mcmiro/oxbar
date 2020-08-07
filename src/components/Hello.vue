<template>
  <div>
    <div class="content pt-10 pb-10">
      <b-container>
        <b-row>
          <!-- overlayed cards start -->
          <b-col cols="12" md="6" class="overlayed-cards pb-5">
            <b-row>
              <b-col cols="4">
                <b-card no-body class="overflow-hidden border-0 card-top-left">
                  <b-row no-gutters>
                    <b-col md="12">
                      <b-card-img :src="require('@/assets/images/content/beer-1.jpg')" alt="Image" class="rounded-0">
                      </b-card-img>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
              <b-col cols="4">
                <b-card no-body class="overflow-hidden border-0 card-bottom-center">
                  <b-row no-gutters>
                    <b-col md="12">
                      <b-card-img :src="require('@/assets/images/content/beer-2.jpg')" alt="Image" class="rounded-0">
                      </b-card-img>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
              <b-col cols="4">
                <b-card no-body class="overflow-hidden border-0 card-right-center">
                  <b-row no-gutters>
                    <b-col md="12">
                      <b-card-img :src="require('@/assets/images/content/beer-3.jpg')" alt="Image" class="rounded-0">
                      </b-card-img>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
            </b-row>
          </b-col>
          <!-- overlayed cards end -->
          <!-- text start -->
          <b-col cols="12" md="6" class="pb-5">
            <span class="big-number">
              #26
            </span>
            <h1>Hello!</h1>
            <h2>Ein cooles Bier?</h2>
            <h5>Mit 26 Sroten Bier, treffen wir jedes Geschmack</h5>
            <p class="pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum aperiam odit
              perspiciatis
              officia provident reprehenderit quisquam iusto, eum fugit ducimus culpa at itaque rem ea tempora soluta
              ullam? Cumque.</p>
          </b-col>
          <!-- text start -->
        </b-row>
        <b-row>
          <b-col cols="12" class="pt-10">
            <b-row>
              <b-col cols="12" md="4">
                <span class="big-number">
                  #35
                </span>
                <h2>Noch mehr?</h2>
                <h5>Mit mehr als 35 Sportarten, kannst du einfach nichts verpassen.</h5>
                <p class="pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum aperiam odit
                  perspiciatis
                  officia provident reprehenderit quisquam iusto, eum fugit ducimus culpa at itaque rem ea tempora
                  soluta
                  ullam? Cumque.</p>
              </b-col>
              <b-col cols="12" md="4">
                <b-card overlay :img-src="require('@/assets/images/content/dart.jpg')" img-alt=""
                  text-variant="white" class="border-0 card-bottom">
                </b-card>
              </b-col>
              <b-col cols="12" md="4">
                <b-card overlay :img-src="require('@/assets/images/content/tennis.jpg')" img-alt=""
                  text-variant="white" class="border-0 card-top">
                </b-card>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" class="pt-10">
            <b-row>
              <b-col cols="12" md="6" class="pb-5">
                <b-card overlay :img-src="require('@/assets/images/content/bar.jpg')" img-alt=""
                  text-variant="white" class="border-0" style="max-width: 30rem">
                </b-card>
              </b-col>
              <b-col cols="12" md="6" class="pb-5">
                <span class="big-number">
                  #50
                </span>
                <h2>Gehts noch?</h2>
                <h5>50 Gäste des gleichen Geschmacks</h5>
                <p class="pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum aperiam odit
                  perspiciatis
                  officia provident reprehenderit quisquam iusto, eum fugit ducimus culpa at itaque rem ea tempora
                  soluta
                  ullam? Cumque.</p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .content {
    // background-color: rgba(255, 255, 255, 1);

    .overlayed-cards {
      .card {
        box-shadow: 0 8px 15px 0 rgba(0, 30, 60, .12);
      }
    }

    .card-top,
    .card-bottom {
      width: 240px;
    }

    .card {
      border-radius: 15px !important;
      overflow: hidden;
    }

  }

  @media only screen and (min-width: 769px) {

    .overlayed-cards {
      .card-top-left {
        width: 180px;
      }

      .card-bottom-center {
        width: 140px;
        top: 170px;
        left: -50px;
      }

      .card-right-center {
        width: 150px;
        top: 30px;
        left: -100px;
      }
    }

    .card-top {
      top: -50px;
    }
    .card-bottom {
      top: 50px;
      left: 50px;
    }

  }

  @media only screen and (max-width: 768px) {

    .overlayed-cards {
      .card-top-left {
        width: 180px;
      }

      .card-bottom-center {
        width: 140px;
        top: 130px;
        left: -20px;
      }

      .card-right-center {
        width: 150px;
        top: 30px;
        left: -40px;
      }
    }

    .card-top {
      top: -20px;
    }
    .card-bottom {
      top: 20px;
      left: 90px;
    }

  }
</style>