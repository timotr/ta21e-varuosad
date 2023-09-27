export function checkLoggedIn(req, res, next) {
    if (false) {
      return res.status(401).send({ error: "Unauthorized" });
    }
    next();
  }