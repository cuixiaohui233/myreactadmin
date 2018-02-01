import React,{Component} from 'react';
import { Icon }from 'antd';
import './DelandAdd.css';
import {BrowserRouter as Router,
  Route,
  Link,
  // Redirect,
  Switch
} from 'react-router-dom';


class DelandAdd extends Component{
  constructor(){
    super();
    this.state= {
      item:false
    }
  }
  alldel = ()=>{
    this.props.alldel();
  }
  // alert = ()=>{
  //   this.props.openNotificationWithIcon('success');
  // }
  render(){
    return (
      <Router>
      <div className="DelandAdd">
        <button
          className="first_child"
          onClick={this.alldel}
          ><Icon type="delete" />批量删除</button>
          <button
            className="last_child"
            ><Icon type="edit" />添加咨询
          </button>
      </div>
    </Router>
    )
  }
}
export default DelandAdd;
