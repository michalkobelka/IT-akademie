module.exports = function(config) {
	config.set({
		urlRoot: '/',
		basePath: '',
		frameworks: ['browserify', 'jasmine'],
		port: 3002,
		logLevel: config.LOG_INFO,
		reporters: ['dots'],
		browsers: [
			'PhantomJS'
		],
		files: [
			'./node_modules/babel-polyfill/dist/polyfill.js',
			'./src/**/*Spec.js'
		],
		preprocessors: {
			'./src/**/*Spec.js': ['browserify'],
		},
		browserify: {
			debug: true,
			transform: [
				['babelify', { presets: ["es2015", "react"] }]
			]
		},
		plugins: [
			'karma-phantomjs-launcher',
			//'karma-renamer-preprocessor',
			'karma-jasmine',
			'karma-browserify'
		],
		autoWatch: true,
		singleRun: false,
		colors: true
	});
};
