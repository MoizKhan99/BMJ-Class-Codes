const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// https://github.com/MOHAMMADArsalan/SalemanApp_ng02
// https://github.com/MOHAMMADArsalan/ExpressJS
// https://github.com/timofonic-otherdevstuff/ebooks-1/blob/master/Express%20in%20Action.pdf
const bcryptRound = 5;

const Schema = mongoose.Schema;
// https://www.youtube.com/watch?v=SnoAwLP1a-0

const userSchema = new Schema({
  firstName: { type: String, minlength: 3 },
  lastName: { type: String },
  email: { type: String, required: [true, "Email address is required"] },
  age: { type: Number, min: 10 },
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  password: { type: String, required: [true, "Password filed is required"] },
});

userSchema.pre("save", function (next) {
  console.log("pre hook");
  if (!this.isModified("password")) {
    next();
    return;
  }
  // $2b$10$t8HPc/l5nUHETTofCpfxHOCChemI/N6xcIvOVyaEL/F7aKlSksh.O
  // $2b$10$RlQ8dMHKspz58r4P4k9MZuo7kbgGld5Ib5HAjjAb2ultZB9GgGrce
  bcrypt.genSalt(bcryptRound, (err, salt) => {
    bcrypt.hash(this.password, salt, (err, hash) => {
      this.password = hash;
      console.log(hash, err);
      next();
    });
  });
});


userSchema.set('toJSON', {
    transform: (doc, ret, opt) => {
        delete ret.password;
        return ret;
    }
})
const userModel = mongoose.model("Users", userSchema);

//
module.exports = userModel;
