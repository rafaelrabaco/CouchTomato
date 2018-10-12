module.exports = {

    friendlyName: 'View profiles settings',

    description: '',

    exits: {

        success: {
            viewTemplatePath: 'pages/settings/profiles/index',
        }

    },

    fn: async function (inputs, exits) {
        let user = await User.findOne({ id: this.req.me.id });
        return exits.success({
            'user': user
        });

    }


};
