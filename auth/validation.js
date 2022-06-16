const jwt = require('jsonwebtoken');
function checkToken(req, res, next) {
    const authToken = req.cookies.token;
    if (!authToken) {
        return res.send('Please login first');
    }
  //  const token = authToken.split(' ')[1];
    const token = authToken;
    if (token) {
    jwt.verify(token, '!!@#$%SWQ', (err, data)=> {
        if (err) {
            return res.status(401).send(err);
        }
        if(data) {
            req.userData = data;
        }
    })
    next();

} else {
    return res.send('Wrong authentication');
}
}
module.exports = checkToken;