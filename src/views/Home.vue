<template>
  <div class="home">
    {{hello}}
    <base-layout
      v-for="(layout, idx) in layouts"
      :level="1"
      :nums="[idx]"
      :layout="layout"
      :key="idx"
      @loaded="handleLoaded"
    ></base-layout>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Vue } from 'vue-property-decorator';
import LayoutMixin from '@/mixins/LayoutMixin';
@Component({
  name: 'Home',
  components: {
    BaseLayout: () => import('@/components/BaseLayout.vue'),
  },
})
export default class Home extends Mixins(LayoutMixin) {
  get layouts() {
    return [
      {
        name: 'First',
        children: [
          {
            component: {
              name: 'Boy',
            },
          },
          {
            name: 'Second',
            children: [
              {
                component: {
                  name: 'HelloWorld',
                },
              },
              {
                component: {
                  name: 'Girl',
                },
              },
            ],
          },
        ],
      },
      {
        component: {
          name: 'Conan',
        },
      },
    ];
  }

  namedChildren: any[] = [];

  created() {
    this.layouts.forEach((child: any) => {
      this.namedChildren.push({
        name: child.name ? child.name : child.component.name,
        loaded: false,
      });
    });
  }

  handleLoaded(res: any) {
    this.namedChildren.forEach((child: any) => {
      if (child.name == res.type) {
        child.loaded = true;
      }
    });
    if (this.namedChildren.every((x: any) => x.loaded)) {
      console.log('final');
    }
  }
}
</script>
