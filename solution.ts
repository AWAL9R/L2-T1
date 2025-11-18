function formatValue(input: (string | number | boolean)): (string | number | boolean) {
    if (typeof input == "string") {
        return input.toUpperCase()
    }
    else if (typeof input == "number") {
        return input * 10
    }
    else if (typeof input == "boolean") {
        return !input;
    }
    return input;
}




function getLength(input: string | any[]): number {
    if (typeof input == 'string') {
        return input.length;
    }
    else if (Array.isArray(input)) {
        return input.length;
    }
    return -1;
}




class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}




type Book_A = { title: string; rating: number }

function filterByRating(books: Book_A[]): Book_A[] {
    let newBooks: Book_A[] = []

    for (let i = 0; i < books.length; i++) {
        if (books[i].rating >= 4 && books[i].rating <= 5) {
            newBooks.push(books[i])
        }
    }

    return newBooks;
}






type User = { id: number; name: string; email: string; isActive: boolean }
function filterActiveUsers(input: User[]): User[] {
    let newUsers: User[] = []

    for (let i = 0; i < input.length; i++) {
        if (input[i].isActive) {
            newUsers.push(input[i])
        }
    }
    return newUsers;
}






interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(input: Book) {
    console.log(`Title: ${input.title}, Author: ${input.author}, Published: ${input.publishedYear}, Available: ${input.isAvailable ? 'Yes' : 'No'}`);
}






type AlphaNumeric = string | number;
type AlphaNumericArr = Array<string | number>;
function isInArray(input: AlphaNumericArr, query: AlphaNumeric): boolean {
    for (let i = 0; i < input.length; i++) {
        if (input[i] === query) {
            return true;
        }
    }
    return false;
}
function getUniqueValues(input1: AlphaNumericArr, input2: AlphaNumericArr): AlphaNumericArr {
    let output: AlphaNumericArr = []
    let input: AlphaNumericArr = [...input1, ...input2]
    for (let i = 0; i < input.length; i++) {
        if (!isInArray(output, input[i])) {
            output.push(input[i])
        }
    }
    return output
}






type Product = { name: string, price: number, quantity: number, discount?: number }

function calculateTotalPrice(input: Product[]): number {
    let totalPrice = 0;

    input.forEach(product => {
        if (product.discount) {
            totalPrice += ((product.price * product.quantity) * (1 - (product.discount / 100)))
        } else {
            totalPrice += (product.price * product.quantity)
        }
    })

    return totalPrice;
}


