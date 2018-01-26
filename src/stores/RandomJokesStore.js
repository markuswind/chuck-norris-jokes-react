import { EventEmitter } from 'events';

import Dispatcher from './../dispatcher';
import ActionTypes from './../constants/actionTypes';

class RandomJokesStore extends EventEmitter {
  constructor() {
    super();

    this.items = [];

    Dispatcher.register(this.registerToActions.bind(this));
  }

  registerToActions(action) {
    switch (action.actionType) {
      case ActionTypes.GET_RANDOM_JOKES:
        this.addNewItems(action.payload.items);
        break;
      default:
        break;
    }
  }

  addNewItems(items) {
    this.items.push(...items);
    this.emit(ActionTypes.UPDATED);
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

export default new RandomJokesStore();
