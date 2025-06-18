class Customer{
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getEmail(){
        return this.email;
    }

    setEmail(email){
        this.email = email;
    }

    isValidEmail() {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    }
}

module.exports = Customer;