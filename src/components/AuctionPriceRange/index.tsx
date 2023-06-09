import React from "react"
import { useAuction } from "@/context/AuctionContext.jsx"

const PriceBlock: React.FC<{
    bgColor: string
    isActive: boolean
}> = (props) => {
    const { bgColor, isActive } = props
    return (
        <>
            <div
                style={{
                    border: isActive ? "2px solid #000" : "none",
                }}
                className={`md:w-[30px] md:h-[30px] w-[21px] h-[21px] ${bgColor}`}
            ></div>
        </>
    )
}

export default function AuctionPriceRange() {
    const { minMintPrice, currMintPrice, targetMintPrice } = useAuction()

    const maxPrice = 0.1
    const numPriceBlocks = 15
    const currMintPricePercentage = parseFloat(currMintPrice) / maxPrice

    const activeIndex = Math.floor(currMintPricePercentage * numPriceBlocks)
    const colorsClassNames = [
        "bg-[#FF638D]",
        "bg-[#FF638D]",
        "bg-[#FF638D]",
        "bg-[#FF9564]",
        "bg-[#FFB946]",
        "bg-[#FFCB37]",
        "bg-[#FFEF17]",
        "bg-[#FFEF17]",
        "bg-[#FFEF17]",
        "bg-[#C6D254]",
        "bg-[#8FB78E]",
        "bg-[#5D9DC3]",
        "bg-[#2B83F6]",
        "bg-[#2B83F6]",
        "bg-[#2B83F6]",
    ]

    return (
        <>
            <div className="inline-block relative">
                <div className="flex justify-between lg:space-x-0 md:space-x-48 space-x-32 text-[#C7AC8C]">
                    <h4 className="text-sm -mb-2">Ξ{minMintPrice ?? ""}</h4>
                    <h4 className="text-sm -mb-2">Ξ{targetMintPrice ?? ""}</h4>
                    <h4 className="text-sm -mb-2">Ξ{maxPrice ?? ""}</h4>
                </div>
                <div className="flex flex-row items-center justify-start space-x-[4px] mt-[12px]">
                    {colorsClassNames.map((color, index) => {
                        return (
                            <PriceBlock
                                bgColor={color}
                                key={index}
                                isActive={index === activeIndex}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}
