import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { DistinctStyle,fetchStyles } from '../services/user';
import Card2 from './CardClientInfo';

function FindClient() 
{
    var c1="";
    const [jsonStyle,setStyle] = useState([]); 
    const [jsonAry,setAry] = useState([]);

    useEffect(()=>{
        doFetchCat();
    },[]); 


    const doFetchCat=async()=>{
        const res = await DistinctStyle();
        setStyle(res.data.user);
       };

       const doSearch=async()=>
       {
        if(c1==="")
        {
          alert("Please select a Music Style");
        }
        else 
        {
          const resp = await fetchStyles({c1});
          // alert(JSON.stringify(resp));
          setAry(resp.data);
        }
       }

  return (
    <div>
       <center>
       <h1 className='mt-3'>Find your next team member.</h1>
       </center>
       <Form method="post">
        <Row className='offset-md-4'>
       <Form.Group as={Col} md="4" style={{ margin: "40px" }}>
            <Form.Label>Music Style</Form.Label>
            <select name="musicstyle" required onChange={(e)=>c1= e.target.value}>
              <option value="" disabled selected> Select </option>
              {
                jsonStyle.map((obj)=> <option key={obj} value={obj}>{obj}</option>)
              }
            </select>
          </Form.Group>

          </Row>

          <Row>
          {
            jsonAry.map((obj)=>{
                return(
                    <Card2 key={obj.id} Name={obj.name} Email={obj.email} Mobile={obj.mobile} Experience={obj.exp} MusicStyle={obj.musicstyle} City={obj.city} address={obj.address}></Card2>
                )
            })
          }
          </Row>
          <Button md="1" as={Col} className='offset-md-5 mt-3' variant="primary" onClick={doSearch}>Search</Button>
       </Form>
    </div>
  )
}

export default FindClient;