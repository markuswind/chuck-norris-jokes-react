class BasicModel {
  constructor(opts) {
    this.id = opts.id || -1;
  }

  getId() {
    return this.id;
  }
}

export default BasicModel;
