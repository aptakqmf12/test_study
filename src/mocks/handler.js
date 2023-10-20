import { rest } from "msw";

const url = "http://localhost:3030";

const todos = ["먹기", "자기", "놀기"];

export const handler = [
  rest.get(`${url}/todos`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos));
  }),

  rest.post(`${url}/todos`, (req, res, ctx) => {
    todos.push(req.body);
    return res(ctx.status(201));
  }),
];
