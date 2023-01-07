const userModel = require('./model');

module.exports = {
    getAllinJson: (req, res) => {
        return res.json(userModel.getAll())
    },
}