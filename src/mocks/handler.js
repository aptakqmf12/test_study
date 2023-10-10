import { rest } from "msw";

const url = "http://localhost:3030";

export const handler = [
  rest.get(`${url}/post`, (res, req, ctx) => {
    return res.json([
      { name: "김태완", old: 31 },
      { name: "이도경", old: 30 },
      { name: "장재형", old: 30 },
      { name: "권규형", old: 31 },
    ]);
  }),
];
