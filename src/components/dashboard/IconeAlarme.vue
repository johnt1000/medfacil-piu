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
            <span class="grey--text">Cadastre seus medicamentos</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat>Lista</v-btn>
          <v-btn flat color="purple">Novo Cadastro</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            Cadastre seus medicamentos de uso continuo ou transitório.
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
