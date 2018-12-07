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
            SOS
            <v-icon>local_hospital</v-icon>
        </v-tab>

        <v-tab href="#tab-2">
            Favoritos
            <v-icon>star_border</v-icon>
        </v-tab>

        <v-tab-item value="tab-1">

                <v-card>
                    <v-img
                    src="https://www.acritica.com/uploads/news/image/752199/show_samu_C24ED948-0569-4586-87FB-B538B74A6F2E.JPG"
                    height="200px"
                    >
                    </v-img>

                    <v-card-title primary-title>
                    <div>
                        <v-btn flat class="headline">SAMU</v-btn>
                    </div>
                    </v-card-title>
                </v-card>
                <v-card>
                    <v-img
                    src="https://image.shutterstock.com/image-vector/medical-concept-panoramic-background-hospital-260nw-272488094.jpg"
                    height="200px"
                    >
                    </v-img>

                    <v-card-title primary-title>
                    <div>
                        <v-btn flat class="headline">Hospital</v-btn>
                    </div>
                    </v-card-title>
                </v-card>

                <v-card>
                    <v-img
                    src="https://www.pedroengler.com/wp-content/uploads/2018/08/marketing-medico.jpg"
                    height="200px" position="top"
                    >
                    </v-img>

                    <v-card-title primary-title>
                    <div>
                        <v-btn flat class="headline">Médico</v-btn>
                    </div>
                    </v-card-title>
                </v-card>

                <v-card>
                    <v-img
                    src="https://www.websterslawyers.com.au/wp-content/uploads/2017/12/Police-and-Car-Vector.jpg"
                    height="200px" 
                    >
                    </v-img>

                    <v-card-title primary-title>
                    <div>
                        <v-btn flat class="headline">Polícia</v-btn>
                    </div>
                    </v-card-title>
                </v-card>

                <v-card>
                    <v-img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT93AItY9s2YfK_MQkf7JuYP1GH3Nk0l1t-TuS1RJhfWRG79Sy2pA"
                    height="200px" 
                    >
                    </v-img>

                    <v-card-title primary-title>
                    <div>
                        <v-btn flat class="headline">Bombeiro</v-btn>
                    </div>
                    </v-card-title>
                </v-card>
            </v-tab-item>

            <v-tab-item value="tab-2">
                <v-card flat>
                    <v-list two-line subheader>
                            
                        <v-subheader>
                            Favoritos
                        </v-subheader>
                        
                        <v-list-tile v-for="favorite in favorites" :key="favorite.name">

                            <v-list-tile-content>
                                <v-list-tile-title>Nome: {{ favorite.name }}</v-list-tile-title>
                                <v-list-tile-sub-title>
                                    {{ favorite.subtitle }}
                                </v-list-tile-sub-title>
                            </v-list-tile-content>
                            
                            <v-list-tile-action>
                                <v-badge overlap>
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
                    <span class="headline">Favorito</span>
                </v-card-title>
                
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12 sm6>
                                <v-text-field
                                    label="Nome*"
                                    required
                                    v-model="name"
                                    type="text"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <v-text-field
                                    label="Descrição*"
                                    required
                                    v-model="subtitle"
                                    type="text"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <small>* Campo obrigatório</small>
                </v-card-text>
                
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="dialog = false">Fechar</v-btn>
                    <v-btn color="blue darken-1" flat @click="addFavorito">Salvar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </div>
</template>

<script>

export default {
    name: 'sos',
    components: {},
    data () {
        return {
            dialog: false,
            name: '',
            subtitle: '',
            favorites: []
        }
    },
    created() {
        this.favorites = this.$storage.get('favorites')
    },
    methods: {
      goDashboard() {
        this.$router.push('/dashboard')
        this.$storage.set('favorites', this.favorites)
      },
      addFavorito() {
        this.dialog = false
        this.favorites.push( {
            name: this.name,
            subtitle: this.subtitle
        })
      }
    }
}
</script>

<style>

</style>
