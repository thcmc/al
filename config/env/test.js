'use strict';

module.exports = {
	db: 'mongodb://alberts:F1la50won@ds035617.mongolab.com:35617/albertsdormont',
	port: 3001,
	app: {
		title: 'Albert\'s | Dormont'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '613888522032151',
		clientSecret: process.env.FACEBOOK_SECRET || '3640cb46e64ae4fc9963ce17a8c657f1',
		callbackURL: 'http://www.albertslounge.com/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
		clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
		callbackURL: 'http://localhost:3000/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || 'APP_ID',
		clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/linkedin/callback'
	}
};
