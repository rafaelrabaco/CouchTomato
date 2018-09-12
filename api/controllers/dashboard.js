module.exports = {


  friendlyName: 'View welcome page',


  description: 'Display the dashboard "Welcome" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard',
    },

  },


  fn: async function (inputs, exits) {

    return exits.success();

  }


};
