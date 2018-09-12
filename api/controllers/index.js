module.exports = {

  friendlyName: 'View dashboard or redirect to login',
  
  description: 'Display or redirect to the appropriate homepage, depending on login status.',

  exits: {

    success: {
      statusCode: 200,
      viewTemplatePath: 'pages/user/login'
    },

    redirect: {
      responseType: 'redirect',
    },

  },


  fn: async function (inputs, exits) {

    if (this.req.me) {
      throw {redirect:'/dashboard'};
    }

    return exits.success();

  }


};
