<template>
  <div>
    <div v-if="!token">
      <h3>Silakan klik menu login!</h3>
    </div>
    <div v-else>
      <h1>Selamat Datang..!</h1>
      <h3>Silakan klik menu browse!</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    token() {
      return localStorage.getItem('token');
    },
  },
};
</script>

<style scoped>

</style>
