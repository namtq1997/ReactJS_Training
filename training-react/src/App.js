import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import ReactItem from './components/ReactItem'

class App extends Component {
  constructor() {
    super();
    this.ReactItem = [
      { title : 'Đi học', isComplete: true},
      { title : 'Đi làm', isComplete: true},
      { title : 'Đi bay'}
    ];

  }

  render () {
    return (
      <div className="App">
        {
          this.ReactItem.length > 0 && this.ReactItem.map((item, index) => 
          <ReactItem key = {index} item = {item} />)
        }
        {
          this.ReactItem.length === 0 && 'Nothing Here.'
        }
      </div>
    );
  } 
}
export default App;
