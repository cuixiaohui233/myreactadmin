import React,{Component} from 'react';
import PickerSizesDemo2 from '../Data/Datebrand';
import DelandAdd from './DelandAdd';
import Tr from './Tr';
import '../table/table.css';
import Page from '../page/page';

let img1 = require('../img/1.webp');
let img2 = require('../img/2.webp');
let img3 = require('../img/3.webp');
let img4 = require('../img/4.webp');

class Discuss extends Component{
  constructor(){
    super();
    this.state = {
      title:['', 'id','姓名','文章标题','评论内容','更新时间'],
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
    let data1 = JSON.parse(localStorage.getItem('diss'));
    // console.log(data1);
    if(!data1)return;
    this.setState({
      data:data1
    });
  }
  // delete = (newID)=>{
  //   console.log(data)
  //   let {data} = this.state;
  //   let data1 = Object.assign(data);
  //   let list = data1.filter((e,i)=>{
  //     console.log(e.id);
  //     return e.id !== newID;
  //   });
  //   // console.log(list);
  //   this.setState({
  //     data:list
  //   })
  // }
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
            name:e.author.name,
            标题:e.content,
            titles:e.title,
            更新时间:e.created,
            key:i+new Date,
            checked:e.checked,
            delete:this.delete,
            change:this.change
          }
          if(i>(this.state.page-1)*3-1 && i<=this.state.page*3-1){
            return <Tr {...data} title={title}/>
          }
        });
        // localStorage.setItem('ddd',JSON.stringify(data));
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
          name:e.author.name,
          标题:e.content,
          更新时间:e.created,
          titles:e.title,
          key:i+new Date,
          checked:e.checked,
          delete:this.delete,
          change:this.change
        }
        if(i>(this.state.page-1)*3-1 && i<=this.state.page*3-1){
          return <Tr {...data} title={title}/>
        }
      });
    }

    return(
      <div>
        <PickerSizesDemo2
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
    标题:'办的真不错！',
    更新时间:'2017-8-15',
    发布状态:'已发布',
    checked:false
  },
  {
    id:2,
    标题:'简直太喜欢啦！',
    封面:img2,
    图片名称:'现代简约 白色 餐厅',
    更新时间:'2017-8-15',
    发布状态:'已发布',
    操作:'jj',
    动作:'审核',
    checked:false
  }]
}
export default Discuss;
