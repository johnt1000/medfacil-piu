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
