import React,{Component} from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from 'react-router-dom';
import './head.css';
class Header extends Component {
  constructor(){
    super();
    this.state = {
      classBool:false
    }
  }
  changeClass = (ev)=>{
    ev.preventDefault();
    this.setState({
      classBool:!this.state.classBool
    })
  }
  changeClassNone = ()=>{
    this.setState({
      classBool:!this.state.classBool
    })
  }
  click = ()=>{
    let arr2 = JSON.parse(localStorage.getItem('users'));
    console.log(arr2);
    for(var i=0;i<arr2.length;i++){
        arr2[i].userType = null;
        // console.log(111111);
        localStorage.setItem('users',JSON.stringify(arr2));
    }
    window.location.href='/home';
    window.location.reload;
  }
  render(){
    let data = JSON.parse(localStorage.getItem('users')) || [];
    let box = null;
    let data1 = Object.assign(data);
    data1 = data1.filter(e=>e.userType === e.username);

    if(data1[0].states === 'admin'){
      box =  <ul id={this.state.classBool?'ul_block':'ul_none'}>
              <Link to="/personal"><li onClick={this.changeClassNone}>修改信息</li></Link>
              <Link to="/"><li
                onClick = {this.click}
              >退出登录</li></Link>
            </ul>
    }else if(data1[0].states === 'member'){
      box =  <ul id={this.state.classBool?'ul_block':'ul_none'}>
              <Link to="/personal"><li
                onClick={this.changeClassNone}
              >个人中心</li></Link>
              <li
                onClick = {this.click}
              >退出登录
              </li>
            </ul>
    }

    return (
      <div id="head">
        <h3 id="head_logo">Wqsh.admin <span>v3.0</span></h3>
        <div id="head_user">
          <p
            onClick={this.changeClass}
          >
            {data1[0].username}
          </p>
          {box}
        </div>
      </div>
    )
  }
}
export default Header;
