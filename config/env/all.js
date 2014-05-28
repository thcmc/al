'use strict';

module.exports = {
	app: {
		title: 'ALBERTS | Dormont',
		description: 'Pittsburgh, PA bar located directly off the Potamac Avenue subway stop in Dormont.  Serving 20+ drafts of fresh craft and traditional beers, a wide selection of domestic and import bottles, full liquor selection, wine.  Growlers and six-packs are available for takeout.',
		keywords: 'Dormont Bar, Dormont Beer, six packs Dormont, Beer Specials Dormont'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.css',
				'public/modules/core/css/bootstrap.css',
				'public/modules/core/css/al.css',
				'https://fonts.googleapis.com/css?family=Allura',
				'https://fonts.googleapis.com/css?family=Gilda+Display',
				'//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css'
			],
			js: [
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js',
				'public/lib/angular-animate/angular-animate.js',
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js'
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};
