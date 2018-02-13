import React,{Component} from 'react';
import { connect } from 'react-redux';
import PickerSizesDemo from '../Data/Date';
import { Button, notification } from 'antd';
import { consultActionCreator } from '../../store/Consultation_action_creator';
import { Tr } from './Tr';
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
      title:['','id','title','item','time','author','content','status','操作'],
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
      // data:getItem('article')
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
  };
  //受控表单
  change = (newId)=>{
    let {data} = this.state;
    let data1 = Object.assign(data);
    data1.map((e,i)=>{
      if(e.id === newId){
        e.checked = !e.checked;
      }
    });
    // console.log(data1)
    this.setState({
      data:data1
    })
  };
  //添加数据
  addText= (newTxt) =>{
    let {data} = this.state;
    let data1 = Object.assign(data);
    data1.push(newTxt);
    this.setState({
      data:data1,
      // class:'alert_del'
    })
  };
  //修改数据
  changedata = (newData)=>{
    // console.log(newData);
    let {data} = this.state;
    let data1 = Object.assign(data);
    data1.map((e,i)=>{
      if(e.id === newData.id){
        e.item = newData.item;
        e.title = newData.title;
        e.author = newData.author;
        e.content = newData.content
      }
    });
    // console.log(data1);
    this.setState({
      data:data1
    });
    openNotificationWithIcon2('success');
  };
  //最大id
  maxId = ()=>{
    let {data} = this.state;
    let data1 = Object.assign(data);
    let num = 0;
    data1.map((e,i)=>{
      if(e.id > num){
        num = e.id;
      }
    });
    return num+1;
  };
  //time
  changeTime = ()=>{
    let date = new Date();
    let date1 = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
    return date1;
  };
  //批量删除
  alldel = ()=>{
    let {data} = this.state;
    let data1 = Object.assign(data);
    let list = null;
    list = data1.filter((e,i)=>!e.checked);
    this.setState({
      data:list
    });
    openNotificationWithIcon1('success')
  };
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
  };
  //改变页码
  changepage = (newpage)=>{
    // console.log(newpage);
    this.setState({
      page:newpage
    })
  };
changecheckbox =(check)=>{
  let {data} = this.state;
  let data1 = Object.assign(data);
  data1.map((e,i)=>{
    if( e.id === check){
      e.checked = !e.checked;
    }
  });
  this.setState({
    data:data1
  })
};
  render(){
    let {data,title} = this.props;
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
        filterview = data;
        break;
    }
    // console.log(this.props.power)
    if(this.props.power === 'admin'){
      item = title1.map((e,i)=>{
        let data = {
          key:i
        };
        return <th {...data}>{e}</th>
      });

      if(filterview.length){
        list = filterview.map((e,i)=>{
          let data = {
            id:e.id,
            item:e.item,
            title:e.title,
            author:e.author,
            time:e.time,
            content:e.content,
            status:e.status,
            todo:e.todo,
            key:(i+new Date),
            checked:e.checked,
            delete:this.delete,
            change:this.change,
            changedata:this.changedata,
            changecheckbox:this.changecheckbox
          };
          if(i>(this.state.page-1)*3-1 && i<=this.state.page*3-1){
            return <Tr {...data}/>
          }
        });
        // localStorage.setItem('article',JSON.stringify(data));
      }
      let shuju = {
        addText:this.addText,
        maxId:this.maxId,
        changeTime:this.changeTime,
        alldel:this.alldel,
      };
      addanddel = <DelandAdd {...shuju}/>;
    }else{
      // let title2 = Object.assign(title);
      title1.map((e,i)=>{
        if(e === '操作'){
          title1.splice(i,1);
        }
      });
      item = title1.map((e,i)=>{
        let data = {
          key:i
        };
        return <th {...data}>{e}</th>
      });
      list = filterview.map((e,i)=>{
        let data = {
          id:e.id,
          item:e.item,
          title:e.title,
          author:e.author,
          time:e.time,
          content:e.content,
          status:e.status,
          todo:'',
          key:i+new Date,
          checked:e.checked,
          delete:this.delete,
          change:this.change,
          changecheckbox:this.changecheckbox
        };
        if(i>(this.state.page-1)*3-1 && i<=this.state.page*3-1){
          return <Tr {...data} title={title}/>
        }
      });
      // addanddel = <div>欢迎光临</div>
    }
    // <Alert message="Success Tips" type="success" showIcon className={this.state.class}/>
// console.log(this.props.saveChange)
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
          data={data}
          changepage={this.changepage}
        />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  console.log(state.consultationReducer.data);
  return {
      title:state.consultationReducer.title,
      data:state.consultationReducer.data.data
  }
}
const mapDispatchToProps = {
    saveChange:consultActionCreator.saveChange,
};

Consult = connect(
    mapStateToProps,
    mapDispatchToProps
)(Consult);
export { Consult };
