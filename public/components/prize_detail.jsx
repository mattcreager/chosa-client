/* @jsx React.DOM */
/* jshint node: true */

var React = require('react');
var RRouter = require('rrouter');

var RoutingContextMixin = RRouter.RoutingContextMixin;
var Link = RRouter.Link;

var PrizeDetail = {};

PrizeDetail.componentDidMount = function() {
  // if (!this.state.userStore.user.authenticated) {
  //   return this.navigateTo('/login', { replace: true });
  // }
};

PrizeDetail.getInitialState = function() {
  return {};
};

PrizeDetail.getDefaultProps = function() {
  return { detail: function() { } }
};

PrizeDetail.render = function() {
  return (
    <div>
      <div className="prize-header">
        <img src="http://placehold.it/600x400"/>
      </div>
      <div className="container prize-body">
        <h4>{this.props.prize}</h4>
        <div className="points-badge points-badge-large"><span className="glyphicon glyphicon-star"></span>1000<span className="glyphicon glyphicon-star"></span></div>
        <p>This is a small prize description. Below if you have achieved the prize you can tap the CTA!</p>
        <a href="#" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-flag"></span> Claim your entry</a>
      </div>
    </div>
  )
};

module.exports = React.createClass(PrizeDetail);