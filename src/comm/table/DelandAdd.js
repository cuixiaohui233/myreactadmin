import React,{Component} from 'react';
import { Icon }from 'antd';
import './DelandAdd.css';
class DelandAdd extends Component{
  render(){
    return (
      <div className="DelandAdd">
        <button className="first_child"><Icon type="delete" />  批量删除</button>
        <button className="last_child"><Icon type="edit" />  添加咨询</button>
      </div>
    )
  }
}
export default DelandAdd;
