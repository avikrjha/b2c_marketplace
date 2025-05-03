const dotenv = require("dotenv")
dotenv.config()
module.exports = {
port : process.env.PORT,
MONGO_HOST : process.env.MONGO_HOST,
MONGO_PORT :process.env.MONGO_PORT,
MONGODB_URI :process.env.MONGODB_URI,
DB:process.env.DB,
}