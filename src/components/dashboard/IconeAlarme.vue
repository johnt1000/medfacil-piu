<template>
  <v-layout row>
    <v-flex xs12>
      <v-card>
        <v-img
          src="https://cdn.blog.psafe.com/blog/wp-content/uploads/2017/06/S12017-Project-4-Maintenance-BR-BLOG-PT-Perdeu-o-celular-veja-como-disparar-um-alarme-a-dist%C3%A2ncia-1.jpg"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">Alarme</div>
            <span class="grey--text">Cadastre seus alarmes e não perca a hora do remédio</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat>Lista de alarmes</v-btn>
          <v-btn flat color="purple">Novo Alarme</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            Tempor officia aliqua minim dolore id cupidatat consectetur laboris
            nisi commodo et aliqua do incididunt. Sit magna consectetur non eu
            dolor tempor. Aliqua eu amet elit commodo proident in nostrud. Quis
            sit consequat occaecat do et deserunt mollit id id anim exercitation`
            quis pariatur.
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
