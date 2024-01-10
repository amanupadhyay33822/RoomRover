import axios from "axios";
import { useEffect, useState } from "react";

const Filter = ({
  price,
  setPrice,
  handlePrice,
  checkedList,
  setCheckedList,
}) => {
  const [list, setList] = useState([]);
  const fetchFacilities = async () => {
    const { data } = await axios.get(`api/facilities`);
    // console.log(data);
    if (data.facilities) {
      setList(data.facilities);
    }
  };
  const handleCheckList = async (e) => {
    let newlist = [];
    if(e.target.checked){
      newlist.push(e.target.value);
      setCheckedList(newlist)
      return;
    }
    newlist= newlist.filter((e)=>i!=e.target.value)
    setCheckedList(newlist);
  }
  useEffect(() => {
    fetchFacilities();
  }, []);
//  console.log(list);
 
  return (
    <>
      <div className="border-2 border-red rounded items-center m-5 h-96 py-10 px-3">
        <label htmlFor="price" className="text-xl mr-3 font-bold">
          Price:{""}
        </label>
        <input
          type="range"
          name="price"
          id=""
          min={0}
          max={3000}
          defaultValue={price ? price : ""}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <span className="ml-10">&#8377; {price ? price : ""}</span>
        <div>
          <button
            className="w-40 h-10 bg-green-300 cursor-pointer my-3"
            onClick={handlePrice}
          >
            Search
          </button>
        </div>
        <div className="my-10 ">
          <h3 className="text-xl font-bold my-3">Filter By Facilities: </h3>
          {list.map((e,key) => {
            return (
              <p key={e._id} className="flex items-center my-3">
                <label htmlFor="checkbox" className="uppercase">
                  {e}
                </label>
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  value={e}
                  className="w-5 h-5
            ml-3"
            onChange={handleCheckList}
                />
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Filter;
