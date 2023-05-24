import { rest } from "msw";
import { Question } from "@/types/question";
const questions: Question[] = [
  {
    id: 1,
    number: 1,
    title: "React",
    question: "What is React",
    category: "Frontend",
  },
  {
    id: 2,
    number: 2,
    title: "React",
    question: "What is Typescript",
    category: "Frontend",
  },
  {
    id: 3,
    number: 3,
    title: "React",
    question: "What is MSW",
    category: "Frontend",
  },
  {
    id: 4,
    number: 4,
    title: "React",
    question: "What is End",
    category: "Frontend",
  },
  {
    id: 5,
    number: 5,
    title: "React",
    question: "What is Rsd",
    category: "Frontend",
  },
];
export const handlers = [
  rest.get("/interview/questions", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(questions));
  }),
  rest.post("/interview/questions",(req, res, ctx) => {
    
    return res(ctx.status(201), ctx.json(questions))
  })
];
