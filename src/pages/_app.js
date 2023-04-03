import "@/styles/globals.css"
import { WagmiConfig, createClient, goerli, chain } from "wagmi"
import { ConnectKitProvider, getDefaultClient } from "connectkit"

const alchemyUrl = process.env.ALCHEMY_URL
const chains = [goerli]

const client = createClient(
    getDefaultClient({
        appName: "nouns-vrgda",
        alchemyUrl,
        chains: chains,
    })
)

export default function App({ Component, pageProps }) {
    return (
        <WagmiConfig client={client}>
            <ConnectKitProvider>
                <Component {...pageProps} />
            </ConnectKitProvider>
        </WagmiConfig>
    )
}
