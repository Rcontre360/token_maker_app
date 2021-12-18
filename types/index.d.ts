

type Currency = {
  id?: string;
  symbol: string;
  name: string;
  address: string;
  price?: number;
  img?: unknown
};

declare global {
  interface Window {ethereum: any; web3: any}
}

window.ethereum = window.ethereum || {};
window.web3 = window.web3 || {};
