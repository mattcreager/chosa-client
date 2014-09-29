'use strict';

var Promise = require('bluebird');
var localstorage = require('localstorage-down');
var levelup = require('levelup');
var axios = require('axios');

var db = levelup('/player', { db: localstorage });
var get = Promise.promisify(db.get, db);
var del = Promise.promisify(db.del, db);

var constants = require('./quest-constants');

var questActions = {};

var firstLoad = true;

questActions.load = function() {
    var self = this;

    // wtf.
    setTimeout(function() {
      self.dispatch(constants.LOAD_QUESTS);
    }, 0);

    get('token').then(function(token) {
      return  axios({
        method: 'get',
        url: 'http://chosa-api.herokuapp.com/quests/all',
        headers: { 'Authorization': 'Bearer ' + token }
      });
    }).then(function(quests) {
      self.dispatch(constants.LOAD_QUESTS_SUCCESS, quests.data);
    }).catch(function(err) {
      console.log('err',err);
      self.dispatch(constants.LOAD_QUESTS_FAIL, err);
    });

    if (firstLoad) {
      firstLoad = false;
      return;
    }
};

module.exports = questActions;