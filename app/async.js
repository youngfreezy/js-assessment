exports = typeof window === 'undefined' ? global : window;
exports.asyncAnswers = {
  async: function (value) {
    var deferred = $.Deferred();
    setTimeout(function () {
      deferred.resolve(value);
    }, 20);
    return deferred.promise();
  },
  manipulateRemoteData: function (url) {
    var promise = $.Deferred();
    $.ajax(url).then(function (resp) {
      var people = resp.people.map(function (person) {
        return person.name;
      });
      promise.resolve(people.sort());
    });
    return promise.promise();
  }
};