export default class Team {
  constructor(persons) {
    this.persons = persons;
  }

  * [Symbol.iterator]() {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.persons.length; i++) {
      yield this.persons[i];
    }
  }
}
