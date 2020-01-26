
import React from 'react';
import './drawer.css'
import { Drawer, Button,Icon  } from 'antd';
import { MdReorder } from "react-icons/md";
import { Link } from 'react-router-dom'



class SideDrawer extends React.Component {

  state = { visible: false, placement: 'left' };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = e => {
    this.setState({
      placement: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <MdReorder type="primary" onClick={this.showDrawer} className='drawer-icon'>

        </MdReorder>
        <Drawer
          title="Admin"
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          {/* <Link to='/content'><p><Icon type="reconciliation" style={{"fontSize":"25px", "color": "white",  "marginRight":"5px"}}/>Content</p></Link> */}
          <Link to='/seoTemplate'><p><Icon type="reconciliation" style={{"fontSize":"25px", "color": "white",  "marginRight":"5px"}}/>SEO Template</p></Link>

          <Link to='/userManagement'><p><Icon type="usergroup-add" style={{"fontSize":"25px", "color": "white",  "marginRight":"5px"}} />User Management</p></Link>
          <Link to='/'><p><Icon type="logout" style={{"fontSize":"25px", "color": "white",  "marginRight":"5px"}}/>Logout</p></Link>


        </Drawer>
        <span    style={{ marginLeft: "20px", fontSize:"26px"}}>IAspire.tech</span>
      </div>
    );
  }
}

 export default SideDrawer;
