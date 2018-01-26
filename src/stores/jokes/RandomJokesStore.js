import ActionTypes from './../../constants/ActionTypes';

import BasicItemStore from './../BasicItemStore';
import Joke from './models/Joke';

class RandomJokesStore extends BasicItemStore {
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
}

export default new RandomJokesStore();
