<template>
  <div class="component">
    <div>Hello Boy</div>
    {{name}}
    <h1>
      <b>{{msg}}</b>
    </h1>
    <h2>Nums:{{nums}}, Level: {{level}}</h2>
  </div>
</template>

<script>
import BaseComponent from "@/components/Base/BaseComponent.js";
import BaseMixin from "@/mixins/BaseMixin";
export default {
  name: "Boy",
  mixins: [BaseMixin],
  extends: BaseComponent,
  mounted() {
    this.$emit("loaded", {
      type: this.name,
      data: null
    });
    console.log("Component: Boy loaded");
  }
};
</script>

