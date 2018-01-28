import { EventEmitter } from 'events';

import Dispatcher from './../dispatcher/Dispatcher';
import ActionTypes from './../constants/ActionTypes';

class BasicItemStore extends EventEmitter {
  constructor() {
    super();

    this.items = [];

    Dispatcher.register(this.registerToActions.bind(this));
  }

  registerToActions() {
    console.warn('You probably forgot to implement registerToActions inside this store', this.constructor.name);
  }

  getAllItems() {
    return this.items;
  }

  addChangeListener(callback) {
    this.on(ActionTypes.UPDATED, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(ActionTypes.UPDATED, callback);
  }
}

export default BasicItemStore;
