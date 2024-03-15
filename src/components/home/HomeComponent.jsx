import React, { useEffect, useState } from 'react'
import NavbarComponent from './../NavbarComponent';
import CardComponent from './card/CardComnent';
import FooterComponent from '../FooterComponent';

// type productss = {
//     id: number,
//     name: string,
//     price: number,
//     image: string,
//     description: string,
//     category: string,
//     brand: string,
//     stock: number,
//     rating: number

// }

export  const HomeComponent = () =>  {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        try{
            async function fetchData(){
                const fetchProduct = await fetch('https://fakestoreapi.com/products');
                const response = await fetchProduct.json();
                console.log("this is fetch data valuse : ",response);
               }
               fetchData();
        }catch(error){
            console.log(error);
        }finally{
            loading = false;
        };
        
    }, []);
     
  return (
    <div>
      <NavbarComponent/>
      <CardComponent/>
      <FooterComponent/>
    </div>
  )
}

export default HomeComponent;