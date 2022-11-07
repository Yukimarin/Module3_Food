import { expressjwt } from "express-jwt";
import jwt from "jsonwebtoken";
import User from "../models/users.model.js";

function authorize(role = []) {
  if (typeof role === "string") {
    role = [role];
  }

  return [
    expressjwt({
      secret: process.env.JWT,
      algorithms: ["HS256"],
      credentialsRequired: false,
      getToken: function fromHeaderOrQuerystring(req) {
        if (
          req.headers.cookie &&
          req.headers.cookie.slice(0, 12) === "access_token"
        ) {
          return req.headers.cookie.slice(13, req.headers.cookie.length);
        }
        return null;
      },
    }),

    (req, res, next) => {
      if (!req.headers.cookie) {
        return res.status(401).json({ message: "Token not found" });
      }

      const token = req.headers.cookie.slice(13, req.headers.cookie.length);
      jwt.verify(token, process.env.JWT, (err, decodeToken) => {
        console.log(decodeToken);
        if (err || !decodeToken.role) {
          res.status(401).json({ message: "Unauthorized" });
        } else {
          if (role.length && !role.includes(decodeToken.role)) {
            return res.status(401).json({ message: "Ai cho may vao" });
          }

          next();
        }
      });
    },
  ];
}

export default authorize;
