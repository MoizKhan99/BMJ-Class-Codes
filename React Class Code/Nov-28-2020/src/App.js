import './App.css';
import React from 'react';
import Todo from './components/Todo';

class App extends React.Component {

  constructor() {
    super();

    this.shortDesc = 'Pakistan, officially the Islamic Republic of Pakistan, is a country in South Asia.';
    this.longDesc = "Pakistan, officially the Islamic Republic of Pakistan, is a country in South Asia. It is the world's fifth-most populous country with a population exceeding 212.2 million. It has the world's second-largest Muslim population. It is the 33rd-largest country by area, spanning 881,913 square kilometres";

    this.state = {
      showLess: true
    }
  
  }

  toggleMore = () => {
    this.setState({
      showLess: !this.state.showLess
    })
  }

  showContent = () => {

    const result = this.state.showLess === true ? this.shortDesc : this.longDesc
    return result;
    // if(this.state.showLess === true) {
    //   return this.shortDesc
    // } else {
    //   return this.longDesc
    // }
  }
  render() { // condition ? "" : ""
    console.log(this.state.showLess)
    console.log(2 === 3 ? "True" : "False")
    return (
      <div>
        <Todo />
        {/* <h1>App Component</h1>
        <p>{this.state.showLess === true ? this.shortDesc : this.longDesc}</p>
    <button onClick={this.toggleMore}>Show { this.state.showLess === true ? 'More' : 'Less'}</button> */}
      </div>
    )
  }
}





// var cityName = prompt("Enter your city name?");
// var cities = ['khi', 'lhr'];
// var cityFound = false;
// for(var i = 0; i < cities.length; i++) {
//   if(cities[i] === cityName) {
//     alert("City Found")
//     cityFound = true;
//     break;
//   }
// }

// if(cityFound === false) {
//   alert("city not found")
// }



export default App;
