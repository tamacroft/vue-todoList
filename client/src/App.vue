<template>
  <div id="app">
    <v-app>

      <v-toolbar dark color="primary">
        <v-toolbar-title @click="goto('/')">Todo List</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn @click="goto('login')" flat v-if="!$store.getters.token">Login</v-btn>
          <v-btn @click="goto('browse')" flat v-if="$store.getters.token">Browse</v-btn>
          <v-btn @click="logout()" flat v-if="$store.getters.token">Logout</v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <main>
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
      this.$store.dispatch('signout');
      this.$router.push('/');
    },
  },
};
</script>

<style>
  .toolbar__title{
    cursor: pointer;
  }
</style>
