import mongoose from "mongoose";
const connectDB = (url) => {
    mongoose.set('strictQuery', true);
    mongoose.connect(url)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => {
        console.error('failed to connect with mongo');
        console.log(err);
    });
}

export default connectDB;