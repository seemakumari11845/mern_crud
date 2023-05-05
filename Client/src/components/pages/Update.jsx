import React,{useState,useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";

export default  function Update(){
    const[name,setName] = useState("");
    const[price,setPrice] = useState("");
    const[category,setCategory] = useState("");
    const[company,setCompany] = useState("");
    const navigate = useNavigate("");
    const params = useParams(); 

    useEffect(()=>{
       //console.log(params);
        getProductDetails();
    },[]);
    const getProductDetails = async ()=>{
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }
    const updateProduct = async () =>{
        console.log({name,price,category,company})
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            method:"put",
            body:JSON.stringify({name,price,category,company}),
            headers:{"Content-Type":"application/json"}
        });
        result = await result.json()
        console.log(result);
        navigate('/')
    }

    return(
        <div className="resister">
            <h3>Update <b style={{color:"skyblue"}}>Product</b> </h3><hr/>
            <input type="text" className="inputBox" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Your Product Name" />
            <input type="text" className="inputBox" value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder="Enter Your Product Price" />
            <input type="text" className="inputBox" value={category} onChange={(e)=>{setCategory(e.target.value)}} placeholder="Enter Your Product Category" />
            <input type="text" className="inputBox" value={company} onChange={(e)=>{setCompany(e.target.value)}} placeholder="Enter Your Product Company" />
            <button type="button" onClick={updateProduct}  className="add">Update</button>
        </div>
    )
}