import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x75A304b34368b2aD5853c14e31295c4E6F94862C"
);

export default instance;