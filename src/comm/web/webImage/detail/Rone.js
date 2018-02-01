import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import { Rate } from 'antd';
import $ from 'jquery';
// import './read_item.css';

class Rtwo extends Component{
  constructor(props){
    super(props);
    this.state = {
      info:[],
      title:'',
      name:'',
      img:'',
      time:'',
      url:this.props.url
    }
  }
  componentDidMount(){
    let that = this;
    let data = JSON.parse(localStorage.getItem('img'));
    let data1 = Object.assign(data);
    data1 = data1.find((e)=>e.id == this.state.url);
    console.log(data1);
    that.setState({
      title:data1.标题,
      name:data1.title,
      img:data1.头像,
      info:data1.img,
      time:data1.更新时间
    })
  }
  render(){
    let {info} = this.state;
      // console.log(info);
    let pinfo1 = Object.assign(info);
    let list = null;
    if(pinfo1.length){
      list = pinfo1.map((e,i)=>{
        return <div className="webpage_img_info">
                <img src={e} id="layout"/>
               </div>
      })
    }
    console.log(this.state.img);
    return(
      <div id="redhhh">
        <div className="webpage_read item_read">
        <h1 className="item_h1">{this.state.title}</h1>
          <div id="webpage_image_img_span">
            <img src={this.state.img} />
            <span>{this.state.name}</span>
            <span>{this.state.time}</span>
          </div>
        </div>
        <div id="actic_img">
          {list}
        </div>
        <div id="footer">
          <div className="footLeft">
            <p><span>© 2005－2017 douban.com, all rights reserved 北京豆网科技有限公司</span></p>
            <p><span>京ICP证090015号 京ICP备11027288号 网络视听许可证0110418号 </span></p>
            <p><span>京网文[2015]2026-368号  京公网安备11010502000728  新出网证(京)字129号 </span></p>
            <p><span>违法和不良信息举报电话：4008353331  </span></p>
            <p><span>中国互联网举报中心 电话：12377 《食品流通许可证》许可证：SP1101051510347287</span></p>
            <p><span>新出发京批字第直160029号</span></p>
          </div>
          <div className="footRight"></div>
        </div>
      </div>
    )
  }
}



export default Rtwo;
