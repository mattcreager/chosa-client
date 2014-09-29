/* @jsx React.DOM */
/* jshint node: true */

var React = require('react');
var RRouter = require('rrouter');
var Fluxxor = require('fluxxor');

var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var RoutingContextMixin = RRouter.RoutingContextMixin;

var Link = RRouter.Link;

var Profile = {};

Profile.mixins = [
  FluxMixin,
  StoreWatchMixin('PlayerStore'),
  RoutingContextMixin
];

Profile.getStateFromFlux = function() {
  return this.getFlux().store('PlayerStore').getState();
};


Profile.componentDidMount = function() {};

Profile.getInitialState = function() {
  return {};
};

Profile.getDefaultProps = function() {
  return { detail: function() { } }
};

Profile.render = function() {
  var player = this.props.player.twitterProfile;

  if (!player) {
    return <h1>Redirect</h1>;
  }

  var profileImage = {
    backgroundImage: 'url(https://pbs.twimg.com/profile_images/504029549026230272/Ahdr5Mh4_200x200.jpeg)'
  };

  return (
    <div>
      <div className="hexagon profile-picture" style={profileImage}>
        <div className="hexTop"></div>
        <div className="hexBottom"></div>
      </div>
      <div className="profile-header">
        <h4><a href={player.url}>@{player.screen_name}</a></h4>
        <div className="points-badge points-badge-large"><span className="glyphicon glyphicon-star"></span>1000<span className="glyphicon glyphicon-star"></span></div>
      </div>
      <div className="profile-body">
        <h5>Completed Quests</h5>
        <ul className="list list-quests">
        <li>
          <Link to="home/quest" id="aQuest">
            <div className="col-xs-3">
              <div className="points-badge">100</div>
            </div>
            <div className="col-xs-9">
              <h3>Quest Name</h3>
              <p>Quick quest description</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="home/quest" id="aQuest">
            <div className="col-xs-3">
              <div className="points-badge">100</div>
            </div>
            <div className="col-xs-9">
              <h3>Quest Name</h3>
              <p>Quick quest description</p>
            </div>
          </Link>
        </li>
      </ul>
      </div>
    </div>
  )
};

module.exports = React.createClass(Profile);