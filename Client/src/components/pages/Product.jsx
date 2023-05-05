import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";

 const Product = ()=>{
    const[product,setProduct] = useState([]);
    useEffect(()=>{
        getProduct();
    },[]);
    const getProduct = async ()=>{
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setProduct(result);
    }
    console.log(product)

    const deleteProduct = async (id)=>{
        //console.warn(id)
        let result = fetch(`http://localhost:5000/product/${id}`,{
            method:"DELETE",
        });
        result = await result.json()
        if(result){
            setProduct()
        }
    }
const editProduct = async (id)=>{
        console.log(id)
    }
    return(
        <div className="product-list">
        <h1>Product List</h1><hr/>
            <ul>
                <li>S.No</li>
                <li>Product Name</li>
                <li>Product Price</li>
                <li>Product Category</li>
                <li>Product Company</li>
                <li>Delete || Edit</li>
            </ul>
            {
                
                product.map((item,index)=>
                    <ul key={item._id}>
                        <li>{index+1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.company}</li>
                        <li><button onClick={()=>deleteProduct(item._id)} >Delete</button>&nbsp;&nbsp;&nbsp;
                        <Link to={"/update/"+item._id}>Edit</Link>
                        </li>
                    </ul>
                )
            }
        </div>
    )
}
export default Product;