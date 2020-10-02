import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8000/api/shoe/")
      .then((res) => res.json())
      .then((data) => this.setState({shoes: data}));
  }
  
  render() {
    return (
      <div>
        <ul>
          {this.state.shoes.map((r) => (
            <div>
              <li>Size: {r.size}</li>
              <li>Brand: {r.brand_name}</li>
              <li>Manufacturer: {r.manufacturer}</li>
              <li>Color: {r.color}</li>
              <li>Material: {r.material}</li>
              <li>Type: {r.shoe_type}</li>
              <li>Fastener: {r.fasten_type}</li>
              <br></br>
            </div>
          ))}
        </ul>
      </div>
    );

  }
}

export default App;
