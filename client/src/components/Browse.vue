<template>
  <div>
    <v-layout>
      <v-flex md6 offset-md3>
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
      <v-flex md6 offset-md3>
        <div class="white elevation-2">
          <v-toolbar color="primary" dark>
            <v-toolbar-title>Your Todo List</v-toolbar-title>
          </v-toolbar>
          <v-container>
            <div v-if="todos.length <= 0" class="text-xs-center">There is no item here.</div>
            <v-list>
              <template v-for="todo in todos">
                <v-list-tile :key="todo._id">
                  <v-list-tile-action>
                    <input type="checkbox"
                      :checked="todo.completed ? 'checked':''"
                      @change="changeTodo(todo._id)"
                    />
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <span :class="todo.completed ? 'completed':''">{{ todo.title }}</span>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-btn icon class="red--text" @click="removeTodo(todo._id)">
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
    async changeTodo(id) {
      try {
        await services.todo.put(id);
        this.todos = (await services.todo.get()).data;
      } catch (error) {
        throw new Error(error);
      }
    },
    async addTodo(evt) {
      if (evt.keyCode === 13) {
        try {
          await services.todo.post(this.newtodo);
          this.newtodo = null;
          this.todos = (await services.todo.get()).data;
        } catch (error) {
          throw new Error(error);
        }
      }
    },
    async removeTodo(id) {
      try {
        await services.todo.delete(id);
        this.todos = (await services.todo.get()).data;
      } catch (error) {
        throw new Error(error);
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
  beforeCreate() {
    if (!this.$store.getters.token) this.$router.push('/');
  },
};
</script>

<style scoped>
  .completed{
    text-decoration: line-through;
    color: #aaa;
  }
</style>
