import React, { Component } from 'react';
import Header from '../header'
import './content.css';
import { Link } from 'react-router-dom'

class Content extends Component {
  render(){
    return <>
    <Header />
    <div className='container text-center'>
    <div className='card e1 container'>

 <Link to='/createContent'>
    <button className='btn   text e2 col-md-11'> Create Content </button>
</Link>

<div className='e3'>

  </div>
    </div>
    </div>
    </>
  }
}

export default Content;
