<template>
  <v-layout row>
    <v-flex xs12>
      <v-card>
        <v-img
          src="https://conteudo.imguol.com.br/c/entretenimento/08/2017/11/29/remedios-medicamento-1511972729154_v2_615x300.jpg"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">Meus Medicamentos</div>
            <span class="grey--text">Cadastre seus medicamentos</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <!-- <v-btn flat>Medicamentos</v-btn> -->
          <v-btn flat color="grey">Registrar</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            Adipisicing do in tempor elit in duis esse.
            In esse reprehenderit ea eu. Amet magna incididunt
            aliqua dolor anim mollit ex consequat magna
            adipisicing tempor ipsum. Anim elit consequat nulla
            aliqua aliqua irure elit labore dolore.
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
