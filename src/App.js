import logo from './logo.svg';
import i1 from './images/1.gif'
import i2 from './images/2.gif'
import i3 from './images/3.gif'
import i4 from './images/4.gif'
import i5 from './images/5.gif'
import i6 from './images/6.gif'
import i7 from './images/7.gif'
import i8 from './images/8.gif'
import i9 from './images/9.gif'
import i10 from './images/10.gif'
import i11 from './images/11.gif'
import i12 from './images/12.gif'
import i13 from './images/13.gif'
import i14 from './images/14.gif'
import i15 from './images/15.gif'
import i16 from './images/16.gif'
import i17 from './images/17.gif'
import i18 from './images/18.gif'
import i19 from './images/19.gif'
import i20 from './images/20.gif'
import i21 from './images/21.gif'
import i22 from './images/22.gif'
import i23 from './images/23.gif'
import i24 from './images/24.gif'
import i25 from './images/25.gif'
import i26 from './images/26.gif'
import i27 from './images/27.gif'
import i28 from './images/28.gif'
import i29 from './images/29.gif'
import i30 from './images/30.gif'
import i31 from './images/31.gif'
import i32 from './images/32.gif'
import i33 from './images/33.gif'
import i34 from './images/34.gif'
import i35 from './images/35.gif'
import i36 from './images/36.gif'
import './App.css';
import React from "react";


const data = {

    "1": {
        "answer": "metaphase"
    },


    "2": {
        "answer": "interphase"
    },


    "3": {
        "answer": "interphase"
    },


    "4": {
        "answer": "prophase"
    },


    "5": {
        "answer": "anaphase"
    },


    "6": {
        "answer": "interphase"
    },


    "7": {
        "answer": "prophase"
    },


    "8": {
        "answer": "interphase"
    },


    "9": {
        "answer": "interphase"
    },


    "10": {
        "answer": "prophase"
    },


    "11": {
        "answer": "interphase"
    },


    "12": {
        "answer": "prophase"
    },


    "13": {
        "answer": "interphase"
    },


    "14": {
        "answer": "telophase"
    },


    "15": {
        "answer": "interphase"
    },


    "16": {
        "answer": "prophase"
    },


    "17": {
        "answer": "interphase"
    },


    "18": {
        "answer": "prophase"
    },


    "19": {
        "answer": "interphase"
    },


    "20": {
        "answer": "prophase"
    },


    "21": {
        "answer": "prophase"
    },


    "22": {
        "answer": "interphase"
    },


    "23": {
        "answer": "interphase"
    },


    "24": {
        "answer": "metaphase"
    },


    "25": {
        "answer": "interphase"
    },


    "26": {
        "answer": "prophase"
    },


    "27": {
        "answer": "interphase"
    },


    "28": {
        "answer": "interphase"
    },


    "29": {
        "answer": "interphase"
    },


    "30": {
        "answer": "anaphase"
    },


    "31": {
        "answer": "interphase"
    },


    "32": {
        "answer": "interphase"
    },


    "33": {
        "answer": "prophase"
    },


    "34": {
        "answer": "interphase"
    },


    "35": {
        "answer": "interphase"
    },


    "36": {
        "answer": "metaphase"
    }

}


const img = {

    "1": i1,
    "2": i2,
    "3": i3,
    "4": i4,
    "5": i5,
    "6": i6,
    "7": i7,
    "8": i8,
    "9": i9,
    "10": i10,
    "11": i11,
    "12": i12,
    "13": i13,
    "14": i14,
    "15": i15,
    "16": i16,
    "17": i17,
    "18": i18,
    "19": i19,
    "20": i20,
    "21": i21,
    "22": i22,
    "23": i23,
    "24": i24,
    "25": i25,
    "26": i26,
    "27": i27,
    "28": i28,
    "29": i29,
    "30": i30,
    "31": i31,
    "32": i32,
    "33": i33,
    "34": i34,
    "35": i35,
    "36": i36
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
              console.log((parseInt(this.state.current_item) + 1).toString())
              document.getElementById(this.state.current_item).style.display = "block"

              if ((parseInt(this.state.current_item) + 1 > Object.keys(data).length)) {
                  document.getElementById("prompt_img").style.display = "none"
                  document.getElementById("finished").style.display = "block"
              }
              this.setState({current_item: (parseInt(this.state.current_item) + 1).toString()})
          } else {
              alert("Try again...")
          }


  }


  render () {
    return (
        <div className="App">

            <h1>THE CELL PROJECT</h1>

          <div>

            <h3>Use the buttons below to identify this image</h3>
            <img src={img[this.state.current_item]} alt="" id={"prompt_img"}/>
              <h2 style={{display: "none"}} id={"finished"}>Finished!!</h2>

          </div>

          <div>
            <br/>
            <button onClick={() => this.submit("interphase")}>Interphase</button>
            <button onClick={() => this.submit("prophase")}>Prophase</button>
            <button onClick={() => this.submit("metaphase")}>Metaphase</button>
            <button onClick={() => this.submit("anaphase")}>Anaphase</button>
            <button onClick={() => this.submit("telophase")}>Telophase</button>

          </div>

            <div className={"cellResults"}>
                <h1>Results</h1>

          <div className={"cellResultList"}>
            <h1>Interphase</h1>
              <img src={i2} style={{display: "none"}} id={"2"}/>
              <img src={i3} style={{display: "none"}} id={"3"}/>
              <img src={i6} style={{display: "none"}} id={"6"}/>
              <img src={i8} style={{display: "none"}} id={"8"}/>
              <img src={i9} style={{display: "none"}} id={"9"}/>
              <img src={i11} style={{display: "none"}} id={"11"}/>
              <img src={i13} style={{display: "none"}} id={"13"}/>
              <img src={i15} style={{display: "none"}} id={"15"}/>
              <img src={i17} style={{display: "none"}} id={"17"}/>
              <img src={i19} style={{display: "none"}} id={"19"}/>
              <img src={i22} style={{display: "none"}} id={"22"}/>
              <img src={i23} style={{display: "none"}} id={"23"}/>
              <img src={i25} style={{display: "none"}} id={"25"}/>
              <img src={i27} style={{display: "none"}} id={"27"}/>
              <img src={i28} style={{display: "none"}} id={"28"}/>
              <img src={i29} style={{display: "none"}} id={"29"}/>
              <img src={i31} style={{display: "none"}} id={"31"}/>
              <img src={i32} style={{display: "none"}} id={"32"}/>
              <img src={i34} style={{display: "none"}} id={"34"}/>
              <img src={i35} style={{display: "none"}} id={"35"}/>


          </div>
          <div className={"cellResultList"}>
            <h1>Prophase</h1>

              <img src={i4} style={{display: "none"}} id={"4"}/>
              <img src={i7} style={{display: "none"}} id={"7"}/>
              <img src={i10} style={{display: "none"}} id={"10"}/>
              <img src={i12} style={{display: "none"}} id={"12"}/>
              <img src={i16} style={{display: "none"}} id={"16"}/>
              <img src={i18} style={{display: "none"}} id={"18"}/>
              <img src={i20} style={{display: "none"}} id={"20"}/>
              <img src={i21} style={{display: "none"}} id={"21"}/>
              <img src={i26} style={{display: "none"}} id={"26"}/>
              <img src={i33} style={{display: "none"}} id={"33"}/>





          </div>
          <div className={"cellResultList"}>
            <h1>Metaphase</h1>
              <img src={i1} style={{display: "none"}} id={"1"}/>
              <img src={i24} style={{display: "none"}} id={"24"}/>
              <img src={i36} style={{display: "none"}} id={"36"}/>

          </div>
          <div className={"cellResultList"}>
            <h1>Anaphase</h1>
              <img src={i5} style={{display: "none"}} id={"5"}/>
              <img src={i30} style={{display: "none"}} id={"30"}/>

          </div>
          <div className={"cellResultList"}>
            <h1>Telophase</h1>
              <img src={i14} style={{display: "none"}} id={"14"}/>

          </div>

            </div>
            <a href={"https://github.com/Techman55/cellProjectPlusPlus"}><h5>Check out the Project on GitHub</h5></a>
        </div>
    );
  }
}

export default App;
