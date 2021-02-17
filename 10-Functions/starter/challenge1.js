const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const inpAns = Number(prompt([this.question, this.options].join('\n')));
    if (typeof inpAns === 'number' && inpAns >= 0 && inpAns < 4) {
      this.answers[inpAns]++;
    } else {
      prompt(`Not a Valid Option.`);
    }
    this.displayResults('string');
    this.displayResults();
  },
  displayResults(type = 'array') {
    console.log(
      type === 'array'
        ? this.answers
        : `Poll results are ${this.answers.toString()}`
    );
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
