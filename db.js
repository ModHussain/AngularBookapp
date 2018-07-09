var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
mongoose.connect('mongodb://localhost:27017/bookapp')

exports.mongoose=mongoose;


var BookSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  genre:{
    type: String,
    required: true
  },
  description:{
    type: String
  },
  author:{
    type: String,
    required: true
  },
  publisher:{
    type: String
  },
  pages:{
    type: String
  },
  createDate: {
    type: Date,
    default: Date.now
  }
},
{strict:false}
)

exports.Book = mongoose.model('Books',BookSchema,'Books');

var userSchema = mongoose.Schema({
  name:String,
  email:String,
  password:String,
  phoneno:String,
  createDate: {
    type: Date,
    default: Date.now
  }
})

userSchema.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};


userSchema.validPassword = function (password) {
  return bcrypt.compareSync(password, this.local.password);
};

exports.User = mongoose.model('User',userSchema,'users');