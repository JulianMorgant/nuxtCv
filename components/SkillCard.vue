<template>
  <div class="card text-white bg-dark mb-3" style="max-width: 18rem">
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">{{ text }}</p>
      <button @click="$emit('update', name, text)" class="btn btn-primary">update</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillCard",
  props: ["name", "text"],
};
</script>

