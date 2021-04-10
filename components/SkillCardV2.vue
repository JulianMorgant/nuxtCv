<template>
  <div class="card">
    <div class="row">
      <div class="col">
        <img
          v-bind:src="card.image"
          class="img-thumbnail"
          alt=""
        />
      </div>
      <div class="col">
        <h5 class="card-title">{{card.title}}</h5>
      </div>
    </div>
    <div class="card-body">
      <p class="card-text">
        {{card.text}}
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <five-stars v-bind:starsData="card.stars_1"></five-stars>
      </li>
      <li class="list-group-item">
        <five-stars v-bind:starsData="card.stars_2"></five-stars>
      </li>
    </ul>
    <div class="card-body">
      <a v-bind:href="card.link" class="card-link">{{ card.link }}</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
</template>

<script>
import FiveStars from "./FiveStars.vue";
export default {
  components: { FiveStars },
  name: "SkillCardV2",
  props: ["card"],
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