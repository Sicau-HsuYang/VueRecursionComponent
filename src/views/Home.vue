<template>
  <div class="home">
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

<script>
import BaseLayout from "@/components/BaseLayout";
export default {
  name: "home",
  components: {
    BaseLayout: BaseLayout
  },
  data() {
    return {
      layouts: [
        {
          name: "First",
          children: [
            {
              component: {
                name: "Boy"
              }
            },
            {
              name: "Second",
              children: [
                {
                  component: {
                    name: "HelloWorld"
                  }
                },
                {
                  component: {
                    name: "Girl"
                  }
                }
              ]
            }
          ]
        },
        {
          component: {
            name: "Conan"
          }
        }
      ],
      namedChildren: []
    };
  },
  created() {
    this.layouts.forEach(child => {
      this.namedChildren.push({
        name: child.name ? child.name : child.component.name,
        loaded: false
      });
    });
  },
  methods: {
    handleLoaded(res) {
      this.namedChildren.forEach(child => {
        if (child.name == res.type) {
          child.loaded = true;
        }
      });
      if (this.namedChildren.every(x => x.loaded)) {
        console.log("final");
      }
    }
  }
};
</script>
