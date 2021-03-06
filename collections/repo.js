(function (window) {
  'use strict';

  var app = window.app;
  var Backbone = window.Backbone;

  var Repo = app.Repo = app.Repo || {};

  Repo.Collection = Backbone.Collection.extend(
    // instance methods
    {
      model: Repo.Model,
      // sort by owner login name, then repo name
      comparator: 'full_name'
    },
    // class methods
    {
      withOwner: function (login) {
        var repos = new Repo.Collection();
        repos.url = app.apiRoot + '/users/' + login + '/repos';
        return repos;
      }
    }
  );
})(this);

