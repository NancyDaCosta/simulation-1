import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ImageURL: '',
      ProductName: '',
      Price: 0
    };

    this.handleImage = this.handleImage.bind( this );
    this.handleProductName = this.handleProductName.bind ( this );
    this.handlePrice = this.handlePrice.bind ( this );
    this.baseState = this.state;
  }

  handleImage( event ) {
      console.log(event.target.value)
    this.setState({ ImageURL: event.target.value });
  }

  handleProductName( event ) {
      console.log(event.target.value)
    this.setState({ ProductName: event.target.value });
  }

  handlePrice ( event ) {
      console.log(event.target.value)
    this.setState({ Price: event.target.value });
  }

  resetForm = () => {
    this.setState(this.baseState)
  };  

  render() {
    console.log(this.state)
    return (
      <div>
        <input value={ this.state.ImageURL }
            onChange = { this.handleImage }
        />
        <input value={ this.state.ProductName }
            onChange = { this.handleProductName }
        />
        <input value={ this.state.Price }
            placeholder = "0"
            onChange = { this.handlePrice }
        />

        <button 
          onClick={ this.updateInput }
          type="text">Add to Inventory</button>
        <button 
          onClick={ this.resetForm } 
          type="button">Cancel</button>
      </div>
    )
  }
}

export default Form;