import { expressjwt } from "express-jwt";

function authorize(role = []) {
  if (typeof role === "string") {
    role = [role];
  }
  return [
    expressjwt({ secret: process.env.JWT, algorithms: ["HS256"] }),
    (req, res, next) => {
      if (role.length && !role.includes(req.user.role)) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      next();
    },
  ];
}

export default authorize;
