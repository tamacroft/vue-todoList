<template>
  <div>
    <v-layout>
      <v-flex xs6 offset-xs3>
        <div class="white elevation-2">
          <v-container>
            sad
          </v-container>
        </div>
      </v-flex>
    </v-layout>
    <br/>
    <v-layout>
      <v-flex xs6 offset-xs3>
        <div class="white elevation-2">
          <v-toolbar color="primary" dark>
            <v-toolbar-title>Your Todo List</v-toolbar-title>
          </v-toolbar>
          <v-container>
            <v-list v-for="todo in todos" :key="todo._id">
              <v-checkbox
                :label="todo.title"
                @change="changeTodo(todo._id)"
              ></v-checkbox>
            </v-list>
          </v-container>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import services from '../services';

export default {
  data() {
    return {
      todos: {},
    };
  },
  methods: {
    // async changeTodo() {
    // },
  },
  async mounted() {
    this.todos = (await services.todo.get()).data;
  },
};
</script>
