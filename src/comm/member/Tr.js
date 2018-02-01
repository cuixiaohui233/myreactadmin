import React,{Component} from 'react';
import Changecontent from './changeval';
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
  change = (ev) =>{
    this.props.change(this.props.id)
  }
  //批量删除
  alldel = ()=>{
    this.props.alldel();
  }
  render(){
    let data = {
      id:this.props.id,
      姓名:this.props.姓名,
      性别:this.props.性别,
      联系电话:this.props.联系电话,
      电子邮件:this.props.电子邮件,
      地址:this.props.地址,
      身份:this.props.身份,
      操作:this.props.操作,
      checked:this.props.checked,
    }
    // let h = null;
    // if(this.props.动作){
    //   h = <td><a href="javascript:;"
    //     onClick = {this.click1}
    //   >{this.props.动作}</a><span>
    //     <Link to="/changeval">修改</Link></span>
    //   <a href="javascript:;"
    //     onClick = {this.delVal}
    //     >删除
    //   </a>
    //   <Switch>
    //     <Route path="/changeval" render={()=>{
    //       return <Changecontent {...data}/>
    //     }}/>
    //   </Switch>
    // </td>
    // }
    // let item = this.props.内容.slice(0, 4)+'...';
    // let title = this.props.标题.slice(0,4)+'...';
    // let writer = this.props.作者.slice(0,3)+'...';
    return(
      <Router>
        <tr>
           <td><input type="checkbox" checked={this.props.checked} /></td>
           <td>{this.props.id}</td>
           <td>{this.props.姓名}</td>
           <td>{this.props.sex}</td>
           <td>{this.props.联系电话}</td>
           <td>{this.props.电子邮件}</td>
           <td>{this.props.地址}</td>
           <td>{this.props.身份}</td>
           <td>{this.props.操作}</td>
        </tr>
      </Router>
    )
  }
}
export default Tr
