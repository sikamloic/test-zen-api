const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true,
  },
  csp: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
})


// UserSchema.statics.isEmailTaken = async function (email, excludeUserId) {
//   const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
//   return !!user;
// };

const User = mongoose.model('User', UserSchema)
module.exports = User