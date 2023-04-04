import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"
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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Londrina+Solid&display=swap" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap" rel="stylesheet"></link>
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
