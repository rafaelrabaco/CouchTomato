/**
 * cloud.setup.js
 *
 * Configuration for this Sails app's generated browser SDK ("Cloud").
 *
 * Above all, the purpose of this file is to provide endpoint definitions,
 * each of which corresponds with one particular route+action on the server.
 *
 * > This file was automatically generated.
 * > (To regenerate, run `sails run rebuild-cloud-sdk`)
 */

Cloud.setup({

  /* eslint-disable */
  methods: {"index":{"verb":"GET","url":"/","args":[]},"dashboard":{"verb":"GET","url":"/dashboard","args":[]},"logout":{"verb":"GET","url":"/api/logout","args":[]},"login":{"verb":"PUT","url":"/api/login","args":["username","password","rememberMe"]}}
  /* eslint-enable */

});
