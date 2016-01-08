/*
A CodeListSpecification is a reference to an external codelist, the reference being an URI.
*/

class CodeListSpecificationModel {
  constructor(object) {
    if(object) {
      this._id = object._id;
      this._uri = object._uri;
      this._label = object._label;
    } else {
      this._id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
      this._uri = '';
      this._label = '';
    }
  }

  get id() {
    return this._id;
  }

  get uri() {
    return this._uri;
  }

  get label() {
    return this._label;
  }

  set id(id) {
    if (typeof id !== 'string') {
      throw new Error('The parameter must be a string');
    }
    this._id = id;
  }

  set uri(uri) {
    if (typeof uri !== 'string') {
      throw new Error('The parameter must be a string');
    }
    this._uri = uri;
  }
  
  set label(label) {
    if (typeof label !== 'string') {
      throw new Error('The parameter must be a string');
    }
    this._label = label;
  }
}

export default CodeListSpecificationModel;
