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
        { nome: 'Abraxane', qtd: 10, tipo: "Cápsula", usuarios: 10 },
        { nome: 'Dacarbazina', qtd: 7, tipo: "Líquido", usuarios: 2 }
      ]
    )

    this.$storage.set('troca_doadores',
      [
        { nome: 'Sr. João', qtd: 10, tipo: "Cápsula", fone: '(84) 99333-2222', mail: 'jon@gmail.com' },
        { nome: 'Sra. Maria', qtd: 7, tipo: "Cápsula", fone: '(84) 99333-0000', mail: 'mary@gmail.com' }
      ]
    )

    this.$storage.set('troca_doando',
      [
        { nome: 'Facyl M', qtd: 100, tipo: "Cápsula", usuarios: 1 },
        { nome: 'Ulceronyl', qtd: 4, tipo: "Cápsula", usuarios: 24 },
        { nome: 'Ecalta', qtd: 1, tipo: "Líquido", usuarios: 1 }
      ]
    )

    this.$storage.set('favorites', [
      {
        name: 'Dr. Jonata',
        subtitle: 'Dentista da família'
      },
      {
        name: 'Dr. João',
        subtitle: 'Médico da família'
      },
    ])
    
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
