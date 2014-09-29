/* @jsx React.DOM */
/* jshint node: true */

var RRouter = require('rrouter');
var Routes = RRouter.Routes;
var Route = RRouter.Route;

var Landing = require('../components/landing.jsx');
var Profile = require('../components/profile.jsx');
var QuestList = require('../components/quest_list.jsx');
var QuestDetail = require('../components/quest_detail.jsx');
var PrizeList = require('../components/prize_list.jsx');
var PrizeDetail = require('../components/prize_detail.jsx');
var HighScores = require('../components/high_scores.jsx');

var Master = require('../components/master.jsx');

module.exports = function routes(flux) {
  return (
    <Routes>
      <Route name="landing" flux={flux} path="/landing" view={Landing} />
      <Route name="auth" flux={flux} path="/auth/:token" view={Landing} />
      <Route name="home" flux={flux} path="/" view={Master}>
        <Route name="profile" path="profile" detailView={Profile} />
        <Route name="quests" path="quests" detailView={QuestList} />
        <Route name="quest" path="quests/:id" detailView={QuestDetail} />
        <Route name="prizes" path="prizes" detailView={PrizeList} />
        <Route name="prize" path="prizes/:prize" detailView={PrizeDetail} />
        <Route name="highScores" path="high_scores" detailView={HighScores} />
      </Route>
    </Routes>
  )
};