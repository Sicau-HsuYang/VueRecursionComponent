import { VueConstructor } from 'vue';
import Plugin from './plugin';
export default class BasePlugin {
  modules: Array<typeof Plugin>;
  constructor(...modules: Array<typeof Plugin>) {
    this.modules = modules;
  }

  addMapping(plugin: typeof Plugin, Vue: VueConstructor) {
    const instance = new plugin(Vue);
    Vue.prototype[`$${instance.name}`] = instance;
  }

  install(Vue: VueConstructor) {
    this.modules.forEach(plugin => {
      this.addMapping(plugin, Vue);
    });
  }
}
