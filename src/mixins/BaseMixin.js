export default {
  props: {
    nums: {
      type: [Array],
      required: true
    },
    level: {
      type: [Number],
      required: true
    },
    name: {
      type: String,
      required: false
    }
  },
  methods: {
    // handleLoaded(res) {
    //   console.log(res);
    // }
  }
};
