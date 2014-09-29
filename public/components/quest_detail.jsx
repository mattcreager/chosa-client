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
var FluxChildMixin = Fluxxor.FluxChildMixin(React); // or window.React, etc.

var Loading = require('./loading.jsx');

var QuestDetail = {};

QuestDetail.mixins = [
   FluxChildMixin,
   StoreWatchMixin('QuestStore'),
   RoutingContextMixin
];

QuestDetail.getStateFromFlux = function() {
  return this.getFlux().store('QuestStore').getState();
};

QuestDetail.getInitialState = function() {
  return {};
};

QuestDetail.getDefaultProps = function() {
  return {}
};

QuestDetail.componentDidMount = function() {
  this.getFlux().actions.quests.load();
};

QuestDetail.render = function() {
  if (this.state.quests.length === 0) {
    return <Loading />;
  }

  var quest = _.find(this.state.quests, { 'id': _.parseInt(this.props.id)});
  quest.image = quest.image || 'http://fc03.deviantart.net/fs71/i/2014/218/e/3/mario__luigi__and_bowser_smash_4_recolor_preview_by_green_raptor-d7txxwf.png';

  return (
    <div>
      <div className="prize-header">
        <img src={quest.image}/>
      </div>
      <div className="container prize-body">
        <h4>{quest.title}</h4>
        <div className="points-badge points-badge-large"><span className="glyphicon glyphicon-star"></span>{quest.baseReward}<span className="glyphicon glyphicon-star"></span></div>
        <p>{quest.descriptionMarkdown}</p>
        <form className="quest-code">
          <input type="text" id="quest-code" placeholder="Enter Code" className="form-control"/>
          <button type="button" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-ok"></span> I completed the quest!</button>
        </form>
      </div>
    </div>
  )
};

module.exports = React.createClass(QuestDetail);