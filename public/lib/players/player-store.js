/* jshint node: true */

'use strict';

var Fluxxor = require('fluxxor');
var constants = require('./player-constants.js');

var PlayerStore = {};

PlayerStore.initialize = function() {
  this.loading = false;
  this.error = null;
  this.players = [];
  this.player = {};
  this.token = null;
  this.referrer = null;

  this.bindActions(
    constants.NEW_REFERRER, this.onNewReferrer,
    constants.UNLOAD_PLAYER, this.unLoadPlayer,
    constants.LOAD_PLAYER, this.onLoadPlayer,
    constants.LOAD_PLAYER_SUCCESS, this.onLoadPlayerSuccess,
    constants.LOAD_PLAYER_FAIL, this.onLoadPlayerFail,
    constants.LOAD_PLAYERS, this.onLoadPlayers,
    constants.LOAD_PLAYERS_SUCCESS, this.onLoadPlayersSuccess,
    constants.LOAD_PLAYERS_FAIL, this.onLoadPlayersFail,
    constants.LOAD_PLAYER_CACHE_SUCCESS, this.onLoadPlayerCache
  );
};

PlayerStore.onNewReferrer = function(payload) {
  this.referrer = payload;
};

PlayerStore.unLoadPlayer = function() {
  this.player = {};
  this.token = null;
  this.referrer = null;

  this.emit(constants.CHANGE_EVENT);
};

PlayerStore.onLoadPlayerCache = function(payload) {
  this.token = payload.token;
  this.referrer = payload.referrer;

  this.emit(constants.CHANGE_EVENT);
};

PlayerStore.onLoadPlayer = function() {
  this.loading = true;
  this.error = null;

  this.emit(constants.CHANGE_EVENT);
};

PlayerStore.onLoadPlayerSuccess = function(payload) {
  this.player = payload;
  this.loading = false;
  this.emit(constants.CHANGE_EVENT);
};

PlayerStore.onLoadPlayerFail = function(payload) {
  this.error = payload;
  this.loading = false;

  this.emit(constants.CHANGE_EVENT);
};

PlayerStore.onLoadPlayers = function() { };

PlayerStore.onLoadPlayersSuccess = function(payload) { };

PlayerStore.onLoadPlayersFail = function() { };

PlayerStore.getState = function() {
  return {
    loading: this.loading,
    player: this.player,
    players: this.players,
    token: this.token,
    referrer: this.referrer,
    error: this.error
  };
};

module.exports = Fluxxor.createStore(PlayerStore);