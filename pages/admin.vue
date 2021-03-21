


<template>
  <div class= "mb-3">
    <h1 class="display-1">Admin</h1>
    <h2>USERS</h2>
    <div class="card-deck">
      <user-card class="myCard"
        v-for="user in users"
        v-bind:key="user._id"
        v-bind:user="user"
        v-on:click="editUserCard"
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
    editUserCard(user) {
      console.log(`edit ${user._id} - ${user.pseudo} - ${user.email}`);
      this.$router.push('/register')
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