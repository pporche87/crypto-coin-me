import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xb137Ad673296ff38aF6d9815c504AE7C1250E97d'
);

export default instance;