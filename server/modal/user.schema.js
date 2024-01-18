var mongoose = require("mongoose");
function GetReactUserschema()
{
    var SchemaClass = mongoose.Schema;
    var colSchema = new SchemaClass({
        email: {type:String,required:true,unique:true,index:true}, 
        pass:String,
        desig:String,
        dos:{type:Date,default:Date.now},
    },{
        versionKey:false 
    });
    
    var userColRef= mongoose.model("User",colSchema);
    return userColRef;
};
module.exports=GetReactUserschema;