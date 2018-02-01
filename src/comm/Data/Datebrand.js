import React,{Component} from 'react';
import { DatePicker } from 'antd';
import { Input } from 'antd';
import './Date.css'
// const { MonthPicker, RangePicker } = DatePicker;

class PickerSizesDemo2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      val:''
    }
  }
  state = {
    size: 'default',
  };
  //受控表单
  handleNumberChange  = (ev)=>{
    this.setState({
      val:ev.target.value
    })
  }
  //检索
  click = (ev)=>{
    let data1 = Object.assign(this.props.data);
    data1 = data1.filter((e,i)=>{
      if(e.id ==this.state.val){
        return e;
      }else if(e.author.name == this.state.val){
        return e;
      }else if(e.created == this.state.val){
        return e;
      }else if(this.state.val.includes(e.content)){
        return e;
      }else if(e.title.includes(this.state.val)){
        return e;
      }
    })
    this.props.changeView(data1,ev.target.id);
  }
  keyupchange = (ev)=>{
    if(ev.keyCode === 13){
      let data1 = Object.assign(this.props.data);
//    console.log(data1);
      data1 = data1.filter((e,i)=>{
        if(e.id ==this.state.val){
          return e;
        }else if(e.author.name == this.state.val){
          return e;
        }else if(e.created == this.state.val){
          return e;
        }else if(this.state.val.includes(e.content)){
          return e;
        }else if(e.title.includes(this.state.val)){
          return e;
        }
      })
      if(this.state.val){
        this.props.changeView(data1,'search');
      }else{
        this.props.changeView(data1,'all');
      }
    }
  }
  render() {
    const { size } = this.state;


    // <span className="fanwei">日期范围：</span><span></span>
    // <DatePicker size={size} /><span></span>
    // <DatePicker size={size} /><span></span>
    //


    return (
      <div className="date-input">
        <Input
          type="text"
          size={size}
          value={this.state.val}
          onChange={this.handleNumberChange}
          onKeyUp={this.keyupchange}
          className="input-ziji"
        />
        <button
          id="search"
          onClick={this.click}
          >搜索咨询
        </button>
        <button
          id="all"
          onClick={this.click}
          >显示全部
        </button>
      </div>
    );
  }
}
export default PickerSizesDemo2;
