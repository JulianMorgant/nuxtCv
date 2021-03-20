


<template>
  <div class= "mb-3">
    <h1 class="display-1">Admin</h1>
    <h2>USERS</h2>
    <div class="card-deck">
      <user-card class="myCard"
        v-for="user in users"
        v-bind:key="user.id"
        v-bind:pseudo="user.pseudo"
        v-bind:email="user.email"
        v-on:update="updateUserCard"
      ></user-card>
    </div>
  </div>
</template>

<script>
import UserCard from "../components/UserCard";

export default {
  component: {
    UserCard,
  },
  middleware: "auth",

 
  data() {
    return {
     users: [],
    };
  },
 

  methods: {
    updateUserCard(pseudo, email) {
      console.log(`update ${pseudo} - ${email}`);
    },
  },

async asyncData(ctx) {
  return {
    users : await ctx.app.$repositories.user.index()
  }
}
/*
  asyncData({ app, $repositories }) {
    console.log("**************");
    let users = [];
    const data = $repositories.user.index()
    console.log(data);
    return { users : data.res };
  },
*/





  /*
  async fetch() {
    this.users = await fetch("http://localhost:5000/user/getAll").then((res) =>
      res.json()
    );
  },
  */
};
</script>

<style>
.card-deck {
  min-width: 150px;
}
.myCard{
  min-width: 250px;
}

</style>