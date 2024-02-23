class Audiobook {
  constructor(title, author, narrator, length, language, summary) {
    this.title = title;
    this.author = author;
    this.length = length;
    this.language = language;
    this.summary = summary;
  }
}
let atomicHabits = new Audiobook(
  "Atom Habits",
  "James Clear",
  "5hrs and 35mins",
  "English",
  "An Easy and Proven Way to Build Good Habits and Break Bad Ones"
);
let ultraProcessedPeople = new Audiobook(
  "Ultra-Processed People",
  "Chris van Tulleken, Dr Xand van Tulleken",
  "11hrs and 35mins",
  "English",
  "Why Do We All Eat Stuff That Isn’t Food...and Why Can’t We Stop?"
);

audiobookList = [atomicHabits, ultraProcessedPeople];

export default audiobookList;
