import React,{Component} from 'react';
import { Pagination } from 'antd';
import './page.css';
class Page extends Component{
  sizechange = (page)=>{
    // console.log(page)
    this.props.changepage(page);
  }
  render(){
    let page = Math.ceil(this.props.data.length/3)*10
      // console.log(page);
    return (
      <div className="page_parent">
        <span>显示1-2条 共{this.props.data.length}条</span>
        <Pagination
          total={page}
          onChange={this.sizechange}
         />
      </div>
    )
  }
}
export default Page;
