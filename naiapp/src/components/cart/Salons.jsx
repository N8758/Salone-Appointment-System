import React, { useEffect, useState } from 'react'
import CustomSalonCard from './CustomSalonCard'
import {Row,Col} from 'react-bootstrap'
import axios from 'axios';
export const Salons = () => {

    
    // const salons=[
    //     {name:"Prabhat Salon",location:"Sangamner",price:"150",qlty:"Premium",img:"https://lh3.googleusercontent.com/p/AF1QipM_dxlayI1v7NkXBuDcnztSYaezdyr9rJkgE3-W=s680-w680-h510"},
    //     {name:"Prabhat Salon",location:"Sangamner",price:"150",qlty:"Premium",img:"https://lh3.googleusercontent.com/p/AF1QipM_dxlayI1v7NkXBuDcnztSYaezdyr9rJkgE3-W=s680-w680-h510"},
    //     {name:"Prabhat Salon",location:"Sangamner",price:"150",qlty:"Premium",img:"https://lh3.googleusercontent.com/p/AF1QipM_dxlayI1v7NkXBuDcnztSYaezdyr9rJkgE3-W=s680-w680-h510"},
    //     {name:"Prabhat Salon",location:"Sangamner",price:"150",qlty:"Premium",img:"https://lh3.googleusercontent.com/p/AF1QipM_dxlayI1v7NkXBuDcnztSYaezdyr9rJkgE3-W=s680-w680-h510"},
    //     {name:"Prabhat Salon",location:"Sangamner",price:"150",qlty:"Premium",img:"https://lh3.googleusercontent.com/p/AF1QipM_dxlayI1v7NkXBuDcnztSYaezdyr9rJkgE3-W=s680-w680-h510"},
    //     {name:"Prabhat Salon",location:"Sangamner",price:"150",qlty:"Premium",img:"https://lh3.googleusercontent.com/p/AF1QipM_dxlayI1v7NkXBuDcnztSYaezdyr9rJkgE3-W=s680-w680-h510"},
    //     {name:"Prabhat Salon",location:"Sangamner",price:"150",qlty:"Premium",img:"https://lh3.googleusercontent.com/p/AF1QipM_dxlayI1v7NkXBuDcnztSYaezdyr9rJkgE3-W=s680-w680-h510"},
    //     {name:"Prabhat Salon",location:"Sangamner",price:"150",qlty:"Premium",img:"https://lh3.googleusercontent.com/p/AF1QipM_dxlayI1v7NkXBuDcnztSYaezdyr9rJkgE3-W=s680-w680-h510"},
    //     {name:"Prabhat Salon",location:"Sangamner",price:"150",qlty:"Premium",img:"https://lh3.googleusercontent.com/p/AF1QipM_dxlayI1v7NkXBuDcnztSYaezdyr9rJkgE3-W=s680-w680-h510"},
    //     {name:"Prabhat Salon",location:"Sangamner",price:"150",qlty:"Premium",img:"https://lh3.googleusercontent.com/p/AF1QipM_dxlayI1v7NkXBuDcnztSYaezdyr9rJkgE3-W=s680-w680-h510"},
    // ]

    const [salons,setSalons]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/salon/getsalons').then((res)=>{
            console.log(res.data.data.salons);
            if (res.status === 200) {
               setSalons(res.data.data.salons)
            } 
        }

        ).catch((error)=>{
            alert(error);
        });
    },[])
  return (
    <Row>
        {
            salons.map((salon)=>{
                return(
                    <Col md="4">
                    <CustomSalonCard data={salon}/>
                    </Col>
                )
            })
        }
       
    </Row>
    
  )
}
