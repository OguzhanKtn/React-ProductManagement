import React, { useEffect, useState } from "react";
import { Product } from "../model/DummyProducts";
import { singleProduct } from "../service";

function Basket() {

  const [proArr, setProArr] = useState<string[]>([])
  const [prd, setPrd] = useState<Product[]>([])
  useEffect(() => {
   const stArr = localStorage.getItem("basket")
   if(stArr){
    const arr:string[] = JSON.parse(stArr) as string[]
    setProArr(arr)
   }
  }, [])
  
useEffect(() => {
  var arr:Product[] = []
 { proArr.map((item,index)=>
  singleProduct(item).then(res=>{
    arr.push(res.data)
  })
  
  )}
 setPrd(arr)
}, [])



  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Product Price</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {
            prd.map((item,index) => (
              <tr>
                <td>{item.brand}</td>
                <td>{item.price}</td>
                <td>{item.stock}</td>
              </tr>

            ))      
          }           
          
        </tbody>
      </table>
    </>
  );
}

export default Basket;
