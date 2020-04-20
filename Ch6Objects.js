//Chapter 6
//Objects

//Encapsulation

//Methods
//Properties that hold function values
let rabbit = {};
rabbit.speak = function(line){
    console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I'm alive.");


//Maps
// Getters/Setters

class Temperature {
    constructor(celsius){
        this.celsius = celsius;
    }

    get fahrenheit(){
        return this.celsius * 1.8 + 32;
    }

    set fahrenheit(value){
        this.celsius= (value - 32) / 1.8;
    }

    static fromFahrenheit(value){
        return new Temperature((value - 32) / 1.8);
    }
}