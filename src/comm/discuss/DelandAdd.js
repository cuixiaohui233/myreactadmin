import React,{Component} from 'react';
import { Icon }from 'antd';
import './DelandAdd.css';

class DelandAdd extends Component{

  alldel = ()=>{
    this.props.alldel();
  }
  render(){
    return (
      <div className="DelandAdd_diss">
        <button
          className="first_child"
          onClick={this.alldel}
          ><Icon type="delete" />批量删除</button>
      </div>
    )
  }
}
export default DelandAdd;
