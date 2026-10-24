import express, { application } from "express";
import cors from "cors";
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`app is runnig on port ${port}`);
});
