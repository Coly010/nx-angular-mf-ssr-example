const {
  withModuleFederationForSSR,
} = require('@nrwl/angular/module-federation');
const config = require('./module-federation.config');
module.exports = withModuleFederationForSSR(config);
