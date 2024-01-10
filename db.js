import mongoose from "mongoose";

const URI = "mongodb+srv://amanupadhyay33822:GNoxUJgH1HnuyGu2@cluster0.cqvv9t1.mongodb.net/oyo";

const connectDB = async () => {
  let cachedDB = null;

  if (cachedDB) {
    return cachedDB;
  }else{
    
     const newDB = await mongoose.connect(process.env.MONGODB_URL, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
     });
     cachedDB = newDB;
     return newDB;
  }
 
};

export default connectDB;