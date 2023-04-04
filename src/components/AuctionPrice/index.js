import { useContract, useContractRead } from "@thirdweb-dev/react";

export default function AuctionDetails() {
    const { contract } = useContract("0xaF71644feEAf6439015D57631f59f8e0E0F91C67");
    const { data: currVRGDAPrice } = useContractRead(contract, "getCurrentVRGDAPrice");
    const { data: nextNoun } = useContractRead(contract, "fetchNextNoun");

    console.log(currVRGDAPrice);

    return (
        <div className="w-full">
            <h2 className="text-[#1C2228] text-3xl font-bold">
                Ξ {currVRGDAPrice && currVRGDAPrice.toNumber()}
            </h2>
        </div>
    )
}
