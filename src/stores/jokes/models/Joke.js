class Joke {
  constructor(opts) {
    this.id = opts.id || -1;
    this.joke = opts.joke || '';
    this.categories = opts.categories || [];
  }

  getId() {
    return this.id;
  }

  getJoke() {
    return this.joke;
  }

  getCategories() {
    return this.categories;
  }
}

export default Joke;
