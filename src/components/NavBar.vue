<template>
<v-navbar>
    <v-app-bar
      color="dark"
      dense
      dark
    >
        <v-toolbar-title>
         <router-link to="/" class="white--text ">
         <v-icon>mdi-barley</v-icon>
        pan.ico sourdough
        </router-link>
        
        </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 3"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
</v-navbar>
</template>

<script>
export default{

}
</script>
