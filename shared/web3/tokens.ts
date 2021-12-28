import bitcoinImg from "cryptocurrency-icons/svg/color/btc.svg";
import bnbImg from "cryptocurrency-icons/svg/color/bnb.svg";
import daiImg from "cryptocurrency-icons/svg/color/dai.svg";
import ethImg from "cryptocurrency-icons/svg/color/eth.svg";
import linkImg from "cryptocurrency-icons/svg/color/link.svg";
import tetherImg from "cryptocurrency-icons/svg/color/usdt.svg";
import uniswap from "cryptocurrency-icons/svg/color/uni.svg";
import usdc from "cryptocurrency-icons/svg/color/usdc.svg";

const Token = (
  symbol: string,
  name: string,
  address: string,
  img: unknown
) => ({
  name,
  symbol,
  address,
  img,
});

const chainTokens = {
  ethereum: {
    ethereum: Token(
      "ETH",
      "Wrapped Ether",
      //'0xa4450074f02f50fbba5fa3737b9e67e502305b64',
      "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      ethImg
    ),
    usdt: Token(
      "USDT",
      "Tether USD",
      "0xdac17f958d2ee523a2206206994597c13d831ec7",
      tetherImg
    ),
    usdc: Token(
      "USDC",
      "USD Coin",
      "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      usdc
    ),
    bitcoin: Token(
      "WBTC",
      "Wrapped BTC",
      "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      bitcoinImg
    ),
    uniswap: Token(
      "UNI",
      "Uniswap",
      "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
      uniswap
    ),
    bnb: Token(
      "BNB",
      "Binance",
      "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
      bnbImg
    ),
    dai: Token(
      "DAI",
      "Dai Stablecoin",
      "0x6b175474e89094c44da98b954eedeac495271d0f",
      daiImg
    ),
    link: Token(
      "LINK",
      "ChainLink Token",
      "0x514910771af9ca656af840dff83e8264ecf986ca",
      linkImg
    ),
  },
  binance: {
    ethereum: Token(
      "ETH",
      "Binance-Peg Ethereum Token",
      "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
      ethImg
    ),
    usdt: Token(
      "BSC-USD",
      "Binance-Peg BSC-USD",
      "0x55d398326f99059ff775485246999027b3197955",
      tetherImg
    ),
    usdc: Token(
      "USDC",
      "Binance-Peg USD Coin",
      "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
      usdc
    ),
    bitcoin: Token(
      "BTCB",
      "Binance-Peg BTCB Token",
      "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
      bitcoinImg
    ),
    uniswap: Token(
      "UNI",
      "Binance-Peg Uniswap",
      "0xbf5140a22578168fd562dccf235e5d43a02ce9b1",
      uniswap
    ),
    bnb: Token(
      "WBNB",
      "Wrapped BNB",
      "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      bnbImg
    ),
    dai: Token(
      "DAI",
      "Binance-Peg Dai Token",
      "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
      daiImg,
    ),
    link: Token(
      "LINK",
      "Binance-Peg ChainLink Token",
      "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd",
      linkImg,
    ),
  },
  polygon: {
    ethereum: Token(
      "ETH",
      "Wrapped Ether",
      "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
      ethImg
    ),
    usdt: Token(
      "USDT",
      "(PoS) Tether USD",
      "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
      tetherImg
    ),
    usdc: Token(
      "USDC",
      "USD Coin (PoS)",
      "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
      usdc
    ),
    bitcoin: Token(
      "WBTC",
      "(PoS) Wrapped BTC",
      "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
      bitcoinImg
    ),
    uniswap: Token(
      "UNI",
      "Uniswap (PoS)",
      "0xb33eaad8d922b1083446dc23f610c2567fb5180f",
      uniswap
    ),
    bnb: Token(
      "BNB",
      "Binance",
      "0x3BA4c387f786bFEE076A58914F5Bd38d668B42c3",
      bnbImg
    ),
    dai: Token(
      "DAI",
      "(PoS) Dai Stablecoin",
      "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
      daiImg
      ,
    ),
    link: Token(
      "LINK",
      "ChainLink Token",
      "0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39",
      linkImg,
    ),
  },
  arbitrum: {
    ethereum: Token(
      "ETH",
      "Wrapped Ether",
      "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
      ethImg
    ),
    usdt: Token(
      "USDT",
      "Tether USD",
      "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
      tetherImg
    ),
    usdc: Token(
      "USDC",
      "USD Coin (Arb1)",
      "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
      usdc
    ),
    bitcoin: Token(
      "WBTC",
      "Wrapped BTC",
      "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
      bitcoinImg
    ),
    uniswap: Token(
      "UNI",
      "Uniswap",
      "0xfa7f8980b0f1e64a2062791cc3b0871572f1f7f0",
      uniswap
    ),
    dai: Token(
      "DAI",
      "Dai Stablecoin",
      "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
      daiImg
      ,
    ),
    link: Token(
      "LINK",
      "ChainLink Token",
      "0xf97f4df75117a78c1a5a0dbb814af92458539fb4",
      linkImg,
    ),
  },
  avax: {
    ethereum: Token(
      "ETH",
      "Wrapped Ether",
      "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
      ethImg
    ),
    usdt: Token(
      "USDT",
      "Tether USD",
      "0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
      tetherImg
    ),
    usdc: Token(
      "USDC",
      "USD Coin",
      "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664",
      usdc
    ),
    bitcoin: Token(
      "WBTC",
      "Wrapped BTC",
      "0x50b7545627a5162F82A992c33b87aDc75187B218",
      bitcoinImg
    ),
    uniswap: Token(
      "UNI",
      "Uniswap",
      "0x8eBAf22B6F053dFFeaf46f4Dd9eFA95D89ba8580",
      uniswap
    ),
    bnb: Token(
      "BNB",
      "Binance",
      "0x264c1383EA520f73dd837F915ef3a732e204a493",
      bnbImg
    ),
    dai: Token(
      "DAI",
      "Dai Stablecoin",
      "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
      daiImg
      ,
    ),
    link: Token(
      "LINK",
      "ChainLink Token",
      "0x5947BB275c521040051D82396192181b413227A3",
      linkImg,
    ),
  },
};

export default chainTokens;
