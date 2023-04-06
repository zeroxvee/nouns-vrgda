// import { useContract, useContractWrite, useContractRead } from "@thirdweb-dev/react";
// const { ethers } = require("ethers");

// export default function BuyNow() {
//     const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/ec11efc0acde425fa9604b66378498da");
//     const signer = provider.getSigner();
//     const { contract } = useContract("0xaF71644feEAf6439015D57631f59f8e0E0F91C67", signer);
//     const { mutateAsync: settleAuction } = useContractWrite(contract, "settleAuction");
//     const { data: expectedNounId } = useContractRead(contract, "nextNounIdForCaller");
    

//     console.log("expectedNounId", expectedNounId);


//     const call = async () => {
//         try {
//             const parentBlockHash = await provider.getBlock("latest")
//             console.log('parentBlockHash', parentBlockHash.parentHash.toString());
//             const data = await settleAuction({args: [expectedNounId.parentHash, parentBlockHash.parentHash]});
//             console.info("contract call successs", data);
//         } catch (err) {
//             console.error("contract call failure", err);
//         }
//     };

//     return (
//         <div className="input-group">
//             <button
//                 type="button"
//                 className="Buy_bidBtn__O3Zyw btn btn-primary hover:bg-slate-800"
//                 onClick={call}>Buy Now
//             </button>
//         </div>
//     );
// }


// import { useContract, useContractWrite, useContractRead } from "@thirdweb-dev/react";
// const { ethers } = require("ethers");

// export default function BuyNow() {
//   const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/ec11efc0acde425fa9604b66378498da");
//   const signer = provider.getSigner();
//   const { contract } = useContract("0xaF71644feEAf6439015D57631f59f8e0E0F91C67", signer);
//   const { mutateAsync: settleAuction } = useContractWrite(contract, "settleAuction");
//   const { data: expectedNounId } = useContractRead(contract, "nextNounIdForCaller");

//   console.log("expectedNounId", expectedNounId);

//   const call = async () => {
//     try {
//       const parentBlockHash = await provider.getBlock("latest")
//       console.log('parentBlockHash', parentBlockHash.parentHash.toString());
//       const contractWithSigner = new ethers.Contract(contract.address, contract.abi, signer);
//       const data = await contractWithSigner.settleAuction(expectedNounId.parentHash, parentBlockHash.parentHash);
//       console.info("contract call successs", data);
//     } catch (err) {
//       console.error("contract call failure", err);
//     }
//   };

//   return (
//     <div className="input-group">
//       <button
//         type="button"
//         className="Buy_bidBtn__O3Zyw btn btn-primary hover:bg-slate-800"
//         onClick={call}>Buy Now
//       </button>
//     </div>
//   );
// }

import { useContract, useContractWrite, useContractRead } from "@thirdweb-dev/react";
const { ethers } = require("ethers");

export default function BuyNow() {
  const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/ec11efc0acde425fa9604b66378498da");
  const signer = provider.getSigner();
  const { contract } = useContract("0xaF71644feEAf6439015D57631f59f8e0E0F91C67", signer);
  const { mutateAsync: settleAuction } = useContractWrite(contract, "settleAuction");
  const { data: expectedNounId } = useContractRead(contract, "nextNounIdForCaller");

  console.log("expectedNounId", expectedNounId);
  console.log("settleAuction", settleAuction);

  const call = async () => {
    try {
      if (!contract) {
        throw new Error("Contract is undefined");
      }
      
      const parentBlockHash = await provider.getBlock("latest");
      console.log('parentBlockHash', parentBlockHash.parentHash.toString());

      const args = [expectedNounId.parentHash, parentBlockHash.parentHash];
      console.log("args", args);

      const tx = await settleAuction(...args);
      console.info("settleAuction transaction sent:", tx.hash);

      const receipt = await tx.wait();
      console.info("settleAuction transaction confirmed:", receipt.transactionHash);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  return (
    <div className="input-group">
      <button
        type="button"
        className="Buy_bidBtn__O3Zyw btn btn-primary hover:bg-slate-800"
        onClick={call}>Buy Now
      </button>
    </div>
  );
}





