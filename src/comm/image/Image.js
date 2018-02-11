import React,{Component} from 'react';
import { connect } from 'react-redux';
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
      title:['','id','title','cover','相册描述','time','status','todo'],
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
  //time
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
        e.title = newData.title
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
      if(e.title === newTitle){
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
    let {data,title} = this.props;
    let data1 = Object.assign(data);
    let list = null;
    let item = null;
    let addanddel = null;
    let filterview = null;
    switch (this.state.view) {
      case 'search':
        filterview = this.state.info;
        break;
      case 'all':
        filterview = data1;
        break;
    }
    if(this.props.power === 'admin'){
      if(filterview.length){
        list = filterview.map((e,i)=>{
          let data = {
            id:e.id,
            title:e.title,
            cover:e.cover,
            Tags:e.Tags,
            time:e.time,
            status:e.status,
            operation:e.operation,
            todo:e.todo,
            info:e.info,
            img:e.img,
            head:e.head,
            key:i+new Date,
            checked:e.checked,
            delete:this.delete,
            change:this.change,
            changedata:this.changedata,
            changecheckbox:this.changecheckbox,
            del_img:this.del_img
          }
          if(i>(this.state.page-1)*3-1 && i<=this.state.page*3-1){
            return <Tr {...data}/>
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
        if(e === 'todo'){
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
          title:e.title,
          cover:e.cover,
          图片名称:e.图片名称,
          Tags:e.Tags,
          time:e.time,
          status:e.status,
          todo:e.todo,
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
          data={data}
          changepage={this.changepage}
        />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
    return {
        title:state.imageReducer.title,
        data:state.imageReducer.data.data
    }
}
const mapDispatchToProps = {

};

Image = connect(
    mapStateToProps,
    mapDispatchToProps
)(Image);

export default Image;
