import web3 from './web3';

const address = '0xb61e95850D897EB7E0655D5724be055bAc78A6D2';

const abi = [
  {
    constant: true,
    inputs: [],
    name: 'manager',
    outputs: [ { name: '', type: 'address' } ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'random',
    outputs: [ { name: '', type: 'uint256' } ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [],
    name: 'pickLucky',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'getPlayers',
    outputs: [ { name: '', type: 'address[]' } ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [ { name: '', type: 'uint256' } ],
    name: 'player',
    outputs: [ { name: '', type: 'address' } ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [],
    name: 'enter',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  }
];

export default new web3.eth.Contract(abi, address);
