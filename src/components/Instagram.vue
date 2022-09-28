<template>
  <div>
    <b-container class="pb-10" id="instagram">
      <b-row>
        <b-col cols="12">
          <h1><span class="gradient">#</span>Instagram</h1>
          <h2>Verpasse keinen einzigen <span class="gradient">feed</span></h2>
          <p class="pt-3">
            Wir veröffentlichen regelmäßig das Programm der Live-Spiele. Du
            kannst die Liste aller aktuellen Übertragungen hier finden. Folge
            uns auch auf Instagram! Wir versorgen dort Deinen feed mit aktuellen
            Informationen. So vergisst Du nie wieder ein Spiel.
          </p>
        </b-col>
      </b-row>
      <!-- instagram feeds -->
      <vue-instagram token="youraccessTokenHere" username="UsernameHere" :count="3">
          <template slot="feeds" scope="props">
              <li class="instagram-media fancy-list"> {{ props.feed.link }} </li>
              <img :src=" props.feed.images.standard_resolution.url " alt="">
          </template>
          <template slot="error" scope="props">
              <div class="fancy-alert"> {{ props.error.error_message }} </div>
          </template>
      </vue-instagram>

      <!-- <b-row>
        <b-col
          cols="6"
          md="3"
          v-for="(feed, index) in instagram.feeds"
          :key="index"
        >
          <a
            :href="'https://instagr.am/p/' + feed.node.shortcode"
            target="_blank"
          >
            <b-card
              no-body
              overlay
              text-variant="white"
              class="border-0 card-bottom mb-4"
            >
              <b-card-img-lazy
                :src="feed.node.thumbnail_src"
                :alt="feed.node.accessibility_caption"
              ></b-card-img-lazy>
            </b-card>
          </a>
        </b-col>
      </b-row> -->
    </b-container>
  </div>
</template>

<script>
import VueInstagram from 'vue-instagram'

export default {
  name: "Instagram",
  components: {
    VueInstagram
  },
  data() {
    return {
      instagram: {
        feeds: [],
      },
    };
  },
  methods: {
  },
  mounted() {
    
  },
};
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