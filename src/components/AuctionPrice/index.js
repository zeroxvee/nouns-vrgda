import { useContract, useContractRead } from "@thirdweb-dev/react";
import { utils } from 'ethers';

export default function AuctionDetails() {
    const { contract } = useContract("0xaF71644feEAf6439015D57631f59f8e0E0F91C67");
    const { data: currVRGDAPrice } = useContractRead(contract, "getCurrentVRGDAPrice");
    const currFakePrice = 0.055;

    console.log("currVRGDAPrice", currVRGDAPrice);

    return (
        <div className="w-full">
            <h2 className="text-[#1C2228] text-3xl font-['PT Sans']">
                Ξ {currFakePrice}
                {/* Ξ {currVRGDAPrice && Number(utils.formatEther(currVRGDAPrice.toString())).toFixed(3)} */}
            </h2>
        </div>
    )
}
