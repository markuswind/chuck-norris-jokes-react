import ActionTypes from './../../constants/ActionTypes';
import Dispatcher from './../../dispatcher/Dispatcher';
import JokesActions from './JokesActions';

const FavoriteJokesActions = () => ({
  addFavoriteJoke(payload) {
    const { joke } = payload;

    Dispatcher.dispatch({
      actionType: ActionTypes.ADD_FAVORITE_JOKE,
      payload: {
        item: joke,
      },
    });
  },

  deleteFavoriteJoke(payload) {
    const { id } = payload;

    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_FAVORITE_JOKE,
      payload: {
        id,
      },
    });
  },

  addRandomFavoriteJoke() {
    JokesActions.requestJokes({
      actionType: ActionTypes.ADD_RANDOM_FAVORITE_JOKE,
      pageSize: 1,
    });
  },
});

export default new FavoriteJokesActions();
