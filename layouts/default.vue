<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <ul class="nav">
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/">Accueil</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/dev">Dev</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/login">Login</nuxt-link>
        </li>
                <li class="nav-item">
          <nuxt-link class="nav-link" to="/admin">Admin</nuxt-link>
        </li>
        <li v-if="isAuthenticated">
          <a>{{loggedInUser.pseudo}}</a>

        </li>
      </ul>
    </nav>
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    async logout() {
      await this.$auth.logout().then(() => {
   //       message: 'Vous êtes desormais déconnecté(e)',
   //       type: 'is-info'
        })
      }
    }
  }


  console.log("....................");
  

</script>



<style>
/*

// old css

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
*/
</style>
