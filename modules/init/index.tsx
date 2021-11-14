import React from "react";
import clsx from "clsx";
import axios from "axios";
import Image from "next/image";
import WalletIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ListIcon from "@mui/icons-material/FormatListNumbered";

import metamaskImage from "../../public/metamask.png";
import ethereumImage from "../../public/ethereum.png";
import appImage from "../../public/onlyLogo.png";
import backgroundImage from "../../public/ethBackground.jpeg";

import Card from "../../shared/components/Card";
import PriceCard from "../../shared/components/PriceCard";

interface LandingCardProps {
  headContent: JSX.Element;
  content: JSX.Element;
  title: string;
  step: number;
  className?: string;
}

const ethPriceUrl =
  "https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false";

const LandingCard: React.FunctionComponent<LandingCardProps> = (props) => {
  const {headContent, content, title, step, className} = props;

  return (
    <Card className={clsx("w-72", className)}>
      <div className="flex justify-center w-40">
        <div className="w-24 h-24 my-4">{headContent}</div>
      </div>
      <div>
        <h4 className="text-lg mb-10 text-gray-800 font-bold text-center">
          {title}
        </h4>
        {content}
      </div>
    </Card>
  );
};

interface Props {}

const Landing: React.FunctionComponent<Props> = (props) => {
  const [cryptoPrices, setCryptoPrices] = React.useState<Currency[]>([]);
  const backgroundGradient = {
    background: `
    linear-gradient(
      to right, 
      #0A3443,#0A3443,rgba(35, 73, 88, 0.9), rgba(88, 91, 92, 0.8)
    ),url(${backgroundImage.src}), black
    `,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
  };

  React.useEffect(() => {
    axios
      .get(ethPriceUrl)
      .then(({data}) => {
        const price = data.market_data.current_price.usd;
        setCryptoPrices([{symbol: "eth", name: "ether", price}]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <main
        className="flex justify-center w-full flex-1 px-20 text-center"
        style={backgroundGradient}
      >
        <div className="w-full h-screen flex justify-between max-w-6xl items-center">
          <div className="max-w-md align-left flex flex-col fixed top-25">
            <h1 className="text-5xl font-bold text-white text-left leading-snug">
              Create <span style={{color: "lightgreen"}}>tokens</span>for
              free, quick and easy
            </h1>
            <p className="text-white text-left">
              Choose between easy or complex tokens set up
            </p>
            <button className="p-2 bg-green-500 rounded-md text-white my-4 w-40">
              Start now
            </button>
          </div>
        </div>
      </main>
      <div className="flex h-screen w-full z-10 bg-white p-10 flex-col">
        <h3 className="text-center text-3xl text-gray-800">How it works</h3>
        <p className='text-center'>Easy deploy your cryptocurrency following these steps</p>
        <div className="flex justify-around">
          <LandingCard
            className="h-96 bg-gray-100 transform translate-y-14"
            headContent={<Image src={metamaskImage} />}
            title="Download metamask"
            step={1}
            content={
              <div className="text-center text-gray-600">
                <p>
                  Go to{" "}
                  <a href="https://metamask.io/download.html">metamask.io</a>{" "}
                  and download the wallet
                </p>
                <p>You can also check wich wallets are available in the app</p>
              </div>
            }
          />
          <LandingCard
            headContent={<Image src={ethereumImage} />}
            title="Configure your token"
            step={2}
            content={
              <div className="text-center text-gray-600">
                <p>Set its features, name, symbol, supply, etc.</p>
                <p>
                  You can start doing that <a href="#">here.</a>
                </p>
              </div>
            }
          />
          <LandingCard
            className="h-96 bg-gray-100 transform translate-y-14"
            headContent={<Image src={appImage} />}
            title="Fund your wallet with tokens"
            step={2}
            content={
              <div className="text-center text-gray-600">
                <p className="text-md">Fund your wallet with your token</p>
                <p className="text-md">You can also fund multiple wallets</p>
              </div>
            }
          />
        </div>
      </div>
      <div
        className="flex justify-start w-full z-10 bg-white p-10 flex-col bg-green-300"
        style={{height: "140vh"}}
      >
        <div className="text-center">
          <h3 className="text-3xl text-gray-800">Pricing</h3>
          <p>Choose between 4 token prices</p>
        </div>
        <div className="pb-10 pl-96 flex justify-around overflow-x-scroll overflow-y-hidden">
          <PriceCard prices={cryptoPrices} />
          <PriceCard prices={cryptoPrices} />
          <PriceCard prices={cryptoPrices} />
          <PriceCard prices={cryptoPrices} />
        </div>
      </div>
    </>
  );
};

export default Landing;
