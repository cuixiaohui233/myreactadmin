import React,{Component} from 'react';
import './tr.css';

class Tr extends Component{
  constructor(){
    super();
    this.state= {
      val:''
    }
  }
  //点击删除数据
  delVal = () => {
    // alert(1);
    console.log(this.props.id);
    this.props.delete(this.props.id);
  }
  //受控表单
  change = (ev) =>{
    this.props.change(this.props.id)
  }
  //修改内容
  changeitem = () =>{

  }
  //批量删除
  alldel = ()=>{
    this.props.alldel();
  }
  render(){
    return(
        <tr>
          <td><input type="checkbox"
            checked={this.props.checked}
            onChange={this.change}
          /></td>
          <td>{this.props.id}</td>
          <td>{this.props.name}</td>
          <td>{this.props.titles}</td>
          <td>{this.props.标题}</td>
          <td>{this.props.更新时间}</td>
        </tr>
    )
  }
}
export default Tr
