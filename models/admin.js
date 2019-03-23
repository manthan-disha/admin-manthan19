const mongoose = require('mongoose'),
    Schema = mongoose.Schema
    
let AdminSchema = new Schema({
    name: String,
    action: [{
        timestamp: String,
        req: {
            method: String,
            url: String,
            status: String,
            res: String,
        },
        message: String
    }]
})

const admin = module.exports = mongoose.model('admin', AdminSchema)

module.exports = {
    createLog: (req, message, callback) => {
        let data = {
            id: req.id,
            name: req.name
        }
        admin.findOneAndUpdate({})
    },
    getUserByID: (id, callback) => {
        admin.findById(id, callback)
    }
}