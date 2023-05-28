import mongoose from "mongoose"
const uri = 'mongodb://localhost:27017/movie_review'
// Connection URL
// const MONGODB_URI = 'mongodb://localhost:27017/mydatabase'; // Replace with your MongoDB connection string

// Connect to MongoDB
const connect=async()=>{
mongoose.connect(uri, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useCreateIndex: true,
});
}

// Get the default connection
// const db = mongoose.connection;

// Event handlers for the MongoDB connection
// db.on('connected', () => {
//   console.log('Connected to MongoDB');
// });

// db.on('error', (error) => {
//   console.error('MongoDB connection error:', error);
// });

// db.on('disconnected', () => {
//   console.log('Disconnected from MongoDB');
// });

// Export the database connection
export default connect;
