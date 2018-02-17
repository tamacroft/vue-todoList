<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <v-container>
          <v-alert type="error" :value="error.show" dismissible>
            {{ error.message }}
          </v-alert>
          <v-form v-model="valid" @submit.prevent="login()">
            <v-text-field
              label="Username"
              v-model="username"
              :rules="usernameRules"
              required
            ></v-text-field>
            <v-text-field
              type="password"
              label="Password"
              v-model="password"
              :rules="passwordRules"
              required
            ></v-text-field>
            <v-btn type="submit" color="primary">Login</v-btn>
            atau <router-link to="/register">daftar?</router-link>
          </v-form>
        </v-container>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import services from '../services';

export default {
  data() {
    return {
      valid: false,
      username: '',
      password: '',
      error: {},
      usernameRules: [
        v => !!v || 'Username wajib diisi.',
        v => v.length >= 5 || 'Username wajib diisi.',
      ],
      passwordRules: [
        v => !!v || 'Password wajib diisi.',
        v => v.length >= 3 || 'Password wajib diisi.',
      ],
    };
  },
  methods: {
    async login() {
      if (this.valid) {
        try {
          const user = await services.auth({
            username: this.username,
            password: this.password,
          });
          if (user.token) {
            this.$store.dispatch('token', user.token);
            window.location = '/';
          } else {
            this.error = {
              show: true,
              message: user.response.data.message,
            };
          }
        } catch (err) {
          throw new Error(err);
        }
      }
    },
  },
  beforeCreate() {
    if (localStorage.getItem('token')) {
      this.$router.push('/');
    }
  },
};
</script>

<style scoped>

</style>
