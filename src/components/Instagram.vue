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
      <b-row>
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
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Instagram",
  data() {
    return {
      instagram: {
        feeds: [],
      },
    };
  },
  methods: {
    getInstagramFeeds(html) {
      if (html) {
        var regex = /_sharedData = ({.*);<\/script>/m,
          json = JSON.parse(regex.exec(html)[1]),
          edges =
            json.entry_data.ProfilePage[0].graphql.user
              .edge_owner_to_timeline_media.edges;
        this.instagram.feeds = edges;
      }
    },
  },
  mounted() {
    const name = "thesportsbar_ra";
    const http = new XMLHttpRequest();

    http.open(
      "GET",
      "https://images" +
        ~~(Math.random() * 3333) +
        "-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=https://www.instagram.com/" +
        name +
        "/"
    );
    http.send();

    http.onload = () => this.getInstagramFeeds(http.responseText);
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