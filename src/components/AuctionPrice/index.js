import { useContract, useContractRead } from "@thirdweb-dev/react";
import { utils } from 'ethers';

export default function AuctionDetails() {
    const { contract } = useContract("0xaF71644feEAf6439015D57631f59f8e0E0F91C67");
    const { data: currVRGDAPrice } = useContractRead(contract, "getCurrentVRGDAPrice");

    console.log(currVRGDAPrice);

    return (
        <div className="w-full">
            <h2 className="text-[#1C2228] text-3xl font-bold">
                Ξ {currVRGDAPrice && utils.formatEther(currVRGDAPrice.toString())}
            </h2>
        </div>
    )
}
