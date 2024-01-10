import Link from "next/link"
import { useState } from "react"


const Header3 = () => {
  const [city,setCity]= useState("");
  return (
    <div className=" bg-gradient-to-r from-red-600 to-red-400 h-60 bg-cover sm:bg-cover md:bg-cover lg:bg-cover">
      <div className=" p-5">
        <h2 className=" text-4xl text-white text-center font-bold">
          Over 157,000 hotels and homes across 35 countries
        </h2>
        <div className="flex justify-center my-5 mx-20 ">
          <input
            type="text"
            placeholder="Search..."
            className=" w-96   h-16 outline-none px-3 text-lg col-span-2 border-r-2 border-gray-400  "
          onChange={(e)=>setCity(e.target.value)}
          />
       
  <Link href={`/hotels?city=${city}`}>
          <button
            type="submit"
            className=" h-16 px-3  py-2 w-60 bg-green-400 hover:cursor-pointer hover:bg-green-600 text-white text-xl"
          >
            Search
          </button>
          </Link>
        </div>
        <div className="flex mx-20 my-5 font-bold">
          <button
            type="submit"
            className=" h-16 px-3 py-2 hover:cursor-pointer text-white mr-5"
          >
            Continue your search
          </button>
          <button
            type="submit"
            className=" h-16 px-3 py-2 hover:cursor-pointer border-2 border-white text-white mr-5 hover:bg-gray-500 rounded-xl"
          >
            Homestay in India hotels
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header3