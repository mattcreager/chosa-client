/* @jsx React.DOM */

'use strict';

var React = require('react');
var RRouter = require('rrouter');
var Fluxxor = require('fluxxor');

var quests = require('./quests');
var players = require('./players');

var routes = require('./routes.jsx');
var NotFound = require('../components/404.jsx');
var Draw = require('../components/draw.jsx');
var Header = require('../components/header.jsx');

module.exports = Chosa;

function Chosa() {
  var actions = {};
  actions.quests = quests.actions;
  actions.players = players.actions;

  var stores = {};
  stores.QuestStore = new quests.store();
  stores.PlayerStore = new players.store();

  this.flux = new Fluxxor.Flux(stores, actions);
}

Chosa.prototype.initialize = function() {
  var container = document.getElementById('chosa-app');
  var flux = this.flux;

  RRouter.HashRouting.start(routes(flux), function(view, route) {
    console.log('current path:', route.path)

    if (!view) {
        React.renderComponent(<NotFound flux={flux} />, container);
        return;
    }

    React.initializeTouchEvents(true);

    // later we'll abstract this!
    React.renderComponent((
      <div>
        <Draw flux={flux} path={route.path} />
        <div className="snap-content" id="content">
          {view}
        </div>
      </div>
    ), container);
  });
};