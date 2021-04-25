const jwt = require('jsonwebtoken');
export default function auth(req: any, res: any, next){
    let token = req.headers.authorization;
    console.log(token);
    if (!token) {
      return res.status(401).send({isAuthenticated: false});
    }
    token = token.split(' ')[1];
    try{
        req.user = jwt.verify(token, '8vpawh75rcu2ttkjdkjfkjdkfjkdjfkdjkfjdk');
        next();
    }catch (err){
        res.status(400).send({isAuthenticated: false});
    }
}

