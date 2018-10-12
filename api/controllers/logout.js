module.exports = {
  
  friendlyName: 'Logout',

  description: 'Log out of CouchTomato.',

  exits: {
    redirect: {
      responseType: 'redirect'
    }
  },


  fn: async function (inputs, exits) {

    // Clear the `userId` property from this session.
    delete this.req.session.userId;

    // Then finish up, sending an appropriate response.
    // > Under the covers, this persists the now-logged-out session back
    // > to the underlying session store.
    if (!this.req.wantsJSON) {
      throw {redirect: '/'};
    } else {
      return exits.success();
    }

  }


};
