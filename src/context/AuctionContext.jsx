import { createContext, useContext, useState } from "react"

const AuctionContext = createContext()

export function useAuction() {
    return useContext(AuctionContext)
}

export function AuctionProvider({ children }) {
    const [nounNFTMeta, setNounNFTMeta] = useState([]);
    const [minMintPrice, setMinMintPrice] = useState("")
    const [currMintPrice, setCurrMintPrice] = useState("")
    const [targetMintPrice, setTargetMintPrice] = useState("")

    const addNounData = (newNoun) => {
        // Check if the new object has a different hash value from the existing ones

        const isDuplicate = nounNFTMeta ? nounNFTMeta.some(noun => noun.hash === newNoun.hash) : "";
        if (!isDuplicate) {
            // Add the new object to the beginning of the array
            setNounNFTMeta([newNoun, ...nounNFTMeta.slice(0, 2)]);
            // Remove the oldest object if there are already 3 objects in the array
            if (nounNFTMeta.length >= 3) {
                setNounNFTMeta(nounNFTMeta.slice(0, 3));
            }
        }
    };

    const value = {
        addNounData,
        nounNFTMeta,
        setNounNFTMeta,
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
