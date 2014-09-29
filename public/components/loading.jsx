/* @jsx React.DOM */
/* jshint node: true */

var React = require('react');
var RRouter = require('rrouter');
var Fluxxor = require('fluxxor');

var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var RoutingContextMixin = RRouter.RoutingContextMixin;
var Link = RRouter.Link;

var Loading = {};

Loading.getInitialState = function() {
  return {};
};

Loading.getDefaultProps = function() {
  return {};
};

Loading.render = function() {
  return (
    <div id="loadingScreen">Loading...</div>
  )
};

module.exports = React.createClass(Loading);