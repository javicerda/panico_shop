<template>
  <v-footer dark padless>
    <v-card class="flex" flat>
      <v-card-text class="py-2 white--text text-center">
        Síguenos!
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>support your local commerce || {{ new Date().getFullYear() }} — <strong>pan.ico</strong>
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