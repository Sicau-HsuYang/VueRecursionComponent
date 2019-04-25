import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'BaseComponent',
})
export default class BaseComponent extends Vue {
  @Prop({
    required: false,
    type: [Object],
  })
  layout!: any;

  @Prop({
    type: [Array],
    required: true,
  })
  nums!: number[];

  @Prop({
    type: [Number],
    required: true,
  })
  level!: number;

  @Prop({
    type: String,
    required: false,
  })
  name!: string;

  demo = 'yangxu';

  mounted() {
    let name = this.name ? this.name : this.layout!.name ? this.layout!.name : this.layout!.component.name;
    console.log(`Component:${name} loaded`);
    this.$emit('loaded', {
      type: this.name,
      data: null,
    });
  }
}
