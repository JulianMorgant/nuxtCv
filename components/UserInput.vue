<template>
  <fieldset>
    <legend>{{ data.title }}</legend>

    <div class="form-group">
      <label for="inputEmail">Email address</label>
      <input
        type="email"
        class="form-control"
        id="inputEmail"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        v-model="data.formData.user.email"
        required
      />
            <div class="invalid-feedback" id="emailHelp">
        Please choose an eMail.
      </div>
      <small id="emailHelp" class="form-text text-muted">{{
        data.helpers.email
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
        v-model="data.formData.user.pseudo"
        required
      />
      <div class="invalid-feedback" id="pseudoHelp">
        Please choose a pseudo.
      </div>
      <small id="pseudoHelp" class="form-text text-muted">{{
        data.helpers.pseudo
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
        v-model="data.formData.user.name"
        required
      />
      <div class="invalid-feedback" id="nameHelp">Please choose a name.</div>
      <small id="nameHelp" class="form-text text-muted">{{
        data.helpers.name
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
        v-model="data.formData.user.firstname"
        required
      />
      <div class="invalid-feedback" id="firstNameHelp">
        Please choose a first name.
      </div>
      <small id="firstNameHelp" class="form-text text-muted">{{
        data.helpers.firstname
      }}</small>
    </div>

    <div class="form-group">
      <label for="inputPassword1">Password</label>
      <input
        v-bind:disabled="data.options.disablePassword"
        type="password"
        class="form-control"
        id="inputPassword1"
        aria-describedby="password1Help"
        placeholder="Password"
        v-model="data.formData.user.password"
        required
      />
      <div class="invalid-feedback" id="password1Help">Not good.</div>
      <small id="password1Help" class="form-text text-muted">{{
        data.helpers.password1
      }}</small>
    </div>
    <div class="form-group">
      <label for="inputPassword2">Verify Password</label>
      <input
        v-bind:disabled="data.options.disablePassword"
        type="password"
        class="form-control"
        id="inputPassword2"
        aria-describedby="password2Help"
        placeholder="Password"
        v-model="data.formData.passwordCheck"
        required
      />
      <div class="invalid-feedback" id="password2Help">
        Passwords did not match.
      </div>
      <small id="password2Help" class="form-text text-muted">{{
        data.helpers.password2
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
            v-model="data.formData.user.roles"
          />
          Guest
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input
            v-bind:disabled="data.options.disableRoleUser"
            class="form-check-input"
            type="checkbox"
            value="User"
            v-model="data.formData.user.roles"
          />
          User
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input
            v-bind:disabled="data.options.disableRoleAdmin"
            class="form-check-input"
            type="checkbox"
            value="Admin"
            v-model="data.formData.user.roles"
          />
          Admin
        </label>
      </div>
    </fieldset>
  </fieldset>
</template>


<script>
export default {
  name: "UserInput",
  props: ["data"],
};
</script>