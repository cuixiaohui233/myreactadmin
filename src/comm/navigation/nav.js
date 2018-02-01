import React,{Component} from "react";
import { Breadcrumb } from 'antd';
import './nav.css'
class Nav extends Component{
  render(){
    return (
      <Breadcrumb>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        {/* <Breadcrumb.Item><a href="">图片管理</a></Breadcrumb.Item>
        <Breadcrumb.Item><a href="">咨询管理</a></Breadcrumb.Item> */}
        <Breadcrumb.Item>评论管理</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}
export default Nav
