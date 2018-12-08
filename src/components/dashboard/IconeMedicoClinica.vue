<template>
  <v-layout row>
    <v-flex xs12>
      <v-card>
        <v-img
          src="https://meditacaotranscendental.com.br/wp-content/uploads/2018/05/me%CC%81dico-1255x640-1140x640.jpg"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">Médicos e Clínicas</div>
            <span class="grey--text">Ache médicos e clínicas para atendimento e agendamento.</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="grey">Pesquisar</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            Cupidatat officia elit et eu. Id Lorem exercitation
            elit adipisicing eiusmod est elit sit cillum est
            cillum adipisicing labore. Nostrud fugiat non culpa
            id cupidatat labore proident sit esse eu ex qui est.
            Cupidatat proident Lorem cillum eiusmod. Amet pariatur
            psum ut et amet id eu proident veniam dolor enim
            exercitation ipsum.
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
