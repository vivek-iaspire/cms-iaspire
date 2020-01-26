import React, { Component } from 'react';
import Header from '../header'
import './createContent.css'
import { Input, Select , InputNumber,  Cascader, Button } from 'antd';
import { DatePicker } from 'antd';
import { Upload, Icon, message } from 'antd';
import TextEditor from './textEditor'
import axios from 'axios'




const InputGroup = Input.Group;
const { Option } = Select;


//
// function onChange(date, dateString) {
//   console.log(date, dateString);
// }




function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
  console.log(img)
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}










class CreateContent extends Component{

  state = {
   selectedImg: null,
  imgURL: '',
  postedDate: ''


};


onImageSelect = (e) => {
      console.log(e.target.files[0])
      this.setState({ selectedImg: e.target.files[0]})
}


onImageUplaod = () => {
  const fd = new FormData()
  fd.append('image', this.state.selectedImg, this.state.selectedImg.name);

  fetch("localhost:4000/upload-images", {
            method: "POST",
            headers: {
            'Content-Type':'multipart/form-data',
            },
            body: fd
          })
         .then(json =>  console.log(json))
        .catch( err => console.log(err))



}




  render(){


    return <>
    <Header />
    <div className='container-fluid g1 row justify-content-center'>
     <div className='shadow g2 container text-center'>







<div style={{ marginBottom: 16 }}>
     <Select
       showSearch
        style={{ width: "70%" }}
       placeholder="Select Content Type"
       optionFilterProp="children"
       onChange={(value) =>    this.setState({ status: value }) }

       filterOption={(input, option) =>
         option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
       }
     >

       <Option value="Mobile">Mobile</Option>
       <Option value="Game">Game</Option>
       <Option value="Headphone">Headphone</Option>
       <Option value="Laptop">Laptop</Option>
       <Option value="Leaks & Rumors">Leaks & Rumors</Option>
     </Select>
</div>

<div style={{ marginBottom: 16 }}>
     <Select
       showSearch
        style={{ width: "70%" }}
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

    <div style={{ marginBottom: 16 }}>
          <DatePicker onChange={(date) => this.setState({ postedDate: date })} placeholder='Select Posted date'   style={{ width: "70%" }}/>
    </div>

    <div style={{ marginBottom: 16 }}>
         <Select
           showSearch
           style={{ width: "70%" }}
           placeholder="Select Status"
           optionFilterProp="children"
           onChange={(value) =>    this.setState({ status: value }) }

           filterOption={(input, option) =>
             option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
           }
         >

           <Option value="Dikshant Gautam">Dikshant Gautam</Option>
           <Option value="Amit Singh Rawat">Amit Singh Rawat</Option>
           <Option value="Anmol Raj Chauhan">Anmol Raj Chauhan</Option>
           <Option value="Abhishek Naagar">Abhishek Naagar</Option>
           <Option value="Aman Sharma">Aman Sharma</Option>

         </Select>
    </div>

    <div style={{ marginBottom: 16 }}>
          <Input onChange={(e) => this.setState({ imgURL: e.target.value })} placeholder='Image url'   style={{ width: "70%" }}/>
    </div>

    <div style={{ marginBottom: 16 }} className='text-center' >
     <Input type='file' onChange={this.onImageSelect} style={{ width: "30%" }}/>
     <Button onClick={this.onImageUplaod} style={{ margin: "5px" }}>Upload</Button>
    </div>

<TextEditor />

    <Button block className='g3'>Create</Button>
    </div>
    </div>
    </>
  }
}
export default CreateContent;
