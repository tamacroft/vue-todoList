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
            <v-list>
              <template v-for="todo in todos">
                <v-list-tile :key="todo._id">
                  <v-list-tile-action>
                    <v-checkbox
                      @change="changeTodo(todo.id)"
                    ></v-checkbox>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    {{ todo.title }}
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-btn icon class="red--text">
                      <v-icon>close</v-icon>
                    </v-btn>
                  </v-list-tile-action>
                </v-list-tile>
              </template>
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
          await services.todo.post(this.newtodo);
          this.todos = (await services.todo.get()).data;
          this.newtodo = null;
        } catch (error) {
          throw new Error(error);
        }
      }
    },
    async removeTodo(id) {
      
    }
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
