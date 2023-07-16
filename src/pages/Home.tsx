import React, { useEffect, useState } from "react";
import { allProduct } from "../service";
import { Product } from "../model/DummyProducts";
import { NavLink } from "react-router-dom";

function Home() {
  const [arr, setArr] = useState<Product[]>([]);

  useEffect(() => {
    allProduct()
      .then((res) => {
        setArr(res.data.products);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <h2>Product</h2>
      <div className="row">
        {arr.map((item, index) => (
          <div className="col-sm-3" key={index}>
            <div className="card">
              <img
                src={item.thumbnail}
                style={{ height: 200 }}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.category}</p>
                <p className="card-text">{item.price}$</p>
                <NavLink to={"/detail/" + item.id} className="btn btn-primary">
                  Detail
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
