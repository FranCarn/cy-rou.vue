<template>
  <div>
    <!-- <router-link :to="{ name: 'home' }" active-class="active"
      >Pokemon List</router-link
    >
    <router-link
      :to="{ name: 'pokemon-id', params: { id: 65 } }"
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
          to: "pokemon-home",
          name: "Pokemons",
        },
        {
          to: "pokemon-id",
          id: 10,
          name: "Pokemon - By id",
        },
        {
          to: "pokemon-about",
          name: "Pokemon - About",
        },
        {
          to: "dbz-characters",
          name: "DBZ - Characters",
        },
        {
          to: "dbz-about",
          name: "DBZ - About",
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
