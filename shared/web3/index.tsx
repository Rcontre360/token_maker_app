import ERC20Contract from "../../../contract/artifacts/contracts/ERC20/ERC20Custom.sol";
import Web3 from "web3";

export const deploy = async () => {
  const bytecode = ERC20Contract.evm.bytecode.object;
  const abi = ERC20Contract.abi;
};
