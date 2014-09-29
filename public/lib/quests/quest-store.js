/* jshint node: true */

'use strict';

var Fluxxor = require('fluxxor');
var constants = require('./quest-constants.js');

var QuestStore = {};

QuestStore.initialize = function() {
  this.loading = false;
  this.adding = false;
  this.error = null;
  this.quests = [];
  this.loadingQuests = {};

  this.bindActions(
    constants.LOAD_QUESTS, this.onLoadQuests,
    constants.LOAD_QUESTS_SUCCESS, this.onLoadQuestsSuccess,
    constants.LOAD_QUESTS_FAIL, this.onLoadQuestsFail
  );
};

QuestStore.onLoadQuests = function() {
  this.loading = true;
  this.quests = [];
  this.error = null;

  this.emit(constants.CHANGE_EVENT);
};

QuestStore.onLoadQuestsSuccess = function(payload) {
  this.quests = payload;
  this.emit(constants.CHANGE_EVENT);
};

QuestStore.onLoadQuestsFail = function() {
  this.emit(constants.CHANGE_EVENT);
};

QuestStore.getState = function() {
  return { quests: this.quests };
};

module.exports = Fluxxor.createStore(QuestStore);