import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x5618CD3A080C78368bD398159D67F8eFBec20bb2"
);

export default instance;