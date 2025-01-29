import { rest } from "msw";

const baseURL = "https://drf-api-ba79-ab0b6297db4e.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 7,
        username: "igor777",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 7,
        profile_image:
          "https://res.cloudinary.com/dwri2wfrs/image/upload/v1/media/../default_profile_xsoykd",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
