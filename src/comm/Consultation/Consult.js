import React,{Component} from 'react';
import { connect } from 'react-redux';
import PickerSizesDemo from '../Data/Date';

// import { Alert } from 'antd';
import { Button, notification } from 'antd'
import Tr from './Tr';
import DelandAdd from './DelandAdd';
import Page from '../page/page';
import './consult.css'
import './table.css';


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
class Consult extends Component{
  constructor(){
    super();
    this.state = {
      title:['','id','标题','分类','更新时间','作者','内容','发布状态','操作'],
      data:[],
      power:[
        {name:'admin',type:'admin'},
        {name:'tourist',type:'tourist'}
      ],
      view:'all',
      info:[],
      page:1,
      // class:'active_none'
    }
  }
  componentDidMount(){
    this.setState({
      data:getItem('article')
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
    let {data} = this.state;
    let data1 = Object.assign(data);
    data1.push(newTxt);
    this.setState({
      data:data1,
      // class:'alert_del'
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
        e.内容 = newData.内容
      }
    })
    // console.log(data1);
    this.setState({
      data:data1
    })
    openNotificationWithIcon2('success');
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
    this.setState({
      data:list
    })
    openNotificationWithIcon1('success')
  }
  //检索
  changeView = (newView,id)=>{
    // console.log(newView,id);
    if(id === 'search' || id==='keyup'){
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
  //改变页码
  changepage = (newpage)=>{
    // console.log(newpage);
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
  render(){
    let {data,title} = this.state;
    let data1 = Object.assign(data);
    let list = null;
    let title1 = Object.assign(title);
    let item = null;
    let addanddel = null;
    let filterview = null;
    switch (this.state.view) {
      case 'search':
        filterview = this.state.info;
        break;
      case 'all':
        filterview = this.state.data;
        break;
    }
    // console.log(this.props.power)
    if(this.props.power === 'admin'){
      item = title1.map((e,i)=>{
        let data = {
          key:i
        }
        return <th {...data}>{e}</th>
      })

      if(filterview.length){
        list = filterview.map((e,i)=>{
          let data = {
            id:e.id,
            item:e.分类,
            标题:e.标题,
            作者:e.作者,
            更新时间:e.更新时间,
            内容:e.内容,
            发布状态:e.发布状态,
            动作:e.动作,
            key:(i+new Date),
            checked:e.checked,
            delete:this.delete,
            change:this.change,
            changedata:this.changedata,
            changecheckbox:this.changecheckbox
          }
          if(i>(this.state.page-1)*3-1 && i<=this.state.page*3-1){
            return <Tr {...data} title={title}/>
          }
        });
        localStorage.setItem('article',JSON.stringify(data));
      }
      let shuju = {
        addText:this.addText,
        maxId:this.maxId,
        changeTime:this.changeTime,
        alldel:this.alldel,
      }
      addanddel = <DelandAdd {...shuju}/>;
    }else{
      // let title2 = Object.assign(title);
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
          item:e.分类,
          标题:e.标题,
          作者:e.作者,
          更新时间:e.更新时间,
          内容:e.内容,
          发布状态:e.发布状态,
          动作:'',
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
      // addanddel = <div>欢迎光临</div>
    }
    // <Alert message="Success Tips" type="success" showIcon className={this.state.class}/>

      console.log(this.props.title);
    return (
      <div className="consult">
      <PickerSizesDemo
          changeView={this.changeView}
          view={this.state.view}
          data={this.state.data}
        />
        {addanddel}
        <div id="table_data">
          <table id="table">
            <thead>
              <tr>
                {item}
              </tr>
            </thead>
            <tbody>
              {list}
            </tbody>
          </table>
        </div>
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
        标题:'为什么《圆桌派》的观众老骂蒋方舟？',
        作者:'魏小河',
        avatar:'https://img3.doubanio.com/icon/u3340912-61.jpg',
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
        avatar:'https://img3.doubanio.com/icon/u1795862-3.jpg',
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
        avatar:'https://img3.doubanio.com/icon/u1024373-11.jpg',
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
        avatar:'https://img3.doubanio.com/icon/u165265254-3.jpg',
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
        avatar:'https://img3.doubanio.com/icon/u2905955-15.jpg',
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
        avatar:'https://img3.doubanio.com/icon/u9546008-61.jpg',
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
        avatar:'https://img3.doubanio.com/icon/u38396260-11.jpg',
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
        avatar:'https://img3.doubanio.com/icon/u162576392-2.jpg',
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
        avatar:'https://img1.doubanio.com/icon/u158210937-7.jpg',
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
        avatar:'https://img3.doubanio.com/icon/u34715093-12.jpg',
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
        avatar:'https://img3.doubanio.com/icon/u1427914-54.jpg',
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
        avatar:'https://img1.doubanio.com/icon/u51610855-17.jpg',
        更新时间:'2017-08-27 09:04:09',
        内容:'',
        分类:'行业行情',
        发布状态:'发布',
        动作:'审核',
        checked:false
      }
  ];
}

function mapStateToProps(state, ownProps){
  console.log(state.title);
  return {
      title:state.consultationReducer.title
  }
}
const mapDispatchToProps = {

};
Consult = connect(
    mapStateToProps,
    mapDispatchToProps
)(Consult);
export { Consult };
