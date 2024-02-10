<template>
  <div>
    <!-- <router-link :to="{ name: 'home' }" active-class="active"
      >Pokemon List</router-link
    >
    <router-link
      :to="{ name: 'pokemon-id', params: { pokemonid: 65 } }"
      active-class="active"
      >Pokemon page</router-link
    >
    <router-link :to="{ name: 'about' }" active-class="active"
      >About</router-link
    > -->
    <CustomLink v-for="link in links" :key="link.to" :link="link" />
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
export default {
  data() {
    return {
      links: [
        {
          to: "/home",
          name: "Pokemons",
        },
        {
          to: "/pokemonid/50",
          name: "pokemon-id",
        },
        {
          to: "/about",
          name: "About",
        },
        {
          to: "https://google.com",
          name: "Google",
        },
      ],
    };
  },
  components: {
    CustomLink: defineAsyncComponent(() => import("./CustomLink.vue")),
  },
};
</script>
<style scoped>
div {
  padding: 0 30px;
}

div a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}
.active {
  color: #42b983;
}
</style>
