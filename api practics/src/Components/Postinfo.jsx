import { useEffect, useState } from "react";
// import React{ useState, useEffect} from 'react';


function Postinfo() {
    const [data , setData]= useState([]);

    useEffect(()=>{
        fetch("https://api.escuelajs.co/api/v1/products/:id")
        .then((responsive)=>responsive.json())
        .then((data)=>setData(data))
        .catch((error)=>console.error('this is an error during fetch api ',error))

    },[])


    return (
        <div>



        </div>
    );
}

export default Postinfo;