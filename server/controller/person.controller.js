var PersonSchema = require("../modal/person.schema");
var PersonColRef = PersonSchema();
var path = require("path");

async function SaveProfile(req,resp)
{
   var obj = new PersonColRef(req.body);
   console.log(req.body);

   await obj.save().then((doc)=>{
    resp.send("Saved Successfullyyy!!");
   }).catch((err)=>{
    resp.send(err);
   });
}

async function updateProfile(req,resp)
{
  const {email,mobile,name,state,city,address,musicstyle,exp} = req.body;
   const data ={name,mobile,state,city,address,exp,musicstyle};

  await PersonColRef.updateOne({email},{$set:data }).then((result)=>{
    resp.send("Data updated");
  }).catch((err)=>{
    resp.send(err);
  }); 
};

async function fetchProfile(req,resp)
{
  console.log(req.query);
  await PersonColRef.findOne({email:req.query.email}).then((doc)=>{
    resp.send(doc);
  }).catch((err)=>{
    resp.send(err.message);
  });
};

async function distStyle(req,resp)
   {
      try{
       const user = await PersonColRef.distinct("musicstyle");
       resp.json({user,status:true});
       return;
      }
      catch(err)
      {
        resp.status(500).json({message:"Something went wrong",status:false});
        console.log(err);
      }
  };

  async function fetchStyles(req,resp)
  {
    console.log(req.body);
    await PersonColRef.find({musicstyle : req.body.c1}).then((res)=>{
      resp.send(res);
    }).catch((e)=>{
      console.log(e);
    })
  };

module.exports ={SaveProfile,updateProfile,fetchProfile,distStyle,fetchStyles };