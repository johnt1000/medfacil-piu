<template>
  <v-container>
    <v-layout text-xs-center wrap justify-center>
      <v-flex xs12 mb-5>
        <v-card>
          <v-card-title class="title font-weight-regular justify-space-between">
            <span>Login</span>
          </v-card-title>
          <v-card-text>
            <v-alert :value="alert" type="error" transition="scale-transition" icon="warning" outline>
              Usuário ou senha inválidos!
            </v-alert>
            <v-text-field label="Usuário" type="text" v-model="username"></v-text-field>
            <v-text-field label="Senha" type="password" v-model="password"></v-text-field>
            <span class="caption grey--text text--darken-1">
              Versão teste: Usuário 'admin' e senha '12345'
            </span>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" depressed @click="login">Entrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    username: null,
    password: null,
    alert: false
  }),
  methods: {
    login() {
      const data = this.$storage.get('login');
      if(this.username == data.username && this.password == data.password) {
        this.$router.push('dashboard')
      } else {
        this.alert = true
      }
    }
  }
}
</script>

<style>

</style>
