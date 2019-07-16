import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import ReactItem from './components/ReactItem'

class App extends Component {
  constructor(){
    super();
    this.ReactItem = [
      'Đi học',
      'Đi làm',
      'Đi bay'
    ];

  }

  render (){
  return (
    <div className="App">
      {
        this.ReactItem.map((item, index) => <ReactItem key = {index} title = {item} />)
      }
    </div>
  );
  }
}
export default App;
