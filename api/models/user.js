const mongoose = require('mongoose')

/**
 * NOTE: This fix the following deprecation warning:
 * (node:8484) DeprecationWarning: collection.ensureIndex is deprecated. 
 * Use createIndexes instead.
 */
mongoose.set('useCreateIndex', true)
/******************************************************************************/

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String, 
    require: true,
    unique: true,
    // Regular expresion for email validation
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ 
  },
  password: {type: String, require: true}
})

module.exports = mongoose.model('User', userSchema)
