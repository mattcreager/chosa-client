/* @jsx React.DOM */
/* jshint node: true */

var React = require('react');
var RRouter = require('rrouter');
var Fluxxor = require('fluxxor');

var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var RoutingContextMixin = RRouter.RoutingContextMixin;

var Loading = require('./loading.jsx');

var Landing = {};

Landing.mixins = [
  FluxMixin,
  StoreWatchMixin('PlayerStore'),
  RoutingContextMixin
];

Landing.getStateFromFlux = function() {
  return this.getFlux().store('PlayerStore').getState();
};

Landing.componentWillMount = function() {
  //this.getFlux().actions.players.loadPlayerCache();
};

Landing.componentDidMount = function () {
  if (this.state.player.id) {
    this.navigateTo('home/quests');
  }

  if (this.props.token) {
    this.getFlux().actions.players.loadPlayer(this.props.token);
  }
}

Landing.componentDidUpdate = function() {
  if (this.state.player.id) {
    this.navigateTo('home/quests');
    return;
  }

  if (this.state.token) {
    this.getFlux().actions.players.loadPlayer(this.state.token);
  }
};

Landing.toggleRegistration = function() {
  this.state.register = !this.state.register;
};

Landing.render = function() {
  if (this.props.token || this.state.loading) {
    return <Loading />
  }

  var authURL = window.config.serverURL + '/auth/twitter';

  return (
    <div className="login">
      <form className="col-md-5" action="#" method="post" onSubmit={this.handleSubmit}>
        <span className="app-logo"></span>
        <h3>Ready to play?</h3>
        <ol>
          <li>Complete quests by learning about Heroku</li>
          <li>Each quest you complete will earn you points</li>
          <li>Exchange points for prizes</li>
        </ol>
        <br/>
        <a href={authURL} className="btn btn-default btn-lg">Sign-in with Twitter</a>
      </form>
    </div>
  )
};

module.exports = React.createClass(Landing);