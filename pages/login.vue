<template>
  <div>
    <form @submit.prevent="userLogin">
      <div class="row mb-3">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" v-model="credential.email" />
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputPassword3" class="col-sm-2 col-form-label"
          >Password</label
        >
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control" 
            v-model="credential.password"
          />
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      credential: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.credential,
        });
        console.log ('++response to loginwith++++');
        console.log(response);
        // redirection home page
        this.$router.push('/')
      } catch (err) {
        console.log ('+++');   
        console.log(err);
        console.log ('+++');  
      }
    },
  },
};
</script>
