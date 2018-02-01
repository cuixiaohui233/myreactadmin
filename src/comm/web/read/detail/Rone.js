import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import { Rate } from 'antd';
import $ from 'jquery';
import './read_item.css';
import NormalLoginForm from '../../../Login/loginrouter'


class Rone extends Component{
  constructor(props){
    super(props);
    this.state = {
      data:[],
      title:'',
      name:'',
      img:'',
      pinfo:[],
      val:'',
      time:'',
      url:this.props.url,
      starValue:0,
      collect:false,
      show:'login-form-none'
    }
  }
  componentDidMount(){
    let that = this;
    let data = JSON.parse(localStorage.getItem('data')) || JSON.parse(localStorage.getItem('article')) ;
    let data1 = Object.assign(data);
    data1 = data1.find((e)=>e.id == this.state.url);
    if(data1.type){
      this.setState({
        title:data1.标题,
        name:data1.作者,
        // img:data.
      })
    }else{
      $.ajax({
        url:'https://api.douban.com/v2/note/'+this.state.url,
        data:{
          format:'html_full'
        },
        dataType:'jsonp',
        success:function(data){
          // console.log(data);
          that.setState({
            data:data,
            title:data.title,
            name:data.author.name,
            img:data.author.avatar,
            time:data.update_time
          })
        }
      })
    }

    that.setState({
      pinfo:getItem('diss')
    })

  }
  componentDidUpdate() {
    let data = JSON.parse(localStorage.getItem('data')) || JSON.parse(localStorage.getItem('article')) ;
    let data1 = Object.assign(data);
    data1 = data1.find((e)=>e.id == this.state.url);
    if(data1.type){
      document.getElementById("actic").innerHTML = `<p>${data1.内容}</p>`;
    }else{
      document.getElementById("actic").innerHTML = this.state.data.content;
    }
  }

  changeTextarea = (ev)=>{
    this.setState({
      val:ev.target.value
    })
  }
  //最大id
  maxId = ()=>{
    let {pinfo} = this.state;
    let data1 = Object.assign(pinfo);
    let num = 0;
    data1.map((e,i)=>{
      if(e.id > num){
        num = e.id;
      }
    })
    return num+1;
  }
  click = ()=>{
    let {pinfo} = this.state;
    let arr1 = Object.assign(pinfo);
    let arr2 = JSON.parse(localStorage.getItem('users'))||[];
    let arr3 = [];
    if(arr2.length){
      let arr3 = arr2.filter((e,i)=>e.userType === e.username) || [];
      // console.log(arr3);
      if(arr3[0] && arr3[0].userType){
        if(this.state.val){
          // console.log(new Date);
          let time = new Date;
          let time1 = time.getFullYear() + '年'+(time.getMonth()+1) + '月'+time.getDate() + '日' + time.getHours() + ':'+time.getMinutes()+':'+time.getSeconds();
          // console.log(time1);
          let data = {
            author:{avatar:'https://img1.doubanio.com/icon/user_normal.jpg',name:arr3[0].username},
            created:time1,
            content:this.state.val,
            title:this.state.title,
            id:this.maxId()
          }
          arr1.unshift(data);
          arr3[0].comment.unshift(data);
          if(this.state.starValue){
            arr3[0].score.unshift({socre:this.state.starValue,title:this.state.title});
          }
          // console.log(arr1,arr2);
          localStorage.setItem('users',JSON.stringify(arr2));
          this.setState({
            pinfo:arr1,
            val:''
          })
        }else{
            alert('请输入内容')
        }

      }else{
      // alert('请先登录');

      this.setState({
        show:'login-form-block'
      })
      }
    }else{
      // alert('请先登录');
      this.setState({
        show:'login-form-block'
      })
    }
  }
  starChange = (value)=>{
    this.setState({
      starValue:value
    })
  }
  collectclick = (ev)=>{
    ev.preventDefault();
    let {pinfo,title} = this.state;
    let arr1 = Object.assign(pinfo);
    let arr2 = JSON.parse(localStorage.getItem('users'))||[];
    if(arr2.length){
      let arr3 = arr2.filter((e,i)=>{
        if(e.userType && e.userType === e.username){
          return e;
        }
      })
      this.setState({
        collect:!this.state.collect
      })
      // console.log(this.state.collect);
      if(this.state.collect){
        arr3[0].collect.forEach((e,i)=>{
          if(e === this.state.title){
            arr3[0].collect.splice(i,1);
          }
        })
      }else{
        arr3[0].collect.unshift(this.state.title);
      }

      localStorage.setItem('users',JSON.stringify(arr2));
    }
  }
  render(){
    let {pinfo} = this.state;
    let pinfo1 = Object.assign(pinfo);
    let list = null;
    if(pinfo1.length){
      list = pinfo1.map((e,i)=>{
        return <div id="pact" key={i+7}>
          <div key={i+6} className="pimg"><img src={e.author.avatar} /></div>
          <div key={i+5} className="pitem">
            <p key={i+4} className="p_item">
              <span>{e.created}</span>
              <span><a href={e.author.alt}>{e.author.name}</a></span>
            </p>
            <p key={i+3} className="p_act">{e.content}</p>
            <p key={i+2} className="p_icon">来自微奇生活</p>
          </div>
        </div>
      })
      localStorage.setItem('diss',JSON.stringify(pinfo))
    }
    return(
      <div>
        <div  id={this.state.show}>
          <NormalLoginForm/>
        </div>

        <div id="redhhh">
          <div className="webpage_read item_read">
          <h1 className="item_h1">{this.state.title}</h1>
            <div id="webpage_image_img_span"><img src={this.state.img} /><span>{this.state.name}</span><span>{this.state.time}</span></div>
          </div>
          <div id="actic"></div>
        </div>
        <div id="banquan">
          <span>本文版权归 魏小河 所有，任何形式转载请联系作者。</span><br/>
          <span>了解版权计划</span>
        </div>
        <div
          className="shoucang"
          onClick = {this.collectclick}
          ref = {(collect)=>{this.collect = collect}}
          style = {{color:this.state.collect?'#1db35b':'#000'}}
         >收藏此文章
       </div>
        <div id="pinglun">
          <div>
            <div className="pingfen">
              <p className="read_react_star read_react">评分</p>
              <Rate
                className="read_star"
                onChange={this.starChange}
              />
            </div>
            <div  className="pingfen"><p className="read_react">回应</p></div>
            <textarea
              name=""
              cols="95"
              rows="6"
              className="read_textarea"
              placeholder="说点什么...最少输入10个字符"
              datatype="*10-100"
              style={{resize:'none'}}
              onChange={this.changeTextarea}
              value={this.state.val}
              >
               </textarea>
              <p className="p_button">
               <input
                 type="button"
                 value="发表评论"
                 className="push_item"
                 onClick={this.click}
               />
             </p>
            {list}
          </div>
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
let pitem = [];
let url = window.location.href.slice(32);
// console.log(url)
// http://localhost:3000/homeimage/633311053

$.ajax({
  url:'https://api.douban.com/v2/note/'+window.location.href.slice(31)+'/comments',
  dataType:'jsonp',
  success:function(data){
    console.log(data);
    pitem = data.comments;
  }
})
function getItem(data){
  // console.log(pitem)
  return JSON.parse(localStorage.getItem(data)) || pitem
}
export default Rone;
