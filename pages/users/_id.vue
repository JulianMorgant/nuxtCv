<template>
  <!--   


https://bootswatch.com/lux/



-->

  <!-- <form @submit.prevent="submitUser"> -->
  <form>
    <fieldset>
      <legend>{{ title }}</legend>

      <div class="form-group">
        <label for="inputEmail">Email address</label>
        <input
          type="email"
          class="form-control"
          id="inputEmail"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="formData.user.email"
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
          v-model="formData.user.pseudo"
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
          v-model="formData.user.name"
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
          v-model="formData.user.firstname"
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
              v-model="formData.user.roles"
            />
            Guest
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input
              v-bind:disabled="options.disableRoleUser"
              class="form-check-input"
              type="checkbox"
              value="User"
              v-model="formData.user.roles"
            />
            User
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input
              v-bind:disabled="options.disableRoleAdmin"
              class="form-check-input"
              type="checkbox"
              value="Admin"
              v-model="formData.user.roles"
            />
            Admin
          </label>
        </div>
      </fieldset>
    </fieldset>
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
export default {
  middleware: "auth",

  data() {
    return {
      title: "Register",
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
        user: {}, //TODO passwords ?
        password1: "",
        password2: "",
      },

      loggedIn: this.$auth.loggedIn,
      user: this.$auth.user,
    };
  },
  methods: {
    async updateUser(user) {
      const tempUser = {};

      ({
        name: tempUser.name,
        firstname: tempUser.firstname,
        pseudo: tempUser.pseudo,
        email: tempUser.email,
        password: tempUser.password,
        roles: tempUser.roles,
        _id: tempUser.id,
      } = user);

      try {
        // TODO data control
        console.log("=> Update User");
        console.log(tempUser);
        return this.$repositories.user.update(tempUser, tempUser.id);
      } catch (err) {
        console.log("+++");
        console.log(err);
        console.log("+++");
      }
    },
    async deleteUser(id) {
      console.log(`Delete User : ${id}`);
      try {
        await this.$repositories.user.delete(id);
        this.$router.push(`/admin`);
      } catch (err) {
        console.log(err);
      }
    },
  },
  async asyncData(ctx) {
    console.log("+++++++++");
    console.log(ctx.params.id);

    try {
      return {
        formData: {
          user: await ctx.app.$repositories.user.show(ctx.params.id),
        },
      };
    } catch (err) {
      console.log(err);
      return {
        // if id false return error 501 => TODO err not found
        formData: {
          user: {},
        },
      };
    }
  },
};
</script>

<style scoped>

</style>