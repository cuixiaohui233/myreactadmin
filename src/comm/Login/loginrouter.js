import React,{Component} from 'react';
import { Form, Icon } from 'antd';import App from '../../App';
import {
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';

import './Login.css';
import Add from '../add/add';
import Webpage from '../web/homepage';
let uadmin = require('../web/webImage/images/timg.jpg')
// const FormItem = Form.Item;



class NormalLoginForm extends Component {
  constructor(){
    super();
    this.state={
      val:'',
      val1:'',
      class:'login-form',
      id:'mask',
      arr:[
          {
            id:1,
            username:'admin',
            penname:'赵总',
            oneselfinfo:'厉害到爆炸',
            password:'aaa123',
            email:'15931662302@163.com',
            bool:true,
            states:'admin',
            sex:'女',
            phone:'15931662302',
            address:'',
            time:'2217年8月1日',
            checked:false,
            userType:'admin',
            img:uadmin,
            collect:[],
            score:[],
            comment:[]
        }
      ]
    }
  }
  change1 = (ev)=>{
    this.setState({
      val:ev.target.value
    })
  }
  change2 = (ev)=>{
    this.setState({
      val1:ev.target.value
    })
  }
  click = ()=>{
    if(this.state.val && this.state.val1){
      let arr2 = JSON.parse(localStorage.getItem('users')) || this.state.arr;
      let arr = arr2.find(e=>e.username === this.state.val);
      // console.log(arr,this.state.val1);
        if(arr2.find(e=>e.username === this.state.val)){
          // console.log(arr.password,this.state.val1);
          if(arr.password+'' === this.state.val1){
            if(arr.bool){
                // this.props.changeRoute('login',arr.states);
                for(var i=0;i<arr2.length;i++){
                  if(arr2[i].userType){
                    arr2[i].userType = null;
                  }
                }
                arr2.map((e,i)=>{
                  if(e.username == this.state.val){
                    e.userType = e.username;
                  }
                })
                // console.log(arr2);
                this.setState({
                  class:'login-form-none',
                  id:'mask-none'
                })
                localStorage.setItem('users',JSON.stringify(arr2));
            }
          }else{
            alert('密码错误');
          }
        }else{
          alert('对不起没有此用户');
        }
    }else{
      alert('请输入密码！');
    }
  }
  render() {
    return (
      <div>
        {/* <Webpage /> */}
        <div id={this.state.id}></div>
      <form onSubmit={this.handleSubmit} className={this.state.class}>
        <h1 className="welcome">欢迎来到微奇生活</h1>
        <Link to="/"><span className="quxiao"><Icon type="close" /></span></Link>
        <p>
          <span><Icon type="user" style={{ fontSize: 18 }} /> :</span>
          <input
          type="type"
          value={this.state.val}
          onChange={this.change1}
          placeholder="请输入用户名"
        />
        </p>
        <p id="del_bott">
          <span><Icon type="lock"  style={{ fontSize: 18 }} /> :</span>
          <input
          type="password"
          onChange={this.change2}
          value={this.state.val1}
          placeholder="请输入密码"
        />
        </p>
        {/* <Link to="/app/content"> */}
          <button
            onClick={this.click}
            type="button"
            >登录
          </button>
        {/* </Link> */}
        <Link to='/addmin'>
          <button className="addAdmin">注册会员</button>
        </Link>
      </form>
    </div>
    );
  }
}
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;
