import Header2 from "@/components/Header2"
import Navbar from "../components/Navbar"
import Header3 from "@/components/Header3"
import Image from "next/image"
import Head from "next/head"
import Header4 from "@/components/Header4"
import Footer from "@/components/Footer"
import icon from "./"


const Home = () => {
  return (
    <div className="sm:bg-cover bg-cover">
      <Head>
        <title>RoomRover : India`s Best Online Hotel Booking Site For Sanitized Stay.</title>
        <link rel="icon" href="/icon.png"></link>
      </Head>
      <Navbar/>
      <Header2/>
      <Header3/>
      <div className="mx-20">
        <div className="my-14">
        <Image
            src={"/banner1.avif"}
            alt="banner1"
            width={200}
            height={200}
            className=" h-80 w-full object-fill"
          />
        </div>
        <div className="mb-14">
        <Image
            src={"/banner2.avif"}
            alt="banner1"
            width={200}
            height={200}
            className=" h-40 w-full"
          />

        </div> 
        <Header4/>
      </div>
     <Footer/>
    </div>
  )
}

export default Home