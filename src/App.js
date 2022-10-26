import logo from './logo.svg';
import i1 from './images/1.gif'
import i2 from './images/2.gif'
import i3 from './images/3.gif'
import i4 from './images/4.gif'
import i5 from './images/5.gif'
import i6 from './images/6.gif'
import './App.css';
import React from "react";


const data = {

    "1": {
    "answer": "prophase"
},
    "2": {
    "answer": "prophase"
},
    "3": {
    "answer": "prophase"
},
    "4": {
    "answer": "prophase"
},
    "5": {
    "answer": "prophase"
}

}


const img = {
    "1": i1,
    "2": i2,
    "3": i3,
    "4": i4,
    "5": i5,

}

class App extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      current_item: "1"
    }
    this.submit = this.submit.bind(this)
  }

  submit(selection) {
      if (data[this.state.current_item].answer === selection) {
    document.getElementById(this.state.current_item).style.display = "block"
      this.setState({current_item: (parseInt(this.state.current_item) +1).toString()})
      } else {
          alert("Try again...")
      }
  }


  render () {
    return (
        <div className="App">

          <div>

            <h1>Prompt</h1>
            <img src={img[this.state.current_item]} alt=""/>

          </div>

          <div>
            <h1>Controls</h1>
            <button onClick={() => this.submit("interphase")}>Interphase</button>
            <button onClick={() => this.submit("prophase")}>Prophase</button>
            <button onClick={() => this.submit("metaphase")}>Metaphase</button>
            <button onClick={() => this.submit("anaphase")}>Anaphase</button>
            <button onClick={() => this.submit("telophase")}>Telophase</button>

          </div>


          <div>
            <h1>Interphase</h1>
            <img src={i1} style={{display: "none"}} id={"1"}/>
          </div>
          <div>
            <h1>Prophase</h1>
            <img src={i2} style={{display: "none"}} id={"2"}/>
          </div>
          <div>
            <h1>Metaphase</h1>
            <img src={i3} style={{display: "none"}} id={"3"}/>
          </div>
          <div>
            <h1>Anaphase</h1>
            <img src={i4} style={{display: "none"}} id={"4"}/>
          </div>
          <div>
            <h1>Telophase</h1>
            <img src={i5} style={{display: "none"}} id={"5"}/>
          </div>
        </div>
    );
  }
}

export default App;
