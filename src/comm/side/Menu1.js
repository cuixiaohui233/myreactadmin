import React,{Component} from 'react';
import  { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import './side.css';
import {Link} from 'react-router-dom';
const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

class Menu1 extends Component{

  render(){
    let data = JSON.parse(localStorage.getItem('users'));
    // console.log(data)
    let lis = null;
    lis = data.map((e,i)=>{
      if(e.userType === e.username){
        if(e.states === 'admin'){
          return   <SubMenu key="sub5" title={<Link to="/member"><span><Icon type="usergroup-add" /><span>会员管理</span></span></Link>}>
                    </SubMenu>;
        }
      }
    })
    return(
      <div id="minu">
        <Menu className="side-div" mode="vertical">

            <SubMenu key="sub1" title={
              <Link to="/app/content">
                <span>
                  <Icon type="mail" />
                  文章管理
                </span>
              </Link>
            }>
            </SubMenu>
          <SubMenu key="sub2" title={
            <span>
              <Icon type="appstore" />
              <span><Link to="/image">图片管理</Link></span>
            </span>
          }>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="desktop" /><span><Link to="/product">产品管理</Link></span></span>}>
            {/* <Menu.Item key="3"><Link to="/brand">品牌管理</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/product">产品管理</Link></Menu.Item> */}
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="notification" /><Link to="/discuss">评论列表</Link></span>}>
            {/* <Menu.Item key="6"><Link to="/discuss">评论列表</Link></Menu.Item> */}
          </SubMenu>
          {/* {lis} */}
          {/* <SubMenu key="sub7" title={<span><Icon type="hdd" /><span>系统统计</span></span>}>
            <Menu.Item key="18"><Link to="/linechart">折线图</Link></Menu.Item>
            <Menu.Item key="19">时间轴折线图</Menu.Item>
            <Menu.Item key="20">区域图</Menu.Item>
            <Menu.Item key="21">柱状图</Menu.Item>
            <Menu.Item key="22">饼状图</Menu.Item>
            <Menu.Item key="23">3D柱状图</Menu.Item>
            <Menu.Item key="24">3D饼状图</Menu.Item>
          </SubMenu> */}
          {/* <SubMenu key="sub8" title={<span><Icon type="setting" /><span>系统管理</span></span>}>
            <Menu.Item key="25">系统设置</Menu.Item>
            <Menu.Item key="26">栏目管理</Menu.Item>
            <Menu.Item key="27">数据字典</Menu.Item>
            <Menu.Item key="28">屏蔽词</Menu.Item>
            <Menu.Item key="29">系统日志</Menu.Item>
          </SubMenu> */}
        </Menu>
      </div>
    )
  }
}
export default Menu1
