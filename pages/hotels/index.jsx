/* eslint-disable react-hooks/rules-of-hooks */
import Filter from "@/components/Filter";
import Hotel from "@/components/Hotel";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

const hotels = ({ hotels }) => {
  const [price, setPrice] = useState(1000);
  const [list, setList] = useState([]);
  const [checkedList, setCheckedList] = useState([]);

  const handleCheckList = async () => {
    console.log(checkedList);
    const {data }= await axios.get(`/api/facilities/search?val=${checkedList}`);
    if(data?.hotels)
    {
      
      setList(data.hotels);
    }
  }
  // console.log(list)
    // console.log(checkedList)
  useEffect(()=>{
  if(checkedList){
    handleCheckList();
    
  }
  },[checkedList])
  const handlePrice = async () => {
    const { data } = await axios.get(`api/facilities/range?price=${price}`);
    // console.log("data is  "+data);
    if (data?.hotels) {
      setList(data?.hotels);
    }
  };
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <Filter
            price={price}
            setPrice={setPrice}
            handlePrice={handlePrice}
            checkedList={checkedList}
            setCheckedList={setCheckedList}
          />
        </div>
        <div className="col-span-9">
          {list.length > 0
            ? list.map((hotels) => {
                return (
                  <div className=" m-5 " key={hotels._id}>
                    <Hotel hotel={hotels} />
                  </div>
                );
              })
            : hotels
            ? hotels.map((hotel) => {
                return (
                  <div key={hotel._id} className="m-5">
                    <Hotel hotel={hotel} />
                  </div>
                );
              })
            : "No hotel found"}
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps(ctx) {
  const res = await fetch(
    `${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`
  );
  const data = await res.json();

  return {
    props: {
      hotels: data.hotels ? data.hotels : data.allhotels,
    },
  };
}
export default hotels;
