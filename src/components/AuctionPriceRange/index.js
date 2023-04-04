import { useContract, useContractRead } from "@thirdweb-dev/react";
import { utils } from 'ethers';

export default function AuctionPriceRange() {
    const { contract } = useContract("0xaF71644feEAf6439015D57631f59f8e0E0F91C67");
    const { data: reservePrice } = useContractRead(contract, "reservePrice");
    const { data: currVRGDAPrice } = useContractRead(contract, "getCurrentVRGDAPrice");
    const { data: targetPrice } = useContractRead(contract, "targetPrice");

    console.log("Prices:", reservePrice, currVRGDAPrice, targetPrice);

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
                <div className="md:w-[30px] md:h-[30px] w-[21px] h-[21px] bg-[#2B83F6] border-2 border-black"></div>
                <div className="md:w-[30px] md:h-[30px] w-[21px] h-[21px] bg-[#2B83F6] border-none"></div>
                <div className="md:w-[30px] md:h-[30px] w-[21px] h-[21px] bg-[#2B83F6] border-none"></div>
                <div className="md:w-[30px] md:h-[30px] w-[21px] h-[21px] bg-[#5D9DC3] border-none"></div>
                <div className="md:w-[30px] md:h-[30px] w-[21px] h-[21px] bg-[#8FB78E] border-none"></div>
                <div className="md:w-[30px] md:h-[30px] w-[21px] h-[21px] bg-[#C6D254] border-none"></div>
                <div className="md:w-[30px] md:h-[30px] w-[21px] h-[21px] bg-[#FFEF17] border-none"></div>
                <div className="md:w-[30px] md:h-[30px] w-[21px] h-[21px] bg-[#FFEF17] border-none"></div>
                <div className="md:w-[30px] md:h-[30px] w-[21px] h-[21px] bg-[#FFEF17] border-none"></div>
                <div className="md:w-[30px] md:h-[30px] w-[21px] h-[21px] bg-[#FFCB37] border-none"></div>
                <div className="md:w-[30px] md:h-[30px] w-[21px] h-[21px] bg-[#FFB946] border-none"></div>
                <div className="md:w-[30px] md:h-[30px] w-[21px] h-[21px] bg-[#FF9564] border-none"></div>
                <div className="md:w-[30px] md:h-[30px] w-[21px] h-[21px] bg-[#FF638D] border-none"></div>
                <div className="md:w-[30px] md:h-[30px] w-[21px] h-[21px] bg-[#FF638D] border-none"></div>
                <div className="md:w-[30px] md:h-[30px] w-[21px] h-[21px] bg-[#FF638D] border-none"></div>
            </div>
        </div>
    )
}
