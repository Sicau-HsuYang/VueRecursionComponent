<template>
  <div>
    <template v-if="layout.component">
      <component
        @loaded="handleLoaded"
        :is="layout.component.name"
        :name="layout.component.name"
        :level="level"
        :nums="nums"
      ></component>
    </template>
    <template v-if="Array.isArray(layout.children) && layout.children.length >0">
      <base-layout
        v-for="(item, idx) in layout.children"
        :nums="[...nums,idx]"
        :level="+level+1"
        :layout="item"
        :key="idx"
        @loaded="handleLoaded"
      ></base-layout>
    </template>
  </div>
</template>

<script>
import BaseMixin from "@/mixins/BaseMixin.js";
import LayoutMixin from "@/mixins/LayoutMixin.js";
export default {
  name: "BaseLayout",
  mixins: [BaseMixin, LayoutMixin],
  props: {
    layout: {
      type: [Object],
      required: true
    }
  },
  components: {
    HelloWorld: () => import("@/components/HelloWorld.vue"),
    Girl: () => import("@/components/Girl.vue"),
    Boy: () => import("@/components/Boy.vue"),
    Conan: () => import("@/components/Conan.vue")
  },
  methods: {
    handleLoaded(res) {
      if (this.layout.component) {
        this.$emit("loaded", {
          type: this.layout.component.name,
          data: null
        });
      } else {
        this.namedChildren.forEach(child => {
          if (child.name == res.type) {
            child.loaded = true;
          }
        });
        if (this.namedChildren.every(x => x.loaded)) {
          this.$emit("loaded", {
            type: this.layout.name,
            data: null
          });
        }
      }
    }
  }
};
</script>
<style lang="scss">
.component {
  border: 1px solid red;
}
</style>
