module.exports = {
    registration:{
        get:{

        },
        post:require("./registration")
    },
    login:{
        get:() => {},
        post: require("./login")
    },
    recoverPassword:{

    }
}