/* @jsx React.DOM */
/* jshint node: true */

'use strict';

var React = require('react');
var RRouter = require('rrouter');
var Fluxxor = require('fluxxor');

var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var RoutingContextMixin = RRouter.RoutingContextMixin;
var Link = RRouter.Link;

var NotFound = {};

NotFound.mixins = [];

NotFound.getStateFromFlux = function() {};

NotFound.componentDidMount = function() {};

NotFound.getInitialState = function() {
  return {};
};

NotFound.getDefaultProps = function() {
  return {}
};

NotFound.render = function() {
  return <h1>lOST</h1>;
};

module.exports = React.createClass(NotFound);