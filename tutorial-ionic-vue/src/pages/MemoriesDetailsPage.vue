<template>
  <base-layout
    :pageTitle="loadedMemory ? loadedMemory.title : 'Loading...'"
    defaultBackLink="/memories"
  >
    <h2 v-if="!loadedMemory">Could not find a memory for the given id.</h2>
    <memory-overview
      v-else
      :title="loadedMemory.title"
      :image="loadedMemory.image"
      :description="loadedMemory.description"
    ></memory-overview>
  </base-layout>
</template>

<script>
import MemoryOverview from "../components/memories/MemoryOverview.vue";

export default {
  components: {
    MemoryOverview,
  },
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