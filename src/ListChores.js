import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

  const buttonsInstance = (
    <ButtonToolbar>
      <Button bsStyle="success">Add chore</Button>
    </ButtonToolbar>
    );

class ListChores extends Component {
    
    constructor(props) {
      super(props);
		
      this.state = {
         data: 'Initial data...'
      }

      this.updateState = this.updateState.bind(this);

   };

   updateState(e) {
      this.setState({data: e.target.value});
   }
   
     render() {
      return (
         <div>
            <form action="" onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.data} 
               onChange={this.updateState} /> {buttonsInstance}
            <h4>{this.state.data}</h4>
            </form>
         </div>
      );
   }
    
}

export default ListChores;