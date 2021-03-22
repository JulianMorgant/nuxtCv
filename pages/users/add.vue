<template>
  <div>
    <user-input
      v-bind:data="{
        title: title,
        options: options,
        helpers: helpers,
        formData: formData,
      }"
    ></user-input>
    <div class="center">
      <button
        v-on:click="createUser(formData.user)"
        class="btn btn-primary large"
      >
        Submit
      </button>
      <button v-on:click="goHome()" class="btn btn-danger large">
        Go Home
      </button>
    </div>
  </div>
</template>

<script>
import UserInput from "../../components/UserInput";

export default {
  components: { UserInput },

  data() {
    return {
      title: "Register",
      options: {
        disablePseudo: false,
        disablePassword: false,
        disableRoleUser: false,
        disableRoleAdmin: true,
      },
      helpers: {
        name: "optional",
        firstname: "optional",
        pseudo: "Unique",
        email: "We'll never share your email with anyone else.",
        password1: "",
        password2: "",
        roles: [],
      },
      defaultHelpers: {
        //TODO with init function
      },
      formData: {
        user: {
          email: "",
        }, //TODO passwords ?
        password1: "",
        password2: "",
      },
    };
  },

  methods: {
    async createUser(user) {
      try{
      console.log(`create user : ${user.pseudo}`);
      //this.$router.push(`/`);
      return true//this.$router.push(`/users/${user._id}`);
      }catch (err){
        console.log (err);
        return err
      }
    },
    async goHome() {
      console.log(`goHome`);
      this.$router.push(`/`);
    },
  },
};
</script>
