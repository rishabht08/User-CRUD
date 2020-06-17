const UserRead = {}
const User = require("../models/user")
const redis = require("redis")
const PORT_REDIS = process.env.PORT || 6379;
const redis_client = redis.createClient(PORT_REDIS);
const Sequelize = require("sequelize");


UserRead.getAllUser = async (req, res) => {
    try {

        const table = await User.findAll({ order: [['id', 'DESC']]})

        //add data to Redis
        redis_client.setex("users", 3600, JSON.stringify(table));

        return res.status(200).send(JSON.stringify(table))


    } catch (error) {
       
        res.status(500).send(error)

    }
}


UserRead.findFromQuery = async (req, res) => {
   

    try {
        const { query } = req.query;
       
    
        User.findAll({
            where: {

                name: {
                    [Sequelize.Op.iLike]: `%${query}%`
                }

            },
            order: [['id', 'DESC']]
            
        }).then(resp => {
            return res.send({
                data: resp
            })

        }).catch(err=>{
            console.log(err)
        })





    }
    catch (error) {
        res.send({
            status: false,
            data: error,
        

        })
    }
}


module.exports = UserRead;