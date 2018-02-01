import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,

} from 'react-router-dom';
import './webImage.css';
class WebImage extends Component{
  constructor(){
    super();
  }
  render(){
  let data = JSON.parse(localStorage.getItem('image')) || JSON.parse(localStorage.getItem('img'));
    // console.log(data);
    let data1 = Object.assign(data);
    let list = null;
    let img1 = null;
    list = data1.map((e,i)=>{
      // console.log(e.img)
      return <Link to={'/web/webimage/'+e.id}><div className="webpage_read1">
        <p className="webpage_image"><img src={e.头像} id="touxiang" /><span id="biaoti">{e.title}-{e.标题}</span></p>
        <p className="webpage_image1">
          <img className="img_little" src={e.img[0]} />
          <img className="img_little" src={e.img[1]} />
          <img className="img_little" src={e.img[2]} />
        </p>
      </div></Link>
    })
    return(
      <div id="webpage_read">
        <h1 className="today">今日精选</h1>
        {list}
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
export default WebImage;
