import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import { singleProduct } from '../service'
import { Product } from '../model/DummyProducts'
import { Admin } from '../model/Admin'

function Detail() {
    const params = useParams()
    const id = params.id
    const navigate = useNavigate()

   const [item, setItem] = useState<Product>()
   const [bigImage, setBigImage] = useState('')
   
    useEffect(() => {
      if(id){
        singleProduct(id).then(res =>{
         setItem(res.data)
         setBigImage(res.data.images[0])
        }).catch(err =>{
          navigate('/home')
        })
      }
      
    }, [])

    const [adm,setAdm] = useState<Admin>()

    useEffect(() => {
      const stSession = sessionStorage.getItem('admin')
      var admin:Admin
      if(stSession !== null){
        admin = JSON.parse(stSession) as Admin
        setAdm(admin)
      }
    }, [])
    

    const addBasket = () =>{
      console.log('add basket')
    }
      
  return (
    <>
    {
      item &&
      <>
        <div className="row">
          <div className="col-sm-6">
            <h2>{item.title}</h2>
            <p>Description : {item.description}</p>
            <p>Price : {item.price}$</p>
            <p>Brand : {item.brand}</p>
            <p>Stock : {item.stock}</p>
            <button onClick={addBasket} className='btn btn-danger'><i className="bi bi-cart3"></i> Add Basket</button>
          </div>
          <div className="col-sm-6">
            <img src={bigImage} className='img-fluid img-thumbnail' />
            <div className="row mt-3">
              {item.images.map((item,index)=>
                <div className="col-2" key={index} role='button' onClick={()=>setBigImage(item)}>
                  <img src={item} className='img-thumbnail' />
                </div>
              )}
            </div>
          </div>
        </div>      
      </>
    }
    </> 
  )
}

export default Detail
