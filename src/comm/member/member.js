import React,{Component} from 'react';
import PickerSizesDemo from '../Data/Date';
// import { Alert } from 'antd';
import { Button, notification } from 'antd'
import Tr from './Tr';
import './table.css';
import DelandAdd from './DelandAdd';
import Page from '../page/page';
import './consult.css';
class Member extends Component{
  constructor(){
    super();
    this.state = {
      title:['','id','姓名','性别','联系电话','电子邮件','地址','身份','操作'],
      data:[],
      view:'all',
      info:[],
      page:1,
      // class:'active_none'
    }
  }
  componentDidMount(){
    this.setState({
      data:getItem('users')
    });
  }
  render(){
    let {data,title} = this.state;
    let title1 = Object.assign(title);
    let data1 = Object.assign(data);
    let item = null;
    let list = null;
    if(this.props.power === 'admin'){
      //表头
      item = title1.map((e,i)=>{
        let data = {
          key:i
        }
        return <th {...data}>{e}</th>
      })
      list = data1.map((e,i)=>{
        let data = {
          id:e.id,
          姓名:e.username,
          性别:e.sex,
          联系电话:e.phone,
          电子邮件:e.email,
          地址:e.address,
          身份:e.states,
          操作:e.bool,
          key:(i+new Date),
          checked:e.checked
        }
        return <Tr {...data} title={title}/>
      });
    }else{
      //表头
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
      list = data1.map((e,i)=>{
        let data = {
          id:e.id,
          姓名:e.username,
          性别:e.sex,
          联系电话:e.phone,
          电子邮件:e.email,
          地址:e.address,
          身份:e.states,
          操作:e.bool,
          key:(i+new Date),
          checked:e.checked
        }
        return <Tr {...data} title={title}/>
      });
    }
    return(
      <div className="consult">
      <PickerSizesDemo
        />
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
      </div>
    )
  }
}
function getItem(data){
  return JSON.parse(localStorage.getItem(data)) || [
    {
    id:1,
    username:'aaa',
    password:'aaa',
    bool:true,
    states:'admin',
    sex:'',
    phone:'',
    email:'',
    address:'',
    checked:false,
  }]
}
export default Member;
