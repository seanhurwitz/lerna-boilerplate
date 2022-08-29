import { User } from "@seanh/common";
import cors from "cors";
import express from "express";

const users: User[] = [
  { firstName: "Sean", lastName: "Hurwitz" },
  { firstName: "Batman", lastName: "Michaels" },
];

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(2050, () => {
  console.log(`server up on http://localhost:${2050}`);
});
