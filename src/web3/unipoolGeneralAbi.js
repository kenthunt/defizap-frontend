const UNIPOOL_GENERAL_ABI = [
  {
    constant: false,
    inputs: [],
    name: 'depositETH',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'ERC20TokenHoldingsOnConversion',
    type: 'event'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_TokenContractAddress',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_towhomtoissue',
        type: 'address'
      }
    ],
    name: 'LetsInvest',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    payable: true,
    stateMutability: 'payable',
    type: 'function'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'LiquidityTokens',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    constant: false,
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address payable',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'transferOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    payable: true,
    stateMutability: 'payable',
    type: 'fallback'
  },
  {
    constant: false,
    inputs: [],
    name: 'withdraw',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_TokenContractAddress',
        type: 'address'
      }
    ],
    name: 'withdrawERC20Token',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: '_owner',
    outputs: [
      {
        internalType: 'address payable',
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'balance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'isOwner',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'UniSwapFactoryAddress',
    outputs: [
      {
        internalType: 'contract IuniswapFactory',
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }
];

export default UNIPOOL_GENERAL_ABI;