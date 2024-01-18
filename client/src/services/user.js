//Like node controller
import publicReq, { privateReq } from "./axios-config";

const signupservice =(data)=>
{
    return publicReq.post("/user/Signup",data);
}; 

const getUserService=()=>{
    return privateReq.get("/user/CurrentUser");
};

const DistinctCategories =()=>
{
    return publicReq.get("/band/distinct-cat");
}; 

const fetchBands=(data)=>{
    return privateReq.post("/band/fetchBands",data);
};

const DistinctStyle =()=>
{
    return publicReq.get("/person/distinct-style");
}; 

const fetchStyles=(data)=>{
    return privateReq.post("/person/fetchStyles",data);
};

export {};

export {getUserService,signupservice,DistinctCategories,fetchBands,DistinctStyle,fetchStyles};