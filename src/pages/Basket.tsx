import React, { useEffect, useState } from "react";
import { Product } from "../model/DummyProducts";
import { singleProduct } from "../service";

function Basket() {
  const [productStrings, setProductStrings] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const basket = localStorage.getItem("basket");
    if (basket) {
      const parsedBasket: string[] = JSON.parse(basket) as string[];
      setProductStrings(parsedBasket);
    }
  }, []); 

  useEffect(() => {
    const currentProducts = Object.assign([], products);
    const asyncCallback = async () => {
      for (let productStr of productStrings) {
        try {
          const product = await singleProduct(productStr);
          currentProducts.push(product.data);
        } catch (err: any) {
          console.error(err.message);
        }
      }

      setProducts(currentProducts);
    };

    asyncCallback();
  }, []);

  const fncDelete = (index: number) => {
    const newArr = Object.assign([], productStrings) 
    newArr.splice(index, 1)
    setProductStrings(newArr)
    localStorage.setItem("basket", JSON.stringify(newArr))
}

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Price</th>
            <th scope="col">Amount</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td>
                <div className="col-2">
                  <img src={item.images[0]} className="img-thumbnail" />
                </div>
              </td>
              <td>{item.brand}</td>
              <td>{item.price}$</td>
              <td>{item.stock}</td> 
              <td>
              <button className="btn btn-sm btn-danger" onClick={ () => fncDelete(index)} role='button'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Basket;
