import React, { Component } from 'react'
import { Link, Navigate,useHistory} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import useToken from '../useToken';
import dropdown from './dropdown';
import drop from './dropdown';
import sdrop from './sdrop';
import useEmail from '../useEmail';
import { toBeEnabled } from '@testing-library/jest-dom/dist/matchers';
import logo from '../images/Logo.png'

export default function Nav() {

  
  const { token, setToken } = useToken();
  const {Em, setEm} = useEmail();

  console.log(token);

    return (
        <div>
        <div style={{background: '#141414', height: '20%',display:'flex'}}>
        
                
        {/* <h1 style={{fontFamily:'Arial',color:'white'}}>LinkHub</h1> */}<div style={{background:`url(${logo})`,width:'165px',height:'50px',margin:'15px'}}>
        {/* <Link to='/' style={{fontFamily:'Arial',color:'white',background:{logo},width:'20%',height:'20%'}}></Link> */}
        </div>
        
        <div style={{padding:'2% 20% 2% 8%',width:'70%'}}> 



        <drop/>
        <sdrop/>

        <Link to='/Template' style={{color: 'white',display:'inline',paddingLeft:'30%'}}>Template</Link>
        <Link to='/Blog' style={{color: 'white',display:'inline',paddingLeft:'10%'}}>Blog</Link>
        <Link to='/Price' style={{color: 'white',display:'inline',paddingLeft:'10%'}}>Price</Link>
        <Link to='/Help' style={{color: 'white',display:'inline',paddingLeft:'10%',paddingRight:'16%'}}>Help</Link>
       </div>
        <div style={{color:'white',marginRight:'8%',borderRadius:'20px', background:'grey',width:'40px',height:'40px',padding:'0.4%',marginTop:'1.5%'}}>{token?token.charAt(0):"NA"}</div>
        <button style={{ background:'grey',marginTop:'1.5%',height:'2%'}} onClick={() => {localStorage.clear(); sessionStorage.clear();
          window.location.reload(false);
        }}>LogOff</button>
        <FaBars style={{color: 'white',float:'right',marginLeft:'8%'}}/>
        </div>
        </div>
    )
  
}
