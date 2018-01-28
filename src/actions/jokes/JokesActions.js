import request from 'request';

import Dispatcher from './../../dispatcher/Dispatcher';

const JokesActions = () => ({
  requestJokes(payload) {
    const url = `https://api.icndb.com/jokes/random/${payload.pageSize}`;

    request(url, { json: true }, (error, response, body) => {
      if (error) { return console.error(error); }

      Dispatcher.dispatch({
        actionType: payload.actionType,
        payload: {
          items: body.value,
        },
      });

      return true;
    });
  },
});

export default new JokesActions();
