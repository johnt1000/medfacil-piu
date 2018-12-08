<template>
  <v-layout row>
    <v-flex xs12>
      <v-card>
        <v-img
          src="https://blog.softwareavaliacao.com.br/wp-content/uploads/2017/05/0118-02.jpg"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">Avaliações</div>
            <span class="grey--text">Avalie os usuários da plataforma e ajuda o MedFácil a melhorar.</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="grey">Lista de usuário</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            Velit anim mollit aliqua Lorem est.
            Nulla est velit deserunt Lorem ea
            pariatur incididunt nisi sunt labore
            sit Lorem enim. Nisi sunt do irure
            eiusmod id in non eiusmod occaecat
            excepteur tempor et magna. Exercitation
            nulla aliquip occaecat ex aliquip
            voluptate aute voluptate magna ex ut
            ullamco duis non. Occaecat tempor ut
            commodo incididunt duis fugiat elit
            culpa laboris. Laborum labore minim
            velit veniam nostrud anim aliquip
            occaecat eiusmod proident aliqua est
            incididunt.
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
    })
  }
</script>

<style>
  .row {
    margin-bottom: 5%;
  }
</style>
