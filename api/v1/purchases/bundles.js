const PurchaseModule = require("../../../modules/payments");
module.exports.purchase = (req, res, next) => {
    PurchaseModule.bundle.purchase(req.body).then(bundle=>res.json(bundle)).catch(error => res.json(error));
}

module.exports.activate = (req, res, next) => {
    PurchaseModule.bundle.activate(req.body).then(ActivatedBundle=>res.json(ActivatedBundle)).catch(error => res.json(error));
}
