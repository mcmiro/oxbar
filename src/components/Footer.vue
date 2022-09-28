<template>
  <div class="pb-5 p-sm-1" id="location">
    <!-- Info START -->
    <b-container class="pb-5 pt-3">
      <span class="big-number">#Location</span>
      <h1>Wiedner Hauptstraße 130, 1050 Wien</h1>
    </b-container>
    <b-container class="footer p-3">
      <b-row class="w-100 m-0">
        <b-col cols="12" md="7" class="box-map">
          <div class="map">
            <!-- Map START -->
            <l-map
              style="height: 100%; width: 100%"
              :zoom="zoom"
              :center="center"
              @update:zoom="zoomUpdated"
              @update:center="centerUpdated"
              @update:bounds="boundsUpdated"
            >
              <l-marker :lat-lng="[48.184160, 16.360770]">
                <l-icon
                  :icon-anchor="staticAnchor"
                  :icon-size="[70, 0]"
                  class-name="someExtraClass"
                >
                  <div class="headline"></div>
                  <img :src="require('@/assets/images/tools/pin.svg')" />
                </l-icon>
              </l-marker>
              <l-tile-layer :url="url" :attribution="attribution" />
            </l-map>
            <!-- Map END -->
          </div>
        </b-col>
        <b-col cols="12" md="5" class="bg-white p-5 info">
          <h4>Kontakt</h4>
          <p class="op-6">Adresse:</p>
          <h5>Wiedner Hauptstraße 130</h5>
          <h5>1050 Wien</h5>
          <p class="op-6">Telefon:</p>
          <h5>
            <a href="tel:+436601113380">0660 111 33 80</a>
          </h5>
          <p class="op-6">E-Mail:</p>
          <h5>
            <a href="mailto:ox-sportsbar@gmx.at">ox-sportsbar@gmx.at</a>
          </h5>
          <p class="op-6" v-b-modal.modal>DSGVO</p>
          <b-modal id="modal" ok-only>
            <!-- Conditions -->
            <Dsgvo />
          </b-modal>
        </b-col>
      </b-row>
    </b-container>
    <cookie-law theme="ox-bar" buttonText="Alles klar!">
      <div slot="message">
        Wir verwenden Cookies um sicherzustellen, dass Sie das beste Erlebnis
        auf unserer Website haben. Mehr Info
      </div>
    </cookie-law>
    <b-container>
      <div class="copyright">
        © Alle Rechte vorbehalten 2022 - OX Gastronomie GmbH <br />Design &
        Development by
        <a href="https://www.heyio.at" target="_blank">Heyio</a>
      </div>
    </b-container>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LIcon } from "vue2-leaflet";
import CookieLaw from "vue-cookie-law";
import Dsgvo from "./Dsgvo";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    CookieLaw,
    Dsgvo,
  },
  name: "Footer",
  data() {
    return {
      year: new Date().getFullYear(),
      zoom: 18,
      center: [48.184160, 16.360770],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      iconAnchor: [16, 37],
      staticAnchor: [16, 37],
      customText: "Foobar",
      cookieShow: false,
    };
  },
  methods: {
    // leaflet map function (zoom, center,bound)
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    },
  },
  load() {
    this.cookieShow = true;
  },
};
</script>

<style lang="scss" scoped>
h5 {
  margin-top: 0 !important;
  line-height: 1;
  font-size: 1.1rem;
}

.op-6 {
  color: rgba(0, 0, 0, 0.6) !important;
  margin-bottom: 0 !important;
  margin-top: 25px !important;
  outline: none;
  border: none !important;
  box-shadow: 0 !important;
}

span {
  &.big-number {
    font-size: 3rem;
  }
}

.footer {
  border-radius: 25px !important;
  background-color: rgba(245, 245, 245, 1);
  display: flex;

  .info,
  .map {
    border-radius: 15px !important;
    overflow: hidden;
    height: 400px;
    .leaflet-container {
      border-radius: 15px !important;
      overflow: hidden;
      z-index: 0;
    }
    .leaflet-marker-icon {
      img {
        width: 100%;
      }
    }
  }
}

.copyright {
  text-align: center;
  padding: 35px;
  font-size: 0.8rem;
}

.Cookie {
  &--ox-bar {
    width: 95%;
    margin: 0 auto;
    bottom: 20px;
    border-radius: 15px;
    background-color: rgb(26, 26, 36);
    color: #fff;
    font-size: 1rem;
    padding: 25px;
  }
}

@media only screen and (min-width: 769px) {
  .box-map {
    padding-left: 0;
  }
}

@media only screen and (max-width: 768px) {
  .info {
    margin-top: 1rem;
  }

  .box-map {
    padding: 0;
  }

  .p-sm-1 {
    padding: 1rem !important;
  }
}
</style>