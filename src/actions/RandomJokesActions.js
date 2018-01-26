import request from 'request';

import Dispatcher from './../dispatcher';
import ActionTypes from './../constants/actionTypes';

class RandomJokesActions {
  // FIXME: duplicate code, see FavoriteJokesActions.js
  getRandomJokes(payload) {
    const url = `http://api.icndb.com/jokes/random/${payload.pageSize}`;

    request(url, { json: true }, (error, response, body) => {
      if (error) { return console.error(error); }

      Dispatcher.dispatch({
        actionType: ActionTypes.GET_RANDOM_JOKES,
        payload: {
          items: body.value,
        },
      });

      return true;
    });
  }
}

export default new RandomJokesActions();
