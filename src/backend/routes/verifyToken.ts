var jwt = require('jsonwebtoken');
export default function auth(req:any, res:any, next:any){
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Access denied');

    try{
        req.user = jwt.verify(token, process.env.TOKEN_SECRET);
        next();
    }catch(err){
        res.status(400).send('Invalid Token');
    }
}

