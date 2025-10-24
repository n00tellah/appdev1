class person {
    constructor(name,) {
        this.name = name;
    }

    sayHello() {
        console.log("Hello, " + this.name);
    }
}

class student extends person {
    study() {
        console.log(this.name + " is studying.")
    }
}

const student1 = new student("Estela");
student1.sayHello() // Hello, Estela
student1.study()
