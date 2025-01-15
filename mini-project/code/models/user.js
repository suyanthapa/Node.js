
import { model, Schema } from "mongoose";

const userSchema = new Schema ({
  username:{
       type: string,
       required: true
  },
  email:{
    type: string,
    required: true
  },
  password:{
    type: string,
    required: true
  }
}, { timestamps: true })


const user = model( "user", userSchema);

export { user} 