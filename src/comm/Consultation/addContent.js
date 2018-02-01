import React,{Component} from 'react';
import './addContent.css';
import { Icon,Button, notification }from 'antd';
import Consult from './Consult';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
const openNotificationWithIcon = (type) => {
  // console.log(type);
    notification[type]({
      message: '添加成功',
      description: '成功添加一条数据',
    });
  };
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
        分类:this.classify.value,
        标题:title,
        发布状态:'已发布',
        动作:'下架',
        作者:changewriter,
        更新时间:this.props.changeTime(),
        内容:this.state.textarea,
        type:'mylist',
        // img:
      });
      openNotificationWithIcon('success');
    }
    this.setState({
      bool:true
    })
  }
  //保存草稿
  // draft = () =>{
  //   let {title,textarea,changewriter,summary} = this.state;
  //   if(title && textarea && changewriter && summary){
  //     this.props.addText({
  //       id:this.props.maxId(),
  //       分类:this.classify.value,
  //       标题:title,
  //       发布状态:'草稿',
  //       动作:'审核',
  //       作者:changewriter,
  //       更新时间:this.props.changeTime(),
  //       内容:textarea
  //     });
  //   }
  // }
  render(){
    // <p className="title_short"><span><i>*</i>分类栏目：</span><select ref = {(elem)=>{this.column = elem}} name="" className="select">
    //           <option value="全部栏目">全部栏目</option>
    //           <option value="新闻资讯">新闻资讯</option>
    //           <option value="行业动态">行业动态</option>
    //           <option value="行业资讯">行业资讯</option>
    //           <option value="行业新闻">行业新闻</option>
    //         </select>
    // </p>
    return(
      <div className="addContent">
          <from>
            <p className="title_short" ><span><i>*</i>文章标题：</span><input
              type="text"
              onChange={this.change}
              value={this.state.title}
            /></p>
            <p className="title_short"><span>文章分类：</span><select ref = {(elem)=>{this.classify = elem}} name="" className="select">
                					<option value="全部类型">全部类型</option>
                					<option value="帮助说明">帮助说明</option>
                					<option value="新闻资讯">新闻资讯</option>
                				</select>
            </p>
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
            <p className="title_short"><span>文章摘要：</span><input
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
          {/* <Link to="/image">
            <button
              className="button2"
              onClick = {this.draft}
              >保存草稿
            </button>
          </Link> */}
          <Link to="/image">
            <button className="button3">取消</button>
          </Link>
        </p>
      </div>
    )
  }
}
export default Addcontent;
