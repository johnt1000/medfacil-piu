<template>
  <v-layout row>
    <v-flex xs12>
      <v-card>
        <v-img
          src="https://www.autoescolaonline.net/wp-content/uploads/2017/05/post-veiculo-emergencia-sinal.jpg"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">Emergências</div>
            <span class="grey--text">Cadastre contatos de emergências e tenha acesso rápido</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat @click="list">Contatos</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            Deserunt et consequat excepteur officia
            ullamco veniam nostrud voluptate ut
            laborum cupidatat anim eu. Veniam nulla
            pariatur Lorem anim. Ipsum eiusmod esse
            aute elit proident proident non sunt
            non ad non proident. Mollit nisi aute
            culpa reprehenderit dolor cupidatat do
            labore nulla tempor enim aliqua. Fugiat
            et qui irure ex laborum do. Est dolor
            eserunt mollit et laborum enim ipsum
            esse anim mollit velit sint.
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
        this.$router.push('/sos')
      }
    }
  }
</script>

<style>
  .row {
    margin-bottom: 5%;
  }
</style>
