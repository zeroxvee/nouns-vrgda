import { useContract, useContractRead } from "@thirdweb-dev/react"
import { ethers, utils } from "ethers"

export default function AuctionDetails() {
    const { contract } = useContract(
        "0xaF71644feEAf6439015D57631f59f8e0E0F91C67"
    )
    const { data: currentPrice, isLoading: loadingCurr } = useContractRead(
        contract,
        "getCurrentVRGDAPrice"
    )
    const { data: minPrice, isLoading: loadingMin } = useContractRead(
        contract,
        "reservePrice"
    )
    console.log("minPrice", minPrice)
    console.log("currentPrice", currentPrice)
    const minMintPrice = loadingMin ? "" : ethers.utils.formatEther(minPrice)
    const currMintrice = loadingCurr
        ? ""
        : ethers.utils.formatEther(currentPrice)

    return (
        <div className="w-full">
            <h2 className="text-[#1C2228] text-3xl font-['PT Sans']">
                Ξ
                {currMintrice > minMintPrice
                    ? Number(
                          utils.formatEther(currVRGDAPrice.toString())
                      ).toFixed(3)
                    : minMintPrice}
            </h2>
        </div>
    )
}
