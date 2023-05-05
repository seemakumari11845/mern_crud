import React,{useState} from "react";

export default  function AddProduct(){
    const[name,setName] = useState("");
    const[price,setPrice] = useState("");
    const[category,setCategory] = useState("");
    const[company,setCompany] = useState("");
    const[error,setError] = useState(false);

    const addProduct= async ()=>{
        console.log(!name)
        if(!name || !price || !category || !company){
            setError(true)
        return false;
        }
        console.log({name,price,category,company})
        const userId = JSON.parse(localStorage.getItem('user'))._id;
       const result =await fetch('http://localhost:5000/add-product',{
        method:"post",
        body:JSON.stringify({name,price,category,company}),
        headers:{
            "Content-Type":"application/json"
        }
       });
       result = await result.json();
       console.log(result);

    }
    return(
        <div className="resister">
            <h3>Add <b style={{color:"skyblue"}}>Products</b> </h3><hr/>
            <input type="text" className="inputBox" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Your Product Name" />
            {error && !name && alert("Enter valid name")}
            <input type="text" className="inputBox" value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder="Enter Your Product Price" />
            {error && !price && alert("Enter valid price")}
            <input type="text" className="inputBox" value={category} onChange={(e)=>{setCategory(e.target.value)}} placeholder="Enter Your Product Category" />
            {error && !category && alert("Enter valid category")}
            <input type="text" className="inputBox" value={company} onChange={(e)=>{setCompany(e.target.value)}} placeholder="Enter Your Product Company" />
            {error && !company && alert("Enter valid company")}
            <button type="button" onClick={addProduct} className="add">Add Products</button>
        </div>
    )
}