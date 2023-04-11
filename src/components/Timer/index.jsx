// import { useContract, useContractRead } from "@thirdweb-dev/react";
// import { ethers, utils } from "ethers"

// export default function TimeLeft() {

//     const { contract } = useContract("0xaF71644feEAf6439015D57631f59f8e0E0F91C67");
//     const { data: startTime, isLoading: strtTmeLoading } = useContractRead(contract, "startTime")
//     const { data: updateInterval, isLoading: updIntLoading } = useContractRead(contract, "updateInterval")
//     const formatTime = (ms) => {
//         const seconds = Math.floor(ms / 1000) % 60;
//         const minutes = Math.floor(ms / (1000 * 60)) % 60;
//         const hours = Math.floor(ms / (1000 * 60 * 60)) % 24;
//         const days = Math.floor(ms / (1000 * 60 * 60 * 24));

//         return `${days > 0 ? days + "d " : ""}${hours > 0 ? hours + "h " : ""}${minutes > 0 ? minutes + "m " : ""
//             }${seconds}s`;
//     };

//     let strtTme = strtTmeLoading ? 0 : Number(utils.formatEther(startTime));
//     let interval = updIntLoading ? 0 : Number(utils.formatEther(updateInterval));

//     console.log('strtTme, updateInterval', strtTme, formatTime(interval));

//     return <span className="text-[#1C2228] text-3xl font-['PT Sans']">{formatTime(interval)}</span>;
// }

import { useState, useEffect } from "react";

function Countdown() {
  const [countdown, setCountdown] = useState(900);

  useEffect(() => {
    let startDate = new Date(Date.UTC(2023, 0, 2, 16, 51, 12));
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeDiff = startDate.getTime() + 15 * 60 * 1000 - now.getTime();
      if (timeDiff < 0) {
        setCountdown(900);
      } else {
        setCountdown(Math.floor(timeDiff / 1000));
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdown]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="text-3xl text-center">
      {formatTime(countdown)}
    </div>
  );
}

export default Countdown;

