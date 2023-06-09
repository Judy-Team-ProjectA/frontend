import { User } from "@/types/user";
import { rest } from "msw";

const userList: User[] = [
  {
    name: "han",
    age: "10",
    pic: "a",
  },
  {
    name: "sam",
    age: "10",
    pic: "a",
  },
  {
    name: "jack",
    age: "10",
    pic: "a",
  },
  {
    name: "rich",
    age: "10",
    pic: "a",
  },
];

export const handlers = [
  // rest.get("/interview/questions", (_req, res, ctx) => {
  //   return res(ctx.status(200), ctx.json(questions));
  // }),
  // rest.post("/interview/questions", (_req, res, ctx) => {
  //   return res(ctx.status(201), ctx.json(questions));
  // }),
  rest.get("/user", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userList));
  }),
];
