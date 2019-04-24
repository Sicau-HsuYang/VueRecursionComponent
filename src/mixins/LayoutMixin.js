export default {
  data() {
    return {
      namedChildren: []
    };
  },
  created() {
    if (Array.isArray(this.layout.children)) {
      this.layout.children.forEach(child => {
        this.namedChildren.push({
          name: child.name ? child.name : child.component.name,
          loaded: false
        });
      });
    }
  }
};
