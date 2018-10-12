module.exports = {

  friendlyName: 'View general settings',

  description: '',

  exits: {

    success: {
      viewTemplatePath: 'pages/settings/general/index',
    }

  },


  fn: async function (inputs, exits) {
    let user = await User.findOne({ id: this.req.me.id });
    return exits.success({
      'user': user
    });

  }


};
