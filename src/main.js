// Setup: npm install alchemy-sdk
import { Alchemy, Network } from "alchemy-sdk";
import dotenv from 'dotenv';

dotenv.config();

const config = {
  apiKey: process.env.API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

const main = async () => {
  // Contract address
  const address = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";

  // Flag to omit metadata
  const omitMetadata = false;

  // Get all NFTs

  try {
    const { nfts } = await alchemy.nft.getNftsForContract(address, {
      omitMetadata: omitMetadata,
    });
  
    let i = 1;
  
    for (let nft of nfts) {
      console.log(`${i}. ${nft.rawMetadata.image}`);
      i++;
    }
  } catch(e) {
    console.log("====Error", e)
  }

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();