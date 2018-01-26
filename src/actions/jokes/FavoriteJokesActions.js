import request from 'request';

import Dispatcher from './../../dispatcher/Dispatcher';
import ActionTypes from './../../constants/ActionTypes';

class FavoriteJokesActions {
  addFavoriteJoke(payload) {
    const { joke } = payload;

    Dispatcher.dispatch({
      actionType: ActionTypes.ADD_FAVORITE_JOKE,
      payload: {
        item: joke,
      },
    });
  }

  deleteFavoriteJoke(payload) {
    const { id } = payload;

    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_FAVORITE_JOKE,
      payload: {
        id,
      },
    });
  }

  // FIXME: duplicate code, see RandomJokesActions.js
  addRandomFavoriteJoke() {
    const url = 'https://api.icndb.com/jokes/random/1';

    request(url, { json: true }, (error, response, body) => {
      if (error) { return console.error(error); }

      Dispatcher.dispatch({
        actionType: ActionTypes.ADD_RANDOM_FAVORITE_JOKE,
        payload: {
          item: body.value[0],
        },
      });

      return true;
    });
  }
}

export default new FavoriteJokesActions();
