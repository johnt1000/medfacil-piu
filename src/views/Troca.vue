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
              color="primary"
              dark
              fixed
              bottom
              right
              fab
            >
              <v-icon>add</v-icon>
        </v-btn>
        
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

    

    </div>
</template>

<script>

export default {
    name: 'troca',
    components: {},
    data () {
      return {
        items: [
          { header: 'Procurando' },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Brunch this weekend?',
            subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
            subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'Oui oui',
            subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
            title: 'Birthday gift',
            subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
            title: 'Recipe to try',
            subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
          }
        ]
      }
    },
    created() {
        
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
