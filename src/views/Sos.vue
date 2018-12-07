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

        <v-tab-item id="tab-1">

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

            <v-tab-item id="tab-2">
                <v-card>
                    <v-list three-line>
                        <template v-for="(item, index) in items">
                            <v-subheader
                            v-if="item.header"
                            :key="item.header"
                            >
                            {{ item.header }}
                            </v-subheader>

                            <v-divider
                            v-else-if="item.divider"
                            :inset="item.inset"
                            :key="index"
                            ></v-divider>

                            <v-list-tile
                            v-else
                            :key="item.title"
                            avatar
                            @click=""
                            >
                            <v-list-tile-avatar>
                                <img :src="item.avatar">
                            </v-list-tile-avatar>

                            <v-list-tile-content>
                                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                            </v-list-tile-content>
                            </v-list-tile>
                        </template>
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
    </div>
</template>

<script>

export default {
    name: 'sos',
    components: {},
    data () {
      return this.$storage.get('favorites')
    },
    created() {
        this.$storage.set('favorites', [
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Dr. Jonata',
            subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Dr. João',
            subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
          },
        ])

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
