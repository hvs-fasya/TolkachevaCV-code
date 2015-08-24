let React = require('react');
let Router = require('react-router');
let Route = Router.Route;
let Redirect = Router.Redirect;
let DefaultRoute = Router.DefaultRoute;

let Resume = require('./components/resume.jsx');
let ShortBio = require('./components/shortbyo.jsx');
let Diplomas = require('./components/diplomas.jsx');
let FullBio = require('./components/fullbyo.jsx');

let AppRoutes = (
  <Route name="root" path="/" handler={Resume}>
	<Route name="shortbio" handler={ShortBio} />
	<Route name="diplomas" handler={Diplomas} />
	<Route name="fullbio" handler={FullBio} />
	<DefaultRoute handler={ShortBio}/>
  </Route>
);

module.exports = AppRoutes;
