<template>
  <div class="pb-5 p-sm-1">
    <b-container class="pb-5 pt-3">
      <span class="big-number">
        #Loca
      </span>
      <h1>Salztorgasse 3, 1010 Wien</h1>
    </b-container>
    <b-container class="footer p-3">
      <b-row class="w-100 m-0">
        <b-col cols="12" md="7" class="box-map">
          <div class="map">
            <!-- Map START -->
            <l-map style="height: 100%; width: 100%" :zoom="zoom" :center="center" @update:zoom="zoomUpdated"
              @update:center="centerUpdated" @update:bounds="boundsUpdated">
              
              <l-marker :lat-lng="[48.213350, 16.373690]">
                <l-icon 
                  :icon-size="[50, 50]"
                  class-name="someExtraClass">
                  <div class="headline">
                    lol
                  </div>
                  <img :src="require('@/assets/images/products/beer.png')">
                </l-icon>
              </l-marker>
              <l-tile-layer :url="url"></l-tile-layer>
            </l-map>
            <!-- Map END -->
          </div>
        </b-col>
        <b-col cols="12" md="5" class="bg-white p-5 info">
          <h4>Location</h4>
          <h5>Slaztorgasse 3</h5>
          <h5>1010 Wien</h5>
          <h5>Tel.: 0664/123 45 67</h5>
          <h5>E-Mail: info@oxsportsbar.at</h5>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import { LMap, LTileLayer, LMarker, LIcon } from "vue2-leaflet";

  export default {
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LIcon
    },
    name: 'Footer',
    data() {
      return {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        zoom: 13,
        center: [48.213350, 16.373690],
        bounds: null,
      }
    },
    methods: {
      zoomUpdated(zoom) {
        this.zoom = zoom;
      },
      centerUpdated(center) {
        this.center = center;
      },
      boundsUpdated(bounds) {
        this.bounds = bounds;
      }
    },
    mounted() {

    },
  }
</script>

<style lang="scss" scoped>
  .footer {
    border-radius: 25px !important;
    background-color: rgba(245, 245, 245, 1);
    display: flex;

    .info,
    .map {
      border-radius: 15px !important;
      overflow: hidden;
      height: 400px;
      .leaflet-marker-icon {
        img {
          width: 100%;
        }

      }
    }
  }

  @media only screen and (min-width: 769px) {

    .box-map {
      padding-left: 0;
    }

  }

  @media only screen and (max-width: 768px) {
    
    .box-map {
      padding: 0;
    }

    .p-sm-1 {
      padding: 1rem !important;
    }

  }
</style>