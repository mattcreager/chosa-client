/* @jsx React.DOM */
/* jshint node: true */

var React = require('react');
var RRouter = require('rrouter');

var RoutingContextMixin = RRouter.RoutingContextMixin;
var Link = RRouter.Link;

var QuestItem = {};

QuestItem.componentDidMount = function() {
  // if (!this.state.userStore.user.authenticated) {
  //   return this.navigateTo('/login', { replace: true });
  // }
};

QuestItem.getInitialState = function() {
  return {};
};

QuestItem.getDefaultProps = function() {
  return { detail: function() { } }
};

QuestItem.render = function() {
  return (
    <li>
      <Link to="home/quest" id={this.props.key}>
        <div className="col-xs-3">
          <div className="points-badge">{this.props.reward}</div>
        </div>
        <div className="col-xs-9">
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
        </div>
      </Link>
    </li>
  )
};

module.exports = React.createClass(QuestItem);