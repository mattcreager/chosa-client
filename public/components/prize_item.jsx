/* @jsx React.DOM */
/* jshint node: true */

var React = require('react');
var RRouter = require('rrouter');

var RoutingContextMixin = RRouter.RoutingContextMixin;
var Link = RRouter.Link;

var PrizeItem = {};

PrizeItem.getInitialState = function() {
  return {};
};

PrizeItem.getDefaultProps = function() {
  return { detail: function() { } }
};

PrizeItem.render = function() {
  return (
    <li className="prize-achieved">
      <Link to="home/prize" quest='aPrize'>
        <div className="col-xs-4 prize-photo">
          <img src="http://placehold.it/125x125"/>
          <span className="points-badge">100</span>
        </div>
        <div className="col-xs-8">
          <h3>Awesome Prize</h3>
          <span className="label label-success"><span className="glyphicon glyphicon-ok"></span> Achieved!</span>
          <p>Some really cool description about the awesome prize.</p>
        </div>
      </Link>
    </li>
  )
};

module.exports = React.createClass(PrizeItem);


