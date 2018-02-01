import React,{Component} from 'react';
class Tr extends Component{
  render(){
    return(
        <tr>
          <td><input type="checkbox" checked={this.props.checked} /></td>
          <td>{this.props.id}</td>
          <td>{this.props.item}</td>
          <td>{this.props.标题}</td>
          <td>{this.props.更新时间}</td>
          <td>{this.props.浏览次数}</td>
          <td>{this.props.发布状态}</td>
          <td><a href="javascript:;">{this.props.动作}</a><a href="javascript:;">修改</a><a href="javascript:;">删除</a></td>
        </tr>
    )
  }
}
export default Tr
