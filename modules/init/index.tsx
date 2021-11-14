import React from "react";
import backgroundImage from "../../public/ethBackground.jpeg";

interface Props {}

const Landing: React.FunctionComponent<Props> = (props) => {
  const backgroundGradient = {
    background: `
    linear-gradient(
      to right, 
      #0A3443,#0A3443,rgba(35, 73, 88, 0.9), rgba(88, 91, 92, 0.8)
    ),url(${backgroundImage.src}), black;
    `,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
  };

  return (
    <main
      className="flex justify-center w-full flex-1 px-20 text-center"
      style={backgroundGradient}
    >
      <div className="w-full h-screen flex justify-between max-w-6xl items-center">
        <div className="max-w-sm align-left flex flex-col">
          <h1 className="text-5xl font-sans font-bold text-white text-left leading-snug">
            Create <span style={{color: 'lightgreen'}}>tokens</span>for free, quick and easy
          </h1>
          <p className='text-white text-left'>Choose between easy or complex tokens set up</p>
          <button className='p-2 bg-green-500 rounded-md text-white my-4 w-40'>Start now</button>
        </div>
      </div>
    </main>
  )
};

export default Landing;
