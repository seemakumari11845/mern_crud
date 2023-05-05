import React from 'react';
import { Link,useNavigate} from 'react-router-dom';
import '../styles/header.css';

export default function Header(){
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout=()=>{
    //console.log('apply');
    localStorage.clear();
    navigate('/signup');
  }
  
  return(
    <>
    <img alt='logo' className='logo' src='https://res.cloudinary.com/hevo/images/f_auto,q_auto/v1646050731/hevo-learn/Crud-Operations-with-MongoDB_thumbnail1/Crud-Operations-with-MongoDB_thumbnail1.png?_i=AA'/>
    { auth ?
    <ul className='nav-ul'>
      
        <li><Link to="/" >Product</Link></li>
        <li><Link to="/add" >Add Product</Link></li>
        <li><Link to="/update/:id" >Update Product</Link></li>
        <li><Link to="/about" >About Me</Link></li>
        <li><Link to="/signup" onClick={logout} >Logout ({JSON.parse(auth).name})</Link></li>
        {/* <li>{auth ? <Link to="/signup" onClick={logout} >Logout</Link> : <Link to="/signup" >Sign Up</Link> }</li> */}    
        {/* <li><Link to="/login" >Login</Link></li> */}
        {/* {
          auth ? 
          :<>
          
          </>
        } */}
    </ul>
    :
    <ul className='nav-ul nav-right'>
      <li><Link to="/signup" >Sign Up</Link></li>
          <li><Link to="/login" >Login</Link></li>
    </ul>
}
    </>   
  )
}