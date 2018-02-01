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
      标题:this.props.标题,
      作者:this.props.作者,
      更新时间:this.props.更新时间,
      内容:this.props.内容,
      发布状态:this.props.发布状态,
      动作:this.props.动作,
      info:this.props.info,
      img:this.props.img,
      checked:this.props.checked,
      changedata:this.props.changedata,
      del_img:this.props.del_img
    }
    let h = null;
    if(this.props.动作){
      h = <td>
        {/* <a href="javascript:;"
        onClick = {this.click1}
      >{this.props.动作}</a> */}
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
    return(
      <Router>
        <tr>
           <td
             onClick={this.check_box}
             >
           {icon}</td>
          <td>{this.props.id}</td>
          <td>{this.props.标题}</td>
          <td className="img_tr"><img src={this.props.封面} className="imgW"/></td>
          {/* <td>{this.props.info}</td> */}
          <td>{this.props.info}</td>
          <td>{this.props.更新时间}</td>
          <td>{this.props.发布状态}</td>
          {h}
        </tr>
      </Router>
    )
  }
}
export default Tr
