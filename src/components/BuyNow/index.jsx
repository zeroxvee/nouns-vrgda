import {
    useContract,
    useContractWrite,
    useContractRead,
} from "@thirdweb-dev/react"
import { useEffect, useState } from "react"
const { ethers } = require("ethers")

export default function BuyNow() {
    const [parentBlockHash, setParentBlockHash] = useState("")

    const provider = new ethers.providers.JsonRpcProvider(
        "https://goerli.rpc.thirdweb.com"
    )

    // lilnouns sandox Goerli contract address
    const { contract } = useContract(
        "0xaF71644feEAf6439015D57631f59f8e0E0F91C67"
    )
    const { data: expectedNounId } = useContractRead(
        contract,
        "nextNounIdForCaller"
    )

    const call = async () => {
        try {
            if (!contract) {
                throw new Error("Contract is undefined")
            }
            const expNounID = ethers.BigNumber.from(expectedNounId)
            const price = ethers.utils.parseEther("0.01")
            const args = [expNounID, parentBlockHash]
            const tx = await contract.call("settleAuction", args, {
                value: price,
                gasLimit: 1000000,
            })
            console.info("settleAuction transaction sent:", tx.hash)

            const receipt = await tx.wait()
            console.info(
                "settleAuction transaction confirmed:",
                receipt.transactionHash
            )
        } catch (err) {
            console.error("contract call failure", err)
        }
    }

    useEffect(() => {
        const intervalId = setInterval(async () => {
            const parentBlock = await provider.getBlock("latest")
            setParentBlockHash(ethers.utils.hexlify(parentBlock.hash))
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [parentBlockHash])

    return (
        <div className="input-group">
            <button
                type="button"
                className="Buy_bidBtn__O3Zyw btn btn-primary hover:bg-slate-800"
                onClick={call}
            >
                Buy Now
            </button>
        </div>
    )
}
