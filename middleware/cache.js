const redis = require("redis")
const PORT_REDIS = process.env.PORT || 6379;
const redis_client = redis.createClient(PORT_REDIS);

module.exports = checkCache = (req, res, next) => {


    //get data value for key =id
    redis_client.get("users", (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        //if no match found
        if (data != null) {

            res.send(data);
        }
        else {

            next();
        }
    });
};