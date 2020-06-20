<template>
  <div>
      <v-card
      class="mx-auto"
      max-width="344"
      >
      <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
      ></v-img>

      <v-card-title>
      {{ product.data.name }}
      </v-card-title>

      <v-card-subtitle>
      {{ product.data.price }}
      </v-card-subtitle>

      <v-card-actions>
      <v-btn text>Share</v-btn>

      <v-btn color="purple" text>
          Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
            {{ product.data.description }}
            </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
    data: () => ({
      show: false,
    }),
}
</script>