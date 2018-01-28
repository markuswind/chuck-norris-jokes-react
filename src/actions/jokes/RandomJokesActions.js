import ActionTypes from './../../constants/ActionTypes';
import JokesActions from './JokesActions';

const RandomJokesActions = () => ({
  getRandomJokes(payload) {
    JokesActions.requestJokes({
      actionType: ActionTypes.GET_RANDOM_JOKES,
      pageSize: payload.pageSize,
    });
  },
});

export default new RandomJokesActions();
