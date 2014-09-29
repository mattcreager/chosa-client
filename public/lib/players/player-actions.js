'use strict';

var Promise = require('bluebird');
var localstorage = require('localstorage-down');
var levelup = require('levelup');
var db = levelup('/player', { db: localstorage });
var put = Promise.promisify(db.put, db);
var get = Promise.promisify(db.get, db);
var del = Promise.promisify(db.del, db);

var constants = require('./player-constants');
var axios = require('axios');

var playerActions = {};

var firstLoad = true;

playerActions.newReferrer = function(location) {
  db.put('referrer', location);
};

playerActions.loadPlayerCache = function() {
  var self = this;
  var payload = {};

  // Todo: Refactor this disaster
  get('token').then(function(token) {
    payload.token = token;

    return get('referrer')
      .then(function(referrer) {
        payload.referrer = referrer
      })
      .catch(function (err) {
        if (!err.type === 'NotFoundError') {
          payload.referrer = null;
        }
      });
  }).then(function() {
    self.dispatch(constants.LOAD_PLAYER_CACHE_SUCCESS, payload);
  }).catch(function(err) {
    if (err.type === 'NotFoundError') {
      self.dispatch(constants.LOAD_PLAYER_FAIL, err);
    }
  });
}

playerActions.unLoadPlayer = function() {
  var self = this;
  del('referrer');
  del('token').then(function() {
    self.dispatch(constants.UNLOAD_PLAYER);
  }).catch(function(){
    console.log('errorooororororo', arguments)
  });
};

playerActions.loadPlayer = function(token) {
  var self = this;

  setTimeout(function() {
    self.dispatch(constants.LOAD_PLAYER);
  }, 0);

  axios({
    method: 'get',
    url: window.config.serverURL + '/protected',
    headers: { 'Authorization': 'Bearer ' + token }
  }).then(function(player) {
    return put('token', token).then(function() {
      self.dispatch(constants.LOAD_PLAYER_SUCCESS, player.data);
    });
  }).catch(function(err) {
    console.log('err',err)
    self.dispatch(constants.LOAD_PLAYER_FAIL, err);
  });

  if (firstLoad) {
    firstLoad = false;
    return;
  }

  //console.log('next load of quests')
};

module.exports = playerActions;