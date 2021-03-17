<template>
  <div>
    <h1 class="display-1">Dev</h1>

    <h2>SKILLS</h2>
    <div class="card-deck">
     
 <skill-card v-for="skill in skills" v-bind:key="skill.id" v-bind:name="skill.name" v-bind:text="skill.text" v-on:update="updateSkillCard"></skill-card> 
     <!-- Meme chose dessous -->

     <!--    <skill-card v-for="skill in skills" v-bind="skill" v-on:update="updateSkillCard"/> -->
    </div>
  </div>
</template>

<script>

import SkillCard from '../components/SkillCard.vue';

export default {
    components: {
        SkillCard
    },
  data() {
    return {
      skills: [
        { id: "1", name: "JavaScript", text: "dev en javascript back-end et front-end" },
        { id: "2", name: "NodeJS", text: "Back-end node js" },
        { id: "3", name: "Nuxt", text: "Ecosystème Nuxt" },
      ],
    };
  },
  methods : {
      updateSkillCard(name,text) {
          console.log (`update ${name} - ${text}`)
      }
  }
};
</script>

<style scoped>
</style>
