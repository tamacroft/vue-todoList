<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <v-container>
          <v-form v-model="valid" @submit.prevent="register()">
            <v-text-field
              label="Username"
              v-model="username"
              :rules="usernameRules"
              required
            ></v-text-field>
            <v-text-field
              label="Nama Lengkap"
              v-model="fullname"
              :rules="fullnameRules"
              required
            ></v-text-field>
            <v-text-field
              type="password"
              label="Password"
              v-model="password"
              :rules="passwordRules"
              required
            ></v-text-field>
            <v-btn type="submit" color="primary">Register</v-btn>
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
      fullname: '',
      error: {},
      usernameRules: [
        v => !!v || 'Username wajib diisi.',
        v => v.length >= 5 || 'Username harus lebih dari 5 karakter.',
      ],
      fullnameRules: [
        v => !!v || 'Nama lengkap wajib diisi.',
        v => v.length >= 1 || 'Nama lengkap harus lebih dari 1 karakter.',
      ],
      passwordRules: [
        v => !!v || 'Password wajib diisi.',
        v => v.length >= 3 || 'Password harus lebih dari 3 karakter.',
      ],
    };
  },
  methods: {
    async register() {
      if (this.valid) {
        try {
          await services.register({
            username: this.username,
            fullname: this.fullname,
            password: this.password,
          });
          this.$router.push('/login');
        } catch (error) {
          throw new Error(error);
        }
      }
    },
  },
};
</script>

<style scoped>

</style>
