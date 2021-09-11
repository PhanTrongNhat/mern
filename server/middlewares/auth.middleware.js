import jwt from "jsonwebtoken";
const Auth = (req,res,next)=>{
    const authorizationHeader = req.headers["authorization"];
    const token = authorizationHeader.split(" ")[1];
    if (!token) res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_SECRET_KEY, (err, data) => {
      console.log(err, data);
      if (err) {
        res.sendStatus(403);
      }
      next();
    });
}
export default Auth;