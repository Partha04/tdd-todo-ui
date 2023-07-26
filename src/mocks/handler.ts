import { rest } from "msw";

const todoApiURl = import.meta.env.VITE_TODO_API_URL;

export const handlers = [
  //Define a post request beahaviour
  rest.post(`${todoApiURl}/todo`, (req, res, ctx) => {
    console.log("called post");
    return res(
      ctx.status(200),
      ctx.json({
        completed: true,
        id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        task: "Task 1",
      })
    );
  }),
];
