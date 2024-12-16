class Author {
    constructor(name, email, gender) {
        this._name = name;
        this._email = email;
        this._gender = gender;
    }

    get name() { return this._name; }
    get email() { return this._email; }
    get gender() { return this._gender; }

    set name(value) { this._name = value; }
    set email(value) { this._email = value;} 
    set gender(value) { this._gender = value; }

    toString() {
        return `Author [Name: ${this._name}, Email: ${this._email}, Gender: ${this._gender}]`;
    }
}

class Book {
    constructor(title, author, price, quantity) {
        if (!(author instanceof Author)) {
            throw new Error("Author must be an instance of the Author class");
        }
        this._title = title;
        this._author = author;
        this._price = price;
        this._quantity = quantity;
    }

    get title() { return this._title; }
    get author() { return this._author; }
    get price() { return this._price; }
    get quantity() { return this._quantity; }

    set title(value) { this._title = value; }
    set author(value) {
        if (value instanceof Author) {
            this._author = value;
        } else {
            console.error("Invalid author instance");
        }
    }
    set price(value) {
        if (typeof value === "number" && value > 0) {
            this._price = value;
        } else {
            console.error("Price must be a positive number");
        }
    }
    set quantity(value) {
        if (Number.isInteger(value) && value >= 0) {
            this._quantity = value;
        } else {
            console.error("Quantity must be a non-negative integer");
        }
    }

    getProfit() {
        return this._price * this._quantity;
    }

    toString() {
        return `Book [Title: ${this._title}, ${this._author.toString()}, Price: ${this._price}, Quantity: ${this._quantity}]`;
    }
}


const author = new Author("Mark", "mark@markos.com", "male");
console.log(author.toString());

const book = new Book("Sun", author, 150, 10);
console.log(book.toString());
console.log(book.getProfit());




