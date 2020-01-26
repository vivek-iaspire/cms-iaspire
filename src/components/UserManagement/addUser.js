import React, { Component } from 'react';
import Header from '../header'
import './addUser.css'
import { Input, Select , InputNumber,  Cascader, Button } from 'antd';
import 'antd/dist/antd.css';
import { Icon } from 'antd';



const { Option } = Select;




const InputGroup = Input.Group;

const option1 = [
  {
    value: 'Active',
    label: 'Active',
  },
  {
    value: 'Inactive',
    label: 'Inactive',
  },
];

const option2 = [
  {
    value: 'Content Writer',
    label: 'Content Writer',
  },
  {
    value: 'Admin',
    label: 'Admin',
  },
];

class AddUser extends Component {



  state = {
      userName: '',
      emailId: '',
      password: '',
      mobileNumber: '',
      role: '',
      status: '',
      responseStatus: null
  }






  render(){



    const AddUser = (e) => {
      e.preventDefault()




         fetch("http://192.168.29.236:5000/user", {
             method: "POST",
             headers: {
             Accept: "application/json","Content-Type": "application/json"},
             body: JSON.stringify({
             "userName":this.state.userName, "emailId": this.state.emailId, "password": this.state.password, "mobileNumber": this.state.mobileNumber, "roleId": this.state.role,  "status": this.state.status
             })
           }).then(res => {
               if (res.ok) {
                 return res.json();
               } else {
                 throw Error(res.statusText);
               }
             })
             .then(json =>  this.setState({ responseStatus: json.status}))
         .catch( err => console.log(err))
    }

if(this.state.responseStatus == '200'){
  return <div className='container text-center'>
  <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" style={{ "fontSize":"236px", "marginTop": "100px"}}/>
  { this.props.history.push('/userManagement')}
  </div>

}
    return <>
    <Header />
    <div className='container-fluid f1 row justify-content-center'>
     <div className='shadow col-md-5 f2'>

<form>
    <div style={{ marginBottom: 16 }}>

      <Input addonBefore="User Name"  defaultValue="" onChange={ e => this.setState({ userName: e.target.value })} value={this.state.userName} />
    </div>

    <div style={{ marginBottom: 16 }}>
      <Input addonBefore="Email ID"  defaultValue="" onChange={ e => this.setState({ emailId: e.target.value })} value={this.state.emailId}/>
    </div>


    <div style={{ marginBottom: 16 }}>
      <Input addonBefore="Password"  defaultValue="" onChange={ e => this.setState({ password: e.target.value })} value={this.state.password}/>
    </div>


    <div style={{ marginBottom: 16 }}>
      <Input addonBefore="Mobile Number"  defaultValue="" onChange={ e => this.setState({ mobileNumber: e.target.value })} value={this.state.mobileNumber}/>
    </div>

   <div style={{  marginBottom: 16 }}>
   <Select
     showSearch
     style={{ width: "100%"}}
     placeholder="Select Role"
     optionFilterProp="children"
     onChange={(value) =>    this.setState({ role: value }) }

     filterOption={(input, option) =>
       option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
     }
   >
     <Option value="1">Content Writer</Option>
     <Option value="2">Admin</Option>

   </Select>
   </div>



   <div style={{  marginBottom: 16 }}>
   <Select
     showSearch
     style={{ width: "100%" }}
     placeholder="Select Status"
     optionFilterProp="children"
     onChange={(value) =>    this.setState({ status: value }) }

     filterOption={(input, option) =>
       option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
     }
   >

     <Option value="Active">Active</Option>
     <Option value="Inactive">Inactive</Option>
   </Select>
   </div>




    <Button block className='f3' onClick={AddUser}>Create</Button>
    </form>

    </div>
    </div>
    </>
  }
}

export default AddUser;
