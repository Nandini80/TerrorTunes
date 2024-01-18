var BandSchema = require("../modal/band.schema");
var BandColRef = BandSchema();
var path = require("path");

async function SaveProfile(req,resp)
{
   var obj = new BandColRef(req.body);
   console.log(req.body);

   await obj.save().then((doc)=>{
    resp.send("Saved Successfullyyy!!");
   }).catch((err)=>{
    resp.send(err);
   });
}

async function updateProfile(req,resp)
{
  const {email,mobile,name,state,city,address,exp,musicstyle,members} = req.body;
  const data ={name,mobile,state,city,address,exp,musicstyle,members};

  await BandColRef.updateOne({email},{$set:data }).then((result)=>{
    resp.send("Data updated");
  }).catch((err)=>{
    resp.send(err);
  }); 
};

async function fetchProfile(req,resp)
{
  console.log(req.query);
  await BandColRef.findOne({email:req.query.email}).then((doc)=>{
    resp.send(doc);
  }).catch((err)=>{
    resp.send(err.message);
  });
};

async function distServices(req,resp)
   {
      try{
       const user = await Promise.all([ BandColRef.distinct("musicstyle"), BandColRef.distinct("city") ]);
       resp.json({user,status:true});
       return;
      }
      catch(err)
      {
        resp.status(500).json({message:"Something went wrong",status:false});
        console.log(err);
      }
  };

  async function fetchBands(req,resp)
  {
    console.log(req.body);
    await BandColRef.find({city : req.body.c1,musicstyle : req.body.c2}).then((res)=>{
      resp.send(res);
    }).catch((e)=>{
      console.log(e);
    })
  };

module.exports ={SaveProfile,updateProfile,fetchProfile,distServices,fetchBands};