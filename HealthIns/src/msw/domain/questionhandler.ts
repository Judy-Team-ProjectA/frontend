import { rest } from "msw";
import { Question } from "@/types/questions";

const questions: Question[] = [
  {
    id: 1,
    number: 1,
    title: "React",
    question: "What is React",
    category: "Frontend",
  },
];

export const handlers = [
  rest.get("/interview/questions", (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(questions));
  }),
  rest.post("/interview/questions", (_req, res, ctx) => {
    return res(ctx.status(201), ctx.json(questions));
  }),
];
