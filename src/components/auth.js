import React, { Component } from 'react';
import './auth.css';
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom'


class Auth extends Component{

  state = {
    username: '',
    password: ''
  }

  render(){
    return <div className='a1 text-center'>
      <div className='row col justify-content-center text-center'>

      <div className='col-md-4'>
        <img src='https://pdfdoctor.com/assets/assets/doctor.8e947e82792e54bade6977bbf9e49262.png' />
      </div>

      <div className='col-md-4 shadow a2'>
            <h1 className='a3'>IAspire.tech</h1>
                <Input  size="large" placeholder="Username"  style={{ marginTop: "10px"}} onChange={(e) => this.setState({ username: e.target.value})} value={this.state.username}/>
                 <Input size="large" placeholder="Password" type='password'  style={{ marginTop: "5px"}} onChange={(e) => this.setState({ password: e.target.value })}  value={this.state.password}/>
                 <Link to='/seoTemplate'><Button className='a10 ' type=''>LOGIN</Button> </Link>

     </div>

      </div>
      
    </div>
  }
}

export default Auth;
