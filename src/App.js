import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lucky from './lucky';
class App extends Component {

state ={
    manager: '',
    players: [],
    balance: '',
    value: '',
    message: ''
};
// this method to setup the contract
async componentDidMount(){
  const manager = await lucky.methods.manager().call(); //no need to specify the property
  const players = await lucky.methods.getPlayers().call(); //get the number of player
  const balance = await web3.eth.getBalance(lucky.options.address); //get the balance
  this.setState({ manager, players, balance });
}

//method for Enter the contract
onSubmit = async (event) =>{
  event.preventDefault();
   const accounts = await web3.eth.getAccounts();

   //initialise early message
   this.setState({ message: 'Waiting on transaction success....'});

   await lucky.methods.enter().send({
     from: accounts[0],
     value: web3.utils.toWei(this.state.value,'ether')
   });

   //update message
   this.setState({ message: 'You have been entered!'});

};

//method for get method
onClick = async () =>{

  const accounts = await web3.eth.getAccounts();

  //initialise early message
  this.setState({ message: 'Waiting on transaction success....'});
  //call method
  await lucky.methods.pickLucky().send({
    from: accounts[0],
  });
  //show message if transaction succesful
  this.setState({ message: 'A winner has been picked!'});

};


//read the state and produce UI
render(){
//console.log(web3.version); //test the network
//web3.givenProvider.enable().then(console.log); //try get account

  return (
   <div>
   <h2> Lucky Draw Contract</h2>
   <p>
    This contract is managed by { this.state.manager}.
     There are currently {this.state.players.length} people entered, competing to
    win {web3.utils.fromWei(this.state.balance, 'ether')}</p>

    <hr />

    <form onSubmit={this.onSubmit}>
      <h4>Want to try your luck?</h4>
        <div>
          <label>Amount of ether to enter </label>
            <input
            value={this.state.value}
            onChange={event => this.setState({value: event.target.value})}
            />
        </div>
        <button>Enter</button>
    </form>

    <hr />
    <h4>Ready to pick a a winner?</h4>
    <button onClick={this.onClick}> Pick a winner?</button>
    <hr />
    <h1>{this.state.message}</h1>

   </div>
  );


}

}

export default App;
