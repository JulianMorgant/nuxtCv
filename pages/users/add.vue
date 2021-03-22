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
        type="create"
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
        roles: "",
      },
      defaultHelpers: {
        //TODO with init function
      },
      formData: {
        user: {
          name: "",
          firstname: "",
          pseudo: "",
          email: "",
          password: "",
          roles: [],
        }, //TODO passwords ?
        passwordCheck: "",
      },
    };
  },

  methods: {
    validate() {
      var forms = document.querySelectorAll(".form-control");
      var ret = true;

      forms.forEach((form) => {
        console.log (form.classList)
        if (!form.classList.contains("is-valid")) {
          form.classList.add("is-invalid");
          ret = false;
        }
      });
      return ret;
    },
    async createUser(user) {
      console.log("=> create user");
      console.log(user.roles);
      if (!this.validate()) {
        console.log("not valid");
        return false;
      }
      try {
        const newUser = {
          name: user.name,
          firstname: user.firstname,
          pseudo: user.pseudo,
          email: user.email,
          password: user.password,
          roles: user.roles,
        };
        console.log("valid");
        console.log(newUser);

        //return this.$repositories.user.create(newUser);
      } catch (err) {
        console.log(err);
        return { succes: false, err: err };
      }
    },

    async goHome() {
      console.log(`goHome`);
      this.$router.push(`/`);
    },
  },
  mounted() {
    const regexMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //TODO  const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,20}$/;
    const regexPassword = /^[a-zA-Z0-9]{1,15}$/;
    const regexName = /^[a-zA-Z]{2,15}$/;
    const regexPseudo = /^[a-zA-Z0-9]{1,15}$/;

    const inputEmail = document.getElementById("inputEmail");
    inputEmail.addEventListener("keyup", function (event) {
      if (inputEmail.value.match(regexMail)) {
        inputEmail.classList.add("is-valid");
        inputEmail.classList.remove("is-invalid");
      } else {
        inputEmail.classList.remove("is-valid");
      }
    });

    const inputName = document.getElementById("inputName");
    inputName.addEventListener("keyup", function (event) {
      if (inputName.value.match(regexName)) {
        inputName.classList.add("is-valid");
        inputName.classList.remove("is-invalid");
      } else {
        inputName.classList.remove("is-valid");
      }
    });

    const inputFirstName = document.getElementById("inputFirstName");
    inputFirstName.addEventListener("keyup", function (event) {
      if (inputFirstName.value.match(regexName)) {
        inputFirstName.classList.add("is-valid");
        inputFirstName.classList.remove("is-invalid");
      } else {
        inputFirstName.classList.remove("is-valid");
      }
    });

    const inputPseudo = document.getElementById("inputPseudo");
    inputPseudo.addEventListener("keyup", function (event) {
      if (inputPseudo.value.match(regexPseudo)) {
        inputPseudo.classList.add("is-valid");
        inputPseudo.classList.remove("is-invalid");
      } else {
        inputPseudo.classList.remove("is-valid");
      }
    });

    const inputPassword1 = document.getElementById("inputPassword1");
    inputPassword1.addEventListener("keyup", function (event) {
      if (inputPassword1.value.match(regexPassword)) {
        inputPassword1.classList.add("is-valid");
        inputPassword1.classList.remove("is-invalid");
      } else {
        inputPassword1.classList.remove("is-valid");
      }
    });

    const inputPassword2 = document.getElementById("inputPassword2");
    inputPassword2.addEventListener("keyup", function (event) {
      if (
        inputPassword1.value.match(regexPassword) &&
        inputPassword2.value == inputPassword1.value
      ) {
        inputPassword2.classList.add("is-valid");
        inputPassword2.classList.remove("is-invalid");
      } else {
        inputPassword2.classList.remove("is-valid");
      }
    });
  },
  /*
  function () {  // bootstrap validation

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('create', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
}
*/
};
</script>
