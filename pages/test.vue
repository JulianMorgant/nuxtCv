<template>
  
<five-stars>
</five-stars>

</template>

<script>
import FiveStars from '../components/FiveStars.vue';
import UserInput from "../components/UserInput";

export default {
  components: { UserInput },
  components: {FiveStars},
  data() {

   return {
      title: "Title",
      options: {
        disablePseudo: false,
        disablePassword: true,
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
