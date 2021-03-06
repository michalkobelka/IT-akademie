import Router from 'ima/router/Router';
import Window from 'ima/window/Window';

export let init = (ns, oc, config) => { // jshint ignore:line
	let $window = oc.get(Window);
	let $router = oc.get(Router);

	config.$IMA.fatalErrorHandler = (error) => {
		console.error('FATAL ERROR HANDLER:', error);
	};

	$window.bindEventListener($window.getWindow(), 'error', (event) => {
		let error = event.error;

		$router
			.handleError({ error })
			.catch((fatalError) => {
				config.$IMA.fatalErrorHandler(fatalError);
			});
	});
};
