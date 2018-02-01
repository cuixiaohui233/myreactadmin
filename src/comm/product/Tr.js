import React,{Component} from 'react';
import './tr.css';
import { Icon } from 'antd';
import {BrowserRouter as Router,
  Route,
  Link,
  // Redirect,
  Switch
} from 'react-router-dom';
import Changecontent1 from './changeval';
import './changeval.css';

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
    this.props.changecheckbox(this.props.id);
  }

  //批量删除
  alldel = ()=>{
    this.props.alldel();
  }
  render(){
    let data = {
      id:this.props.id,
      标题:this.props.标题,
      封面:this.props.封面,
      图片名称:this.props.图片名称,
      Tags:this.props.Tags,
      更新时间:this.props.更新时间,
      发布状态:this.props.发布状态,
      动作:this.props.动作,
      操作:this.props.操作,
      checked:this.props.checked,
      delete:this.props.delete,
      change:this.props.change,
      changecheckbox:this.props.changecheckbox,
      changedata:this.props.changedata
    }
    let h = null;
    if(this.props.动作){
      h = <td><a href="javascript:;"
        onClick = {this.click1}
      >{this.props.动作}</a><span>
        <Link to="/changedata">修改</Link>
      </span>
      <a href="javascript:;"
        onClick = {this.delVal}
        >删除
      </a>
      <Switch>
        <Route path="/changedata" render={()=>{
          return <Changecontent1 {...data}/>
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
            className = "changeitem"
            ><input
            type="type"
            onChange={this.changeitem}
           /></td>
           <td
             onClick={this.check_box}
             >
           {icon}</td>
          <td>{this.props.id}</td>
          <td>{this.props.标题}</td>
          <td className="img_tr"><img src={this.props.封面} className="imgW"/></td>
          <td>{this.props.图片名称}</td>
          <td>{this.props.更新时间}</td>
          <td>{this.props.发布状态}</td>
          {h}
        </tr>
      </Router>
    )
  }
}
export default Tr
