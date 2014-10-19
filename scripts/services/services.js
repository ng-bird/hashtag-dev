angular.module('bird.ui.hashtag',['ngResource'])
.factory("data", function($resource) {
  return $resource("data/data.json", {}, {
    query: { method: "GET", isArray: false }
  });
});