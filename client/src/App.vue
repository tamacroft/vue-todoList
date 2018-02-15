<template>
  <div id="app">
    <v-app>

      <v-toolbar dark color="primary">
        <v-toolbar-title @click="goto('/')">Todo List</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn @click="goto('login')" flat v-if="menuLogin">Login</v-btn>
          <v-btn @click="goto('browse')" flat v-if="menuBrowse">Browse</v-btn>
          <v-btn @click="logout()" flat v-if="menuBrowse">Logout</v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <main>
        {{ menuLogin }}
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    goto(route) {
      this.$router.push(route);
    },
    logout() {
      // sad
    },
  },
  computed: {
    menuLogin() {
      const token = localStorage.getItem('token');
      let menu = true;
      if (token) menu = false;
      else menu = true;
      return menu;
    },
    menuBrowse() {
      const token = localStorage.getItem('token');
      let menu = false;
      if (token) menu = true;
      else menu = false;
      return menu;
    },
  },
};
</script>

<style>
  .toolbar__title{
    cursor: pointer;
  }
</style>
