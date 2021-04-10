<template>
  <div class="card-deck cont">
    <skill-card-v-2 v-for="card in cards" :key="card.stage" v-bind:card="card">
    </skill-card-v-2>
  </div>
</template>

<script>
import SkillCardV2 from "../components/SkillCardV2.vue";

export default {
  components: { SkillCardV2 },
  data() {
    return {
      cards: [
        {
          stage: "1",
          title: "Nuxt",
          image: "https://fr.nuxtjs.org/logos/nuxt-emoji.png",
          link: "https://nuxtjs.org",
          text:
            "Nuxt is based on a powerful modular architecture. You can choose from more than 50 modules to make your development faster and easier. You don't have to reinvent the wheel to get PWA benefits, add Google Analytics to your page or generate a sitemap.",
          stars_1: {
            number: "5",
            label: "Compétence",
          },
          stars_2: {
            number: "3",
            label: "Mise à jour",
          },
        },
        {
          stage: "2",
          title: "Vue JS",
          image:
            "https://vuejs.org/images/logo.png?_sw-precache=cf23526f451784ff137f161b8fe18d5a",
          link: "https://vuejs.org",
          text:"Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.",
          stars_1: {
            number: "5",
            label: "Compétence",
          },
          stars_2: {
            number: "3",
            label: "Mise à jour",
          },
        },
      ],
    };
  },
};
</script> 

<style scoped>
.cont {
  padding: 10px;
  margin: 15px;
}
</style>