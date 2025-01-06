import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  id: String,
  date: {type: Date, default: Date.now},
  name: String,
  surname: String,
  email: String,
  phone: String,
  password: String,
  birthdaydate: Date,
  roles: [],
  departments: [],
  approved: { type: Boolean, default: false },
  isAllowedForApproval: { type: Boolean, default: false },
  emp_id :{ type: String, default: "XXXXXX" },
  isRemoved: { type: Boolean, default: false },
   
  auth: {
    email : {
      valid : { type: Boolean, default: false }
    },
    facebook: {
      userid: String
    },
    gmail: {
      userid: String
    }
  },
  settings: {
  },
  photos: {
    profilePic: {}, //{ type:  mongoose.Schema.Types.ObjectId , ref: 'PhotoSchema'}
    gallery: [] //[{type:  mongoose.Schema.Types.ObjectId , ref: 'PhotoSchema'}]
  }
});