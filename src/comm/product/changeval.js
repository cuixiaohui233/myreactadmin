import React,{Component} from 'react';
import './changeval.css';
import { Icon,Button, notification }from 'antd';
// import Consult from './Consult';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
// import Nologin from './no_login';
import './changeval.css';

class Changecontent1 extends Component{
  constructor(props){
    super(props);
    this.state = {
      id:this.props.id,
      title:this.props.标题,
      img:this.props.封面,
      info:this.props.图片名称,
      price:this.props.更新时间,
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
      info:ev.target.value
    })
  }
  changeprice = (ev)=>{
    this.setState({
      price:ev.target.value
    })
  }
  changeVal = ()=>{
    let {id,title,img,info,price} = this.state;
    if(title && info && price){
      this.props.changedata({
        id,
        title,
        img,
        info,
        price,
      });
    }
    this.setState({
      bool:true
    })
  }
  del_img = (ev)=>{
    this.props.del_img(ev.target.id);
  }
  render(){
    // console.log(this.props)
    return(
      <div className="addContent">
        <from>
          <p className="title_short" ><span><i>*</i>产品名称：</span><input
            type="text"
            onChange={this.change}
            value={this.state.title}
          /></p>
          <p className="title_short" ><span><i>*</i>具体描述：</span><input
            type="text"
            onChange={this.changeTextarea}
            value={this.state.info}
          /></p>
          <p className="title_short" ><span><i>*</i>价格</span><input
            type="text"
            onChange={this.changeprice}
            value={this.state.price}
          /></p>
          <p className="image_img_p">
            <img src="" className="changeval1_img"/>
          </p>
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
export default Changecontent1;
