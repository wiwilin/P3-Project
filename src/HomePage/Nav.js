import React, { Component } from 'react'
import { Link, Navigate,useHistory} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import useToken from '../useToken';
import dropdown from './dropdown';
import drop from './dropdown';
import sdrop from './sdrop';
import useEmail from '../useEmail';
import { toBeEnabled } from '@testing-library/jest-dom/dist/matchers';

export default function Nav() {

  
  const { token, setToken } = useToken();
  const {Em, setEm} = useEmail();

    return (
        <div>
        <div style={{background: 'black', height: '20%',padding:'2% 20% 2% 8%',display:'flex'}}>
        {/* <h1 style={{fontFamily:'Arial',color:'white'}}>LinkHub</h1> */}
        <Link to='/' style={{fontFamily:'Arial',color:'white'}}>LinkHub</Link>
        <drop/>
        <sdrop/>
        <Link to='/Template' style={{color: 'white',display:'inline',paddingLeft:'30%'}}>Template</Link>
        <Link to='/Blog' style={{color: 'white',display:'inline',paddingLeft:'10%'}}>Blog</Link>
        <Link to='/Price' style={{color: 'white',display:'inline',paddingLeft:'10%'}}>Price</Link>
        <Link to='/Help' style={{color: 'white',display:'inline',paddingLeft:'10%',paddingRight:'16%'}}>Help</Link>
        <div style={{color:'red',paddingRight:'4%'}}>{token}</div>
        <button style={{ background:'grey'}} onClick={() => {localStorage.clear(); sessionStorage.clear();
          window.location.reload(false);
        }}>LogOff</button>
        <FaBars style={{color: 'white'}}/>
        </div>
        </div>
    )
  
}