const dotenv = require("dotenv").config();

const config = {
  credentials: {
    tenantName: process.env.TENANT_NAME,
    clientID: process.env.CLIENT_ID,
    tenantID: process.env.TENANT_ID,
  },

  metadata: {
    authority: `login.microsoftonline.com/${process.env.TENANT_ID}`,
    discovery: ".well-known/openid-configuration",
    version: process.env.TOKEN_VERSION,
  },
  settings: {
    isB2C: false,
    validateIssuer: true,
    passReqToCallback: false,
    loggingLevel: "info",
  },
};

module.exports = config;
