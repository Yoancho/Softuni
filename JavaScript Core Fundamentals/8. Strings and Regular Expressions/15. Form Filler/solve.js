function f(name, email, phone, text) {
    let userRegex = /<![A-Za-z]+!>/gm;
    let emailRegex = /<@[A-Za-z]+@>/gm;
    let phoneRegex = /<\+[A-Za-z]+\+>/gm;

    for (let row of text) {
       row = row.replace(userRegex, name);
       row = row.replace(emailRegex, email);
       row = row.replace(phoneRegex, phone);
        console.log(row);

    }

}

f('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']
);
