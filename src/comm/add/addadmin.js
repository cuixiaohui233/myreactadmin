import React,{Component} from 'react';
import {
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Icon,Radio } from 'antd';
import App from '../../App';
import Webpage from '../web/homepage';
let member = require('../web/webImage/images/user_normal.jpg')
let uadmin = require('../web/webImage/images/timg.jpg')
const RadioGroup = Radio.Group;
class Addadmin extends Component{
  constructor(){
    super();
    this.state = {
      arr:[],
      name:'',
      pass:'',
      sex:'',
      phone:'',
      email:'',
      penname:'',
      oneselfinfo:'',
      password:'',
      email:'',
      checked:false,
      bool:false,
      userType:null,
      states:'',
      num:0,
      value: 1,
    }
  }
  componentDidMount(){
    this.setState({
      arr:getItem('users')
    });
  }
  //用户名受控
  changename = (ev)=>{
    this.setState({
      name:ev.target.value
    })
  }
  //密码受控
  changepass = (ev)=>{
    this.setState({
      pass:ev.target.value
    })
  }
  //性别受控
  changesex = (ev)=>{
    this.setState({
      sex:ev.target.value
    })
  }
  //电话受控
  changephone = (ev)=>{
    this.setState({
      phone:ev.target.value
    })
  }
  //昵称受控
  changepenname = (ev)=>{
    this.setState({
      penname:ev.target.value
    })
  }
  //邮箱受控
  changeemail = (ev)=>{
    this.setState({
      email:ev.target.value
    })
  }
  changeoneselfinfo = (ev)=>{
    this.setState({
      oneselfinfo:ev.target.value
    })
  }
  //最大id
  maxId = ()=>{
    let {arr} = this.state;
    let arr1 = Object.assign(arr);
    let num = 0;
    arr1.map((e,i)=>{
      if(e.id > num){
        num = e.id;
      }
    })
    return num+1;
  }
  click = (ev)=>{
    this.setState({
      num:ev.target.id
    })
  }
  addadmin = ()=>{
    let {arr} = this.state;
    let arr1 = Object.assign(arr);
    let arr2 = getItem('users');
    // console.log(arr2);
    if(this.state.name && this.state.pass && (this.state.num ==1 || this.state.num ==2 ||this.state.num ==3 || this.state.num ==4) && this.state.value){
      if(arr2.find(e => e.username === this.state.name)){
        alert('换个名字吧！');
        this.props.changeRoute('addmin','member');
      }else{
        let time = new Date();
        let timer = '';
        if(this.state.num ==1){
          timer = time.getFullYear()+'年' + (time.getMonth()+2) +'月'+time.getDate()+'日';
          // timer = timer+30;
        }else if(this.state.num ==2){
          // timer = timer+(12*30);
          timer = (time.getFullYear()+1)+'年' + (time.getMonth()+1) +'月'+time.getDate()+'日';
        }else if(this.state.num ==3){
          // timer = timer+(3*30);
          timer = time.getFullYear()+'年' + (time.getMonth()+4) +'月'+time.getDate()+'日';
        }else if(this.state.num ==4){
          // timer = timer+30;
          timer = time.getFullYear()+'年' + (time.getMonth()+2) +'月'+time.getDate()+'日';
        }
        for(var i=0;i<arr1.length;i++){
          if(arr1[i].userType){
            arr1[i].userType = null;
          }
        }
        arr1.push({
          img:member,
          id:this.maxId(),
          username:this.state.name,
          password:this.state.pass,
          penname:this.state.penname,
          oneselfinfo:this.state.oneselfinfo,
          // sex:this.state.sex,
          phone:this.state.phone,
          email:this.state.email,
          checked:false,
          bool:true,
          states:'member',
          num:this.state.num,
          time:timer,
          userType:this.state.name,
          collect:[],
          score:[],
          comment:[]
        });
        localStorage.setItem('users',JSON.stringify(arr1));
        this.props.changeRoute('true','member');
      }
    }else {
      alert('请填写信息')
      this.props.changeRoute('addmin','');
    }
  }
  //单选回调
  onRadio = (e) => {
    // console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
  render(){
    // console.log(this.props.changeRoute);
    return(
      <div>
      <Webpage />
      <div id="mask"></div>
      <from className="login-form login_form2" id="login_form2">
        <h1 className="welcome1">注册会员</h1>
        <Link to="/home/login"><span className="huitui"><Icon type="rollback" /></span></Link>
        <Link to="/"><span className="quxiao"><Icon type="close" /></span></Link>
        <p className="title_short" >
          <span>用户名：</span>
          <input
            type="text"
            onChange={this.changename}
            value={this.state.name}
          />
        </p>
        <p className="title_short" >
          <span>密码：</span>
          <input
            type="password"
            onChange={this.changepass}
            value={this.state.pass}
          />
        </p>
        <p className="title_short" >
          <span>电话：</span>
          <input
            type="text"
            onChange={this.changephone}
            value={this.state.phone}
          />
        </p>
        <p className="title_short" >
          <span>电子邮箱：</span>
          <input
            type="text"
            onChange={this.changeemail}
            value={this.state.email}
          />
        </p>

        <p className="title_short" >
          <span>昵称：</span>
          <input
            type="text"
            onChange={this.changepenname}
            value={this.state.penname}
          />
        </p>
        <p className="title_short" >
          <span>个性签名：</span>
          <input
            type="text"
            onChange={this.changeoneselfinfo}
            value={this.state.oneselfinfo}
          />
        </p>
        <div className="taocan">
          <span className="monery">资费：</span>
          <ul>
            <li
              onClick={this.click}
              className = "title_long" id="1">连续包月10元<Icon type="check" className={this.state.num == 1?"anticon-check-show dui1":"dui1"} /></li><br />
            <li
              onClick={this.click}
              className = "title_long" id="2">12个月108元<del>180</del><Icon type="check" className={this.state.num == 2?"anticon-check-show dui2":"dui2"}  /></li><br />
            <li
              onClick={this.click}
              className = "title_long" id="3">3个月30元<del>45</del><Icon type="check"  className={this.state.num == 3?"anticon-check-show dui3":"dui3"}  /></li><br />
            <li
              onClick={this.click}
              className = "title_long" id="4">1个月15元<Icon type="check"  className={this.state.num == 4?"anticon-check-show dui4":"dui4"}  /></li><br />
          </ul>

        </div>
        <RadioGroup onChange={this.onRadio} value={this.state.value}>
          <span style={{marginRight:10}}>支付方式：</span>
          <Radio value={1}>微信支付</Radio>
          <Radio value={2}>支付宝</Radio>
          <Radio value={3}>省钱宝</Radio>
          <Radio value={4}>银行卡</Radio>
        </RadioGroup>
        <Link to="/app/content"><button
          onClick = {this.addadmin}
          id="add_admin"
          type="button"
          >注册会员
        </button></Link>
      </from>
    </div>
    )
  }
}
function getItem(data){
  return JSON.parse(localStorage.getItem(data)) || [
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
  }]
}
export default Addadmin;
