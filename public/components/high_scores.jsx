/* @jsx React.DOM */
/* jshint node: true */

var React = require('react');
var RRouter = require('rrouter');

var RoutingContextMixin = RRouter.RoutingContextMixin;
var Link = RRouter.Link;

var Header = require('./header.jsx');

var HighScores = {};

HighScores.componentDidMount = function() {
  // if (!this.state.userStore.user.authenticated) {
  //   return this.navigateTo('/login', { replace: true });
  // }
};

HighScores.getInitialState = function() {
  return {};
};

HighScores.getDefaultProps = function() {
  return { detail: function() { } }
};

HighScores.render = function() {
  return (
    <div className="leaderboard">
      <h5>Complete <a href="#">quests</a> to get a high-score!</h5>
      <ol>
        <li><a href="#"><span className="avatar"><img src="http://placehold.it/50x50"/></span> Top Pointsman</a><span className="points-badge">12345</span></li>
        <li><a href="#"><span className="avatar"><img src="http://placehold.it/50x50"/></span> Top Pointsman</a><span className="points-badge">12345</span></li>
        <li><a href="#"><span className="avatar"><img src="http://placehold.it/50x50"/></span> Top Pointsman</a><span className="points-badge">12345</span></li>
        <li><a href="#">Top Pointsman</a><span className="points-badge">12345</span></li>
        <li><a href="#">Top Pointsman</a><span className="points-badge">12345</span></li>
        <li><a href="#">Top Pointsman</a><span className="points-badge">12345</span></li>
        <li><a href="#">Top Pointsman</a><span className="points-badge">12345</span></li>
        <li><a href="#">Top Pointsman</a><span className="points-badge">12345</span></li>
        <li><a href="#">Top Pointsman</a><span className="points-badge">12345</span></li>
        <li><a href="#">Top Pointsman</a><span className="points-badge">12345</span></li>
      </ol>
    </div>
  )
};

module.exports = React.createClass(HighScores);