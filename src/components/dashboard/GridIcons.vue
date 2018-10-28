<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-container fluid grid-list-lg>
          <v-subheader>Menu Inicial</v-subheader>
          <v-layout row wrap>
            <v-flex v-for="i in 12" :key="i" xs4>
              <v-card>
                <v-img :src="`https://randomuser.me/api/portraits/men/${i + 20}.jpg`" class="image" alt="lorem" width="100%" height="100%">
                  <v-container fill-height fluid pa-2 >
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text">xxxxxx</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <!-- <v-card-title primary-title>
                  <span class="text-xs-center">Troca</span>
                </v-card-title> -->
                <!-- <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn block color="primary">Success</v-btn>
                </v-card-actions> -->
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
    
    })
  }
</script>

<style>

</style>
