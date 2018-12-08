<template>
    <div>
        
        <v-card flat>
            <v-list two-line subheader>

                <v-subheader>
                    Doadores
                </v-subheader>
                
                <v-list-tile v-for="troca in trocaDadores" :key="troca.nome">

                    <v-list-tile-avatar>
                        <v-icon large>account_circle</v-icon>
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>Nome: {{ troca.nome }}</v-list-tile-title>
                        <v-list-tile-sub-title>
                            QTD: {{ troca.qtd }} Unidades ({{ troca.tipo }})
                        </v-list-tile-sub-title>
                    </v-list-tile-content>
                    
                    <v-list-tile-action>
                        <v-icon color="grey" large @click="showDialog(troca)">
                            remove_red_eye
                        </v-icon>
                    </v-list-tile-action>

                </v-list-tile>

            </v-list>
        </v-card>
            
        
        <v-btn
              color="white"
              fixed
              bottom
              left
              fab
              @click="voltar"
            >
              <v-icon>arrow_back</v-icon>
        </v-btn>

        <v-dialog v-model="dialog" persistent>
            <v-card flat>
                
                <v-card-text>
                    <v-card flat>
                        <v-img
                        src="https://cdn.vuetifyjs.com/images/lists/ali.png"
                        height="200px"
                        >
                        <v-layout
                            column
                            fill-height
                        >
                            <v-card-title>
                                <v-spacer></v-spacer>
                                <v-btn dark icon>
                                    <v-icon>more_vert</v-icon>
                                </v-btn>
                            </v-card-title>

                            <v-card-title class="white--text pl-4 pt-4">
                                <div class="display-1 pl-5 pt-5">{{ doador.nome }}</div>
                            </v-card-title>
                        </v-layout>
                        </v-img>

                        <v-list two-line>
                        <v-list-tile>
                            <v-list-tile-action>
                            <v-icon color="indigo">phone</v-icon>
                            </v-list-tile-action>

                            <v-list-tile-content>
                                <v-list-tile-title>{{ doador.fone }}</v-list-tile-title>
                                <v-list-tile-sub-title>Telefone</v-list-tile-sub-title>
                            </v-list-tile-content>

                            <v-list-tile-action>
                            <v-icon>chat</v-icon>
                            </v-list-tile-action>
                        </v-list-tile>

                        <v-divider inset></v-divider>

                        <v-list-tile>
                            <v-list-tile-action>
                            <v-icon color="indigo">mail</v-icon>
                            </v-list-tile-action>

                            <v-list-tile-content>
                            <v-list-tile-title>{{ doador.mail }}</v-list-tile-title>
                            <v-list-tile-sub-title>E-mail</v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>

                        <v-divider inset></v-divider>

                        <v-list-tile>
                            <v-list-tile-action>
                            <v-icon color="indigo">location_on</v-icon>
                            </v-list-tile-action>

                            <v-list-tile-content>
                            <v-list-tile-title>1400 Main Street</v-list-tile-title>
                            <v-list-tile-sub-title>Orlando, FL 79938</v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        </v-list>
                    </v-card>
                </v-card-text>
                
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="dialog = false">Fechar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </div>
</template>

<script>

export default {
    name: 'trocaUsuario',
    components: {},
    data () {
        return {
            dialog: false,
            trocaDadores: [],
            doador: {
                nome: null,
                qtd: 0,
                tipo: null
            }
        }
    },
    created() {
        this.trocaDadores = this.$storage.get('troca_doadores')
    },
    methods: {
      voltar() {
        this.$router.push('/trocas')
      },
      showDialog(doador) {
          this.dialog = !this.dialog
          this.doador = doador
      }
    }
}
</script>

<style>

</style>
