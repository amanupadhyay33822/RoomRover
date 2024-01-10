import connectDB from "@/db";
import Hotel from "@/models/Hotel";

export default async function handler(req, res) {
  connectDB();
   

  if (req.method === "GET") {
    const facilities = await Hotel.find({ }).distinct("facilities.name");
   
      return res.status(200).json({ msg: "Good", facilities });

  } 
}                                                                       