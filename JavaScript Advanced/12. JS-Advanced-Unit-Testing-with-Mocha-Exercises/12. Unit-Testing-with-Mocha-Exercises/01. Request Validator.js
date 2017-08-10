function validateRequest(obj) {
    let meth;
    if (obj.method === 'GET' || obj.method === 'POST' || obj.method === 'DELETE' || obj.method === 'CONNECT') {
        meth = true;
    } else meth = false

    let uriRegex = /^[A-Za-z0-9\.]+$/;
    let u = obj.uri;
    let uri;
    if(u == '' || u == undefined){
        uri=false
    } else if(uriRegex.test(obj.uri) || uri === '*') {
        uri = true;
    } else uri = false;


    let version;
    if (obj.version === 'HTTP/0.9' || obj.version === ' HTTP/1.0' || obj.version === 'HTTP/1.1' || obj.version === 'HTTP/2.0') {
        version = true;
    } else version = false;

    let msg;
    let msgRegex = /.*[<>&,\\"'].*/g;
    if (msgRegex.test(obj.message)) {
        msg = false;
    } else msg = true;

    if (meth && uri && version && msg) {
        return obj;
    } else {
        if (meth === false) {
            throw new Error('Invalid request header: Invalid Method');
        } else if (uri === false) {
            throw new Error('Invalid request header: Invalid URI');
        } else if (version === false) {
            throw new Error('Invalid request header: Invalid Version');
        } else if (msg === false) {
            throw new Error('Invalid request header: Invalid Message');
        }
    }
}


console.log(validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));

console.log(validateRequest({
    method: 'POST',
    version: 'HTTP/2.0',
    message: 'rm -rf /*'
}));

console.log(validateRequest({
    method: 'POST',
    uri: 'home.bash',
    version: 'HTTP/2.0'
}));
