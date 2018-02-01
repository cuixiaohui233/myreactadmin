import React,{Component} from 'react';
import PickerSizesDemo1 from '../Data/Dateimage';
import DelandAdd from './DelandAdd';
import Tr from '../image/Tr';
import '../table/table.css';
import Page from '../page/page';
import { Button, notification } from 'antd';
import $ from 'jquery';

let img1 = require('../img/1.webp');
let img2 = require('../img/2.webp');
let img3 = require('../img/3.webp');
let img4 = require('../img/4.webp');
let img5 = require('../img/5.webp');
let img6 = require('../img/6.webp');
let img7 = require('../img/7.webp');
let img8 = require('../img/8.webp');

const openNotificationWithIcon1 = (type) => {
  // console.log(type);
    notification[type]({
      message: '删除成功',
      description: '成功删除数据',
    });
  };
const openNotificationWithIcon2 = (type) => {
  // console.log(type);
    notification[type]({
      message: '修改成功',
      description: '成功修改数据',
    });
  };

class Image extends Component{
  constructor(){
    super();
    this.state = {
      title:['','id','标题','封面','相册描述','更新时间','发布状态','操作'],
      data:[],
      power:[
        {name:'admin',type:'admin'},
        {name:'tourist',type:'tourist'}
      ],
      view:'all',
      info:[],
      page:1
    }
  }
  componentDidMount(){
    this.setState({
      data:getItem('img')
    });
  }
  delete = (newID)=>{
    // console.log(newID)
    let {data} = this.state;
    let data1 = Object.assign(data);
    let list = data1.filter((e,i)=>{
      return e.id !== newID;
    });
    // console.log(list);
    this.setState({
      data:list
    })
  }
  //受控表单
  change = (newId)=>{
    let {data} = this.state;
    let data1 = Object.assign(data);
    data1.map((e,i)=>{
      if(e.id === newId){
        e.checked = !e.checked;
      }
    })
    // console.log(data1)
    this.setState({
      data:data1
    })
  }
  //添加数据
  addText= (newTxt) =>{
    // console.log(newTxt)
    let {data} = this.state;
    let data1 = Object.assign(data);
    data1.push(newTxt);
    this.setState({
      data:data1
    })
    // console.log(this.maxId())
  }
  //最大id
  maxId = ()=>{
    let {data} = this.state;
    let data1 = Object.assign(data);
    let num = 0;
    data1.map((e,i)=>{
      if(e.id > num){
        num = e.id;
      }
    })
    return num+1;
  }
  //更新时间
  changeTime = ()=>{
    let date = new Date();
    let date1 = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
    return date1;
  }
  //批量删除
  alldel = ()=>{
    let {data} = this.state;
    let data1 = Object.assign(data);
    let list = null;
    list = data1.filter((e,i)=>!e.checked);
    // console.log(data1);
    this.setState({
      data:list
    })
  }
  //检索
  changeView = (newView,id)=>{
    // console.log(newView,id);
    if(id === 'search'){
      this.setState({
        view:'search',
        info:newView
      })
    }else {
      this.setState({
        view:'all',
        info:this.state.data
      })
    }
  }
  //页码切换
  changepage = (newpage)=>{
    this.setState({
      page:newpage
    })
  }
  //修改数据
  changedata = (newData)=>{
    // console.log(newData);
    let {data} = this.state;
    let data1 = Object.assign(data);
    data1.map((e,i)=>{
      if(e.id === newData.id){
        e.分类 = newData.分类
        e.标题 = newData.标题
        e.作者 = newData.作者
        e.info = newData.info
      }
    })
    this.setState({
      data:data1
    })
    openNotificationWithIcon2('success');
  }

  changecheckbox =(check)=>{
    let {data} = this.state;
    let data1 = Object.assign(data);
    data1.map((e,i)=>{
      if(e.id == check){
        e.checked = !e.checked;
      }
    })
    this.setState({
      data:data1
    })
  }
  //删除一张图片
  del_img = (newId,newTitle)=>{
    // console.log(this.state.data,newTitle);
    let newData = this.state.data.filter((e,i)=>{
      if(e.标题 === newTitle){
        return e;
      }
    })
    newData[0].img.forEach((e,i)=>{
      // console.log(newId,i);
      if(i+'' === newId){
        newData[0].img.splice(i,1);
      }
    })
//  console.log(newData,newData.img);
  }
  render(){
    let {data,title} = this.state;
    let data1 = Object.assign(data);
    let list = null;
    let item = null;
    let addanddel = null;
    let filterview = null;
    switch (this.state.view) {
      case 'search':
        filterview = this.state.info
        break;
      case 'all':
        filterview = this.state.data
        break;
    }
    if(this.props.power === 'admin'){
      if(filterview.length){
        list = filterview.map((e,i)=>{
          // console.log(e);
          let data = {
            id:e.id,
            标题:e.标题,
            封面:e.封面,
            图片名称:e.图片名称,
            Tags:e.Tags,
            更新时间:e.更新时间,
            发布状态:e.发布状态,
            动作:e.动作,
            操作:e.操作,
            info:e.info,
            img:e.img,
            头像:e.头像,
            key:i+new Date,
            checked:e.checked,
            delete:this.delete,
            change:this.change,
            changedata:this.changedata,
            changecheckbox:this.changecheckbox,
            del_img:this.del_img
          }
          if(i>(this.state.page-1)*3-1 && i<=this.state.page*3-1){
            return <Tr {...data} title={title}/>
          }
        });
        localStorage.setItem('img',JSON.stringify(data));
      }

      let shuju = {
        addText:this.addText,
        maxId:this.maxId,
        changeTime:this.changeTime,
        alldel:this.alldel
      }
      addanddel = <DelandAdd {...shuju}/>;

      // let {title} = this.props.data;
      let title1 = Object.assign(title);
      item = title1.map((e,i)=>{
        let data = {
          key:i
        }
        return <th {...data}>{e}</th>
      })
    }else{
      let title1 = Object.assign(title);
      title1.map((e,i)=>{
        if(e === '操作'){
          title1.splice(i,1);
        }
      })
      item = title1.map((e,i)=>{
        let data = {
          key:i
        }
        return <th {...data}>{e}</th>
      })
      list = filterview.map((e,i)=>{
        let data = {
          id:e.id,
          标题:e.标题,
          封面:e.封面,
          图片名称:e.图片名称,
          Tags:e.Tags,
          更新时间:e.更新时间,
          发布状态:e.发布状态,
          操作:e.操作,
          info:e.info,
          key:i+new Date,
          checked:e.checked,
          delete:this.delete,
          change:this.change,
          changecheckbox:this.changecheckbox
        }
        if(i>(this.state.page-1)*3-1 && i<=this.state.page*3-1){
          return <Tr {...data} title={title}/>
        }
      });
    }

    return(
      <div>
        <PickerSizesDemo1
          changeView={this.changeView}
          view={this.state.view}
          data={this.state.data}
         />
        {addanddel}
        <table>
          <thead id="table">
            <tr>
              {item}
            </tr>
          </thead>
          <tbody>
            {list}
          </tbody>
        </table>
        <Page
          data={this.state.data}
          changepage={this.changepage}
        />
      </div>
    )
  }
}
function getItem(data){
  return JSON.parse(localStorage.getItem(data)) || [
    {
      标题:'没有青海湖和茶卡的青海',
      id:1651058003,
      封面:img1,
      更新时间:'2017-8-15',
      发布状态:'已发布',
      操作:'jj',
      动作:'审核',
      checked:false,
      头像:'https://img3.doubanio.com/icon/u74022697-14.jpg',
      title:'葫芦娃你站住的相册',
      info:'hahahah',
      num:150,
      img:['https://img1.doubanio.com/view/photo/lthumb/public/p2496090327.webp','https://img3.doubanio.com/view/photo/lthumb/public/p2496090472.webp','https://img3.doubanio.com/view/photo/lthumb/public/p2496090471.webp']

    },{
      标题:'「人们」',
      id:1638051845,
      封面:img2,
      更新时间:'2017-8-15',
      发布状态:'已发布',
      操作:'jj',
      动作:'审核',
      checked:false,
      头像:'https://img1.doubanio.com/icon/u4058053-68.jpg',
      title:'葫芦娃你站住的相册',
      num:150,
      img:['https://img1.doubanio.com/view/photo/lthumb/public/p2496090327.webp','https://img3.doubanio.com/view/photo/lthumb/public/p2496090472.webp','https://img3.doubanio.com/view/photo/lthumb/public/p2496090471.webp']

    },{
     标题:'湿湿的梦',
     id:1651158281,
     封面:img3,
     更新时间:'2017-8-15',
     发布状态:'已发布',
     操作:'jj',
     动作:'审核',
     checked:false,
     头像:'https://img3.doubanio.com/icon/u74022697-14.jpg',
     title:'chaosmiao的相册',
     num:97,
     img:['https://img1.doubanio.com/view/photo/lthumb/public/p2496300719.webp','https://img3.doubanio.com/view/photo/lthumb/public/p2496300723.webp','https://img1.doubanio.com/view/photo/lthumb/public/p2496300747.webp']
    },{
      标题:'即时乐树',
      id:1647018236,
      封面:img4,
      更新时间:'2017-8-15',
      发布状态:'已发布',
      操作:'jj',
      动作:'审核',
      checked:false,
      头像:'https://img3.doubanio.com/icon/u74022697-14.jpg',
      title:'葫芦娃你站住的相册',
      num:150,
      img:['https://img1.doubanio.com/view/photo/lthumb/public/p2496090327.webp','https://img3.doubanio.com/view/photo/lthumb/public/p2496090472.webp','https://img3.doubanio.com/view/photo/lthumb/public/p2496090471.webp']

    },{
      标题:'在商业社会做个堂堂正正的废物会死吗？',
      id:1651117401,
      封面:img5,
      更新时间:'2017-8-15',
      发布状态:'已发布',
      操作:'jj',
      动作:'审核',
      checked:false,
      头像:'https://img3.doubanio.com/icon/u74022697-14.jpg',
      title:'葫芦娃你站住的相册',
      num:150,
      img:['https://img1.doubanio.com/view/photo/lthumb/public/p2496090327.webp','https://img3.doubanio.com/view/photo/lthumb/public/p2496090472.webp','https://img3.doubanio.com/view/photo/lthumb/public/p2496090471.webp']

    },{
      标题:'萨尔兹卡默古特',
      id:1649846355,
      封面:img6,
      更新时间:'2017-8-15',
      发布状态:'已发布',
      操作:'jj',
      动作:'审核',
      checked:false,
      头像:'https://img3.doubanio.com/icon/u74022697-14.jpg',
      title:'葫芦娃你站住的相册',
      num:150,
      img:['https://img1.doubanio.com/view/photo/lthumb/public/p2496090327.webp','https://img3.doubanio.com/view/photo/lthumb/public/p2496090472.webp','https://img3.doubanio.com/view/photo/lthumb/public/p2496090471.webp']

    },{
      标题:'夏天去香港看海',
      id:1650648598,
      封面:img7,
      更新时间:'2017-8-15',
      发布状态:'已发布',
      操作:'jj',
      动作:'审核',
      checked:false,
      头像:'https://img3.doubanio.com/icon/u74022697-14.jpg',
      title:'葫芦娃你站住的相册',
      num:150,
      img:['https://img1.doubanio.com/view/photo/lthumb/public/p2496090327.webp','https://img3.doubanio.com/view/photo/lthumb/public/p2496090472.webp','https://img3.doubanio.com/view/photo/lthumb/public/p2496090471.webp']

    },{
      标题:'北京红冶钢厂',
      id:1651038482,
      封面:img8,
      更新时间:'2017-8-15',
      发布状态:'已发布',
      操作:'jj',
      动作:'审核',
      checked:false,
      头像:'https://img3.doubanio.com/icon/u74022697-14.jpg',
      title:'葫芦娃你站住的相册',
      num:150,
      img:['https://img1.doubanio.com/view/photo/lthumb/public/p2496090327.webp','https://img3.doubanio.com/view/photo/lthumb/public/p2496090472.webp','https://img3.doubanio.com/view/photo/lthumb/public/p2496090471.webp']

    }
  ]
}
export default Image;
