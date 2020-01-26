import React, { Component } from 'react';
import Header from '../header'
import './userManagement.css'
import { Link } from 'react-router-dom'
import { Button } from 'antd';
import { Icon } from 'antd';

class UserManagement extends Component{

  state = {
   data: []
}


  componentDidMount(){
    fetch("http://192.168.29.236:5000/user").then(res => {
              if (res.ok) {
                return res.json();
              } else {
                throw Error(res.statusText);
              }
            })
            .then(json => this.setState({ data: json }))
        .catch( err => console.log(err))




  }

  SeeDetails = () => {
  const Data = this.state.data.map((customer) => {
      return <>
      <tr>
        <td>{customer.id}</td>
        <td>{customer.userName}</td>
        <td>{customer.mobileNumber}</td>
        <td>{customer.roleId}</td>
        <td>{customer.status}</td>
        <td>{customer.createdAt}</td>
        <td><Link to='/editUser'><Button>Edit</Button></Link></td>
      </tr>
      </>
  })
  return Data;
  }

  render(){
    console.log(this.state.data)
    return <div className=''>
    <Header />
    <div className='container text-center'>
    <div className='card d1 container'>

 <Link to='/addUser'>
    <button className='btn   text d2 col-md-11'> ADD USER  </button>
</Link>

<div className='d3'>
    <table>
    <tr>
      <th className='thh'>id</th>
      <th className='thh'>User Name</th>
      <th className='thh'>Mobile Number</th>
      <th className='thh'>Role</th>
      <th className='thh'>Status</th>
      <th className='thh'>Created at</th>
      <th className='thh'>Action</th>

    </tr>
    {this.SeeDetails()}
  </table>
  </div>
    </div>
    </div>
    </div>
  }
}

export default UserManagement;
