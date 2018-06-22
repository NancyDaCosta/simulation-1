import React, { Component } from 'react';

import Product from '../Product/Product';

class Dashboard extends Component {
  constructor(){
    super();
      this.state = {
        results: {},
      }
  }

  render() {
      console.log(this.props)
    // let list = this.state.inventory.map((name, index) => {
    //   return (
    //     <Product
    //       getItemList={ () => this.getItemList() }
    //       currentProduct={name}
    //       key={index}
    //     />
    //   )
    // })
    return ( 
      <div>
        <div>
          {/* <h3>{list}</h3> */}
        </div>
        <div>
          <Product />
        </div>
      </div>
    )
  }
}

export default Dashboard;