<template>
  <base-layout pageTitle="Add a Memory" defaultBackLink="/memories">
    <create-memory-form></create-memory-form>
  </base-layout>
</template>

<script>
import BaseLayout from "../components/base/BaseLayout.vue";
import CreateMemoryForm from "../components/memories/CreateMemoryForm.vue";

export default {
  components: {
    BaseLayout,
    CreateMemoryForm,
  },
};
</script>
