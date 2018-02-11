import React,{Component} from 'react';
import './tr.css';
import Changecontent from './changeval';
import { Icon } from 'antd';
import {BrowserRouter as Router,
  Route,
  Link,
  // Redirect,
  Switch
} from 'react-router-dom';

const imgURL = require.context("../img",true,/^\.\/.*\.webp$/);
const projectURl = imgURL.keys().map(imgURL);

class Tr extends Component{
  constructor(){
    super();
    this.state= {
      val:''
    }
  }
  //点击删除数据
  delVal = () => {
    // alert(1);
    this.props.delete(this.props.id);
  }
  //受控表单
  check_box = ()=>{
    // console.log(this.props.checked);
    // !this.props.checked;
    this.props.changecheckbox(this.props.id);
  }
  //批量删除
  alldel = ()=>{
    this.props.alldel();
  }

  render(){
    let data = {
      id:this.props.id,
      item:this.props.item,
      title:this.props.title,
      time:this.props.time,
      todo:this.props.todo,
      info:this.props.info,
      img:this.props.img,
      checked:this.props.checked,
      changedata:this.props.changedata,
      del_img:this.props.del_img
    };
    let h = null;
    if(this.props.todo){
      h = <td>
        {/* <a href="javascript:;"
        onClick = {this.click1}
      >{this.props.todo}</a> */}
      <span className="change_val">
        <Link to="/changeval1">
          <Icon type="edit" />
        </Link>
      </span>
      <a href="javascript:;"
        onClick = {this.delVal}
        ><Icon type="delete" />
      </a>
      <Switch>
        <Route path="/changeval1" render={()=>{
          return <Changecontent {...data}/>
        }}/>
      </Switch>
    </td>
    }
    let icon = null;
    if(this.props.checked){
      icon = <Icon type="check-square" />
    }else{
      icon = <Icon type="check-square-o" />
    }
    let { id, title, info, time, status, cover } = this.props;
    let img = '';
    console.log(projectURl);
    projectURl.forEach(function (e,i) {
       if(e.indexOf(cover) > 0){
         img = e;
       }
    });
    return(
      <Router>
        <tr>
           <td
             onClick={this.check_box}
             >
           {icon}</td>
          <td>{id}</td>
          <td>{title}</td>
          <td className="img_tr"><img src={img} className="imgW"/></td>
          <td>{info}</td>
          <td>{time}</td>
          <td>{status}</td>
          {h}
        </tr>
      </Router>
    )
  }
}
export default Tr
