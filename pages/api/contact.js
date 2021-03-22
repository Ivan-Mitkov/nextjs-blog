import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

async function handler(req, res) {
  // console.log(process.env.MONGO_URI);
  if (req.method === "POST") {
    //get data
    const { email, name, message } = req.body;
    //simple validation
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }
    //create message
    const newMessage = {
      email,
      name,
      message,
    };
    // console.log(newMessage);
    let client;
    //connect to db
    try {
      client = await MongoClient.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected");
    } catch (error) {
      console.log("NOT connected: ", error.message);
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    const db = client.db();
    //save to db
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
      // console.log(result);
    } catch (error) {
      console.log("Response error: ", error.message);
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }

    client.close();
    //send to client
    res
      .status(201)
      .json({ message: "Successfully stored message!", message: newMessage });
  }
}

export default handler;
