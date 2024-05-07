import connectDB from "@/config/database";
import { connect } from "mongoose";

export const GET = async (request) => {
  try {
    await connectDB();
    console.log("MongoDB connected");
    return new Response(JSON.stringify({ message: "Hello World" }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("something went wrong", { status: 500 });
  }
};
