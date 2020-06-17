const UserWrite = {}
const User = require("../models/user")
const redis = require("redis")
const PORT_REDIS = process.env.PORT || 6379;
const redis_client = redis.createClient(PORT_REDIS);

UserWrite.createUser = async (req, res) => {
    try {
        const { name, email, roleType, status } = req.body;

        const user = {
            name,
            email,
            roleType,
            status
        }

        const table = await User.create(user)

        //update cache values
        redis_client.flushdb((err, succeeded) => {
            console.log(succeeded);
        });

        res.status(201).send(table)



    } catch (error) {
        res.send(error)

    }
}

UserWrite.updateUser = async (req, res) => {
    try {

        const { name, email, roleType, status } = req.body
        const { id } = req.params;

        const table = await User.update({
            name,
            email,
            roleType,
            status
        }, {
            where: {
                id
            }
        })

        //update cache values
        redis_client.flushdb((err, succeeded) => {
            console.log(succeeded);
        });

        res.send(table)

    } catch (error) {

        res.send(error)

    }
}


UserWrite.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const table = await User.destroy({
            where: {
                id
            }
        })

        //update cache values
        redis_client.flushdb((err, succeeded) => {
            console.log(succeeded);
        });

        res.send(status)

    } catch (error) {

        res.send(error)

    }
}


module.exports = UserWrite;