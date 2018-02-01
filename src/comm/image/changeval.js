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
      id:this.props.id,
      title:this.props.标题,
      info:this.props.info,
      img:this.props.img,
      changewriter:this.props.作者,
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
  changewriter = (ev)=>{
    this.setState({
      changewriter:ev.target.value
    })
  }
  changeVal = ()=>{
    let {title,changewriter,info,id} = this.state;
    if(title && info){
      this.props.changedata({
        id:id,
        标题:title,
        作者:changewriter,
        info:info
      });
    }
    this.setState({
      bool:true
    })
  }
  del_img = (ev)=>{
//  console.log(ev.target.id);
    this.props.del_img(ev.target.id,this.state.title);
    let {img} = this.state;
    let img1 = [];
    img.map((e,i)=>{
      if(i+'' === ev.target.id){
        img.splice(i,1);
      }
    })
//  console.log(img);
    this.setState({
      img:img
    })
  }
  render(){
    // console.log(this.props)
    let {img} = this.state;
    let image = null;
    image = img.map((e,i)=>{
//    console.log(i);
      // let key = i;
      return <p className="image_img_p">
        <img src={e} className="changeval1_img"/>
        <span className="close">
          <Icon type="close"
            id={i}
            onClick= {this.del_img}
          />
          </span>
      </p>
    })
    return(
      <div className="addContent">
          <from>
            <p className="title_short" ><span><i>*</i>相册标题：</span><input
              type="text"
              onChange={this.change}
              value={this.state.title}
            /></p>
            <p className="title_short" ><span><i>*</i>相册描述：</span><input
              type="text"
              onChange={this.changeTextarea}
              value={this.state.info}
            /></p>
            <div className="text_img">
              {image}
            </div>
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
