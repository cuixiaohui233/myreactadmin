import React,{Component} from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from 'react-router-dom';
import { Icon } from 'antd';
import './personal.css';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

function callback(key) {
  // console.log(key);
}
class Personal extends Component {
  constructor(){
    super();
    this.state = {
      data:getItem(),
      id:getItem()[0].id,
      username:getItem()[0].username,
      password:'',
      newPassword:'',
      surePassword:'',
      penname:getItem()[0].penname,
      oneselfinfo:getItem()[0].oneselfinfo,
      phoneNum:getItem()[0].phone,
      userEmail:getItem()[0].email,
      user_score:getItem()[0].score,
      user_collect:getItem()[0].collect,
      user_comment:getItem()[0].comment,
      user_code:getItem()[0].id,
      user_img:getItem()[0].id,
      userType:getItem()[0].userType,
      userInputClass:'form-control',
      img:getItem()[0].img,
      zctime:getItem()[0].time,
    }
  }
  //解控
  changeusername = (ev)=>{
    let data = getLocalItem('users');
    data = data.filter(e=>e.username !== this.state.data[0].username);
    data.map((e,i)=>{
      if(e.username === ev.target.value){
        // alert('阿偶！这个名字已经有小主用了欧，换个名字吧');
        this.setState({
          username:ev.target.value,
          userInputClass:'form-control form-control-change'
        })
      }else{
        this.setState({
          username:ev.target.value,
          userInputClass:'form-control'
        })
      }
    })
  }
  changepenname = (ev)=>{
    this.setState({
      penname:ev.target.value
    })
  }
  changeoneselfinfo = (ev)=>{
    this.setState({
      oneselfinfo:ev.target.value
    })
  }
  changephoneNum = (ev)=>{
    this.setState({
      phoneNum:ev.target.value
    })
  }
  changeuserEmail = (ev)=>{
    this.setState({
      userEmail:ev.target.value
    })
  }
  changepassword = (ev)=>{
    this.setState({
      password:ev.target.value
    })
  }
  changenewPassword = (ev)=>{
    this.setState({
      newPassword:ev.target.value
    })
  }
  changesurePassword = (ev)=>{
    this.setState({
      surePassword:ev.target.value
    })
  }

  //点击修改
  changePersonal = ()=>{
    let localData = getLocalItem('users');
    let newLocalData = {
      id:this.state.id,
      username:this.state.username,
      penname:this.state.penname,
      oneselfinfo:this.state.oneselfinfo,
      userType:this.state.userType
    }
    localData = localData.filter(e=>e.username !== this.state.data[0].username);
    localData.map((e,i)=>{
      if(e.username === newLocalData.username){
        alert('阿偶！这个名字已经有小主用了欧，换个名字吧');
      }else{
        let {data} = this.state;
        // console.log(data[0]);
        Object.assign(data[0],newLocalData);
        // console.log(data[0]);
        let local = getLocalItem('users');
        local.map((e,i)=>{
          if(e.userType === data[0].userType){
            Object.assign(e,data[0]);
          }
        })
        localStorage.setItem('users',JSON.stringify(local));
        // console.log(localData)
        alert('修改成功')
      }
    })
  }
  //用户设置
  changeuserSetting = ()=>{
    let newLocalData = {};
    if(this.state.password && this.state.newPassword && this.state.surePassword){
      if(this.state.password === this.state.data[0].password){
        if(this.state.newPassword === this.state.surePassword){
//        console.log(this.state.data[0].password)
          newLocalData = {
            phone:this.state.phoneNum,
            email:this.state.userEmail,
            password:this.state.newPassword
          }
        }
      }else{
        alert('密码错误！');
        return;
      }
    }else {
      alert('请填写密码');
      return;
    }

    let {data} = this.state;
      // console.log(data[0]);
    Object.assign(data[0],newLocalData);
    let local = getLocalItem('users');
    local.map((e,i)=>{
      if(e.userType === data[0].userType){
        Object.assign(e,data[0]);
      }
    })
    localStorage.setItem('users',JSON.stringify(local));
    // console.log(localData)
    alert('修改成功')
  }
  render(){
    let {user_comment,user_score,user_collect} = this.state;
//  console.log(user_score)
    let commentinfo = Object.assign(user_comment);
    let commentscore = Object.assign(user_score);
    let commentcollect = Object.assign(user_collect);
    let commentdiv = null;
    let scorediv = null;
    let collectdiv = null;
    if(!commentinfo.length){
      commentdiv = <div>阿哦，暂时没有评论！</div>
    }else{
      commentdiv = commentinfo.map((e,i)=>{
        let key = i;
        return <div className=""
                style={{height:30}}
                key={i+1}>
                  <p key={i+2} style={{height:30 , lineHeight:'30px' }}><span>《{e.title}》</span><span>"{e.content}"</span><span key={i+3}>{e.created}</span></p>
                </div>
      })
    }

    if(!commentscore.length){
      scorediv = <div>阿哦，暂时没有评分！</div>
    }else{
      scorediv = commentscore.map((e,i)=>{
        let key = i;
        return <div className=""   style={{height:30,fontSize:14}} key={i+1}>
                  <p key={i+2}>{e.title}<span key={i+3}>{e.socre}分</span></p>
                </div>
      })
    }
    if(!commentcollect.length){
      collectdiv = <div>阿哦，暂时没有收藏！</div>
    }else{
      collectdiv = commentcollect.map((e,i)=>{
        let key = i;
        return <div className="" key={i+1} style={{height:30,fontSize:14}} key={i+1}>
                  <p key={i+2}>{e}<span key={i+3}>{e.created}</span></p>
                </div>
      })
    }
    return (
      <div id="personal">
        <div className="user_info">
          <div className="user_img">
            <img src={this.state.img} className = "u_admin"/>
          </div>
          <h3>{this.state.username}</h3>
          <p>
            <span>{this.state.states === 'admin'?'管理员':'会员'}</span>
          </p>
          <p>微奇生活</p>
        </div>
        <div className="user_change">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="个人资料" key="1">
              <form>
                  <div className="form-group controls">
                      <label>用户姓名</label>
                      <input
                        className={this.state.userInputClass}
                        id="name"
                        name="name"
                        type="text"
                        value={this.state.username}
                        onChange = {this.changeusername}
                      />
                  </div>
                  <div className="form-group controls">
                      <label>用户昵称</label>
                       <input
                         className="form-control"
                         id="nick_name"
                         name="nick_name"
                         type="text"
                         value={this.state.penname}
                         onChange = {this.changepenname}
                       />
                  </div>
                  <div className="form-group controls">
                      <label>自我介绍</label>
                      <input
                        className="form-control"
                        id="nick_name"
                        name="nick_name"
                        type="text"
                        value={this.state.oneselfinfo}
                        onChange = {this.changeoneselfinfo}
                      />
                  </div>
                  <div className="form-group">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick = {this.changePersonal}
                      >提交</button>
                  </div>
              </form>
            </TabPane>
            <TabPane tab="用户设置" key="2">
              <form>
                  <label>手机账号</label>
                  <div className="input-group">
                      <input
                        className="form-control"
                        type="text"
                        value={this.state.phoneNum}
                        onChange = {this.changephoneNum}
                      />
                  </div>

                  <label>邮箱账号</label>
                  <div className="form-group controls">
                      <input
                        className="form-control"
                        type="text"
                        value={this.state.userEmail}
                        onChange = {this.changeuserEmail}
                      />
                  </div>

                  <div className="form-group controls">
                      <label>当前密码</label>
                      <input
                        type="password"
                        id="old_password"
                        name="old_password"
                        className="form-control"
                        placeholder="请先填写旧密码"
                        value={this.state.password}
                        onChange = {this.changepassword}
                      />
                  </div>

                  <div className="form-group controls">
                      <label>新密码</label>
                      <input
                        type="password"
                        id="new_password"
                        name="new_password"
                        className="form-control"
                        placeholder="请输入新密码"
                        value={this.state.newPassword}
                        onChange = {this.changenewPassword}
                      />
                  </div>

                  <div className="form-group controls">
                      <label>确认密码</label>
                      <input
                        type="password"
                        id="pwd_confirm"
                        name="pwd_confirm"
                        className="form-control"
                        placeholder="确认密码和新密码需保持一致"
                        value={this.state.surePassword}
                        onChange = {this.changesurePassword}
                      />
                  </div>

                  <div className="form-group">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.changeuserSetting}
                      >提交</button>
                  </div>
              </form>
            </TabPane>
            <TabPane tab="我评论过" key="3">
              {commentdiv}
            </TabPane>
            <TabPane tab="我的收藏" key="4">
              {collectdiv}
            </TabPane>
            <TabPane tab="我的评分" key="5">
              {scorediv}
            </TabPane>
            <TabPane tab="二维码" key="6">几里拐弯的二维码</TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}
function getItem(){
  let data = JSON.parse(localStorage.getItem('users')) || [];
  data = data.filter((e,i)=>{
    return e.username === e.userType;
  })
  return data;
}
function getLocalItem(data){
  return  JSON.parse(localStorage.getItem(data)) || [];
}
export default Personal;
