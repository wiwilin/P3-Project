import React, { Component } from 'react'
import MyVideo from '../videos/video.mp4'
import Nav from './Nav'
import {MdArrowForward,MdKeyboardArrowRight} from 'react-icons/md';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
        <div style={{bottom:'0'}}>
      {/* <div style={{backgroundImage: 'linear-gradient(#2D3333,#0D0E0E)'}}> */}
     <Nav/>
      <video
          //style={{bottom:'0',background:'black'}}
          src={MyVideo}
          muted
          autoPlay={"autoplay"}
          preLoad="auto" 
          loop
        > Your Browser Does Not support Video Play</video>
        <div style={{top:'200px', left:'600px', position:'fixed'}}>
      <h1 style={{color:'white',fontSize:'40pt',fontFamily:'Arial'}}>LinkHub Made Easy</h1>
      </div>
      <div style={{top:'400px', left:'500px', position:'fixed'}}>
      <h1 style={{color:'white',fontSize:'30pt',fontFamily:'Arial'}}>&nbsp;&nbsp;Sign up to get a connection today and <br/>share your porfile towards next opportunity </h1>
      </div>
      <div style={{top:'670px',left:'760px', position:'fixed',height:'60px',width:'115px',background:'#01BF71',padding:'12px',borderRadius:'15px'}}>
      <Link to='/SignUp'>Get Started<MdArrowForward/></Link>
      </div>
      <div style={{background:'black',bottom:'0',height:'200px'}}>
      </div>
      </div>
    )
  }
}