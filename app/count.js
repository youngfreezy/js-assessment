exports = typeof window === 'undefined' ? global : window;
exports.countAnswers = {
  count: function (start, end) {
    var timer;

    function doCount() {
      console.log(start++);
      if (start <= end) {
        timer = setTimeout(doCount, 100);
      }
    }
    doCount();
    return {
      cancel: function () {
        timer && clearTimeout(timer);
      }
    };
  }
};