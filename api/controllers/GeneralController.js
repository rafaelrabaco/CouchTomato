/**
 * GeneralController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    find: function (req, res) {
        General.findOne({ id: 1 }).exec(function (err, model) {
            if (err)
                res.status(500, { error: 'Database Error' });

            res.view('pages/settings/general', { model: model });
        });
    },
    update: function (req, res) {
        let username = req.body.username;
        let password = req.body.password;

        console.log(req.body);

        General.update({ id: 1 }, { username: username, password: password }).exec(function (err) {
            if (err)
                res.status(500, { error: 'Database Error' });

            res.redirect('/general');
        });

        return false;
    },
    add: function (req, res) {
        res.send(404);
    },
    list: function (req, res) {
        res.send(404);
    },
    create: function (req, res) {
        res.send(404);
    },
    delete: function (req, res) {
        res.send(404);
    },
    edit: function (req, res) {
        res.send(404);
    }
};

