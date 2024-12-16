class Book{
    constructor(title, author, year){
        this._title = title;
        this._author = author;
        this._year = year;
    }
    get title(){return this._title;}
    get author(){return this._author;}
    get year(){return this._year;}
    
    set title(value){this._title = value;}
    set author(value){this._author = value;}
    set year(value){this._year = value;}

    toString(){
        return `Book: ${this._title} by ${this._author}, published in ${this._year}`;
    }

}
const book =new Book( " Moon", "Mark", 1900);
console.log(book.toString());

class Ebook extends Book{
    constructor( title, author, year, price){
        super(title, author, year);
        this._price = price;
        }
        get price(){return this._price;}
        set price(value){this._price = value;}
        
        toString(){
            return `${super.toString()}  and costs ${this._price}`;
}
}

const ebook = new Ebook( "Sun", "Mark", 1901, 2500);
console.log(ebook.toString());
