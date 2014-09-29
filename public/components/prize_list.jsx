/* @jsx React.DOM */
/* jshint node: true */

var React = require('react');
var RRouter = require('rrouter');
var _ = require('lodash');

var RoutingContextMixin = RRouter.RoutingContextMixin;
var Link = RRouter.Link;

var PrizeItem = require('./prize_item.jsx');

var PrizeList = {};

PrizeList.componentDidMount = function() {
  // if (!this.state.userStore.user.authenticated) {
  //   return this.navigateTo('/login', { replace: true });
  // }
};

PrizeList.getInitialState = function() {
  return {};
};

PrizeList.getDefaultProps = function() {
  return { }
};

PrizeList.render = function() {
  return (
    <div>
      <ul className="list prize-list">
        {_.map([{a: 'one'}, {b: 'two'}], function() {
          return <PrizeItem />;
        })}
      </ul>
    </div>
  )
};

module.exports = React.createClass(PrizeList);