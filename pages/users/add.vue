<template>
  <!--   


https://bootswatch.com/lux/



-->

  <form @submit.prevent="submitUser">
    <fieldset>
      <legend>Register</legend>

      <div class="form-group">
        <label for="inputEmail">Email address</label>
        <input
          type="email"
          class="form-control"
          id="inputEmail"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="formData.email"
        />
        <small id="emailHelp" class="form-text text-muted">{{
          helpers.email
        }}</small>
      </div>

      <div class="form-group">
        <label for="inputPseudo">Pseudo</label>
        <input
          type="text"
          class="form-control"
          id="inputPseudo"
          aria-describedby="pseudoHelp"
          placeholder="Enter pseudo"
          v-model="formData.pseudo"
        />
        <small id="pseudoHelp" class="form-text text-muted">{{
          helpers.pseudo
        }}</small>
      </div>

      <div class="form-group">
        <label for="inputName">Name</label>
        <input
          type="text"
          class="form-control"
          id="inputName"
          aria-describedby="nameHelp"
          placeholder="Enter name"
          v-model="formData.name"
        />
        <small id="nameHelp" class="form-text text-muted">{{
          helpers.name
        }}</small>
      </div>
      <div class="form-group">
        <label for="inputFirstName">First Name</label>
        <input
          type="text"
          class="form-control"
          id="inputFirstName"
          aria-describedby="firstNameHelp"
          placeholder="Enter first name"
          v-model="formData.firstname"
        />
        <small id="firstNameHelp" class="form-text text-muted">{{
          helpers.firstname
        }}</small>
      </div>

      <div class="form-group">
        <label for="inputPassword1">Password</label>
        <input
          v-bind:disabled="options.disablePassword"
          type="password"
          class="form-control"
          id="inputPassword1"
          aria-describedby="password1Help"
          placeholder="Password"
          v-model="formData.password1"
        />
        <small id="password1Help" class="form-text text-muted">{{
          helpers.password1
        }}</small>
      </div>
      <div class="form-group">
        <label for="inputPassword2">Verify Password</label>
        <input
          v-bind:disabled="options.disablePassword"
          type="password"
          class="form-control"
          id="inputPassword2"
          aria-describedby="password2Help"
          placeholder="Password"
          v-model="formData.password2"
        />
        <small id="password2Help" class="form-text text-muted">{{
          helpers.password2
        }}</small>
      </div>

      <fieldset class="form-group">
        <legend>Role(s)</legend>
        <div class="form-check">
          <label class="form-check-label">
            <input
              class="form-check-input"
              type="checkbox"
              value="Guest"
              checked=""
              v-model="formData.roles"
            />
            Guest
          </label>
        </div>
        <div class="form-check disabled">
          <label class="form-check-label">
            <input
              v-bind:disabled="options.disableRoleUser"
              class="form-check-input"
              type="checkbox"
              value="User"
              v-model="formData.roles"
            />
            User
          </label>
        </div>
        <div class="form-check disabled">
          <label class="form-check-label">
            <input
              v-bind:disabled="options.disableRoleAdmin"
              class="form-check-input"
              type="checkbox"
              value="Admin"
              v-model="formData.roles"
            />
            Admin
          </label>
        </div>
      </fieldset>
      <div class="center">
        <button type="submit" class="btn btn-primary large">Submit</button>
      </div>
    </fieldset>
  </form>
</template>

<script>
export default {
  data() {
    return {
      options: {
        disablePseudo: false,
        disablePassword: true,
        disableRoleUser: false,
        disableRoleAdmin: true,
      },
      helpers: {
        name: "",
        firstname: "",
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
        pseudo: "",
        name: "",
        firstname: "",
        email: "",
        password1: "",
        password2: "",
        roles: [],
      },

      loggedIn: this.$auth.loggedIn,
      user: this.$auth.user,
    };
  },
  methods: {
    async submitUser() {
      try { 
        // TODO data control
        console.log("=> Submit User");
      } catch (err) {
        console.log("+++");
        console.log(err);
        console.log("+++");
      }
    },
    //     updateSkillCard(name,text) {
    //         console.log (`update ${name} - ${text}`)
  },
};
</script>

<style scoped>
.center {
  text-align: center;
}

.large {
  width: 100%;
}
</style>