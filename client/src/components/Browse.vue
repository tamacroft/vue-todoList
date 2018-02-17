<template>
  <div>
    <v-layout>
      <v-flex xs6 offset-xs3>
        <div class="white elevation-2">
          <v-container>
            <v-text-field
              label="What will you do?"
              v-model="newtodo"
              @keyup="addTodo($event)"
            ></v-text-field>
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
      newtodo: null,
    };
  },
  methods: {
    // async changeTodo() {
    // },
    async addTodo(evt) {
      if (evt.keyCode === 13) {
        try {
          console.log(await services.todo.post(this.newtodo));
        } catch (error) {
          throw new Error(error);
        }
      }
    },
  },
  async mounted() {
    try {
      this.todos = (await services.todo.get()).data;
    } catch (error) {
      throw new Error(error);
    }
  },
};
</script>
