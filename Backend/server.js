const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require("dotenv").config();
const moongoose = require("mongoose");

const userRoutes = require("./Routes/userRoutes");

app.use("/api/user", userRoutes);

async function onServerStart() {
  try {
    await moongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

onServerStart();
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const mongoose = require('mongoose');
// const userRoutes = require('./Routes/userRoutes');

// // Connect to the MongoDB database
// async function connectToDB() {
//   let uri = "mongodb://amseastafrica:IneAa4wl8TmXTxpK@ac-yxak8ln-shard-00-00.a94xc9o.mongodb.net:27017,ac-yxak8ln-shard-00-01.a94xc9o.mongodb.net:27017,ac-yxak8ln-shard-00-02.a94xc9o.mongodb.net:27017/main?ssl=true&replicaSet=atlas-5nop1e-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
//   try {
//     await mongoose.connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     throw new Error("Failed to connect to the database");
//   }
// }

// // Lambda handler function
// exports.handler = async (event, context) => {
//   // Ensure MongoDB connection is established before handling requests
//   await connectToDB();

//   try {
//     // Assuming you refactor userRoutes to be compatible with Lambda
//     console.log(event.path);
//     if (event.path === "/api/user") {
//       const response = await userRoutes();
//       return addCorsHeaders(response);
//     } else {
//       return {
//         statusCode: 404,
//         body: JSON.stringify({ message: event.path}),
//         headers: {
//           "Access-Control-Allow-Origin": "*",
//           "Access-Control-Allow-Headers": "*",
//           "Access-Control-Allow-Methods": "*"
//         }
//       };
//     }
//   } catch (error) {
//     console.error("Internal Server Error:", error);
//     mongoose.connection.close();
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ message: "Internal Server Error" }),
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Headers": "*",
//         "Access-Control-Allow-Methods": "*"
//       }
//     };
//   }
// };

// // Add CORS headers to the response
// function addCorsHeaders(response) {
//   return {
//     ...response,
//     headers: {
//       ...response.headers,
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Headers": "*",
//       "Access-Control-Allow-Methods": "*",
//     },
//   };
// }
