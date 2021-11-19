import ERC20Contract from "../../../contract/artifacts/contracts/ERC20/ERC20Custom.sol/ERC20Custom.json";
import detectEthereumProvider from "@metamask/detect-provider";

import Web3 from "web3";
import {AbiItem} from "web3-utils";


export type ContractArguments = {
  symbol: string;
  name: string;
  decimals: string;
  initialSuppy: string;
  maxSupply: string;
  burnable: boolean;
  mintable: boolean;
  pausable: boolean;
  cappable: boolean;
};

export const deploy = async (contractConfig: ContractArguments) => {
  const bytecode = ERC20Contract.bytecode;
  const abi = ERC20Contract.abi;

  const web3 = new Web3(window.ethereum as any);
  const accounts = await web3.eth.getAccounts();

  const incrementer = new web3.eth.Contract(abi as AbiItem[]);
  const incrementerTx = incrementer.deploy({
    data: bytecode,
    arguments: [
      contractConfig.initialSuppy,
      contractConfig.decimals,
      contractConfig.maxSupply,
      contractConfig.name,
      contractConfig.symbol,
      [
        contractConfig.burnable,
        contractConfig.mintable,
        contractConfig.pausable,
        contractConfig.cappable,
      ],
    ],
  });

  console.log({
    arguments: [
      contractConfig.initialSuppy,
      contractConfig.decimals,
      contractConfig.maxSupply,
      contractConfig.name,
      contractConfig.symbol,
      [
        contractConfig.burnable,
        contractConfig.mintable,
        contractConfig.pausable,
        contractConfig.cappable,
      ],
    ],
  });
  const txHash = await window.ethereum.request({
    method: "eth_sendTransaction",
    params: [
      {
        data: incrementerTx.encodeABI(),
        from: accounts[0],
      },
    ],
  });
  return txHash;
};

export const connectMetamask = async () => {
  console.log("connect");
  await window.ethereum.request({method: "eth_requestAccounts"});
};

export const isWeb3Enabled = async () => {
  const provider = await detectEthereumProvider();
  if (provider) return provider;
  return null;
};

export const networkMapper = {
  polygon: {id: '0x89', provider: process.env.NEXT_LOCAL_POLYGON},
  mainnet: {id: '0x1', provider: process.env.NEXT_LOCAL_MAINNET},
  binance: {id: '0x38', provider: process.env.NEXT_LOCAL_BINANCE},
}
