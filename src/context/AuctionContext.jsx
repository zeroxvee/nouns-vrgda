import { createContext, useContext, useState } from "react"

const AuctionContext = createContext()

export function useAuction() {
    return useContext(AuctionContext)
}

export function AuctionProvider({ children }) {
    const [minMintPrice, setMinMintPrice] = useState("")
    const [currMintPrice, setCurrMintPrice] = useState("")
    const [targetMintPrice, setTargetMintPrice] = useState("")

    const value = {
        minMintPrice,
        setMinMintPrice,
        currMintPrice,
        setCurrMintPrice,
        targetMintPrice,
        setTargetMintPrice,
    }

    return (
        <AuctionContext.Provider value={value}>
            {children}
        </AuctionContext.Provider>
    )
}
