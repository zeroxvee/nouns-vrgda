import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"
import Navbar from "@/components/Navbar"
import Auction from "@/components/Auction"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"
import favicon from "@/assets/favicon.ico"

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
                <link rel="icon" href={favicon} />
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
