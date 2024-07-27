// middleware/is-signed-in.js

const isSignedIn = (req, res, next) => {
  try {
    if (req.session.user) return next();
    res.redirect("/auth/sign-in");
  } catch (err) {
    res.redirect("/auth/sign-in");
  }
};

module.exports = isSignedIn;
