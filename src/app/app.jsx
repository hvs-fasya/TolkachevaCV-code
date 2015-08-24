(function () {

  let React = require('react/addons');
  let Router = require('react-router');
  let AppRoutes = require('./app-routes.jsx');
  let injectTapEventPlugin = require('react-tap-event-plugin');

  window.React = React;
  injectTapEventPlugin();
  Router
	.create({
		routes: AppRoutes,
		scrollBehavior: Router.ScrollToTopBehavior
	})
    .run(function(Handler) {
		React.render(<Handler />, document.body);
	});
	
})();
