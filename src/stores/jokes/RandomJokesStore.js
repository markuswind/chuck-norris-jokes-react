import { EventEmitter } from 'events';

import Dispatcher from './../../dispatcher';
import ActionTypes from './../../constants/actionTypes';

import Joke from './models/Joke';

class RandomJokesStore extends EventEmitter {
  constructor() {
    super();

    this.items = [];

    Dispatcher.register(this.registerToActions.bind(this));
  }

  registerToActions(action) {
    switch (action.actionType) {
      case ActionTypes.GET_RANDOM_JOKES:
        this.updateItems(action.payload.items);
        break;
      default:
        break;
    }
  }

  updateItems(items) {
    this.items = items.map(item => new Joke(item));
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
