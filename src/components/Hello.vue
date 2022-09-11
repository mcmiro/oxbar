<template>
  <div class="content pt-10 pb-10" id="hello">
    <b-container>
      <b-row>
        <!-- overlayed cards with beer bottles start -->
        <b-col cols="12" md="6" class="overlayed-cards pb-5">
          <b-row>
            <b-col cols="4">
              <b-card
                no-body
                class="overflow-hidden border-0 card-top-left rellax"
                :class="{ active: anim.sectionOne }"
              >
                <b-row no-gutters>
                  <b-col md="12">
                    <b-card-img-lazy
                      :src="require('@/assets/images/content/beer-1.jpg')"
                      alt="Image"
                      class="rounded-0 lazyload"
                      v-waypoint="{
                        active: true,
                        callback: onWaypoint,
                        options: intersectionOptions,
                      }"
                    ></b-card-img-lazy>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
            <b-col cols="4">
              <b-card
                no-body
                class="overflow-hidden border-0 card-bottom-center"
                :class="{ active: anim.sectionOne }"
              >
                <b-row no-gutters>
                  <b-col md="12">
                    <b-card-img-lazy
                      :src="require('@/assets/images/content/beer-2.jpg')"
                      alt="Image"
                      class="rounded-0 lazyload"
                    ></b-card-img-lazy>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
            <b-col cols="4">
              <b-card
                no-body
                class="overflow-hidden border-0 card-right-center"
                :class="{ active: anim.sectionOne }"
              >
                <b-row no-gutters>
                  <b-col md="12">
                    <b-card-img-lazy
                      :src="require('@/assets/images/content/beer-3.jpg')"
                      alt="Image"
                      class="rounded-0 lazyload"
                    ></b-card-img-lazy>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
        <!-- overlayed cards with beer bottles end -->
        <!-- text start -->
        <b-col cols="12" md="6" class="pb-5">
          <span class="big-number">#10</span>
          <h1>Hello!</h1>
          <h2>Ein cooles Bier?</h2>
          <h5>
            Mit 10+ verschiedenen Sorten Bier, treffen wir jeden Geschmack
          </h5>
          <p class="pt-3">
            Wir lassen Dich nicht verdursten! Zu den Live-Übertragungen von
            Topspielen, aus verschiedenen Sportarten, findest Du bei uns auch
            den perfekten Durstlöscher. Mit 10+ Top-Biersorten aus der ganzen
            Welt, bist Du bei uns bestens aufgehoben. Perfekt gekühlt, frisch
            gezapft, inklusive Riesenauswahl. Komm´ jetzt vorbei und überzeuge
            Dich selbst!
          </p>
        </b-col>
        <!-- text end -->
      </b-row>
      <!-- second section start -->
      <b-row>
        <b-col cols="12" class="pt-10">
          <b-row>
            <b-col cols="12" md="4">
              <span class="big-number">#15</span>
              <h2>Noch mehr?</h2>
              <h5>
                Mit mehr als 15 Sportarten, kannst Du einfach nichts mehr
                verpassen
              </h5>
              <p class="pt-3">
                Wir erschaffen ein Paradies für Sportfans. NFL, NBA, UFC, jede
                Menge von Fußball, und vieles Mehr. Mit uns wirst Du nie wieder
                ein wichtiges Match verpassen! Wir übertragen täglich Live. Auch
                Spiele, die Du so nicht im Fernseher findest. Coole Spiele,
                coole Biere in einer Atmosphäre für richtige Sportfans. Was
                braucht man noch?
              </p>
            </b-col>
            <!-- sport roles image animation start -->
            <b-col
              cols="12"
              md="4"
              v-waypoint="{
                active: true,
                callback: onWaypointTwo,
                options: intersectionOptions,
              }"
            >
              <b-card
                overlay
                no-body
                text-variant="white"
                class="border-0 card-bottom mb-4"
                :class="{ active: anim.sectionTwo }"
              >
                <b-card-img-lazy
                  :src="require('@/assets/images/content/dart.jpg')"
                  alt
                ></b-card-img-lazy>
              </b-card>
            </b-col>
            <b-col cols="12" md="4">
              <b-card
                overlay
                no-body
                text-variant="white"
                class="border-0 card-top"
                :class="{ active: anim.sectionTwo }"
              >
                <b-card-img-lazy
                  :src="require('@/assets/images/content/tennis.jpg')"
                  alt
                ></b-card-img-lazy>
              </b-card>
            </b-col>
            <!-- sport roles image animation end -->
          </b-row>
        </b-col>
      </b-row>
      <!-- second section end -->
      <!-- third section start -->
      <b-row>
        <b-col cols="12" class="pt-10">
          <b-row>
            <!-- pub image start -->
            <b-col cols="12" md="6" class="pb-5">
              <b-card
                overlay
                no-body
                text-variant="white"
                class="border-0"
                :class="{ active: anim.sectionTwo }"
                style="max-width: 30rem"
              >
                <b-card-img-lazy
                  :src="require('@/assets/images/content/shop.jpg')"
                  alt
                ></b-card-img-lazy>
              </b-card>
            </b-col>
            <!-- pub image end -->
            <b-col cols="12" md="6" class="pb-5">
              <span class="big-number">#50</span>
              <h2>Geht's noch?</h2>
              <h5>50 Gäste - ein Geschmack</h5>
              <p class="pt-3">
                Unsere Atmosphäre ist freundschaftlich und gemütlich. Unsere
                Räumlichkeiten, inklusive Schanigarten bieten Platz für 50+
                Menschen. 50 Personen mit demselben Ziel: gutes Spiel inklusive
                gutem Bier zu genießen. Bist Du bereits einer davon? Wenn nicht,
                bist Du jederzeit willkommen!
              </p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <!-- third section end -->
    </b-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      anim: {
        sectionOne: false,
        sectionTwo: false,
      },
      intersectionOptions: {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, 0.75],
      },
    };
  },
  methods: {
    onWaypoint({ direction }) {
      if (direction === this.$waypointMap.DIRECTION_TOP) {
        this.anim.sectionOne = true;
      }
    },
    onWaypointTwo({ direction }) {
      if (direction === this.$waypointMap.DIRECTION_TOP) {
        this.anim.sectionTwo = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  .overlayed-cards {
    .card {
      box-shadow: 0 8px 15px 0 rgba(0, 30, 60, 0.12);
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
      position: relative;
      top: 50px;
      &.active {
        top: -30px;
        transition: all 1s;
        transition-timing-function: cubic-bezier(0.34, 0.39, 0.72, 0.66);
      }
    }

    .card-bottom-center {
      width: 140px;
      top: 170px;
      left: -50px;
      &.active {
        top: 120px;
        transition: all 0.8s;
        transition-timing-function: cubic-bezier(0.34, 0.39, 0.72, 0.66);
      }
    }

    .card-right-center {
      width: 150px;
      top: 30px;
      left: -100px;
      &.active {
        top: 10px;
        transition: all 0.9s;
        transition-timing-function: cubic-bezier(0.34, 0.39, 0.72, 0.66);
      }
    }
  }

  .card-top {
    top: 80px;
    &.active {
      top: 0;
      transition: all 0.7s;
      transition-timing-function: cubic-bezier(0.34, 0.39, 0.72, 0.66);
    }
  }
  .card-bottom {
    top: 90px;
    left: 50px;
    &.active {
      top: 50px;
      transition: all 0.7s;
      transition-timing-function: cubic-bezier(0.34, 0.39, 0.72, 0.66);
    }
  }
}

@media only screen and (max-width: 768px) {
  .overlayed-cards {
    .card-top-left {
      width: 180px;
      position: relative;
      top: 50px;
      &.active {
        top: -30px;
        transition: all 1s;
        transition-timing-function: cubic-bezier(0.34, 0.39, 0.72, 0.66);
      }
    }

    .card-bottom-center {
      width: 140px;
      top: 130px;
      left: -20px;
      &.active {
        top: 90px;
        transition: all 0.7s;
        transition-timing-function: cubic-bezier(0.34, 0.39, 0.72, 0.66);
      }
    }

    .card-right-center {
      width: 150px;
      top: 30px;
      left: -60px;
      &.active {
        top: -10px;
        transition: all 0.8s;
        transition-timing-function: cubic-bezier(0.34, 0.39, 0.72, 0.66);
      }
    }
  }

  .card-top {
    top: -20px;
    &.active {
      top: -90px;
      transition: all 0.7s;
      transition-timing-function: cubic-bezier(0.34, 0.39, 0.72, 0.66);
    }
  }
  .card-bottom {
    top: 20px;
    left: 90px;
    &.active {
      top: 40px;
      transition: all 0.7s;
      transition-timing-function: cubic-bezier(0.34, 0.39, 0.72, 0.66);
    }
  }
}
</style>