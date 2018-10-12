module.exports = {
  
  friendlyName: 'Login',

  description: 'Log in using the provided username and password combination.',

  inputs: {

    username: {
      type: 'string',
      required: true
    },

    password: {
      type: 'string',
      required: true
    },

    rememberMe: {
      type: 'boolean'
    }

  },


  exits: {

    success: {
      description: 'The requesting user agent has been successfully logged in.',
    },

    badCombo: {
      description: `The provided email and password combination does not
      match any user in the database.`,
      responseType: 'unauthorized'
      // ^This uses the custom `unauthorized` response located in `api/responses/unauthorized.js`.
      // To customize the generic "unauthorized" response across this entire app, change that file
      // (see api/responses/unauthorized).
      //
      // To customize the response for _only this_ action, replace `responseType` with
      // something else.  For example, you might set `statusCode: 498` and change the
      // implementation below accordingly (see http://sailsjs.com/docs/concepts/controllers).
    }

  },


  fn: async function (inputs, exits) {

    var userRecord = await User.findOne({
      username: inputs.username,
    });


    if(!userRecord) {
      throw 'badCombo';
    }

    await sails.helpers.passwords.checkPassword(inputs.password, userRecord.password).intercept('incorrect', 'badCombo');

    if (inputs.rememberMe) {
      if (this.req.isSocket) {
        sails.log.warn(
          'Received `rememberMe: true` from a virtual request, but it was ignored\n'+
          'because a browser\'s session cookie cannot be reset over sockets.\n'+
          'Please use a traditional HTTP request instead.'
        );
      } else {
        this.req.session.cookie.maxAge = sails.config.custom.rememberMeCookieMaxAge;
      }
    }

    this.req.session.userId = userRecord.id;

    return exits.success();

  }

};
