<template>
  <v-app-bar app dense class="pa-0" :elevation="1">
    <v-btn
      height="48"
      width="48"
      color="MainColor"
      tile
      elevation="0"
      @click="TOGGLE_DRAWER(true)"
      v-if="GET_WINDOW_SIZE.x < 1024"
      class="mr-6"
    >
      <v-icon color="#fff">$menu</v-icon>
    </v-btn>

    <v-toolbar-title class="pl-0">
      <p style="font-weight: bold; font-size: 1.5rem" class="mb-0 ml-4">
        My App
      </p>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <my-btn-icon @click="changeTheme">
      <v-icon v-if="$vuetify.theme.dark">mdi-weather-sunny</v-icon>
      <v-icon v-else>mdi-moon-waxing-crescent</v-icon>
    </my-btn-icon>
  </v-app-bar>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "MenuAppBar",
  data: () => ({}),
  computed: {
    ...mapGetters(["GET_THEME", "GET_MINI", "GET_DRAWER", "GET_WINDOW_SIZE"]),
  },
  methods: {
    ...mapMutations(["TOGGLE_DRAWER"]),
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("userDarkTheme", this.$vuetify.theme.dark);
    },
  },
};
</script>

<style lang="scss" scoped>
.v-toolbar__content,
.v-toolbar__extension {
  padding: 0 !important;
}

.menuTop {
  display: none !important;
}

.menuLeft {
  display: block !important;
}

@media screen and (min-width: 768px) {
  .menuTop {
    display: block !important;
  }
  .menuLeft {
    display: none !important;
  }
}
</style>
