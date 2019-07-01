module.exports = {
    history: {
        get: (req,res, next) => res.json({success: true, payload:[
            {message:"Happy Xmas", audience:"undefined",date_sent:(new Date(Date.now())),status: "pending"},
            {message:"Hello EryBody", audience:"Family",date_sent:(new Date(Date.now())),status: "successfull"},
            {message:"I love Code", audience:"Dev",date_sent:(new Date(Date.now())),status: "pending"},
            {message:"She Aint Ma Baby", audience:"Everybody",date_sent:(new Date(Date.now())),status: "failed"},
            {message:"He stole the money", audience:"Ministry",date_sent:(new Date(Date.now())),status: "pending"}
        ]})
    },
    schedules:{
        get: (req,res, next) => res.json({success: true, payload:[
            {message:"Happy Xmas", audience:"undefined",date_to_send:(new Date(Date.now()))},
            {message:"Hello EryBody", audience:"Family",date_to_send:(new Date(Date.now()))},
            {message:"I love Code", audience:"Dev",date_to_send:(new Date(Date.now()))},
            {message:"She Aint Ma Baby", audience:"Everybody",date_to_send:(new Date(Date.now()))},
            {message:"He stole the money", audience:"Ministry",date_to_send:(new Date(Date.now()))}
        ]})
    },
    balance:{
        get: (req,res, next) => res.json({success: true, payload:{
            total_balance: 4500,
            active_bundles_balance:1500,
            inactive_bundles_balance:3000
        }})
    }
}