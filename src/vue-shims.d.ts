import Http from '@/plugins/http/index';
import Utils from '@/plugins/utils';

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'vue/types/vue' {
  interface Vue {
    [propName: string]: any;
    $http: Http;
    $utils: Utils;
  }

  interface VueConstructor {
    prototype: Vue;
  }
}
