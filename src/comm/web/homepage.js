import React,{Component} from 'react';
import { connect } from 'react-redux';
import {
  Link,

} from 'react-router-dom';
import './webpage.css';

const imgURL = require.context("../img",true,/^\.\/.*\.webp$/);
const projectURl = imgURL.keys().map(imgURL);

// let logo  = require('./img/logo.gif');
let banner  = require('./img/banner.gif');


let u1 = require('./webImage/images/u4058053-68.jpg');
let u2 = require('./img/u2905955-15.jpg');
let u3 = require('./img/u3340912-61.jpg');
let u4 = require('./img/u1427914-54.jpg');
let u5 = require('./img/u1024373-11.jpg');
let u6 = require('./img/u9546008-61.jpg');
let u7 = require('./img/u165265254-3.jpg');
let u8 = require('./img/u162576392-2.jpg');
let u9 = require('./img/u158210937-7.jpg');
let u10 = require('./img/u34715093-12.jpg');
let u11 = require('./img/u38396260-11.jpg');
let u12 = require('./img/u51610855-17.jpg');

let market1 = require('./webImage/images/market1.jpg');
let market2 = require('./webImage/images/market2.jpg');
let market3 = require('./webImage/images/market3.jpg');
let market4 = require('./webImage/images/market4.jpg');
let market5 = require('./webImage/images/market5.jpg');
let market6 = require('./webImage/images/market6.jpg');
// console.log(img8_6);
let hot = require('./webImage/images/hot.jpg');
let uadmin = require('../web/webImage/images/timg.jpg');
class Homepage extends Component{
  constructor(){
    super();
    this.state = {
      hot:[],
      article:[],
      img:[],
      market:[],
      list:[],
      val:'',
      val1:'',
      arr:[
          {
            id:1,
            username:'admin',
            penname:'管理员',
            oneselfinfo:'厉害到爆炸',
            password:'aaa123',
            email:'15931662302@163.com',
            bool:true,
            states:'admin',
            sex:'女',
            phone:'15931662302',
            address:'',
            time:'2017-9-6',
            checked:false,
            img:uadmin,
            userType:'admin',
            collect:[],
            score:[],
            comment:[],
        }
      ],
      loginClass:'web_login'
    }
  }
  componentDidMount(){
    // console.log(getItem('img'));
    // setTimeout(()=>{
      this.setState({
        img:getItem('img'),
        market:getItem('market')
      });
    // });
  }
  change1 = (ev)=>{
    this.setState({
      val:ev.target.value
    })
  }
  change2 = (ev)=>{
    this.setState({
      val1:ev.target.value
    })
  }
  click = ()=>{
    if(this.state.val && this.state.val1){
      let arr2 = JSON.parse(localStorage.getItem('users')) || this.state.arr;
      let arr = arr2.find(e=>e.username === this.state.val);
      // console.log(arr,this.state.val1);
        if(arr2.find(e=>e.username === this.state.val)){
          // console.log(arr.password,this.state.val1);
          if(arr.password+'' === this.state.val1){
            if(arr.bool){
                this.props.changeRoute('true',arr.states);
                // console.log(arr.username);
                for(var i=0;i<arr2.length;i++){
                  if(arr2[i].userType){
                    arr2[i].userType = null;
                  }
                }
                arr2.forEach((e,i)=>{
                  if(e.username === this.state.val){
                    e.userType = e.username;
                  }
                })
                localStorage.setItem('users',JSON.stringify(arr2));
                this.setState({
                  loginClass:'web_login_none'
                })
            }
          }else{
            alert('密码错误');
          }
        }else{
          alert('对不起没有此用户');
        }
    }else{
      alert('请输入密码！');
    }
  }
  render(){
    let {img,market} = this.state;
    let { data } = this.props;
    let img1 = this.props.imgData;
    let image = null;
    let image1 = null;
    let article1 = data.data;
    let art = null;
    let art1 = null;
    let market1 = Object.assign(market);
    let supermarket = null;

    // let srcURL = '';
    //
    // for(let i=0;i<projectURl.length;i++){
    //   if(projectURl[i].indexOf(img1[i].cover) > 0){
    //       srcURL = projectURl[i];
    //   }
    // }
    if(market.length){
      localStorage.setItem('market',JSON.stringify(market));
    }
    image = img1.map((e,i)=>{
      let data = {
        img:e.cover,
        txt:e.title,
      };
      if(i <= 3){
        return <dl key={i+1} className="img_dl">
                <dt key={i+2}>
                  <span className="img_span" key={i+3}>
                  <Link to={'/web/webimage/'+e.id}><img src={projectURl[i].indexOf(img1[i].cover) > 0 ? projectURl[i] : ''} key={i+4}/></Link>
                  </span>
                </dt>
                <dd key={i+5}>
                  <Link to={'/web/webimage/'+e.id}>{data.txt}</Link>
                </dd>
              </dl>
      }else {
          return null;
      }

    });
    image1 = img1.map((e,i)=>{
      let data = {
        img:e.cover,
        txt:e.title,
        id:e.id,
        key:i
      };
      if(i<8){
        return <dl key={i+1} className="img_dl">
                <dt key={i+2}>
                  <span key={i+3} className="img_span">
                  <Link  key={i+4} to={'/web/webimage/'+e.id}><img src={projectURl[i].indexOf(img1[i].cover) > 0 ? projectURl[i] : ''} /></Link>
                  </span>
                </dt>
                <dd key={i+5}>
                  <Link  key={i+6} to={'/web/webimage/'+e.id}>{data.txt}</Link>
                </dd>
              </dl>
      }else {
          return null;
      }

    });
    art = article1.map((e,i)=>{
      return <li  key={i+1}
        onClick={this.artClick}
        ><Link to={'/homeimage/'+e.id} id = {e.id}>{e.title}</Link></li>
    });
    art1 = article1.map((e,i)=>{
      if(i<=4){
        return <Link key={i+6} to={'/homeimage/'+e.id} id = {e.id}>
                <div key={i+1} id="author">
                  <div key={i+2} className="art_author"><img src={e.avatar} className="art_img"/><span>{e.author}</span></div>
                  <div key={i+3} className="art_item">
                    <p key={i+4}>{e.title}</p>
                    <p key={i+5} className="art_txt">{e.content}</p>
                  </div>
                </div>
              </Link>
      }else {
          return null;
      }
    });
    supermarket = market1.map((e,i)=>{
      return  <div  key={i+12} className="grid-item">
                <div key={i+11}  className="product-item" data-id="90190">
                  <div key={i+10}  className="p-img">
                    <a key={i+9}  href={e.href} target="_blank" title="小巨蛋T1便携式茶具礼品套装砂岩釉茶盒版（极客黑）">
                      <img key={i+8}  className="market_img" src={e.cover} />
                    </a>
                  </div>
                  <div key={i+7}  className="p-title">
                    <a key={i+6}  href="https://market.douban.com/item/90190/?r=5&amp;index=6&amp;category=index" target="_blank" title={e.图片名称}>
                      {e.图片名称}
                    </a>
                  </div>
                  <div key={i+5}  className="p-brand">
                    <a key={i+4}  href="https://market.douban.com/shop/miniteaset/" target="_blank">小巨蛋市集</a>
                  </div>
                  <div className="p-price">
                    <del key={i+2}  className="price">736.00</del>
                    <i key={i+1}  className="price">368.00</i>
                  </div>
                </div>
              </div>
    });
    return(
      <div className="webpage">
        <div id="web_banner">
          <img src={banner} className="banner_img" />
          <div id="web_welcome">
            <h3>欢迎登陆微奇生活</h3>
          </div>
          <div id={this.state.loginClass}>
            <p className="username"><input
              type="text"
              value={this.state.val}
              onChange={this.change1}
              placeholder="手机号"
            /></p>
            <p className="password"><input
              type="password"
              onChange={this.change2}
              value={this.state.val1}
              placeholder="密码"
            /></p>
            <p id="login_button">
              <input
                type="button"
                value="登录"
                onClick={this.click}
                className="user_login"
              />
              <Link to="/add">
              <input
                type="button"
                value="注册"
                className="user_add"
                onClick={this.add}
              />
            </Link>
          </p>
          </div>
        </div>
        <div id="word">
          <h3 className="hot_item">热点内容· · · · · · </h3>
          <div id="img_dl">
            {image}
          </div>
          <div id="img_ul">
            <ul className="img_ul">
            {art}
            </ul>
          </div>
          <div id="img_ll">
            <a href="https://erebor.douban.com/redirect/?ad=188759&uid=&bid=sJKqm499hcE&unit=dale_anonymous_homepage_right_top&crtr=3%3A%2F&mark=&hn=daisy9a&sig=4c82a34477315d44dc7769a3b08f7e710b6551830f2fea3410d55f59ef9fafc93dfa273ff35fd72a71bf0b419c8580c0083568e9025324c5eb56d528219848ff&pid=debug_91d7dab63eca2d58f451be19c139c76c7fc53f43&target=aHR0cHM6Ly9tLmRvdWJhbi5jb20vcGFnZS9oMDl5c3Rx">
              <img className="img_ll_image" src={hot} />
            </a>
            <div className="img_ll_div">
              <span className="hot_art">热门话题</span>
              <ul className="img_ul" style={{paddingLeft:'10px'}}>
                <li><a href="http://www.vikilife.com/150144.html" title="煎饼摊大妈：我月入3万，怎么会少你一个鸡蛋！" rel="bookmark">#煎饼摊大妈：我月入3...</a></li>
                <li><a href="http://www.vikilife.com/150130.html" title="写给女儿：我宁愿你不“善良”" rel="bookmark">#写给女儿：我宁愿你不“善良”</a></li>
                <li><a href="http://www.vikilife.com/149544.html" title="7个养猫小技巧 喜欢喵星人的必看​​" rel="bookmark">#7个养猫小技巧 喜欢喵星人的必看​​</a></li>
                <li><a href="http://www.vikilife.com/149495.html" title="很多花根本不用买，扯几片叶子就能种出一片花园！" rel="bookmark">#很多花根本不用买，扯几片叶...</a></li>
                <li><a href="http://www.vikilife.com/149404.html" title="手工视频教程：好看的鲜花绽放贺卡DIY" rel="bookmark">#手工视频教程：好看的鲜花绽放贺卡DIY</a></li>
                <li><a href="http://www.vikilife.com/149337.html" title="手工diy视频教程：用棉花和空瓶做了一盏云朵灯" rel="bookmark">#手工diy视频教程：用棉花和空瓶做...</a></li>
                <li><a href="http://www.vikilife.com/149247.html" title="夏天喝过这些饮料才叫爽，有哪些好喝的饮料推荐" rel="bookmark">#夏天喝过这些饮料才叫爽，有哪些好...</a></li>
                <li><a href="http://www.vikilife.com/150035.html" title="《战狼2》10句最经典台词，燃爆了！" rel="bookmark">#《战狼2》10句最经典台词，燃爆了！</a></li>
                <li><a href="http://www.vikilife.com/149572.html" title="你的不自律，正在慢慢毁掉你" rel="bookmark">#你的不自律，正在慢慢毁掉你</a></li>
                <li><a href="http://www.vikilife.com/149328.html" title="《摔跤吧，爸爸》：爱你最好的方式，是给你力量" rel="bookmark">#《摔跤吧，爸爸》：爱你最好的方...</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div id="article">
          <h3 className="hot_item hot_item_add">文章</h3>
          <div id="hot_article">
            <h3><span className="hot_art">热门文章</span>· · · · · · <Link to="/web/read">更多</Link></h3>
            <div className="hot_article_item">{art1}</div>
          </div>
        </div>
        <div id="image">
          <h3 className="hot_item hot_item_add">图集</h3>
          <div id="hot_image">
            <h3><span className="hot_art">热门相册</span>· · · · · · <Link to="/web/image">更多</Link></h3>
            <div className="img_item">{image1}</div>
          </div>
        </div>
        <div id="margit">
          <h3 className="hot_item hot_item_add">市集</h3>
          <div id="hot_margit">
            <h3><span className="hot_art">热门商品</span>· · · · · · <Link to="/">更多</Link></h3>
            <div>{supermarket}</div>
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

function getItem(data){
  if(data === 'article'){
      return JSON.parse(localStorage.getItem('article')) || [
        {
            title:'为什么《圆桌派》的观众老骂蒋方舟？',
            author:'魏小河',
            avatar:u1,
            更新时间:'2017-08-27 14:00:56',
            content:'一 我是《锵锵三人行》的忠实观众，顺理成章的，也成为《圆桌派》的观众。 和以前...',
            id:633196260,
            分类:'行业行情',
            发布状态:'发布',
            动作:'审核',
            checked:false
          },{
            title:'独自在家',
            author:'安歌',
            avatar:u2,
            更新时间:'2017-08-26 17:35:54',
            id:633649108,
            content:'在这之前我一直以为一成不变地等待我的世界失陷了，当我还不知道前方是什么，后方...',
            分类:'行业行情',
            发布状态:'发布',
            动作:'审核',
            checked:false
          },{
            title:'当我逛书展不买书时我还能做些什么',
            id:634206154,
            author:'向三峡',
            avatar:u3,
            更新时间:'2017-08-27 06:49:07',
            content:'今年是我第三次参加上海书展，开幕前，新同事求带，微信问我何时去，我告其8月18日...',
            分类:'行业行情',
            发布状态:'发布',
            动作:'审核',
            checked:false
          },{
            title:'艺术又终结了吗？',
            id:633311053,
            author:'神经现实',
            avatar:u4,
            更新时间:'2017-08-26 16:41:41',
            content:'越来越多的艺术品和艺术形式以前所未有的数量产出。艺术馆普及世界各地，在有些国...',
            分类:'行业行情',
            发布状态:'发布',
            动作:'审核',
            checked:false
          },{
            title:'终于，和林家栋谈了谈电影、表演和金像奖影帝',
            id:633528924,
            author:'支离疏',
            avatar:u5,
            更新时间:'2017-08-27 11:34:54',
            content:'',
            分类:'行业行情',
            发布状态:'发布',
            动作:'审核',
            checked:false
          },{
            title:'新品种草&经典回顾丨谁能不爱哑光口红',
            id:634021319,
            author:'芙蕾娅Freya',
            avatar:u6,
            更新时间:'2017-08-26 00:31:06',
            content:'',
            分类:'行业行情',
            发布状态:'发布',
            动作:'审核',
            checked:false
          },{
            title:'青梅竹马这件小事',
            id:634104356,
            author:'赤豆年糕',
            avatar:u7,
            更新时间:'2017-08-27 12:28:12',
            content:'',
            分类:'行业行情',
            发布状态:'发布',
            动作:'审核',
            checked:false
          },{
            title:'今 敏先生去世的第七年，回忆他曾经的自叙',
            id:634483634,
            author:'机核网',
            avatar:u8,
            更新时间:'2017-08-27 12:51:31',
            content:'',
            分类:'行业行情',
            发布状态:'发布',
            动作:'审核',
            checked:false
          },{
            title:'希望还是虚妄？十字路口的国产动画电影',
            id:634444806,
            author:'白鹅纪',
            avatar:u9,
            更新时间:'2017-08-25 21:50:48',
            content:'',
            分类:'行业行情',
            发布状态:'发布',
            动作:'审核',
            checked:false
          },{
            title:'7位女摄影师拍同一对姑娘',
            id:634529429,
            author:'七七',
            avatar:u10,
            更新时间:'2017-08-27 14:00:36',
            content:'',
            分类:'行业行情',
            发布状态:'发布',
            动作:'审核',
            checked:false
          },{
            title:'这支香，仿佛收集了整个夏天的阳光',
            id:634074646,
            author:'神奇蘑蘑菇',
            avatar:u11,
            更新时间:'2017-08-26 17:15:51',
            content:'',
            分类:'行业行情',
            发布状态:'发布',
            动作:'审核',
            checked:false
          },{
            title:'我唐日常（十五）猝不及防的更新',
            id:634525453,
            author:'春坊正字',
            uid: 51610855,
            avatar:u12,
            更新时间:'2017-08-27 09:04:09',
            content:'',
            分类:'行业行情',
            发布状态:'发布',
            动作:'审核',
            checked:false
          }
      ];
  }else if(data === 'img'){
      return JSON.parse(localStorage.getItem('img')) || []
    // }

  }else if(data === 'market'){
    // localStorage.removeItem('market');
    // if(list2.length){
    //   return JSON.parse(localStorage.getItem('market'))
    // }else{
      return JSON.parse(localStorage.getItem('market')) || [{
        id:1,
        title:'悦诗风吟',
        cover:market1,
        图片名称:'innisfree 悦诗风吟 绿茶籽精萃水分菁露 80ml/瓶',
        href:'https://market.douban.com/item/207844/?r=5&index=1&category=index',
        更新时间:'139.00',
        发布状态:'已发布',
        操作:'jj',
        动作:'审核',
        checked:false
      },{
        id:2,
        title:'ERICD',
        cover:market2,
        图片名称:'ERICD2017新版型新面料爆款T恤99元3件装',
        更新时间:'99.00',
        href:'https://market.douban.com/item/204712/?r=5&index=2&category=index',
        发布状态:'已发布',
        操作:'jj',
        动作:'审核',
        checked:false
      },{
        id:3,
        title:'hanalice',
        cover:market3,
        图片名称:'hanalice彩虹糖系列蝴蝶芭蕾平底鞋（十五色）',
        更新时间:'139.00',
        href:'https://market.douban.com/item/213750/?r=5&index=3&category=index',
        发布状态:'已发布',
        操作:'jj',
        动作:'审核',
        checked:false
      },{
        id:4,
        title:'觅潮记',
        cover:market4,
        图片名称:'粮赞低糖手工莲子火腿桂花板栗蟹黄绿茶月饼礼盒  中秋月饼礼盒',
        更新时间:'139.00',
        href:'https://market.douban.com/item/215268/?r=5&index=4&category=index',
        发布状态:'已发布',
        操作:'jj',
        动作:'审核',
        checked:false
      },{
        id:5,
        title:'macbook',
        cover:market5,
        图片名称:'好柿来了 | 土楼红柿 4斤',
        更新时间:'149.00',
        href:'https://market.douban.com/item/31078/?r=5&index=5&category=index',
        发布状态:'已发布',
        操作:'jj',
        动作:'审核',
        checked:false
      },{
        id:6,
        title:'小巨蛋',
        cover:market6,
        图片名称:'茯缘高山原叶手筑茯砖茶400g',
        更新时间:'139.00',
        href:'https://market.douban.com/item/109603/?r=5&index=6&category=index',
        发布状态:'已发布',
        操作:'jj',
        动作:'审核',
        checked:false
      }];
  }
}

function mapStateToProps(state, ownProps){
    return {
        title:state.consultationReducer.title,
        data:state.consultationReducer.data,
        imgData:state.imageReducer.data.data
    }
}
const mapDispatchToProps = {

};

Homepage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Homepage);

export { Homepage };
