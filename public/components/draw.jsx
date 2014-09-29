/* @jsx React.DOM */
/* jshint node: true */

var React = require('react');
var RRouter = require('rrouter');
var Fluxxor = require('fluxxor');

var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var RoutingContextMixin = RRouter.RoutingContextMixin;
var Link = RRouter.Link;

var Draw = {};

Draw.mixins = [ FluxMixin, RoutingContextMixin ];

Draw.componentDidMount = function() {
  this.snapper = new Snap({
      element: document.getElementById('content'),
      disable: 'right'
  });

  window.snapper = this.snapper

  var self = this;
  $('#menu-open').click(function() {
    if( self.snapper.state().state=="left" ){
        self.snapper.close();
    } else {
        self.snapper.open('left');
    }
  });
};

Draw.componentWillUpdate = function() {
  if( this.snapper.state().state=="left" ){
      this.snapper.close();
  }
};

Draw.handleClick = function() {
  this.getFlux().actions.players.unLoadPlayer();
};

Draw.getInitialState = function() {
  return {};
};

Draw.getDefaultProps = function() {
  return { detail: function() { } }
};

Draw.render = function() {
  return (
    <div className="snap-drawers">
      <div className="main-nav snap-drawer snap-drawer-left">
        <ul>
          <li><Link to="home/profile"><span className="glyphicon glyphicon-user"></span> Profile</Link></li>
          <li><Link to="home/quests"><span className="glyphicon glyphicon-flash"></span> Quests</Link></li>
          <li><Link to="home/highScores"><span className="glyphicon glyphicon-globe"></span> High Scores</Link></li>
          <li><Link to="home/prizes"><span className="glyphicon glyphicon-gift"></span> Prize List</Link></li>
          <li><a href="#" onClick={this.handleClick}><span className="glyphicon glyphicon-log-out"></span> Sign-off</a></li>
        </ul>
      </div>
    </div>
  )
};

module.exports = React.createClass(Draw);