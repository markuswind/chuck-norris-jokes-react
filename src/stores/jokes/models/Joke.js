import BasicModel from './../../BasicModel';

class Joke extends BasicModel {
  constructor(opts) {
    super(opts);

    this.joke = opts.joke || '';
    this.categories = opts.categories || [];
  }

  getJoke() {
    return this.joke;
  }

  getCategories() {
    return this.categories;
  }
}

export default Joke;
