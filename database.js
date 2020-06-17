
const Sequelize = require("sequelize");
const envVar = require("./config/envVar")
envVar();
// const {Table,Customers} = require('./Models/Table')
 
// const db = new Sequelize("d1one3ejodv1cp", "qmsyvhuwhacrvf", "2322c6e6561c9f04e08c715b04210a8cfaa9c3d5381decb4b15879a477588bfb" , {
//  host: "ec2-3-91-139-25.compute-1.amazonaws.com",
//  dialect: "postgres",
//  port: 5432
// });

// psql -h postgresql-9165-0.cloudclusters.net -p 9165 -U <UserName> -d <dbname>


const db = new Sequelize(process.env.DB_NAME , process.env.DB_USERNAME, process.env.DB_PASSWORD , 
{
    host: "localhost",
    dialect: "postgres"
   });






module.exports = db;