import Image from "next/image";
import Link from "next/link";

const Hotel = ({hotel}) => {
  
  return (
    <div className="border-2 border-red-500 rounded-lg h-96 w-full mb-5 p-5">
      <div className="flex">
        <Image
           src={
            hotel.banner
           }
          alt="hotel"
          loading="lazy"
          width={200}
          height={200}
          className=" w-96 mr-3 h-large-box "
        />
        <div className="grid grid-rows-3 ">
        {hotel
            ? hotel.gallery?.map((ele) => {
                return (
                  <Image
                    key={ele}
                    src={ele}
                    alt="hotel"
                    width={200}
                    height={200}
                    loading="lazy"
                    className=" w-28 h-16 object-cover  "
                  />
                );
              })
            : ""}
        
          
        </div>
        <div className="ml-20">
          <h2 className="font-bold text-3xl line-clamp-1">
           {hotel.name}
          </h2>
          <div className=" text-justify my-5 text-lg">
              <span className="font-bold">Facilities:</span>
              <ul className="flex">
             {
              hotel.facilities.map((e)=>{
                return (
                 
                      <li key={e._id} className="mr-10 mb-3 flex items-center">
                        <span>
                        <Image
                            src={e.img}
                            width={300}
                            height={300}
                            className="w-8 h-8 rounded-full"
                            alt="hello"
                            loading="lazy"
                          />
                        </span>
                        <span className="ml-5">{e.name}</span></li>
                 
                )
              })
             }
            </ul>
          </div>
          <div>
          <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">Price: {hotel.price}</button>
          <Link
              href={`/hotels/${hotel._id}`}
              className="text-xl font-bold text-red-600 ml-10"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
