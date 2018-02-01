import React,{Component} from 'react';
import './addContent.css';
import { Icon }from 'antd';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
// import Nologin from './no_login';

class Addcontent extends Component{
  constructor(){
    super();
    this.state = {
      title:'',
      textarea:'',
      changewriter:'',
      summary:'',
      bool:false
    }
  }
  change = (ev)=>{
    this.setState({
      title:ev.target.value
    })
  }
  changeTextarea = (ev)=>{
    this.setState({
      textarea:ev.target.value
    })
  }
  changewriter = (ev)=>{
    this.setState({
      changewriter:ev.target.value
    })
  }
  summary = (ev)=>{
    this.setState({
      summary:ev.target.value
    })
  }
  //保存并发布
  submin = () =>{
    let {title,textarea,changewriter,summary} = this.state;
    if(title && textarea && changewriter && summary){
      this.props.addText({
        id:this.props.maxId(),
        标题:title,
        发布状态:'已发布',
        动作:'下架',
        作者:changewriter,
        更新时间:summary,
        图片名称:this.state.textarea,
      });
    }
    this.setState({
      bool:true
    })
  }
  //保存草稿
  draft = () =>{
    let {title,textarea,changewriter,summary} = this.state;
    if(title && textarea && changewriter && summary){
      this.props.addText({
        id:this.props.maxId(),
        标题:title,
        发布状态:'已发布',
        动作:'下架',
        作者:changewriter,
        更新时间:summary,
        图片名称:this.state.textarea,
      });
    }
  }
  render(){
    return(
      <div className="addContent">
        <from>
          <p className="title_short" ><span><i>*</i>商品名称：</span><input
            type="text"
            onChange={this.change}
            value={this.state.title}
          /></p>
          <p className="text_short"><span className="title_item">文章内容：</span>
            <textarea
              name=""
              cols="95"
              rows="5"
              className="textarea"
              placeholder="说点什么...最少输入10个字符"
              datatype="*10-100"
              onChange={this.changeTextarea}
              value={this.state.textarea}
              >
               </textarea>

          </p>
          <p className="title_short"><span><i>*</i>文章作者：</span><input
            type="text"
            onChange={this.changewriter}
            value={this.state.changewriter}
          /></p>
          <p className="title_short"><span>价格：</span><input
            type="text"
            onChange={this.summary}
            value={this.state.summary}
          /></p>
        </from>
      <span className="off"><Link to="/image"><Icon type="close" /></Link></span>
      <p className="button_short">
        <Link to="/image">
          <button
            className="button1"
            onClick = {this.submin}
            >保存并提交
          </button>
        </Link>
        <Link to="/image">
          <button
            className="button2"
            onClick = {this.draft}
            >保存草稿
          </button>
        </Link>
        <Link to="/image">
          <button className="button3">取消</button>
        </Link>
      </p>
      </div>
    )
  }
}
export default Addcontent;
