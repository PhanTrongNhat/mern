const Auth = (req,res,next)=>{
 console.log('middlewares');
 next();
}
export default Auth;