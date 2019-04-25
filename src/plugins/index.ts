import Plugin from './plugin';
import { VueConstructor } from 'vue';
export default class BasePlugin {
  modules: Array<typeof Plugin>;
  constructor(...modules: Array<typeof Plugin>) {
    this.modules = modules;
  }

  addMapping(item: typeof Plugin, Vue: VueConstructor) {
    const instance = new item(Vue);
    Vue.prototype[`$${instance.name}`] = instance;
  }

  install(Vue: VueConstructor) {
    this.modules.forEach(item => {
      this.addMapping(item, Vue);
    });
  }
}
