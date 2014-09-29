/* @jsx React.DOM */
/* jshint node: true */

var React = require('react');
var RRouter = require('rrouter');
var Fluxxor = require('fluxxor');

var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var RoutingContextMixin = RRouter.RoutingContextMixin;
var Link = RRouter.Link;

var Header = {};

Header.mixins = [
  FluxMixin,
  StoreWatchMixin('PlayerStore'),
  RoutingContextMixin
];

Header.getStateFromFlux = function() {
  return this.getFlux().store('PlayerStore').getState();
};

Header.componentDidMount = function() {

};

Header.componentDidUpdate = function() {

};

Header.handleClick = function(ev) {
  ev.preventDefault();
  window.snapper.open('left')
};

Header.getInitialState = function() {
  return {};
};

Header.getDefaultProps = function() {
  return { detail: function() { } }
};

Header.render = function() {
  return (
    <header className="app-header">
      <a href="#" id="menu-open" onClick={this.handleClick}>
        <span className="glyphicon glyphicon-align-justify"></span>
      </a>
      <h1>Quests</h1>
      <Link to="home/profile" className="pull-right link-profile">
        <span className="glyphicon glyphicon-user"></span>
        <span className="points-badge">2500</span>
      </Link>
    </header>
  )
};

module.exports = React.createClass(Header);