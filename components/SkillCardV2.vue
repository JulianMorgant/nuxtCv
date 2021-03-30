<template>
  <div class="card">
    <div class="row">
      <div class="col">
        <img
          src="https://fr.nuxtjs.org/logos/nuxt-emoji.png"
          class="img-thumbnail"
          alt=""
        />
      </div>
      <div class="col">
        <h5 class="card-title">Card title</h5>
      </div>
    </div>
    <div class="card-body">
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <five-stars v-bind:starsData="data.stars_1"></five-stars>
      </li>
      <li class="list-group-item">
        <five-stars v-bind:starsData="data.stars_2"></five-stars>
      </li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">{{ data }}</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
</template>

<script>
import FiveStars from "./FiveStars.vue";
export default {
  components: { FiveStars },
  name: "SkillCardV2",
  props: ["data"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.card {
  width: 240px;
}

.img-thumbnail {
  margin: 10px;
  padding: 2px;
  width: 50px;
  border-radius: 50%;
}

.list-group-item {
  margin: 0px;
  padding: 0px;
}
</style>