import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState(""); 
    const navigate = useNavigate()
    useEffect(()=>{
        const auth = localStorage.getItem("user");
        if(auth){
            navigate("/");
        }
    })
const loginData = async () => {
    console.log(email,password);
    let result = await fetch("http://localhost:5000/login",{
        method:"post",
        body:JSON.stringify({email,password}),
        headers:{
            "Content-Type":"application/json"
        }
    });
    result = await result.json();
    console.log(result)
    if(result.name){
        localStorage.setItem("user",JSON.stringify(result));
        navigate("/");
    }else{
        alert("Please Enter correct details...")
    }
}
    return(
        <div className="resister">
            <h3>Login <b style={{color:"skyBlue"}}>Here</b> </h3><hr/>
        <input className="inputBox" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
        <input className="inputBox" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
        <button className="add1" onClick={loginData}>Login</button>
        </div>
    )
}
export default Login;