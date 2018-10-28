<template>
  <v-app>
    <v-toolbar dark color="primary" app>
      <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
      <v-toolbar-title>MedFácil</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="exitApp">
        <v-icon>account_circle</v-icon>
      </v-btn>
      <v-btn icon @click="exitApp">
        <v-icon>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <!-- <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        <router-link to="/login">Login</router-link>
      </div>
      <router-view/>
    </div> -->
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      //
    }
  },
  created() {
    this.$storage.set('login', { username: 'admin', password: '12345' })
  },
  methods: {
    exitApp() {
      this.$router.push('/');
    }
  }
}
</script>

<style>
</style>
