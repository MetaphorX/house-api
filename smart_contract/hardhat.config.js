//https://eth-rinkeby.alchemyapi.io/v2/OgEg2mwL5CTnnq6r57fwnA71mWCZqNNR
require('@nomiclabs/hardhat-waffle')

module.exports ={
  solidity: '0.8.0',
  networks:{
    rinkeby:{
      url: 'https://eth-rinkeby.alchemyapi.io/v2/OgEg2mwL5CTnnq6r57fwnA71mWCZqNNR',
      accounts:['c603088e6ffa679ba712c4575a831e9f66a5df2efea5b4a61a0255c43101941c']
    }
  }
}