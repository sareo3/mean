'use strict';

module.exports = {
  app: {
    title: 'Echo',
    description: 'Reporting Services for GED Ecosystem',
    keywords: 'mongodb, express, angularjs, node.js, mongoose',
    googleAnalyticsTrackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'GOOGLE_ANALYTICS_TRACKING_ID'
  },
  port: process.env.PORT || 3000,
  host: process.env.HOST || '0.0.0.0',
  mercuryDB: 'mongodb://mercury:passwOrd@mercury-sit3.d2-tdbfg.com:27017/mercury',
  echoDB: 'mongodb://mercury:passwOrd@mercury-sit3.d2-tdbfg.com:27017/mercury',
  templateEngine: 'swig',
  // Session Cookie settings
  sessionCookie: {
    // session expiration is set by default to 24 hours
    maxAge: 24 * (60 * 60 * 1000),
    // httpOnly flag makes sure the cookie is only accessed
    // through the HTTP protocol and not JS/browser
    httpOnly: true,
    // secure cookie should be turned to true to provide additional
    // layer of security so that the cookie is set only when working
    // in HTTPS mode.
    secure: false
  },
  // sessionSecret should be changed for security measures and concerns
  sessionSecret: process.env.SESSION_SECRET || 'MEAN',
  // sessionKey is set to the generic sessionId key used by PHP applications
  // for obsecurity reasons
  sessionKey: 'sessionId',
  sessionCollection: 'sessions',
  // Lusca config
  csrf: {
    csrf: false,
    csp: { /* Content Security Policy object */},
    xframe: 'SAMEORIGIN',
    p3p: 'ABCDEF',
    xssProtection: true
  },
  logo: 'modules/core/client/img/brand/logo.png',
  favicon: 'modules/core/client/img/brand/favicon.ico',
  uploads: {
    profileUpload: {
      dest: './modules/users/client/img/profile/uploads/', // Profile upload destination path
      limits: {
        fileSize: 1 * 1024 * 1024 // Max file size in bytes (1 MB)
      }
    }
  },
  porfolioMap: {
    '1808': { name: 'SGP CADARB' },
    '1928': { name: 'GED SEASG LIHEDGE' },
    '1929': { name: 'GED SEASG GLOBARD' },
    '1930': { name: 'GED DEASG INTDLTA1' },
    '1922': { name: 'GED TDBTO CLHEDGE' },
    '1937': { name: 'GED TDSTO CLHEDGE' },
    '1924': { name: 'GED TDBTO INTDLTA1' }

  }
};
