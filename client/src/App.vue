<template>
  <div id="app">
    <v-app>

      <v-toolbar dark color="primary">
        <v-toolbar-title @click="goto('/')">Todo List</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn @click="goto('login')" flat>Login</v-btn>
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
  },
};
</script>

<style>
  .toolbar__title{
    cursor: pointer;
  }
</style>
