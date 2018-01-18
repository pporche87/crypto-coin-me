const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  // ==============================================================
  // =========== Enter your 12 word mneumonic on the following line
  // ==============================================================
  "clown chronic distance jacket skirt expose city tuition provide feed satisfy tonight",
  "https://rinkeby.infura.io/jphU0izevckhZcphZulo"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);
  // Attempting to deploy from account 0x40f5827a61bC638bAa14626FCf46717fC5139AEd

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
  // Contract deployed to 0xb137Ad673296ff38aF6d9815c504AE7C1250E97d
};

deploy();
