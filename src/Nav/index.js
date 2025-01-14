import React,{useState} from 'react'
import { Link} from 'react-router-dom';
import {Menu,Button} from 'antd'
import { ProfileOutlined, UserOutlined,LogoutOutlined } from '@ant-design/icons';
import Ava from './Ava'

export default function Nav() {

  const [Email,getEmail]=useState(sessionStorage.getItem('email')?sessionStorage.getItem('email'):'');

  console.log("Session email is "+ sessionStorage.getItem("email"));

  return (
          <Menu mode='horizontal' style={{padding:'1.3%'}}>
          <Menu.Item style={{marginLeft:'40%'}}>
          <Link to='/Portfolio'>Portfolio</Link>
          </Menu.Item>
          <Menu.Item style={{marginLeft:'8%'}}>
          <Link to='/Blog'>Blog</Link>
          </Menu.Item>
          <Menu.Item style={{marginLeft:'8%'}}>
          <Link to='/QA' >Q&A</Link>
          </Menu.Item >
          <Ava/>
          </Menu>

  )
}
