/* @jsx React.DOM */
/* jshint node: true */

var React = require('react');
var RRouter = require('rrouter');
var Fluxxor = require('fluxxor');

var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var RoutingContextMixin = RRouter.RoutingContextMixin;
var Link = RRouter.Link;

var Draw = require('./draw.jsx');
var Header = require('./header.jsx');
var Loading = require('./loading.jsx')
var QuestList = require('./quest_list.jsx');

var Master = {};

Master.mixins = [
  FluxMixin,
  StoreWatchMixin('PlayerStore'),
  RoutingContextMixin
];

Master.getStateFromFlux = function() {
  return this.getFlux().store('PlayerStore').getState();
};

Master.componentWillMount = function() {
  if (!this.state.player.id) {
    if (this.state.token) {
      this.getFlux().actions.players.loadPlayer(this.state.token);
      return;
    }

    this.getFlux().actions.players.loadPlayerCache();
  }
};

Master.componentDidUpdate = function() {
  if (this.state.error) {
    this.navigateTo('landing');
  }

  if (!this.state.token) {
    this.getFlux().actions.players.loadPlayerCache();
    return;
  }

  if (this.state.token && !this.state.loading && !this.state.player.id) {
    this.getFlux().actions.players.loadPlayer(this.state.token);
    return;
  }
};

Master.getInitialState = function() {
  return {};
};

Master.getDefaultProps = function() {
  return {};
};

Master.render = function() {
  if (!this.state.player.id) {
    return <Loading />;
  }

  var detail = this.props._ ? this.props.detail : QuestList;

  return (
    <div>
      <Header flux={this.props.flux} />
      <detail player={this.state.player} flux={this.props.flux} />
    </div>
  )
};

module.exports = React.createClass(Master);