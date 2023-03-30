// require('babel-register');
// require('babel-polyfill');
// const fs = require('fs');

// const Kit = require('@celo/contractkit')
// const kit = Kit.newKit('https://alfajores-forno.celo-testnet.org')
// const getAccount = require('./getAccount').getAccount

// async function awaitWrapper() {
//   let account = await getAccount()
//   kit.connection.addAccount(account.privateKey)
// }
// awaitWrapper() 

require("dotenv").config({ path: ".env" });
const HDWalletProvider = require("@truffle/hdwallet-provider");
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const provider_zkPolygon = new HDWalletProvider(
  PRIVATE_KEY,
  "https://methodical-misty-wish.zkevm-testnet.discover.quiknode.pro/0a93c82481209a21aee2c243179f731f92989ef5/"
);


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    // alfajores: {
    //   provider: kit.connection.web3.currentProvider, 
    //   network_id: 44787 
    // },
    mumbaimatic: {
      provider: provider_zkPolygon,
      network_id: 1442,
      confirmations: 2,
    }
  },

  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "0.7.1",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}