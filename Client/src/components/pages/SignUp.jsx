import React,{useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import '../styles/signup.css';

const SignUp = () => {
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate("");

    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
          navigate('/');
        }
      },[])
    
    const collectData= async ()=>{
        console.log({name,email,password})
        let result = await fetch("http://localhost:5000/resister",{
            method:'POST',
            body:JSON.stringify({name,email,password}),
            headers:{"Content-Type":"application/json"}
        });
           result =  await result.json()
           console.log(result);
           if(result){
            localStorage.setItem('user',JSON.stringify(result));
            navigate('/')
           }
    }
    return (
        <div className="resister">
        <h3>Resister <b style={{color:"skyblue"}}>Here</b></h3><hr className="a"/>
        <input className="inputBox" type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Your Name" />
        <input className="inputBox" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Your Email" />
        <input className="inputBox" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Your Password"  />
        <button type="button" onClick={collectData} className="singbtn">Sign Up</button>
        </div>

    )
}
export default SignUp;