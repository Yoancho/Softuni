function f(arr) {

    //let methodRegex = /Method: (GET|POST|PUT|DELETE)/g;
    let credentialsRegex = /Credentials: {1}(Basic|Bearer) {1}[A-Za-z0-9]+/g;
    let contentRegex = /Content: {1}[A-Za-z0-9.]+$/g;

    let hash = arr.pop();

    for (let i = 0; i < arr.length; i += 3) {
        let method = arr[i].split(' ').filter(e => e !== '');
        if (method.length !== 2 || !method[0] == 'Method:' || !(method[1] == 'GET' || method[1] == 'POST' || method[1] == 'PUT' || method[1] == 'DELETE')) {
            console.log("Response-Code:400");
            continue;
        }
        let authentication = arr[i + 1].split(" ");
        if ((authentication.length !== 3 || authentication[0] != 'Credentials:') || !(authentication[1] == 'Basic' || authentication[1] == 'Bearer')) {
            console.log("Response-Code:400");
            continue;
        }
        let content = arr[i + 2].split(" ");
        let r1 = /^[A-Za-z0-9.]+$/g;
        if ((content.length != 2 || content[0] != 'Content:') || (!r1.test(content[1]))) {
            console.log("Response-Code:400---cont");
            continue;
        }

        if ((method[1] === 'POST' || 'PUT' || 'DELETE') && (authentication[1] === 'Basic')){
            console.log(`Response-Method:${method[1]}&Code:401`);
            continue;
        }

        let matchHash = hash.match(/[0-9][A-Za-z]+/g);

        if (!matchHash || matchHash.length !== hash.length / 2 || hash.length % 2 !== 0) {
            console.log(`Response-Method:${method[1]}&Code:403`);
            continue;
        }

        console.log(`Response-Method:${method[1]}&Code:200&Header:${authentication[2]}`);
    }
}


f([
    'Method: GET',
    'Credentials: Bearer asd918721jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
    'Content: users.asd.1782452.278asd',
    'Method: POST',
    'Credentials: Basic 028591u3jtndkgwndsdkfjwelfqkjwporjqebhas',
    'Content: Johnathan',
    '2q']);

console.log();

f([
    'Method: PUT',
    'Credentials: Bearer as9133jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
    'Content: users.asd/1782452$278///**asd123',
    'Method: POST',
    'Credentials: Bearer 028591u3jtndkgwndskfjwelfqkjwporjqebhas',
    'Content: Johnathan',
    'Method: DELETE',
    'Credentials: Bearer 05366u3jtndkgwndssfsfgeryerrrrrryjihvx',
    'Content: This.is.a.sample.content',
    '2e5g']);