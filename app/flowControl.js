exports = typeof window === 'undefined' ? global : window;
exports.flowControlAnswers = {
  fizzBuzz: function (num) {
    // write a function that receives a number as its argument;
    if (typeof num !== 'number') {
      return false;
    }
    if (num % 3 === 0 && num % 5 === 0) {
      return 'fizzbuzz';
    }
    if (num % 3 == 0) {
      return 'fizz'
    }
    if (num % 5 == 0) {
      return 'buzz';
    }
    return num;
  }
};