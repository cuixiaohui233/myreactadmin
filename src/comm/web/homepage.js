import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,

} from 'react-router-dom';
import $ from 'jquery';
import './webpage.css';
let logo  = require('./img/logo.gif');
let banner  = require('./img/banner.gif');
// let rabbit = require('./img/p1430226140.webp');
let img1 = require('./img/1.webp');
let img2 = require('./img/2.webp');
let img3 = require('./img/3.webp');
let img4 = require('./img/4.webp');
let img5 = require('./img/5.webp');
let img6 = require('./img/6.webp');
let img7 = require('./img/7.webp');
let img8 = require('./img/8.webp');
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
let u13 = require('./img/u-img/u74022697-14.jpg');
let u14 = require('./img/u-img/u2775094-59.jpg');
let u15 = require('./webImage/images/u93592263-4.jpg');
let u16 = require('./webImage/images/u53177132-53.jpg');
let u17 = require('./webImage/images/u1323769-8.jpg');
let u18 = require('./webImage/images/u1073557-16.jpg');
let u19 = require('./webImage/images/u63985391-16.jpg');
let u20 = require('./webImage/images/u21565824-22.jpg');
let img1_1 = require('./webImage/images/p2201465584.webp');
let img1_2 = require('./webImage/images/p2201683567.webp');
let img1_3 = require('./webImage/images/p2201801329.webp');
let img1_4 = require('./webImage/images/p2201801338.webp');
let img1_5 = require('./webImage/images/p2201801401.webp');
let img1_6 = require('./webImage/images/p2201801403.webp');

let img2_1 = require('./webImage/images/p2496090156.webp');
let img2_2 = require('./webImage/images/p2496090160.webp');
let img2_3 = require('./webImage/images/p2496090161.webp');
let img2_4 = require('./webImage/images/p2496090164.webp');
let img2_5 = require('./webImage/images/p2496090166.webp');
let img2_6 = require('./webImage/images/p2496090167.webp');

let img3_1 = require('./webImage/images/p2495967745.webp');
let img3_2 = require('./webImage/images/p2495967411.webp');
let img3_3 = require('./webImage/images/p2495970932.webp');
let img3_4 = require('./webImage/images/p2496706521.webp');
let img3_5 = require('./webImage/images/p2497278159.webp');
let img3_6 = require('./webImage/images/p2497415258.webp');

let img4_1 = require('./webImage/images/p2497540936.webp');
let img4_2 = require('./webImage/images/p2496607316.webp');
let img4_3 = require('./webImage/images/p2496642779.webp');
let img4_4 = require('./webImage/images/p2496607304.webp');
let img4_5 = require('./webImage/images/p2496607306.webp');
let img4_6 = require('./webImage/images/p2496607312.webp');

let img5_1 = require('./webImage/images/p2496207023.webp');
let img5_2 = require('./webImage/images/p2496206806.webp');
let img5_3 = require('./webImage/images/p2496206781.webp');
let img5_4 = require('./webImage/images/p2496206736.webp');
let img5_5 = require('./webImage/images/p2496206669.webp');
let img5_6 = require('./webImage/images/p2496206512.webp');

let img6_1 = require('./webImage/images/p2493231086.webp');
let img6_2 = require('./webImage/images/p2493230842.webp');
let img6_3 = require('./webImage/images/p2493231046.webp');
let img6_4 = require('./webImage/images/p2493231056.webp');
let img6_5 = require('./webImage/images/p2493231011.webp');
let img6_6 = require('./webImage/images/p2493231094.webp');

let img7_1 = require('./webImage/images/p2495104146.webp');
let img7_2 = require('./webImage/images/p2495071023.webp');
let img7_3 = require('./webImage/images/p2495172353.webp');
let img7_4 = require('./webImage/images/p2495071025.webp');
let img7_5 = require('./webImage/images/p2495070696.webp');
let img7_6 = require('./webImage/images/p2495341059.webp');

let img8_1 = require('./webImage/images/p2496034293.webp');
let img8_2 = require('./webImage/images/p2496034154.webp');
let img8_3 = require('./webImage/images/p2496034293.webp');
let img8_4 = require('./webImage/images/p2496034603.webp');
let img8_5 = require('./webImage/images/p2496034762.webp');
let img8_6 = require('./webImage/images/p2496039044.webp');

let market1 = require('./webImage/images/p1974318.jpg');
let market2 = require('./webImage/images/p1964580.jpg');
let market3 = require('./webImage/images/p1989799.jpg');
let market4 = require('./webImage/images/p1987630.jpg');
let market5 = require('./webImage/images/p504264.jpg');
let market6 = require('./webImage/images/p1934032.jpg');
// console.log(img8_6);
let hot = require('./webImage/images/hot.jpg')
let uadmin = require('../web/webImage/images/timg.jpg')
class Homepage extends Component{
  constructor(){
    super();
    this.state = {
      hot:[],
      article:[],
      arr:[],
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
        article:getItem('article'),
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
                arr2.map((e,i)=>{
                  if(e.username == this.state.val){
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
    let {img,article,market} = this.state;
    let img1 = Object.assign(img);
    let image = null;
    let image1 = null;
    // console.log(article)
    let article1 = Object.assign(article);
    let art = null;
    let art1 = null;
    let market1 = Object.assign(market);
    let supermarket = null;
    if(article.length){
      localStorage.setItem('article',JSON.stringify(article));
    }
    if(img.length){
      localStorage.setItem('img',JSON.stringify(img));
    }
    if(market.length){
      localStorage.setItem('market',JSON.stringify(market));
    }
    image = img1.map((e,i)=>{
      let data = {
        img:e.封面,
        txt:e.标题,
      }
      if(i <= 3){
        return <dl key={i+1} className="img_dl">
                <dt key={i+2}>
                  <span className="img_span" key={i+3}>
                  <Link to={'/web/webimage/'+e.id}><img src={data.img} key={i+4}/></Link>
                  </span>
                </dt>
                <dd key={i+5}>
                  <Link to={'/web/webimage/'+e.id}>{data.txt}</Link>
                </dd>
              </dl>
      }
    })
    image1 = img1.map((e,i)=>{
      let data = {
        img:e.封面,
        txt:e.标题,
        id:e.id,
        key:i
      }
      if(i<8){
        return <dl key={i+1} className="img_dl">
                <dt key={i+2}>
                  <span key={i+3} className="img_span">
                  <Link  key={i+4} to={'/web/webimage/'+e.id}><img src={data.img} /></Link>
                  </span>
                </dt>
                <dd key={i+5}>
                  <Link  key={i+6} to={'/web/webimage/'+e.id}>{data.txt}</Link>
                </dd>
              </dl>
      }

    })
    art = article1.map((e,i)=>{
      return <li  key={i+1}
        onClick={this.artClick}
        ><Link to={'/homeimage/'+e.id} id = {e.id}>{e.标题}</Link></li>
    })
    art1 = article1.map((e,i)=>{
      if(i<=4){
        return <Link key={i+6} to={'/homeimage/'+e.id} id = {e.id}>
                <div key={i+1} id="author">
                  <div key={i+2} className="art_author"><img src={e.avatar} className="art_img"/><span>{e.作者}</span></div>
                  <div key={i+3} className="art_item">
                    <p key={i+4}>{e.标题}</p>
                    <p key={i+5} className="art_txt">{e.内容}</p>
                  </div>
                </div>
              </Link>
      }
    })
    supermarket = market1.map((e,i)=>{
      return  <div  key={i+12} className="grid-item">
                <div key={i+11}  className="product-item" data-id="90190">
                  <div key={i+10}  className="p-img">
                    <a key={i+9}  href={e.href} target="_blank" title="小巨蛋T1便携式茶具礼品套装砂岩釉茶盒版（极客黑）">
                      <img key={i+8}  className="market_img" src={e.封面} />
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
                  <div key={i+3}  key={i+1}  className="p-price">
                    <del key={i+2}  className="price">736.00</del>
                    <i key={i+1}  className="price">368.00</i>
                  </div>
                </div>
              </div>
    })
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
            标题:'为什么《圆桌派》的观众老骂蒋方舟？',
            作者:'魏小河',
            avatar:u1,
            更新时间:'2017-08-27 14:00:56',
            内容:'一 我是《锵锵三人行》的忠实观众，顺理成章的，也成为《圆桌派》的观众。 和以前...',
            id:633196260,
            分类:'行业行情',
            发布状态:'发布',
            动作:'审核',
            checked:false
          },{
            标题:'独自在家',
            作者:'安歌',
            avatar:u2,
            更新时间:'2017-08-26 17:35:54',
            id:633649108,
            内容:'在这之前我一直以为一成不变地等待我的世界失陷了，当我还不知道前方是什么，后方...',
            分类:'行业行情',
            发布状态:'发布',
            动作:'审核',
            checked:false
          },{
            标题:'当我逛书展不买书时我还能做些什么',
            id:634206154,
            作者:'向三峡',
            avatar:u3,
            更新时间:'2017-08-27 06:49:07',
            内容:'今年是我第三次参加上海书展，开幕前，新同事求带，微信问我何时去，我告其8月18日...',
            分类:'行业行情',
            发布状态:'发布',
            动作:'审核',
            checked:false
          },{
            标题:'艺术又终结了吗？',
            id:633311053,
            作者:'神经现实',
            avatar:u4,
            更新时间:'2017-08-26 16:41:41',
            内容:'越来越多的艺术品和艺术形式以前所未有的数量产出。艺术馆普及世界各地，在有些国...',
            分类:'行业行情',
            发布状态:'发布',
            动作:'审核',
            checked:false
          },{
            标题:'终于，和林家栋谈了谈电影、表演和金像奖影帝',
            id:633528924,
            作者:'支离疏',
            avatar:u5,
            更新时间:'2017-08-27 11:34:54',
            内容:'',
            分类:'行业行情',
            发布状态:'发布',
            动作:'审核',
            checked:false
          },{
            标题:'新品种草&经典回顾丨谁能不爱哑光口红',
            id:634021319,
            作者:'芙蕾娅Freya',
            avatar:u6,
            更新时间:'2017-08-26 00:31:06',
            内容:'',
            分类:'行业行情',
            发布状态:'发布',
            动作:'审核',
            checked:false
          },{
            标题:'青梅竹马这件小事',
            id:634104356,
            作者:'赤豆年糕',
            avatar:u7,
            更新时间:'2017-08-27 12:28:12',
            内容:'',
            分类:'行业行情',
            发布状态:'发布',
            动作:'审核',
            checked:false
          },{
            标题:'今 敏先生去世的第七年，回忆他曾经的自叙',
            id:634483634,
            作者:'机核网',
            avatar:u8,
            更新时间:'2017-08-27 12:51:31',
            内容:'',
            分类:'行业行情',
            发布状态:'发布',
            动作:'审核',
            checked:false
          },{
            标题:'希望还是虚妄？十字路口的国产动画电影',
            id:634444806,
            作者:'白鹅纪',
            avatar:u9,
            更新时间:'2017-08-25 21:50:48',
            内容:'',
            分类:'行业行情',
            发布状态:'发布',
            动作:'审核',
            checked:false
          },{
            标题:'7位女摄影师拍同一对姑娘',
            id:634529429,
            作者:'七七',
            avatar:u10,
            更新时间:'2017-08-27 14:00:36',
            内容:'',
            分类:'行业行情',
            发布状态:'发布',
            动作:'审核',
            checked:false
          },{
            标题:'这支香，仿佛收集了整个夏天的阳光',
            id:634074646,
            作者:'神奇蘑蘑菇',
            avatar:u11,
            更新时间:'2017-08-26 17:15:51',
            内容:'',
            分类:'行业行情',
            发布状态:'发布',
            动作:'审核',
            checked:false
          },{
            标题:'我唐日常（十五）猝不及防的更新',
            id:634525453,
            作者:'春坊正字',
            uid: 51610855,
            avatar:u12,
            更新时间:'2017-08-27 09:04:09',
            内容:'',
            分类:'行业行情',
            发布状态:'发布',
            动作:'审核',
            checked:false
          }
      ];
  }else if(data === 'img'){
      return JSON.parse(localStorage.getItem('img')) || [
        {
          标题:'没有青海湖和茶卡的青海',
          id:1651058003,
          封面:img1,
          更新时间:'2017-8-15',
          发布状态:'已发布',
          操作:'jj',
          动作:'审核',
          checked:false,
          头像:u13,
          title:'葫芦娃你站住的相册',
          info:'hahahah',
          num:150,
          img:[img2_1,img2_2,img2_3,img2_4,img2_5,img2_6]

        },
        {
          标题:'「人们」',
          id:1638051845,
          封面:img2,
          更新时间:'2017-8-15',
          发布状态:'已发布',
          操作:'jj',
          动作:'审核',
          checked:false,
          头像:u14,
          title:'Doublescotch的相册',
          num:150,
          img:[img3_1,img3_2,img3_3,img3_4,img3_5,img3_6]

        },{
         标题:'总有新的世界在等你－日本',
         id:1651158281,
         封面:img3,
         更新时间:'2017-8-15',
         发布状态:'已发布',
         操作:'jj',
         动作:'审核',
         checked:false,
         头像:u15,
         title:'王小爆的相册',
         num:97,
         img:[img1_1,img1_2,img1_3,img1_4,img1_1,img1_5]
        },{
          标题:'看 云',
          id:1651235694,
          封面:img4,
          更新时间:'2017-8-15',
          发布状态:'已发布',
          操作:'jj',
          动作:'审核',
          checked:false,
          头像:u16,
          title:'若酱的相册',
          num:150,
          img:[img4_1,img4_2,img4_3,img4_4,img4_5,img4_6]

        },{
          标题:'在商业社会做个堂堂正正的废物会死吗？',
          id:1651117401,
          封面:img5,
          更新时间:'2017-8-15',
          发布状态:'已发布',
          操作:'jj',
          动作:'审核',
          checked:false,
          头像:u17,
          title:'松本南国的相册',
          num:150,
          img:[img5_1,img5_2,img5_3,img5_4,img5_5,img5_6]
        },{
          标题:'萨尔兹卡默古特',
          id:1649846355,
          封面:img6,
          更新时间:'2017-8-15',
          发布状态:'已发布',
          操作:'jj',
          动作:'审核',
          checked:false,
          头像:u18,
          title:'缅怀树的相册',
          num:150,
          img:[img6_1,img6_2,img6_3,img6_4,img6_5,img6_6]
        },{
          标题:'夏天去香港看海',
          id:1650648598,
          封面:img7,
          更新时间:'2017-8-15',
          发布状态:'已发布',
          操作:'jj',
          动作:'审核',
          checked:false,
          头像:u19,
          title:'Moony的相册',
          num:150,
          img:[img7_1,img7_2,img7_3,img7_4,img7_5,img7_6]
        },{
          标题:'北京红冶钢厂',
          id:1651038482,
          封面:img8,
          更新时间:'2017-8-15',
          发布状态:'已发布',
          操作:'jj',
          动作:'审核',
          checked:false,
          头像:u20,
          title:'杨大壹的相册',
          num:150,
          img:[img8_1,img8_2,img8_3,img8_4,img8_5,img8_6]
        }
      ]
    // }

  }else if(data === 'market'){
    // localStorage.removeItem('market');
    // if(list2.length){
    //   return JSON.parse(localStorage.getItem('market'))
    // }else{
      return JSON.parse(localStorage.getItem('market')) || [{
        id:1,
        标题:'悦诗风吟',
        封面:market1,
        图片名称:'innisfree 悦诗风吟 绿茶籽精萃水分菁露 80ml/瓶',
        href:'https://market.douban.com/item/207844/?r=5&index=1&category=index',
        更新时间:'139.00',
        发布状态:'已发布',
        操作:'jj',
        动作:'审核',
        checked:false
      },{
        id:2,
        标题:'ERICD',
        封面:market2,
        图片名称:'ERICD2017新版型新面料爆款T恤99元3件装',
        更新时间:'99.00',
        href:'https://market.douban.com/item/204712/?r=5&index=2&category=index',
        发布状态:'已发布',
        操作:'jj',
        动作:'审核',
        checked:false
      },{
        id:3,
        标题:'hanalice',
        封面:market3,
        图片名称:'hanalice彩虹糖系列蝴蝶芭蕾平底鞋（十五色）',
        更新时间:'139.00',
        href:'https://market.douban.com/item/213750/?r=5&index=3&category=index',
        发布状态:'已发布',
        操作:'jj',
        动作:'审核',
        checked:false
      },{
        id:4,
        标题:'觅潮记',
        封面:market4,
        图片名称:'粮赞低糖手工莲子火腿桂花板栗蟹黄绿茶月饼礼盒  中秋月饼礼盒',
        更新时间:'139.00',
        href:'https://market.douban.com/item/215268/?r=5&index=4&category=index',
        发布状态:'已发布',
        操作:'jj',
        动作:'审核',
        checked:false
      },{
        id:5,
        标题:'macbook',
        封面:market5,
        图片名称:'好柿来了 | 土楼红柿 4斤',
        更新时间:'149.00',
        href:'https://market.douban.com/item/31078/?r=5&index=5&category=index',
        发布状态:'已发布',
        操作:'jj',
        动作:'审核',
        checked:false
      },{
        id:6,
        标题:'小巨蛋',
        封面:market6,
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
export default Homepage;
