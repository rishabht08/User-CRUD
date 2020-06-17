const express = require("express")
const app = express()
const PORT = process.env.PORT || 6060;

const cors = require("cors");

const routes = require("./routes/routes")
const db = require("./database")




app.use(cors())
app.use(express.json())
app.use("/user",routes)

db.authenticate().then(() => {
 

    app.listen(PORT, () => {
        console.log("DB connection Succesfull")
        console.log("App running on port ", PORT)
    })

}).catch(err => {
    console.log(err)
})







