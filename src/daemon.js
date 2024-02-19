import Nerf from './nerf';

export default class Daemon extends Nerf {
  constructor(...args) {
    super(...args, 'Daemon');
  }
}
