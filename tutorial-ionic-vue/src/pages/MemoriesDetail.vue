<template>
  <base-layout
    :pageTitle="loadedMemory ? loadedMemory.title : 'Loading...'"
    defaultBackLink="/memories"
  >
    <h2 v-if="!loadedMemory">Could not find a memory for the given id.</h2>
    <h2 v-else>Store Loaded Successfully</h2>
  </base-layout>
</template>

<script>
import {} from "@ionic/vue";

export default {
  data() {
    return {
      memoryID: this.$route.params.id,
    };
  },
  computed: {
    loadedMemory() {
      return this.$store.getters.memory(this.memoryID);
    },
  },
//   watch: {
//     $route(currentRoute) {
//       this.memoryID = currentRoute.params.id;
//     },
//   },
};
</script>