function solve(arr, criteria) {
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = +price;
            this.status = status;
        }
    }
   let result = [];
    for (let ticket of arr) {
        let [destination, price, status] = ticket.split('|');
        let t = new Ticket(destination, price, status);
        result.push(t);
    }
    return result.sort((a,b) => a[criteria] > b[criteria]);

}

let l = solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination');
console.log(l);