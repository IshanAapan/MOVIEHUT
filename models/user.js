        import mongoose, { mongo } from "mongoose"
        const user_schema=new mongoose.Schema({
            name:{
                type:String,
                required: true,
                // unique: true,
            },
            email:{
                type:String,
                required:true,
            },
            pass:{
                type:String,
                required:true,
            },
            reviews:[{type:mongoose.Schema.Types.ObjectId,ref:"reviews"}],
        });
        const users=mongoose.model("users",user_schema);
        export default users;