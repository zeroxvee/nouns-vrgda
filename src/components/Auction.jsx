import React from "react"
import Head from "next/head"
import Image from "next/image"
import logo from "@/assets/panel-animation2.gif"
import moment from "moment"
import AuctionPrice from "./AuctionPrice"
import NounID from "./NounID"
import AuctionPriceRange from "./AuctionPriceRange"
import BuyNow from "./BuyNow"

const lilNoun =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDMyMCAzMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZDVkN2UxIiAvPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAiIHg9IjExMCIgeT0iMjYwIiBmaWxsPSIjZmQ4YjViIiAvPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAiIHg9IjExMCIgeT0iMjcwIiBmaWxsPSIjZmQ4YjViIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iMTEwIiB5PSIyODAiIGZpbGw9IiNmZDhiNWIiIC8+PHJlY3Qgd2lkdGg9IjcwIiBoZWlnaHQ9IjEwIiB4PSIxNDAiIHk9IjI4MCIgZmlsbD0iI2ZkOGI1YiIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjExMCIgeT0iMjkwIiBmaWxsPSIjZmQ4YjViIiAvPjxyZWN0IHdpZHRoPSI3MCIgaGVpZ2h0PSIxMCIgeD0iMTQwIiB5PSIyOTAiIGZpbGw9IiNmZDhiNWIiIC8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiB4PSIxMTAiIHk9IjMwMCIgZmlsbD0iI2ZkOGI1YiIgLz48cmVjdCB3aWR0aD0iNzAiIGhlaWdodD0iMTAiIHg9IjE0MCIgeT0iMzAwIiBmaWxsPSIjZmQ4YjViIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iMTEwIiB5PSIzMTAiIGZpbGw9IiNmZDhiNWIiIC8+PHJlY3Qgd2lkdGg9IjcwIiBoZWlnaHQ9IjEwIiB4PSIxNDAiIHk9IjMxMCIgZmlsbD0iI2ZkOGI1YiIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjE2MCIgeT0iMjgwIiBmaWxsPSIjMzQzMjM1IiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iMTYwIiB5PSIyOTAiIGZpbGw9IiNlNWU1ZGUiIC8+PHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjEwIiB4PSIxMzAiIHk9IjcwIiBmaWxsPSIjZWVkODExIiAvPjxyZWN0IHdpZHRoPSI4MCIgaGVpZ2h0PSIxMCIgeD0iMTIwIiB5PSI4MCIgZmlsbD0iI2VlZDgxMSIgLz48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEwIiB4PSIxMjAiIHk9IjkwIiBmaWxsPSIjZWVkODExIiAvPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTAiIHg9IjExMCIgeT0iMTAwIiBmaWxsPSIjZWVkODExIiAvPjxyZWN0IHdpZHRoPSIxMTAiIGhlaWdodD0iMTAiIHg9IjExMCIgeT0iMTEwIiBmaWxsPSIjZWVkODExIiAvPjxyZWN0IHdpZHRoPSIxMTAiIGhlaWdodD0iMTAiIHg9IjEwMCIgeT0iMTIwIiBmaWxsPSIjZWVkODExIiAvPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAiIHg9IjEwMCIgeT0iMTMwIiBmaWxsPSIjZWVkODExIiAvPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAiIHg9IjkwIiB5PSIxNDAiIGZpbGw9IiNlZWQ4MTEiIC8+PHJlY3Qgd2lkdGg9IjkwIiBoZWlnaHQ9IjEwIiB4PSI5MCIgeT0iMTUwIiBmaWxsPSIjZWVkODExIiAvPjxyZWN0IHdpZHRoPSI5MCIgaGVpZ2h0PSIxMCIgeD0iODAiIHk9IjE2MCIgZmlsbD0iI2VlZDgxMSIgLz48cmVjdCB3aWR0aD0iODAiIGhlaWdodD0iMTAiIHg9IjgwIiB5PSIxNzAiIGZpbGw9IiNlZWQ4MTEiIC8+PHJlY3Qgd2lkdGg9IjIzMCIgaGVpZ2h0PSIxMCIgeD0iNzAiIHk9IjE4MCIgZmlsbD0iI2VlZDgxMSIgLz48cmVjdCB3aWR0aD0iMjIwIiBoZWlnaHQ9IjEwIiB4PSI3MCIgeT0iMTkwIiBmaWxsPSIjZWVkODExIiAvPjxyZWN0IHdpZHRoPSIyMTAiIGhlaWdodD0iMTAiIHg9IjYwIiB5PSIyMDAiIGZpbGw9IiNlZWQ4MTEiIC8+PHJlY3Qgd2lkdGg9IjE5MCIgaGVpZ2h0PSIxMCIgeD0iNjAiIHk9IjIxMCIgZmlsbD0iI2VlZDgxMSIgLz48cmVjdCB3aWR0aD0iMTgwIiBoZWlnaHQ9IjEwIiB4PSI1MCIgeT0iMjIwIiBmaWxsPSIjZWVkODExIiAvPjxyZWN0IHdpZHRoPSIxMTAiIGhlaWdodD0iMTAiIHg9IjEwMCIgeT0iMjMwIiBmaWxsPSIjZWVkODExIiAvPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAiIHg9IjkwIiB5PSIyNDAiIGZpbGw9IiNlZWQ4MTEiIC8+PHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjEwIiB4PSI5MCIgeT0iMjUwIiBmaWxsPSIjZWVkODExIiAvPjxyZWN0IHdpZHRoPSI3MCIgaGVpZ2h0PSIxMCIgeD0iODAiIHk9IjI2MCIgZmlsbD0iI2VlZDgxMSIgLz48cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iMTAiIHg9IjgwIiB5PSIyNzAiIGZpbGw9IiNlZWQ4MTEiIC8+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjEwIiB4PSI3MCIgeT0iMjgwIiBmaWxsPSIjZWVkODExIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iNzAiIHk9IjI5MCIgZmlsbD0iI2VlZDgxMSIgLz48cmVjdCB3aWR0aD0iODAiIGhlaWdodD0iMTAiIHg9IjgwIiB5PSIxNDAiIGZpbGw9IiNmZjYzOGQiIC8+PHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjEwIiB4PSIxNzAiIHk9IjE0MCIgZmlsbD0iI2ZmNjM4ZCIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjgwIiB5PSIxNTAiIGZpbGw9IiNmZjYzOGQiIC8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiB4PSI5MCIgeT0iMTUwIiBmaWxsPSIjZmZmZmZmIiAvPjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSIxMCIgeD0iMTEwIiB5PSIxNTAiIGZpbGw9IiMwMDAwMDAiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSIxNTAiIHk9IjE1MCIgZmlsbD0iI2ZmNjM4ZCIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjE3MCIgeT0iMTUwIiBmaWxsPSIjZmY2MzhkIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iMTgwIiB5PSIxNTAiIGZpbGw9IiNmZmZmZmYiIC8+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjEwIiB4PSIyMDAiIHk9IjE1MCIgZmlsbD0iIzAwMDAwMCIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjI0MCIgeT0iMTUwIiBmaWxsPSIjZmY2MzhkIiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iODAiIHk9IjE2MCIgZmlsbD0iI2ZmNjM4ZCIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjkwIiB5PSIxNjAiIGZpbGw9IiNmZmZmZmYiIC8+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjEwIiB4PSIxMTAiIHk9IjE2MCIgZmlsbD0iIzAwMDAwMCIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjE1MCIgeT0iMTYwIiBmaWxsPSIjZmY2MzhkIiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iMTcwIiB5PSIxNjAiIGZpbGw9IiNmZjYzOGQiIC8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiB4PSIxODAiIHk9IjE2MCIgZmlsbD0iI2ZmZmZmZiIgLz48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iMTAiIHg9IjIwMCIgeT0iMTYwIiBmaWxsPSIjMDAwMDAwIiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iMjQwIiB5PSIxNjAiIGZpbGw9IiNmZjYzOGQiIC8+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjEwIiB4PSI1MCIgeT0iMTcwIiBmaWxsPSIjZmY2MzhkIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iOTAiIHk9IjE3MCIgZmlsbD0iI2ZmZmZmZiIgLz48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iMTAiIHg9IjExMCIgeT0iMTcwIiBmaWxsPSIjMDAwMDAwIiAvPjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIxMCIgeD0iMTUwIiB5PSIxNzAiIGZpbGw9IiNmZjYzOGQiIC8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiB4PSIxODAiIHk9IjE3MCIgZmlsbD0iI2ZmZmZmZiIgLz48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iMTAiIHg9IjIwMCIgeT0iMTcwIiBmaWxsPSIjMDAwMDAwIiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iMjQwIiB5PSIxNzAiIGZpbGw9IiNmZjYzOGQiIC8+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjEwIiB4PSI1MCIgeT0iMTgwIiBmaWxsPSIjZmY2MzhkIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iOTAiIHk9IjE4MCIgZmlsbD0iI2ZmZmZmZiIgLz48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iMTAiIHg9IjExMCIgeT0iMTgwIiBmaWxsPSIjMDAwMDAwIiAvPjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIxMCIgeD0iMTUwIiB5PSIxODAiIGZpbGw9IiNmZjYzOGQiIC8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiB4PSIxODAiIHk9IjE4MCIgZmlsbD0iI2ZmZmZmZiIgLz48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iMTAiIHg9IjIwMCIgeT0iMTgwIiBmaWxsPSIjMDAwMDAwIiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iMjQwIiB5PSIxODAiIGZpbGw9IiNmZjYzOGQiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSI1MCIgeT0iMTkwIiBmaWxsPSIjZmY2MzhkIiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iODAiIHk9IjE5MCIgZmlsbD0iI2ZmNjM4ZCIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjkwIiB5PSIxOTAiIGZpbGw9IiNmZmZmZmYiIC8+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjEwIiB4PSIxMTAiIHk9IjE5MCIgZmlsbD0iIzAwMDAwMCIgLz48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHg9IjE1MCIgeT0iMTkwIiBmaWxsPSIjZmY2MzhkIiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iMTcwIiB5PSIxOTAiIGZpbGw9IiNmZjYzOGQiIC8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiB4PSIxODAiIHk9IjE5MCIgZmlsbD0iI2ZmZmZmZiIgLz48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iMTAiIHg9IjIwMCIgeT0iMTkwIiBmaWxsPSIjMDAwMDAwIiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iMjQwIiB5PSIxOTAiIGZpbGw9IiNmZjYzOGQiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSI4MCIgeT0iMjAwIiBmaWxsPSIjZmY2MzhkIiAvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgeD0iOTAiIHk9IjIwMCIgZmlsbD0iI2ZmZmZmZiIgLz48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iMTAiIHg9IjExMCIgeT0iMjAwIiBmaWxsPSIjMDAwMDAwIiAvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgeD0iMTUwIiB5PSIyMDAiIGZpbGw9IiNmZjYzOGQiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSIxNzAiIHk9IjIwMCIgZmlsbD0iI2ZmNjM4ZCIgLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIHg9IjE4MCIgeT0iMjAwIiBmaWxsPSIjZmZmZmZmIiAvPjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSIxMCIgeD0iMjAwIiB5PSIyMDAiIGZpbGw9IiMwMDAwMDAiIC8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiB4PSIyNDAiIHk9IjIwMCIgZmlsbD0iI2ZmNjM4ZCIgLz48cmVjdCB3aWR0aD0iODAiIGhlaWdodD0iMTAiIHg9IjgwIiB5PSIyMTAiIGZpbGw9IiNmZjYzOGQiIC8+PHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjEwIiB4PSIxNzAiIHk9IjIxMCIgZmlsbD0iI2ZmNjM4ZCIgLz48L3N2Zz4="

const Auction = () => {
    return (
        <div className="w-[60vw] bg-gray-200 mx-auto mt-2">
            <div className="flex flex-wrap -mx-6 -mt-0">
                <div className="flex w-full lg:w-1/2">
                    <div className="w-full relative">
                        <div className="md:h-0 w-full">
                            <Image
                                src={lilNoun}
                                alt="Noun Image"
                                className="md:absolute top-0 left-0 w-full md:h-full"
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex w-full lg:w-1/2 items-center md:mx-auto pb-0 md:pl-10 min-h-[520px]">
                    <div>
                        <div className="mb-2">
                            <div className="flex flex-wrap mb-0">
                                <div className="w-full">
                                    <div className="w-auto">
                                        <h4 className="text-[#3F92C9] mt-1 text-lg font-bold">
                                            {moment().format("MMMM Do, YYYY")}
                                        </h4>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <NounID/>
                                </div>
                            </div>
                            <div className="flex flex-wrap mb-0">
                                <div className="border-r-[#79809c49] ml-1.5 w-full lg:w-1/3">
                                    <div className="px-0">
                                        <h4 className="text-[#3F92C9] text-lg font-bold">
                                            Current price
                                        </h4>
                                    </div>
                                    <AuctionPrice/>
                                </div>
                                <div className="w-full lg:w-1/2 pl-0">
                                    <div className="cursor-pointer px-10">
                                        <div className="mt-1 w-full">
                                            <div className="flex items-center space-x-2">
                                                <h4 className="text-[#3F92C9] mb-0 text-lg font-bold">
                                                    Price drops in
                                                </h4>
                                                <button className="bg-transparent border-none cursor-pointer inline p-0"></button>
                                            </div>
                                        </div>
                                        <div className="flex mt-1 font-bold">
                                            <div>
                                                <span className="text-[#1C2228] text-3xl ">
                                                    3
                                                    <span className="text-2xl">
                                                        m
                                                    </span>
                                                </span>
                                            </div>
                                            <div>
                                                <span className="text-[#1C2228] text-3xl">
                                                    29
                                                    <span className="text-2xl">
                                                        s
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex flex-col">
                                <div className="w-full">
                                    <div className="flex flex-col space-y-10">
                                        <div className="space-y-2">
                                            <div className="col-lg-12">
                                                <div className="flex flex-col space-y-10">
                                                    <AuctionPriceRange />
                                                    <BuyNow />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auction
