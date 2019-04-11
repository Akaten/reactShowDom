import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(poper){
    super(poper)
    this.state={
      listconpanys:[{unitname:"",unitphone:""}],
      listconpany:[{unitname:"",unitphone:""}],
    }
  }

  //公司信息添加删除
  addcompany(){
    this.state.listconpany.push({unitname:'',unitphone:'',id:new Date().getTime()})
    this.setState({
      listconpanys:this.state.listconpany
    })
  }
  changecompany({target}){
    const {value,name}=target;
    const nameAttr = name.split('_')
    let listconpany=this.state.listconpany
    listconpany[nameAttr[1]][nameAttr[0]]=value;

    this.setState({
      listconpany
    })
  }
  delcompany(index){
    let lists=this.state.listconpany;
    if(lists.length===1){
      alert("至少留一项")
      return;
    }
    lists.splice(index,1);
    this.setState({listconpany:lists})
  }

  showlist(){
    console.log(this.state.listconpanys)
  }

  render() {
    let showdom;
    showdom= <div>
      {
          this.state.listconpanys &&this.state.listconpany.map((item,i)=>{
            return(
                <div  key={item.id} className={'inputbox'}>
                  <div  onChange={this.changecompany.bind(this)}>
                    <input type="text" name={'unitname_'+i} placeholder={'输入姓名'}/>
                    <input type="text"  name={'unitphone_'+i}  placeholder={'输入电话号码'}/>
                    <a className={'delbtn'} onClick={()=>this.delcompany(i)}>删除</a>
                  </div>
                </div>
            )
          })
      }
      <div className={'widthbox'}>
        <a className={'addbtn'} onClick={()=>this.addcompany()}>新增</a>
      </div>
    </div>

    return (
      <div className="App">
        {showdom}

        <div  className={'showlist'}>
          <button onClick={this.showlist()}>显示</button>
        </div>
      </div>
    );
  }
}

export default App;
