<template>
  <v-app>
    <v-content>
      <nav-bar/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export default {
  name: 'App',

  components: {
    NavBar,
    Footer
  },
};
</script>
