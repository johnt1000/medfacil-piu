<template>
    <div>
        
        <v-card flat>
            <v-list two-line subheader>

                <v-subheader>
                    Doadores
                </v-subheader>
                
                <v-list-tile v-for="troca in trocaProcura" :key="troca.nome">

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
                        <v-icon color="grey" large @click="showDialog">
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

        <v-dialog v-model="dialog" persistent max-width="600px">
            <v-btn
                slot="activator"
              color="primary"
              dark
              fixed
              bottom
              right
              fab
            >
                <v-icon>add</v-icon>
            </v-btn>

            <v-card>
                <v-card-title>
                    <span class="headline">Medicamento</span>
                </v-card-title>
                
                <v-card-text>
                    <v-card>
                        <v-img
                        src="https://cdn.vuetifyjs.com/images/lists/ali.png"
                        height="300px"
                        >
                        <v-layout
                            column
                            fill-height
                        >
                            <v-card-title>
                            <v-btn dark icon>
                                <v-icon>chevron_left</v-icon>
                            </v-btn>

                            <v-spacer></v-spacer>

                            <v-btn dark icon class="mr-3">
                                <v-icon>edit</v-icon>
                            </v-btn>

                            <v-btn dark icon>
                                <v-icon>more_vert</v-icon>
                            </v-btn>
                            </v-card-title>

                            <v-spacer></v-spacer>

                            <v-card-title class="white--text pl-5 pt-5">
                            <div class="display-1 pl-5 pt-5">Ali Conners</div>
                            </v-card-title>
                        </v-layout>
                        </v-img>

                        <v-list two-line>
                        <v-list-tile @click="">
                            <v-list-tile-action>
                            <v-icon color="indigo">phone</v-icon>
                            </v-list-tile-action>

                            <v-list-tile-content>
                                <v-list-tile-title>(650) 555-1234</v-list-tile-title>
                                <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
                            </v-list-tile-content>

                            <v-list-tile-action>
                            <v-icon>chat</v-icon>
                            </v-list-tile-action>
                        </v-list-tile>

                        <v-divider inset></v-divider>

                        <v-list-tile @click="">
                            <v-list-tile-action>
                            <v-icon color="indigo">mail</v-icon>
                            </v-list-tile-action>

                            <v-list-tile-content>
                            <v-list-tile-title>aliconnors@example.com</v-list-tile-title>
                            <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>

                        <v-divider inset></v-divider>

                        <v-list-tile @click="">
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
                    <v-btn color="blue darken-1" flat @click="dialog = false">Salvar</v-btn>
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
            items: [],
            medicamentos: [],
            tiposMedicamentos: [],
            trocaProcura: [],
            trocaDoando: [],
            dialog: false
        }
    },
    created() {
        this.medicamentos = this.$storage.get('medicamentos')
        this.tiposMedicamentos = this.$storage.get('tipos_medicamentos')
        this.trocaProcura = this.$storage.get('troca_procura')
        this.trocaDoando = this.$storage.get('troca_doando')
    },
    methods: {
      voltar() {
        this.$router.push('/trocas')
      },
      showDialog() {
          this.dialog = !this.dialog
      }
    }
}
</script>

<style>

</style>
