import React,{Component} from 'react';
import { connect } from 'react-redux';
import { consultActionCreator } from '../../store/Consultation_action_creator';
import Changecontent from './changeval';
import { Icon } from 'antd';
import './table.css';
import {BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

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
    this.props.delete(this.props.id);
  };
  //受控表单
  check_box = ()=>{
    // console.log(this.props.checked);
    // !this.props.checked;
    this.props.changecheckbox(this.props.id);
  };
  // change = (ev) =>{
  //   this.props.change(this.props.id)
  // }

  //批量删除
  alldel = ()=>{
    this.props.alldel();
  };

  render(){
    let data = {
      id:this.props.id,
      item:this.props.item,
      title:this.props.title,
      author:this.props.author,
      time:this.props.time,
      content:this.props.content,
      status:this.props.status,
      todo:this.props.todo,
      checked:this.props.checked,
      changedata:this.props.changedata,
    };

    let h = null;
    if(this.props.todo){
      h = <td>
            <span className="change_val"><Link to="/changeval"><Icon type="edit" /></Link></span>
            <a href="javascript:;"
              onClick = {this.delVal}
              ><Icon type="delete" />
            </a>
            <Switch>
              <Route path="/changeval" render={()=>{
                return <Changecontent {...data}/>
              }}/>
            </Switch>
          </td>
    }

    let content = this.props.content.slice(0, 4)+'...';
    let title = this.props.title.slice(0,4)+'...';
    let author = this.props.author.slice(0,3)+'...';
    let icon = null;
    if(this.props.checked){
      icon = <Icon type="check-square" />
    }else{
      icon = <Icon type="check-square-o" />
    }
    // let icon1 = <Icon type="check-square-o" />
    // let icon2 = <Icon type="check-square" />
    return(
      <Router>
        <tr>
          <td
            className = "changeitem"
            ><input
            type="type"
            onChange={this.changeitem}
           /></td>
          <td
            onClick={this.check_box}
            >
          {icon}</td>
          <td>{this.props.id}</td>
          <td title={this.props.title}>{title}</td>
          <td title={this.props.item}>{this.props.item}</td>
          <td title={this.props.time}>{this.props.time}</td>
          <td>{author}</td>
          <td>{content}</td>
          <td>{this.props.status}</td>
          {h}
        </tr>
      </Router>
    )
  }
}

function mapStateToProps(state,ownProps) {
    return {
        data:state.consultationReducer.data.data,
        // title:state.title
    }
}

const mapDispatchToProps = {
    deleteChange:consultActionCreator.deleteChange
};

Tr = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tr);

export { Tr };
