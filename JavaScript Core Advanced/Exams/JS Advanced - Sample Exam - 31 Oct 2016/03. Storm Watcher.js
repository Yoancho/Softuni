let Record = (function () {
    let closuredId = 0;

    return class Record {
        constructor(temperature, humidity, pressure, windSpeed){
            [this.temperature, this.humidity, this.pressure, this.windSpeed] = [temperature, humidity, pressure, windSpeed];
            this.id = closuredId++;
        }

        get status(){
            if(this.temperature < 20 && (this.pressure < 700 || this.pressure > 900) && this.windSpeed > 25){
                return 'Stormy';
            }
            return 'Not stormy';
        }

        toString() {
            let result = `Reading ID: ${this.id}
            Temperature: ${this.temperature}
            Relative Humidity: ${this.humidity}
            Pressure: ${this.pressure}
            Wind Speed: ${this.windSpeed}
            Weather: ${this.status}`;

            return result;
        }
    }
})()
let record1 = new Record(32, 66, 760, 12);
console.log(record1.toString());
let record2 = new Record(10, 40, 680, 30);
console.log(record2.toString());
let record3 = new Record(1, 4, 60, 3);
console.log(record2.toString());
