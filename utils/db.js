const mongoose = require("mongoose")
const config = require("../config/setting-dev")
const DBConnections = async () => {
    try {
      console.log('Connecting to MongoDB...')
      const mongoURIs = config.MONGODB_URI
      await mongoose.connect(mongoURIs);
      console.log(`[Info] MongoDB Connection to Database ' ${config.DB} ' Successful!`)
    } catch (error) {
      console.log('🚀 ~ file: DBConnections.js ~ line 40 ~ DBConnections ~ error.lineNumber', error)
      throw error
    }
  }
module.exports = DBConnections