let crypto = require('crypto')

let  generateSalt = () => {
        return crypto.randomBytes(128).toString('base64');
}

let generateHashedPassword =  (salt, pwd) => {
     let hmac = crypto.createHmac('sha1', salt)
     return hmac.update(pwd).digest('hex')
 }

let salt = generateSalt()
console.log(salt)

let pass = 'pas123'
let hashedPass = generateHashedPassword(salt, pass)

console.log(hashedPass)
