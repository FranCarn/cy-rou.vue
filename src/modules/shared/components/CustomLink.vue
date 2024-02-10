<template>
  <a
    v-if="isExternalLink"
    :href="link.to"
    target="_blank"
    class="normal-link"
    >{{ link.name }}</a
  >
  <router-link
    v-else
    :to="link.to"
    active-class="active"
    v-slot="{ href, isActive }"
  >
    <a :href="href" :class="isActive ? 'active' : 'normal-link'">
      {{ link.name }}
    </a>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isExternalLink() {
      return this.link.to.startsWith("http");
    },
  },
};
</script>

<style scoped>
.active {
  color: #42b983;
}
.normal-link {
  color: #c6c5c5;
}
</style>
