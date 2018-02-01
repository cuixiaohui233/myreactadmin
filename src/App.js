import React, { Component } from 'react';
import Menu1 from './comm/side/Menu1';
import Header from './comm/Head/Head';
import Nav from './comm/navigation/nav';
import Personal from './comm/personal/personal';
import {
  BrowserRouter as Router,
  Route,
  Switch

} from 'react-router-dom';
import './App.css';
//咨询管理
import { Consult } from './comm/Consultation/Consult';

//图片管理
import Image  from './comm/image/Image';

//品牌管理
import Product from './comm/product/product';

//评论管理
import Discuss from './comm/discuss/discuss';

//会员列表
import Member from './comm/member/member';

//折线图
import EchartsTest from './comm/echarts/lineChart/line';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="app">
          <Header />
          <Menu1 />
          <Nav />
          <div className="none">欢迎</div>
          <Switch>
            <Route path="/image" render={()=>{
              return <Image power={this.props.power}/>
            }} />
            <Route path="/app/content" render={()=>{
              return <Consult power={this.props.power} />
            }} />
            <Route path="/product" render={()=>{
              return <Product power={this.props.power} />
            }} />
            <Route path="/discuss" render={()=>{
              return <Discuss power={this.props.power} />
            }} />
            <Route path="/linechart" render={()=>{
              return <EchartsTest power={this.props.power} />
            }} />
            <Route path="/member" render={()=>{
              return <Member power={this.props.power} />
            }} />
            <Route path="/personal" render={()=>{
              return <Personal />
            }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
