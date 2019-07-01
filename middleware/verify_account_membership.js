
module.exports = function verify_account_membership(req, res, next){
    let {ac_id, user_id, auth_token} = req.query;
    Account.findOne({_id:ac_id})
        .populate({
            path:"members",
            select: "_id"
        })
        .then(account => account ? _confirm_membership(ac_id,account,next) : next(new Error("Account Not Found")))
            .catch(err => next(err));
}


function _confirm_membership(account_id, account,next){
    let _members = account.members.filter((member,index) => {
        member._id.toString() === account_id.toString();
    });

    if(_members.length){
        next();
        return;
    }

    return next(new Error("Not Account member"));
}