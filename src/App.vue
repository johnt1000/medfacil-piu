<template>
  <v-app>
    <v-toolbar dark color="primary" app>
      <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
      <v-toolbar-title>MedFácil</v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="connected">
        <v-btn icon @click="exitApp">
          <v-icon>account_circle</v-icon>
        </v-btn>
        <v-btn icon @click="exitApp">
          <v-icon>exit_to_app</v-icon>
        </v-btn>
      </div>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
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
import EventBus from '@/event-bus'

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      connected: false
    }
  },
  created() {
    this.$storage.set('login', { username: 'admin', password: '12345' })

    this.$storage.set('medicamentos',
      [
        'Abraxane',
        'Accolate',
        'B-Platin',
        'CPHD AC 45',
        'Dacarbazina',
        'Ecalta',
        'Facyl M',
        'Quadrinax',
        'Ulceronyl'
      ]
    )
    this.$storage.set('tipos_medicamentos',
      [
        'Cápsula',
        'Líquido',
      ]
    )

    this.$storage.set('troca_procura',
      [
        { nome: 'Abraxane', qtd: 10, usuarios: 10 },
        { nome: 'Dacarbazina', qtd: 7, usuarios: 2 }
      ]
    )
    
    EventBus.$on('connected', payLoad => {
      this.connected = payLoad
    })
  },
  methods: {
    exitApp() {
      this.$router.push('/')
      EventBus.$emit('connected', false)
    }
  }
}
</script>

<style>
</style>
