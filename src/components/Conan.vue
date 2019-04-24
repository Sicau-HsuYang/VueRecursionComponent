<template>
  <div class="component">
    <div>Hello Conan</div>
    <h2>Nums:{{nums}}, Level: {{level}}</h2>
  </div>
</template>

<script>
import BaseComponent from "@/mixins/BaseMixin.js";
export default {
  name: "Conan",
  mixins: [BaseComponent],
  mounted() {
    console.log("Component: Conan loaded");
    this.$emit("loaded", {
      type: this.name,
      data: null
    });
  }
};
</script>

