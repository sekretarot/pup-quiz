export default class Question {
  constructor(params) {
    this.options = params.options;
    // this.correctAnswer = 
  }

  toSearchParams(){
    var searchParams = { search: {}}
    for (var property in this) {
      if (this.hasOwnProperty(property) && this[property] != undefined) {
          searchParams["search"][property] = this[property];
      }
    }
    return `?${jQuery.param( searchParams )}`;
  }
}