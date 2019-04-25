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

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import BaseComponent from '@/components/Base/BaseComponent';
@Component({
  name: 'BaseLayout',
  components: {
    HelloWorld: () => import('@/components/HelloWorld.vue'),
    Girl: () => import('@/components/Girl.vue'),
    Boy: () => import('@/components/Boy.vue'),
    Conan: () => import('@/components/Conan.vue'),
  },
})
export default class BaseLayout extends BaseComponent {
  namedChildren: any[] = [];

  created() {
    if (Array.isArray(this.layout.children)) {
      this.layout!.children.forEach((child: any) => {
        this.namedChildren.push({
          name: child.name ? child.name : child.component.name,
          loaded: false,
        });
      });
    }
  }

  handleLoaded(res: any) {
    if (this.layout.component) {
      this.$emit('loaded', {
        type: this.layout.component.name,
        data: null,
      });
    } else {
      this.namedChildren.forEach((child: any) => {
        if (child.name == res.type) {
          child.loaded = true;
        }
      });
      if (this.namedChildren.every((x: any) => x.loaded)) {
        this.$emit('loaded', {
          type: this.layout.name,
          data: null,
        });
      }
    }
  }
}
</script>
<style lang="scss">
.component {
  border: 1px solid red;
}
</style>
