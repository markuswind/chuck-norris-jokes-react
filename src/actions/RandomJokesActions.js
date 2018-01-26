import Dispatcher from './../dispatcher';
import ActionTypes from './../constants/actionTypes';

class RandomJokesActions {
  getRandomJokes(payload) {
    // TODO: - use API for retrieving random jokes
    Dispatcher.dispatch({
      actionType: ActionTypes.GET_RANDOM_JOKES,
      payload: {
        items: [
          {
            id: 1,
            joke: 'joke',
          },
        ],
      },
    });
  }
}

export default new RandomJokesActions();
