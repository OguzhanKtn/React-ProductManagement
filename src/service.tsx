import axios from "axios";
import { DummyProducts, Product} from "./model/DummyProducts";
import { Admin } from "./model/Admin";

const config = axios.create({
    baseURL : 'https://dummyjson.com/',
    timeout: 15000
})

export const login = (username: string,password: string)=>{

   const sendObj = {
        username : username,
        password : password
    }
    return config.post('auth/login',sendObj)
}

export const allProduct = () =>{
    return config.get<DummyProducts>('products')
}

export const singleProduct = (id:string) =>{
    return config.get<Product>('products/'+id)
}