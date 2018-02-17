<template>
  <div>
    <h1>Browse your todo here.</h1>
  </div>
</template>

<script>
import { todo } from '../services';

export default {
  mounted() {
    console.log(todo);
  },
};
</script>
