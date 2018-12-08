<template>
  <v-layout row>
    <v-flex xs12>
      <v-card>
        <v-img
          src="https://noticias.reclameaqui.com.br/uploads/2015/12/553788732.png"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">Troca Solidária</div>
            <span class="grey--text">Cadastre seus medicamentos para troca e ache medicamentos que vocé precisa.</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat @click="list">Trocas</v-btn>
          <!-- <v-btn flat color="purple">Nova Troca</v-btn> -->
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            Aute sint ex voluptate cupidatat tempor
            reprehenderit ad magna qui reprehenderit
            veniam cillum et aliqua. Tempor minim amet
            elit cillum id. Eu deserunt Lorem veniam
            quis pariatur officia voluptate. Et sint
            nulla consequat amet enim pariatur. Mollit
            consequat elit irure ipsum cillum commodo
            ipsum veniam Lorem.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      show: false
    }),
    methods: {
      list() {
        this.$router.push('/trocas')
      }
    }
  }
</script>

<style>
  .row {
    margin-bottom: 5%;
  }
</style>
