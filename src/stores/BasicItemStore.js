import { EventEmitter } from 'events';

import Dispatcher from './../dispatcher';
import ActionTypes from './../constants/actionTypes';

class BasicItemStore extends EventEmitter {
  constructor() {
    super();

    this.items = [];

    Dispatcher.register(this.registerToActions.bind(this));
  }

  registerToActions() {
    console.warn('You probably forgot to implement registerToActions in your newly created store');
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
