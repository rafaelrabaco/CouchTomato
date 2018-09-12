/**
 * User.js
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    username: {
      type: 'string',
      required: true,
      unique: true,
      maxLength: 4,
      maxLength: 64,
    },

    password: {
      type: 'string',
      required: true,
      minLength: 6,
      maxLength: 32,
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
    // n/a

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    // n/a

  },

  beforeCreate: function (inputs, next) {
    sails.helpers.passwords.hashPassword(inputs.password).exec((err, hashedPassword) => {
      if (err) { return proceed(err); }
      inputs.password = hashedPassword;
      return next();
    });
  },

  beforeUpdate: function (inputs, next) {
    if (inputs.password)
      sails.helpers.passwords.hashPassword(inputs.password).exec((err, hashedPassword) => {
        if (err) { return proceed(err); }
        inputs.password = hashedPassword;
        return next();
      });

    return next();
  }


};
