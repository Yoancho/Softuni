class CheckingAccount{
    constructor(clientId, email, firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.clientId = clientId;
        this.email = email;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        if(value.length < 3 || value.length > 20){
            throw new TypeError("First name must be between 3 and 20 characters long");
        }
        if(!/^[A-Za-z]{3,20}$/.test(value)){
            throw new TypeError("First name must contain only Latin characters");
        }

        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        if(value.length < 3 || value.length > 20){
            throw new TypeError("Last name must be between 3 and 20 characters long");
        }
        if(!/^[A-Za-z]{3,20}$/.test(value)){
            throw new TypeError("Last name must contain only Latin characters");
        }

        this._lastName = value;
    }

    get clientId() {
        return this._clientId;
    }
    set clientId(value) {
        if(!/^\d{6}$/.test(value)){
            throw new TypeError("Client ID must be a 6-digit number");
        }
        this._clientId = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        if(!/^[A-Za-z\d]+\@[A-Za-z.]+$/.test(value)){
            throw new TypeError("Invalid e-mail");
        }
        this._email = value;
    }
}


//let acc1 = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov') //Output TypeError: Client ID must be a 6-digit number


//let acc2 = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov') //Output TypeError: Invalid e-mail


//let acc3 = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov') //Output TypeError: First name must be between 3 and 20 characters long


let acc4 = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov') //TypeError: "First name must contain only Latin characters