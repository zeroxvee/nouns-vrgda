import React from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { utils } from 'ethers';


const PriceBlock: React.FC<{
  bgColor: string;
  isActive: boolean;
}> = props => {
  const { bgColor, isActive } = props;
  return (
    <>
      <div
        style={{
          border: isActive ? '2px solid #000' : 'none',
        }}
        className={`md:w-[25px] md:h-[25px] w-[20px] h-[20px] bg-[var(--brand-warm-accent)] ${bgColor}`}
      ></div>
    </>
  );
};

export default function AuctionPriceRange() {
  const { contract } = useContract("0xaF71644feEAf6439015D57631f59f8e0E0F91C67");
  const { data: reservePrice } = useContractRead(contract, "reservePrice");
  const { data: currVRGDAPrice } = useContractRead(contract, "getCurrentVRGDAPrice");
  const { data: targetPrice } = useContractRead(contract, "targetPrice");


  console.log("Prices:", reservePrice, currVRGDAPrice, targetPrice);
  const numPriceBlocks = 15;
  const activeIndex = numPriceBlocks - (Math.floor((currVRGDAPrice / targetPrice) * numPriceBlocks) - 1);
  const colorsClassNames = [
    'bg-[#FF638D]',
    'bg-[#FF638D]',
    'bg-[#FF638D]',
    'bg-[#FF9564]',
    'bg-[#FFB946]',
    'bg-[#FFCB37]',
    'bg-[#FFEF17]',
    'bg-[#FFEF17]',
    'bg-[#FFEF17]',
    'bg-[#C6D254]',
    'bg-[#8FB78E]',
    'bg-[#5D9DC3]',
    'bg-[#2B83F6]',
    'bg-[#2B83F6]',
    'bg-[#2B83F6]',
  ];

  return (
    // Need to figure out correct order of prices
    <div className="inline-block relative">
      <div className="flex lg:justify-between justify-start lg:space-x-0 md:space-x-48 space-x-32 text-[#C7AC8C]">
        <h4 className="text-sm -mb-2">
          Ξ{reservePrice && utils.formatEther(reservePrice.toString())}
        </h4>
        <h4 className="text-sm -mb-2">
          Ξ{currVRGDAPrice && utils.formatEther(currVRGDAPrice.toString())}
        </h4>
        <h4 className="text-sm -mb-2">
          Ξ{targetPrice && utils.formatEther(targetPrice.toString())}
        </h4>
      </div>
      <div className="flex flex-row items-center justify-start space-x-[4px] mt-[12px]">
        {colorsClassNames.map((color, index) => {
          return <PriceBlock bgColor={color} isActive={index === activeIndex} />;
        })}
      </div>
      <>
          <div
            className="absolute mt-1.5 rounded-lg border-solid border-b-black border-b-8 border-x-transparent border-x-8 border-t-0"
            style={{
              left: `${(1 + activeIndex) * 25}px`,
            }}
          ></div>
        </>
    </div>
  )
}
