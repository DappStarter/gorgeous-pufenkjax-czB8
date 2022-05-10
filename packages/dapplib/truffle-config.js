require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remind attitude grid clock onion state'; 
let testAccounts = [
"0xb41d9453a6c3c632a3b4749416963827c8e2537dd844fdd9d6924fc07e4d541b",
"0xc992f99339eda99fbb4c070f97990b8fbe5a2e128ea4fd8c639dbd43b7696c8a",
"0xdc1623edbe6fe7991ebfd63f622f873cf6a43544f6c4ec19d7463262e25df7c4",
"0xb188b2b99b51a6f6b70861b3aa24cf811fa9c4aeb5f570009fa17395af69a738",
"0x309b380bd740d26e2b689f9a81a79803605ac7d1fa93e220cb79e3cc1737520b",
"0xfe8ecc7540533bea50498b29ec8f02426a9952366417e4e4b098bb7554969361",
"0x8c3f1323a1ee81a7fc67fb350d3e48bff5e1d3181e649e1b7bb28e41d0b77f67",
"0x9bd96a77e492ada47d07b5a483595482236f9466eb6394220b52395e5fae81cc",
"0x98f8516a5eb661315c6f210bf1826b57d6a80cf7e84d7af7403faec2fff4c328",
"0x034aa437273b877ca43a076aab57449a74489019837314ac68141734231e29a4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

