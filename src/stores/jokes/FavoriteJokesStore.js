import ActionTypes from './../../constants/ActionTypes';

import BasicItemStore from './../BasicItemStore';
import Joke from './models/Joke';

const FAVORITE_JOKES_KEY = 'FAVORITE_JOKES';
const MAX_FAVORITE_JOKES = 10;

class FavoriteJokesStore extends BasicItemStore {
  constructor() {
    super();

    const itemsFromLocalStorage = localStorage.getItem(FAVORITE_JOKES_KEY);

    this.items = JSON.parse(itemsFromLocalStorage) || [];
    this.items = this.items.map(item => new Joke(item));
  }

  registerToActions(action) {
    switch (action.actionType) {
      case ActionTypes.ADD_FAVORITE_JOKE:
        this.addItem(action.payload.item);
        break;
      case ActionTypes.ADD_RANDOM_FAVORITE_JOKE:
        this.addItem(action.payload.items[0]);
        break;
      case ActionTypes.DELETE_FAVORITE_JOKE:
        this.removeItem(action.payload.id);
        break;
      default:
        break;
    }
  }

  addItem(item) {
    if (this.items.length >= MAX_FAVORITE_JOKES) {
      return;
    }

    this.removeItemFromArray(item.id); // NOTE: remove possible duplicate
    this.items.push(new Joke(item));

    this.updateLocalStorage();
    this.emit(ActionTypes.UPDATED);
  }

  removeItem(id) {
    this.removeItemFromArray(id);
    this.updateLocalStorage();
    this.emit(ActionTypes.UPDATED);
  }

  removeItemFromArray(id) {
    const indexToRemove = this.items.map(item => item.getId()).indexOf(id);

    if (indexToRemove !== -1) {
      this.items.splice(indexToRemove, 1);
    }
  }

  updateLocalStorage() {
    localStorage.setItem(FAVORITE_JOKES_KEY, JSON.stringify(this.items));
  }
}

export default new FavoriteJokesStore();
