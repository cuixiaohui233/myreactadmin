import React,{Component} from 'react';
import { Icon }from 'antd';
import './DelandAdd.css';
import {BrowserRouter as Router,
  Route,
  Link,
  // Redirect,
  Switch
} from 'react-router-dom';
import Addcontent from './addContent';

class DelandAdd extends Component{

  alldel = ()=>{
    this.props.alldel();
  }
  render(){
    return (
      <Router>
      <div className="DelandAdd_product">
        <button
          className="first_child"
          onClick={this.alldel}
          ><Icon type="delete" />批量删除</button>
        <Link to="/addbrand">
          <button className="last_child"><Icon type="edit" />添加商品</button>
        </Link>
        <Switch>
          <Route path="/addbrand" render={()=>{
            return <Addcontent
              addText={this.props.addText}
              maxId={this.props.maxId}
              changeTime={this.props.changeTime}
             />
          }}/>
        </Switch>
      </div>
    </Router>
    )
  }
}
export default DelandAdd;
