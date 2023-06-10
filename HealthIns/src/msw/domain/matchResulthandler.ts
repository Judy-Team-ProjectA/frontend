import { UserX } from "@/types/user";
import { rest } from "msw";

const userRequest: UserX[] = [
  {
    userId: "1",
    userUuid: "a",
    userPhoto:
      "https://wimg.mk.co.kr/news/cms/202304/14/news-p.v1.20230414.15e6ac6d76a84ab398281046dc858116_P1.jpg",
    status: "pending",
  },
  {
    userId: "2",
    userUuid: "a",
    userPhoto:
      "data:image/jpeg;base64,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",
    status: "approved",
  },
  {
    userId: "3",
    userUuid: "a",
    userPhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXEsvikVznea_PpEwu3izTgoIGB-lrfDe1uA&usqp=CAU",
    status: "approved",
  },
  {
    userId: "4",
    userUuid: "a",
    userPhoto:
      "https://img.etnews.com/news/article/2022/10/20/cms_temp_stats_16662400362146974444.jpg",
    status: "approved",
  },
  {
    userId: "6",
    userUuid: "a",
    userPhoto:
      "data:image/jpeg;base64,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",
    status: "approved",
  },
];

export const handlers = [
  // rest.get("/interview/questions", (_req, res, ctx) => {
  //   return res(ctx.status(200), ctx.json(questions));
  // }),
  // rest.post("/interview/questions", (_req, res, ctx) => {
  //   return res(ctx.status(201), ctx.json(questions));
  // }),
  rest.get("/users/:userUuid/likes", (_req, res, ctx) => {
    return res(ctx.status(201), ctx.json(userRequest));
  }),
  // rest.get("/users/a/likes", (_req, res, ctx) => {
  //   return res(ctx.status(201), ctx.json(userRequest));
  // }),
];