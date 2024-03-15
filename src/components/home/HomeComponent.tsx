import React, { useEffect, useState } from 'react'
import CardComponent from './card/CardComnent';
import LoadingComponent from './../loading/LoadingComponent';

// export type Productss = {
//     readonly id?: number,
//     title: string,
//     description: string,
//     image: string,
// }

export  const HomeComponent = () =>  {
    // const [getProducts, setGetProducts] = useState<Productss []>();
    // const [isLoading, setLoading] = useState(false);
    // useEffect(() => {
    //     setLoading(true);
    //     try{
    //         async function fetchData(){
    //             const fetchProduct = await fetch('https://fakestoreapi.com/products');
    //             const response = await fetchProduct.json();
    //             setGetProducts(response);
    //             console.log("this is fetch data valuse : ",response);
    //            }
    //            fetchData();
    //     }catch(error){
    //         console.log(error);
    //     }finally{
    //         setLoading (false)
    //     };
        
    // }, []);
     
  return (
    <>
      {/* {
        isLoading?<LoadingComponent/>
        :
        <div className='mx-auto'>
          <div className='grid grid-cols-4  ms:grid-cols-2 md:grid-cols-4  gap-5 md:gap-3 lg:gap-4 my-10 px-2 md:px-5 lg:px-0'>
       { 
       getProducts?.map((product) => (

          <CardComponent 
          key={product.id} 
          image={product.image}
           title={product.title} 
           description={product.description}
           />
        ))}
          </div>
          </div>
} */}
    </>    
  )
}

export default HomeComponent;