<template>
  <h1>About Page</h1>
  <hr />
  <h2>{{ name }}</h2>
  <button @click="onChangeName">Change Name</button>
</template>
<script>
export default {
  data() {
    return {
      name: "Test",
    };
  },
  methods: {
    onChangeName() {
      this.name = "Updated";
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
    // HTTP resources
    this.name = "Hello world";
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
    // cleanup
  },
  unmounted() {
    console.log("unmounted");
    // cleanup
  },
  errorCaptured() {
    console.log("errorCaptured");
  },
  renderTracked() {
    console.log("renderTracked");
  },
  renderTriggered() {
    console.log("renderTriggered");
  },
};
</script>
