<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <mock-list id="mocks-list" />
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import MockList from "./components/mock-list/mock-list.vue";

export default defineComponent({
  name: "App",
  components: {
    MockList
  },
  setup() {
    provide("user", "toto");
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
