/* @jsx React.DOM */
/* jshint node: true */

var React = require('react');
var RRouter = require('rrouter');
var Fluxxor = require('fluxxor');
var _ = require('lodash');

var RoutingContextMixin = RRouter.RoutingContextMixin;
var Link = RRouter.Link;

var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var RoutingContextMixin = RRouter.RoutingContextMixin;

var QuestItem = require('./quest_item.jsx');
var Loading = require('./loading.jsx');

var QuestList = {};

QuestList.mixins = [
   FluxMixin,
   StoreWatchMixin('QuestStore'),
   RoutingContextMixin
];

QuestList.getStateFromFlux = function() {
  return this.getFlux().store('QuestStore').getState();
};

QuestList.componentDidMount = function() {
  this.getFlux().actions.quests.load();
};

QuestList.getInitialState = function() {
  return {};
};

QuestList.getDefaultProps = function() {
  return {};
};

QuestList.render = function() {
  if (this.state.quests.length === 0) {
    return <Loading />;
  }

  return (
    <ul className="list list-quests">
      {_.map(this.state.quests, function(quest) {
        return (
          <QuestItem
            key={quest.id}
            title={quest.title}
            description={quest.descriptionMarkdown}
            reward={quest.baseReward}
            type={quest.type}
          />
        )
      })}
    </ul>
  )
};

module.exports = React.createClass(QuestList);