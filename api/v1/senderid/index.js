const SenderIDModule = require("../../../modules/senderID");

module.exports = (req, res, next) => {
    SenderIDModule(req.body).then(senderID=>res.json(senderID)).catch(error=>res.json(error))
}