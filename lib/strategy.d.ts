import OAuth1Strategy = require('passport-oauth1');

/**
 * The Twitter authentication strategy authenticates requests by delegating to
 * Twitter using the OAuth protocol.
 *
 * Applications must supply a `verify` callback which accepts a `token`,
 * `tokenSecret` and service-specific `profile`, and then calls the `cb`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Examples:
 *
 *     passport.use(new TwitterStrategy({
 *         consumerKey: '123-456-789',
 *         consumerSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/twitter/callback'
 *       },
 *       function(token, tokenSecret, profile, cb) {
 *         User.findOrCreate(..., function (err, user) {
 *           cb(err, user);
 *         });
 *       }
 *     ));
 */
declare class TwitterStrategy extends OAuth1Strategy<TwitterStrategy.Profile> {
  name: 'twitter';

  constructor (options: TwitterStrategy.Options, verify: OAuth1Strategy.VerifyFunction<TwitterStrategy.Profile>);
}

declare namespace TwitterStrategy {
  export interface Options extends OAuth1Strategy.OAuth1Options {
    userProfileURL?: string;
    skipExtendedUserProfile?: boolean;
    includeEmail?: boolean;
    includeStatus?: boolean;
    includeEntities?: boolean;
  }

  export interface Profile {
    provider: 'twitter';
    _raw: string;
    _json: any;
    _accessLevel: string;
    id: string;
    username: string;
    displayName: string;
    emails?: Array<{ value: string }>;
    photos: Array<{ value: string }>;
  }
}

export = TwitterStrategy;
