import React,{Component} from 'react';
import './changeval.css';
import { Icon,Button, notification }from 'antd';
// import Consult from './Consult';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
// import Nologin from './no_login';

class Changecontent extends Component{
  constructor(props){
    super(props);
    this.state = {
      title:this.props.标题,
      textarea:this.props.内容,
      changewriter:this.props.作者,
      feilei:this.props.item,
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
  changeitem = (ev)=>{
    this.setState({
      feilei:ev.target.value
    })
  }
  changeVal = ()=>{
    let {title,textarea,changewriter} = this.state;
    if(title && textarea && changewriter){
      this.props.changedata({
        id:this.props.id,
        分类:this.classify.value,
        标题:title,
        作者:changewriter,
        内容:this.state.textarea
      });
    }
    this.setState({
      bool:true
    })
  }
  render(){
    return(
      <div className="addContent">
          <from>
            <p className="title_short" ><span><i>*</i>文章标题：</span><input
              type="text"
              onChange={this.change}
              value={this.state.title}
            /></p>
            <p className="title_short"><span>文章分类：</span><select
              value={this.state.feilei}
              ref = {(elem)=>{this.classify = elem}}
              name=""
              className="select"
              onChange={this.changeitem}
              >
                					<option value="全部类型">全部类型</option>
                					<option value="帮助说明">帮助说明</option>
                					<option value="新闻资讯">新闻资讯</option>
                				</select>
            </p>
            <p className="text_short"><span className="title_item">文章内容：</span>
              <textarea
                name=""
                cols="95"
                rows="2"
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
          </from>
        <span className="off"><Link to="/image"><Icon type="close" /></Link></span>
        <p className="button_short">
          <Link to="/image">
            <button
              className="button1"
              onClick = {this.changeVal}
              >保存修改
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
export default Changecontent;
