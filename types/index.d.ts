

type Currency = {
  symbol: string;
  name: string;
  price: number;
};

declare global {
  interface Window {ethereum: any; web3: any}
}

window.ethereum = window.ethereum || {};
window.web3 = window.web3 || {};
