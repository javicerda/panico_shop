<template>
   <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
    >
    <v-spacer></v-spacer>
      <v-card-title class="text-center">
        <strong class="subheading">Síguenos!</strong>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>pan.ico</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-instagram',
      ],
    }),
  }
</script>