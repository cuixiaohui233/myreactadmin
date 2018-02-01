import React,{Component} from 'react';
import { DatePicker } from 'antd';
import { Input } from 'antd';
import './Date.css'
// const { MonthPicker, RangePicker } = DatePicker;

class PickerSizesDemo1 extends Component {
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
      if(e.标题.includes(this.state.val)){
        return e;
      }else if(e.id == this.state.val){
        return e;
      }else if(e.更新时间.includes(this.state.val)){
        return e;
      }else if(e.图片名称 === this.state.val){
        return e;
      }else if(e.发布状态 === this.state.val){
        return e;
      }
    })
    this.props.changeView(data1,ev.target.id);
  }
  keyupchange = (ev)=>{
    if(ev.keyCode === 13){
      console.log(1111);
      let data1 = Object.assign(this.props.data);
      data1 = data1.filter((e,i)=>{
        if(e.标题 === this.state.val){
          return e;
        }else if(e.id == this.state.val){
          return e;
        }else if(e.更新时间.includes(this.state.val)){
          return e;
        }else if(e.图片名称 === this.state.val){
          return e;
        }else if(e.发布状态 === this.state.val){
          return e;
        }
      })
      this.props.changeView(data1,ev.target.id);
    }
  }
  render() {
    const { size } = this.state;
    // <span className="fanwei">日期范围：</span><span></span>
    // <DatePicker size={size} /><span></span>
    // <DatePicker size={size} /><span></span>
    return (
      <div className="date-input">
        <Input
          type="text"
          size={size}
          value={this.state.val}
          onChange={this.handleNumberChange}
          onKeyUp={this.keyupchange}
          placeholder="请输入关键字查询"
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
export default PickerSizesDemo1
