import Head from "next/head"
import Navbar from "@/components/Navbar"
import Auction from "@/components/Auction"
import Footer from "@/components/Footer"
import FAQ from "@/components/FAQ"

export default function Home() {
    return (
        <>
            <Head>
                <title>Nouns VRGDA</title>
                <meta name="description" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Navbar />
            <main className="App_wrapper__Mru9Z bg-gray-200">
                <Auction />
                <FAQ />
            </main>
            <Footer />
        </>
    )
}
