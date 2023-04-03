import React from "react"
import clsx from "clsx"

const faq = [
    {
        title: "Summary",
        description:
            "Lil Nouns artwork is in the public domain. Lil Sandbox Nouns are born and trustlessly auctioned via a Gradual Dutch Auction, forever. Settlement of one auction kicks off the next. Artwork is generative and stored directly on-chain (not IPFS). No explicit rules exist for attribute scarcity; all Lil Sandbox Nouns are equally rare.",
    },
    {
        title: "Variable Rate Gradual Dutch Auctions",
        description:
            "The lil sandbox nouns Variable Rate Gradual Dutch Auction, forked from Paradigms implementation - https://www.paradigm.xyz/2022/08/vrgda",
    },
    {
        title: "Lil Sandbox Nouns is not a DAO",
        description:
            "Lil Sandbox is just a goerli testnet. Sandbox lils have no voting rights.",
    },
    {
        title: "Lil Sandbox Noun Traits",
        description:
            "Lil Sandbox Nouns are generated randomly based on Goerli block hashes. There are no 'if' statements or other rules governing Lil Noun trait scarcity, which makes all Lil Nouns equally rare. As of this writing, Lil Nouns are made up of: backgrounds (2), bodies (30)accessories (140), heads (242),glasses (23), You can experiment with off-chain Lil Sandbox Noun generation at the Playground.",
    },
    {
        title: "On-Chain Artwork",
        description:
            "Lil Nouns are stored directly on Goerli and do not utilize pointers to other networks such as IPFS. This is possible because Lil Sandbox Noun parts are compressed and stored on-chain using a custom run-length encoding (RLE), which is a form of lossless compression. The compressed parts are efficiently converted into a single base64 encoded SVG image on-chain. To accomplish this, each part is decoded into an intermediate format before being converted into a series of SVG rects using batched, on-chain string concatenation. Once the entire SVG has been generated, it is base64 encoded.",
    },
    {
        title: "Lil Sandbox Noun Seeder Contract",
        description:
            "The Lil Sandbox Noun Seeder contract is used to determine Lil Noun traits during the minting process. The seeder contract can be replaced to allow for future trait generation algorithm upgrades. Currently, Lil Sandbox Noun traits are determined using pseudo-random number generation:keccak256(abi.encodePacked(blockhash(block.number - 1), nounId)). Trait generation is not truly random. Traits can be predicted when minting a Lil Noun on the pending block.",
    },
    // {
    //     title: "Lil Sandbox Nounder's",
    //     description:
    //         "'Lil Sandbox Nounders' are the group of builders that initiated Lil Nouns. Here are the Lil Nounders: @nvonpentz, @rocketman, @adelusiam@, lilpanda",
    // },
]

export default function FAQ() {
    return (
        <div className="bg-white w-full">
            <div className="container bg-white text-black max-w-screen-lg my-16">
                <div className="flex items-center row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="text-xl pb-16 ">
                            <h1 className="text-5xl font-semibold mb-8 font-mono">
                                WTF is this?
                            </h1>
                            <span className="mt-4">
                                <span className="font-medium">Nouns VRGDA</span>{" "}
                                is project to test out a new minting mechanism
                                for nouns using a Variable Rate Gradual Dutch
                                Auction mechanism instead of english auctions.
                                <br />
                                <br />
                                Introducing three concepts:
                                <li>pseudo-random block traits generation</li>
                                <li>
                                    a variable rate token issuance mechanism
                                </li>
                                <li>
                                    an on-chain pool of saved and unbought NFTs
                                </li>
                            </span>
                        </div>

                        <div
                            className=""
                            id="accordion-collapse"
                            data-accordion="collapse"
                        >
                            {faq.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function AccordionItem({ title, description }) {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className=" mb-8 border-none transition-all duration-500 ease-in-out">
            <h2
                className="text-xl font-bold mb-8"
                id="accordion-collapse-heading"
            >
                <button
                    type="button"
                    aria-expanded={isOpen}
                    className="w-full text-left flex flex-row justify-between items-center transform hover:scale-105 transition-all ease-in-out"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {title}
                    <svg
                        data-accordion-icon
                        className={clsx(
                            "w-6 h-6 shrink-0",
                            isOpen && "rotate-180"
                        )}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </button>
            </h2>
            {isOpen && (
                <div
                    className="mt-4 text-lg transition-all duration-500 ease-in-out"
                    id={"accordion-collapse-body"}
                    data-accordion-target="#accordion-collapse-body"
                    aria-expanded="true"
                    aria-controls="accordion-collapse-body"
                >
                    {description}
                </div>
            )}
        </div>
    )
}
