/// <reference path="bundle.d.ts" />

import TwitterStrategy = require('passport-twitter');

new TwitterStrategy({
    consumerKey: 'abc',
    consumerSecret: '123',
    callbackURL: 'http://127.0.0.1:3000/auth/twitter/callback'
  },
  function(token, tokenSecret, profile, cb) {
    return cb(null, {});
  }
);
