<template>
  <form>
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
        v-on:click="updateUser(formData.user)"
        class="btn btn-primary large"
      >
        Update
      </button>
      <button
        v-on:click="deleteUser(formData.user._id)"
        class="btn btn-danger large"
      >
        Delete
      </button>
    </div>
  </form>
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
};
</script>
