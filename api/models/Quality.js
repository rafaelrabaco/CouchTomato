/**
 * User.js
 */

module.exports = {

    attributes: {

        //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
        //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
        //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


        name: {
            type: 'string',
            required: true,
            unique: true,
        },

        title: {
            type: 'string',
            required: true,
        },

        minSizeMovie90Min: {
            type: 'number',
            defaultsTo: 0 // Unlimited
        },

        maxSizeMovie90Min: {
            type: 'number',
            defaultsTo: 0 // Unlimited
        },

        minSizeMovie140Min: {
            type: 'number',
            defaultsTo: 0 // Unlimited
        },

        maxSizeMovie140Min: {
            type: 'number',
            defaultsTo: 0 // Unlimited
        },

        minSizeSerie30Min: {
            type: 'number',
            defaultsTo: 0 // Unlimited
        },

        maxSizeSerie30Min: {
            type: 'number',
            defaultsTo: 0 // Unlimited
        },

        minSizeSerie60Min: {
            type: 'number',
            defaultsTo: 0 // Unlimited
        },

        maxSizeSerie60Min: {
            type: 'number',
            defaultsTo: 0 // Unlimited
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

};
