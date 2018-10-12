parasails.registerPage('profiles', {
    //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
    //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
    //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
    data: {
        // Main syncing/loading state for this page.
        syncing: false,

        // Form data
        formData: { /* … */ },

        // For tracking client-side validation errors in our form.
        // > Has property set to `true` for each invalid property in `formData`.
        formErrors: { /* … */ },

        // Server error state for the form
        cloudError: '',
    },

    //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
    //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
    //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
    beforeMount: function () {
        // Attach raw data exposed by the server.
        _.extend(this, SAILS_LOCALS);

        // Set the form data.
        this.formData.username = this.user.username;
        this.formData.password = '';
    },
    mounted: async function () {
        //…
    },

    //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
    //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
    methods: {

        submittedForm: async function () {
            // Redirect to the settings/general page on success.
            // > (Note that we re-enable the syncing state here.  This is on purpose--
            // > to make sure the spinner stays there until the page navigation finishes.)
            this.syncing = true;
            window.location = '/settings/profile';
        },

        handleParsingForm: function () {
            // Clear out any pre-existing error messages.
            this.formErrors = {};

            var argins = this.formData;

            // Validate name:
            // if(!argins.password) {
            //   this.formErrors.password = true;
            // }

            // // Validate username:
            // if (!argins.username) {
            //     this.formErrors.username = true;
            // }

            // // If there were any issues, they've already now been communicated to the user,
            // // so simply return undefined.  (This signifies that the submission should be
            // // cancelled.)
            // if (Object.keys(this.formErrors).length > 0) {
            //     return;
            // }

            return argins;
        },

    }
});
