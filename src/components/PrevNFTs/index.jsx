import React from "react"
import { useAuction } from "@/context/AuctionContext.jsx"
import { ethers } from "ethers"
import Image from "next/image"
import NewBuyNow from "../NewBuyNow"

const PrevNFTs = () => {
    const { nounNFTMeta, currMintPrice } = useAuction()
    console.log('nounNFTMeta PrevNFTs', nounNFTMeta);
    return (
        <div className="container px-20">
            <h2 className="font-londrina text-center text-4xl pt-4 md:pt-16">
                Last 3 blocks:
            </h2>
            <div className="flex flex-col md:flex-row p-6 justify-evenly">
                {nounNFTMeta &&
                    nounNFTMeta.map((nft, index) => (
                        <div key={index} className="py-6">
                            <Image
                                src={`data:image/svg+xml;base64,${nft.svg}`}
                                alt={`NFT ${index}`}
                                width={150}
                                height={150}
                            />
                            <p className="pt-2 font-bold">
                                {/* Price: {ethers.utils.formatEther(nft.price)} */}
                            </p>
                            <NewBuyNow nft={nft} currMintPrice={currMintPrice} />
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default PrevNFTs
