import { model, Schema } from "mongoose"


const membersSchema = new Schema({

userId:{
     type: String,
},
groupId:{
  type: String,
},

seenMessageID:{
  type: [String],
  default: []
}
},{
  timestamps:true
})


const groupMember = model("groupMember",membersSchema );
export default groupMember;
