/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function (done) {

  // Set application name
  sails.config.appName = "CouchTomato";

  // This is a default user
  if (await User.count() === 0) {
    await User.createEach([{ username: 'couchtomato', password: 'couchtomato' }]);
    sails.log('Create default user');
  }

  // Default Qualities
  if (!await Quality.findOne({ name: 'WORKPRINT' }))
    await Quality.createEach([{ name: 'WORKPRINT', title: 'WORKPRINT' }]);

  if (!await Quality.findOne({ name: 'CAM' }))
    await Quality.createEach([{ name: 'CAM', title: 'CAM' }]);

  if (!await Quality.findOne({ name: 'TELESYNC' }))
    await Quality.createEach([{ name: 'TELESYNC', title: 'TELESYNC' }]);

  if (!await Quality.findOne({ name: 'TELECINE' }))
    await Quality.createEach([{ name: 'TELECINE', title: 'TELECINE' }]);

  if (!await Quality.findOne({ name: 'REGIONAL' }))
    await Quality.createEach([{ name: 'REGIONAL', title: 'REGIONAL' }]);

  if (!await Quality.findOne({ name: 'DVDSCR' }))
    await Quality.createEach([{ name: 'DVDSCR', title: 'DVDSCR' }]);

  if (!await Quality.findOne({ name: 'SDTV' }))
    await Quality.createEach([{ name: 'SDTV', title: 'SDTV' }]);

  if (!await Quality.findOne({ name: 'DVD' }))
    await Quality.createEach([{ name: 'DVD', title: 'DVD' }]);

  if (!await Quality.findOne({ name: 'DVD-R' }))
    await Quality.createEach([{ name: 'DVD-R', title: 'DVD-R' }]);

  if (!await Quality.findOne({ name: 'WEBDL-480p' }))
    await Quality.createEach([{ name: 'WEBDL-480p', title: 'WEBDL-480p' }]);

  if (!await Quality.findOne({ name: 'Bluray-480p' }))
    await Quality.createEach([{ name: 'Bluray-480p', title: 'Bluray-480p' }]);

  if (!await Quality.findOne({ name: 'Bluray-576p' }))
    await Quality.createEach([{ name: 'Bluray-576p', title: 'Bluray-576p' }]);

  if (!await Quality.findOne({ name: 'HDTV-720p' }))
    await Quality.createEach([{ name: 'HDTV-720p', title: 'HDTV-720p' }]);

  if (!await Quality.findOne({ name: 'WEBDL-720p' }))
    await Quality.createEach([{ name: 'WEBDL-720p', title: 'WEBDL-720p' }]);

  if (!await Quality.findOne({ name: 'Bluray-720p' }))
    await Quality.createEach([{ name: 'Bluray-720p', title: 'Bluray-720p' }]);

  if (!await Quality.findOne({ name: 'HDTV-1080p' }))
    await Quality.createEach([{ name: 'HDTV-1080p', title: 'HDTV-1080p' }]);

  if (!await Quality.findOne({ name: 'WEBDL-1080p' }))
    await Quality.createEach([{ name: 'WEBDL-1080p', title: 'WEBDL-1080p' }]);

  if (!await Quality.findOne({ name: 'Bluray-1080p' }))
    await Quality.createEach([{ name: 'Bluray-1080p', title: 'Bluray-1080p' }]);

  if (!await Quality.findOne({ name: 'Remux-1080p' }))
    await Quality.createEach([{ name: 'Remux-1080p', title: 'Remux-1080p' }]);

  if (!await Quality.findOne({ name: 'HDTV-2160p' }))
    await Quality.createEach([{ name: 'HDTV-2160p', title: 'HDTV-2160p' }]);

  if (!await Quality.findOne({ name: 'WEBDL-2160p' }))
    await Quality.createEach([{ name: 'WEBDL-2160p', title: 'WEBDL-2160p' }]);

  if (!await Quality.findOne({ name: 'Bluray-2160p' }))
    await Quality.createEach([{ name: 'Bluray-2160p', title: 'Bluray-2160p' }]);

  if (!await Quality.findOne({ name: 'Remux-2160p' }))
    await Quality.createEach([{ name: 'Remux-2160p', title: 'Remux-2160p' }]);

  if (!await Quality.findOne({ name: 'BR-DISK' }))
    await Quality.createEach([{ name: 'BR-DISK', title: 'BR-DISK' }]);

  if (!await Quality.findOne({ name: 'Raw-HD' }))
    await Quality.createEach([{ name: 'Raw-HD', title: 'Raw-HD' }]);

  // Import dependencies
  var path = require('path');

  // This bootstrap version indicates what version of fake data we're dealing with here.
  var HARD_CODED_DATA_VERSION = 0;

  // This path indicates where to store/look for the JSON file that tracks the "last run bootstrap info"
  // locally on this development computer (if we happen to be on a development computer).
  var bootstrapLastRunInfoPath = path.resolve(sails.config.appPath, '.tmp/bootstrap-version.json');

  // Whether or not to continue doing the stuff in this file (i.e. wiping and regenerating data)
  // depends on some factors:
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // If the hard-coded data version has been incremented, or we're being forced
  // (i.e. `--drop` or `--environment=test` was set), then run the meat of this
  // bootstrap script to wipe all existing data and rebuild hard-coded data.
  if (sails.config.models.migrate !== 'drop' && sails.config.environment !== 'test') {
    // If this is _actually_ a production environment (real or simulated), or we have
    // `migrate: safe` enabled, then prevent accidentally removing all data!
    if (process.env.NODE_ENV === 'production' || sails.config.models.migrate === 'safe') {
      sails.log.warn('Since we are running with migrate: \'safe\' and/or NODE_ENV=production (in the "' + sails.config.environment + '" Sails environment, to be precise), skipping the rest of the bootstrap to avoid data loss...');
      return done();
    }//•

    // Compare bootstrap version from code base to the version that was last run
    var lastRunBootstrapInfo = await sails.helpers.fs.readJson(bootstrapLastRunInfoPath)
      .tolerate('doesNotExist');// (it's ok if the file doesn't exist yet-- just keep going.)

    if (lastRunBootstrapInfo && lastRunBootstrapInfo.lastRunVersion === HARD_CODED_DATA_VERSION) {
      sails.log('Skipping v' + HARD_CODED_DATA_VERSION + ' bootstrap script...  (because it\'s already been run)');
      sails.log('(last run on this computer: @ ' + (new Date(lastRunBootstrapInfo.lastRunAt)) + ')');
      return done();
    }//•

    sails.log('Running v' + HARD_CODED_DATA_VERSION + ' bootstrap script...  (' + (lastRunBootstrapInfo ? 'before this, the last time the bootstrap ran on this computer was for v' + lastRunBootstrapInfo.lastRunVersion + ' @ ' + (new Date(lastRunBootstrapInfo.lastRunAt)) : 'looks like this is the first time the bootstrap has run on this computer') + ')');
  }
  else {
    sails.log('Running bootstrap script because it was forced...  (either `--drop` or `--environment=test` was used)');
  }

  // Since the hard-coded data version has been incremented, and we're running in
  // a "throwaway data" environment, delete all records from all models.
  for (let identity in sails.models) {
    await sails.models[identity].destroy({});
  }//∞

  // Save new bootstrap version
  await sails.helpers.fs.writeJson.with({
    destination: bootstrapLastRunInfoPath,
    json: {
      lastRunVersion: HARD_CODED_DATA_VERSION,
      lastRunAt: Date.now()
    },
    force: true
  })
    .tolerate((err) => {
      sails.log.warn('For some reason, could not write bootstrap version .json file.  This could be a result of a problem with your configured paths, or, if you are in production, a limitation of your hosting provider related to `pwd`.  As a workaround, try updating app.js to explicitly pass in `appPath: __dirname` instead of relying on `chdir`.  Current sails.config.appPath: `' + sails.config.appPath + '`.  Full error details: ' + err.stack + '\n\n(Proceeding anyway this time...)');
    });

  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)
  return done();

};
