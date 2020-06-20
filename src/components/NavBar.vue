<template>
    <v-app-bar color="dark" dense dark >

     <v-toolbar-title><b>pan.ico</b></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text @click="logout">
        <span class="mr-2">{{ currentUser ? 'Cerrar Sesión' : 'Iniciar Sesión' }}</span>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 3" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
</template>

<script>
import Firebase from 'firebase'
import {mapState, mapActions} from 'vuex'
export default {
    methods:{
      ...mapActions(['setCurrentUser']),
        logout(){
          //al cerrar sesión, te envía a la vista de login
            Firebase.auth().signOut().then(()=> {
              this.setCurrentUser(null)
              this.$router.push('/login')
            })
        }
    },
    computed:{
      ...mapState(['currentUser'])
    }


}
</script>