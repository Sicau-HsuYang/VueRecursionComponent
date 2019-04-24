<template>
  <div class="component">
    <div>Hello Gril</div>
    <h2>Nums:{{nums}}, Level: {{level}}</h2>
  </div>
</template>

<script>
import BaseComponent from "@/mixins/BaseMixin.js";
export default {
  name: "Girl",
  mixins: [BaseComponent],
  mounted() {
    console.log("Component: Girl loaded");
    this.$emit("loaded", {
      type: this.name,
      data: null
    });
  }
};
</script>

