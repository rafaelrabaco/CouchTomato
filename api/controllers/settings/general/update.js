module.exports = {

  friendlyName: 'General Settings Update',

  description: '',

  inputs: {

    username: {
      type: 'string',
      required: true
    },

    password: {
      type: 'string',
    },

  },


  exits: {

    badCombo: {
      description: `The provided username and password combination does not
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

    // SECURITY
    if (inputs.password) {
      await User.update({ id: this.req.me.id })
        .set({
          username: inputs.username,
          password: inputs.password
        });
    } else {
      await User.update({ id: this.req.me.id })
        .set({
          username: inputs.username,
        });
    }

    this.req.flash('success', 'Successfully updated.')

    return exits.success();
  }

};
