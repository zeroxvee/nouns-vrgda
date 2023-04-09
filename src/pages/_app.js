import "@/styles/globals.css"
import { ThirdwebProvider } from "@thirdweb-dev/react"

export default function App({ Component, pageProps }) {
    return (
        <ThirdwebProvider activeChain="goerli">
            <Component {...pageProps} />
        </ThirdwebProvider>
    )
}
