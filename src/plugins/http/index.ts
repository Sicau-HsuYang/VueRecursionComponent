import Plugin from '../install/plugin';
export default class Http extends Plugin {
  name = 'http';

  constructor() {
    super();
  }

  getAll() {
    console.log('hello world');
  }
}
