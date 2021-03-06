import validator from 'validator';
import mongoose from '../mongoose-connection';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 8,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'Email {VALUE}  should be of proper valid format'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  name: {
    type: String,
    required: true
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
});

const User = mongoose.model('User', UserSchema);

// module.exports = { User };
export default User;
