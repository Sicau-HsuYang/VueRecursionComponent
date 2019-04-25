import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'LayoutMixin',
})
export default class LayoutMixin extends Vue {
  hello: string = 'yangxu';
}
