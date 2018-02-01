import React,{Component} from 'react';
import PickerSizesDemo1 from '../Data/DateProduct';
import DelandAdd from './DelandAdd';
import Tr from './Tr';
import '../table/table.css';
import Page from '../page/page';

let img1 = require('../img/1.webp');
let img2 = require('../img/2.webp');
let img3 = require('../img/3.webp');
let img4 = require('../img/4.webp');

class Product extends Component{
  constructor(){
    super();
    this.state = {
      title:['','id','产品名称','LOGO','具体描述','价格','发布状态','操作'],
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
      data:getItem('product')
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
  // //更新时间
  // changeTime = ()=>{
  //   let date = new Date();
  //   let date1 = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
  //   return date1;
  // }
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
  changedata = (newData)=>{
    // console.log(newData);
    let {data} = this.state;
    let data1 = Object.assign(data);
    data1.map((e,i)=>{
      if(e.id === newData.id){
        e.标题 = newData.title,
        e.封面 = newData.img,
        e.图片名称 = newData.info,
        e.更新时间 = newData.price
      }
    })
    this.setState({
      data:data1
    })
    // openNotificationWithIcon2('success');
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
            key:i+new Date,
            checked:e.checked,
            delete:this.delete,
            change:this.change,
            changecheckbox:this.changecheckbox,
            changedata:this.changedata
          }
          if(i>(this.state.page-1)*3-1 && i<=this.state.page*3-1){
            return <Tr {...data} title={title}/>
          }
        });
        localStorage.setItem('product',JSON.stringify(data));
      }

      let shuju = {
        addText:this.addText,
        maxId:this.maxId,
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
          更新时间:e.更新时间,
          发布状态:e.发布状态,
          操作:e.操作,
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
          <thead>
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
  return JSON.parse(localStorage.getItem(data)) || [{
    id:1,
    标题:'悦诗风吟',
    封面:'https://img1.doubanio.com/view/dianpu_product_item/large/public/p1974318.jpg',
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
    封面:'https://img3.doubanio.com/view/dianpu_product_item/large/public/p1964580.jpg',
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
    封面:'https://img1.doubanio.com/view/dianpu_product_item/large/public/p1985219.jpg',
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
    封面:'https://img1.doubanio.com/view/dianpu_product_item/large/public/p1985709.jpg',
    图片名称:'潮汕中秋月饼朥饼',
    更新时间:'139.00',
    href:'https://market.douban.com/item/213933/?r=5&index=4&category=index',
    发布状态:'已发布',
    操作:'jj',
    动作:'审核',
    checked:false
  },{
    id:5,
    标题:'macbook',
    封面:'https://img3.doubanio.com/view/dianpu_product_item/large/public/p1971660.jpg',
    图片名称:'macbook支架',
    更新时间:'149.00',
    href:'https://market.douban.com/item/90190/?r=5&index=6&category=index',
    发布状态:'已发布',
    操作:'jj',
    动作:'审核',
    checked:false
  },{
    id:6,
    标题:'小巨蛋',
    封面:'https://img1.doubanio.com/view/dianpu_product_item/large/public/p449949.jpg',
    图片名称:'小巨蛋T1便携式茶具礼品套装砂岩釉茶盒版（极客黑）',
    更新时间:'139.00',
    href:'https://market.douban.com/item/90190/?r=5&index=6&category=index',
    发布状态:'已发布',
    操作:'jj',
    动作:'审核',
    checked:false
  }]
}
export default Product;
