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

  middleware: "auth",

  data() {
    return {
      cards: [],
    };
  },

  async asyncData(ctx) {
    return {
      cards: await ctx.app.$repositories.badge.index(),
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