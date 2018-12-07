<template>
    <div>
        <v-tabs
            centered
            color="primary"
            dark
            icons-and-text
        >

            <v-tabs-slider color="yellow"></v-tabs-slider>
            
            <v-tab href="#tab-1">
                Procurando
                <v-icon>search</v-icon>
            </v-tab>

            <v-tab href="#tab-2">
                Doando
                <v-icon>redeem</v-icon>
            </v-tab>

            <v-tab-item id="tab-1">
                <v-card flat>
                    <v-list two-line subheader>
                            
                        <v-subheader>
                            Estou procurando...
                        </v-subheader>
                        
                        <v-list-tile>

                            <v-list-tile-avatar>
                                <v-icon>local_hospital</v-icon>
                            </v-list-tile-avatar>

                            <v-list-tile-content>
                                <v-list-tile-title>Nome: Viagra</v-list-tile-title>
                                <v-list-tile-sub-title>Quantidade: 10 Unidades</v-list-tile-sub-title>
                            </v-list-tile-content>
                            
                            <v-list-tile-action>
                                <v-badge overlap>
                                    <span slot="badge">0</span>
                                    <v-icon color="grey lighten-1" large>
                                        account_circle
                                    </v-icon>
                                </v-badge>
                            </v-list-tile-action>

                        </v-list-tile>

                        <v-divider></v-divider>

                        <v-list-tile>

                            <v-list-tile-avatar>
                                <v-icon>local_hospital</v-icon>
                            </v-list-tile-avatar>

                            <v-list-tile-content>
                                <v-list-tile-title>Nome: Aspirina</v-list-tile-title>
                                <v-list-tile-sub-title>Quantidade: 2 Unidades</v-list-tile-sub-title>
                            </v-list-tile-content>
                            
                            <v-list-tile-action>
                                <v-badge overlap>
                                    <span slot="badge">3</span>
                                    <v-icon color="grey lighten-1" large>
                                        account_circle
                                    </v-icon>
                                </v-badge>
                            </v-list-tile-action>

                        </v-list-tile>

                    </v-list>
                </v-card>
            </v-tab-item>

            <v-tab-item id="tab-2">
                <v-card flat>
                    <v-list two-line subheader>
                            
                        <v-subheader>
                            Estou doando...
                        </v-subheader>
                        
                        <v-list-tile>

                            <v-list-tile-avatar>
                                <v-icon>local_hospital</v-icon>
                            </v-list-tile-avatar>

                            <v-list-tile-content>
                                <v-list-tile-title>Nome: Viagra</v-list-tile-title>
                                <v-list-tile-sub-title>Quantidade: 10 Unidades</v-list-tile-sub-title>
                            </v-list-tile-content>
                            
                            <v-list-tile-action>
                                <v-badge overlap>
                                    <span slot="badge">15</span>
                                    <v-icon color="grey lighten-1" large>
                                        account_circle
                                    </v-icon>
                                </v-badge>
                            </v-list-tile-action>

                        </v-list-tile>

                        <v-divider></v-divider>

                        <v-list-tile>

                            <v-list-tile-avatar>
                                <v-icon>local_hospital</v-icon>
                            </v-list-tile-avatar>

                            <v-list-tile-content>
                                <v-list-tile-title>Nome: Aspirina</v-list-tile-title>
                                <v-list-tile-sub-title>Quantidade: 2 Unidades</v-list-tile-sub-title>
                            </v-list-tile-content>
                            
                            <v-list-tile-action>
                                <v-badge overlap>
                                    <span slot="badge">7</span>
                                    <v-icon color="grey lighten-1" large>
                                        account_circle
                                    </v-icon>
                                </v-badge>
                            </v-list-tile-action>

                        </v-list-tile>

                    </v-list>
                </v-card>
            </v-tab-item>

        </v-tabs>
        
        <v-btn
              color="white"
              fixed
              bottom
              left
              fab
              @click="goDashboard"
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
                    <span class="headline">Procurando</span>
                </v-card-title>
                
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12 sm6>
                                <v-autocomplete
                                :items="this.medicamentos"
                                label="Medicamento*"
                                required
                                ></v-autocomplete>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <v-autocomplete
                                :items="this.tipos_medicamentos"
                                label="Tipo*"
                                required
                                ></v-autocomplete>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <v-text-field
                                    label="Quantidade*"
                                    required
                                    type="number"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <small>* Campo obrigatório</small>
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
    name: 'troca',
    components: {},
    data () {
        return {
            dialog: false,
            items: [],
            medicamentos: [],
            tipos_medicamentos: []
        }
    },
    created() {
        this.medicamentos = this.$storage.get('medicamentos')
        this.tipos_medicamentos = this.$storage.get('tipos_medicamentos')
    },
    methods: {
      goDashboard() {
        this.$router.push('/dashboard')
      }
    }
}
</script>

<style>

</style>
