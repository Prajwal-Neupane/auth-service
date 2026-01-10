import app from "./app";
import dotenv from "dotenv";
// import cors from "cors";

dotenv.config();
app.listen(process.env.PORT, () => {
  console.log("Server is running", process.env.PORT);
});
