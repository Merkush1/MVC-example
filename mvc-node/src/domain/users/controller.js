//controller uses model so we need to import it

const userModel = require ('./model');

// module.exports uses arguments in methods only request (req) and responses (res)
module.exports = {
    getAll: (req, res) => {
        return res.render ('users.hbs', {
            users: userModel.getAll()
        })
    },
    create: (req, res) => {
        try {
            const {age, username} = req.body;

            if (!age || !username) {
                throw new Error('Не указан username или возраст')
            }

            userModel.create({age, username})

            return res.redirect('/users')
        } catch (e) {
            return res.render('users-error.hbs', {
                message: e.message
            });
        }
    },
    remove: (req, res) => {
        try {
            const id = req.query.id;
            const username = req.query.username;

            if(!id) {
                if (!username) {
                    throw new Error ('Не указан id и username');
                }
                userModel.removeByUsername({username})

                res.render('users.hbs', {
                    users: userModel.getAll()
                })

            }

            userModel.removeById({id})

            res.render('users.hbs', {
                users: userModel.getAll()
            })
        } catch (e) {
            return res.render('users-error.hbs', {
                message:e.message
            })
        }
    }
}

