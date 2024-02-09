<template>
  <h1>Single Pokemon page #{{ id }}</h1>
</template>

<script>
export default {
  data() {
    return {
      id: null,
    };
  },
  created() {
    const { pokemonid } = this.$route.params;
    this.id = pokemonid;
  },
};
</script>
