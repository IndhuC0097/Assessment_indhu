import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {

    var [output,setOutput] = useState([]);


   // useEffect(()=>{},[]) to see the datas when loading the page
   useEffect(()=>{
    //axios.get("url".then().catch())
axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        console.log(res.data);
        setOutput(res.data)

    }).catch((err)=>{console.log(err);})
        
   },[])
  return (
    <div>
       <Typography variant='h3'>Axios</Typography>
        <TableContainer>
           <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Userid</TableCell>
                    <TableCell>id</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Body</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {output.map((val,i)=>{
                    return(
                        <TableRow key={i}>
                            <TableCell>{val.userId}</TableCell> 
                            <TableCell>{val.id}</TableCell> 
                            <TableCell>{val.title}</TableCell> 
                            <TableCell>{val.body}</TableCell>

                        </TableRow>
                    )

                })}

               
              
            </TableBody> 
           </Table>
        </TableContainer>
      
    </div>
   
  )
}

export default Home
