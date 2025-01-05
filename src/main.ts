


interface IBook {
    id: number;
    title: string;
    author: string;
    publishedYear: number;
    bookGenre: string;
}

interface IAuthor {
    id: number;
    nameSurname: string;
    books: IBook[];
    
}

interface IBookService {
    getBooks(): IBook[];
    getBookById(id: number): IBook | undefined;
    getAuthors(): IAuthor[];
    getAuthorById(id: number): IAuthor | undefined;
    getBooksByAuthor(nameSurname: string): IBook[] | undefined;
    getAuthorByBookId(id: number): IAuthor[] | IAuthor | undefined;
    search(query: string): IBook[];
}

class BooksService implements IBookService {
    private books: {[id: number]: IBook} = {
        1: { id: 1, title:  "Depeche Mode", author: "Serhiy Zhadan", publishedYear: 2004, bookGenre: "Novel"},
        2: { id: 2, title:  "Internat", author: "Serhiy Zhadan", publishedYear: 2017, bookGenre: "Novel"},
        3: { id: 3, title:  "The Museum of Abandoned Secrets", author: "Oksana Zabuzhko", publishedYear: 2009, bookGenre: "Novel"},
        4: { id: 4, title:  "Atomic Habits: An Easy and Proven Way to Build Good Habits and Break Bad Ones", author: "James Clear", publishedYear: 2022, bookGenre: "Motivation"},
        5: { id: 5, title:  "The Intelligent Investor", author: "Benjamin Graham", publishedYear: 1949, bookGenre: "Finance"}
    }

    private authors: {[id: number]: IAuthor} = {
        10: { id: 10, nameSurname: "Serhiy Zhadan", books: [{ id: 1, title:  "Depeche Mode", author: "Serhiy Zhadan", publishedYear: 2004, bookGenre: "Novel"},
                                                           { id: 2, title:  "Internat", author: "Serhiy Zhadan", publishedYear: 2017, bookGenre: "Novel"} ] },
        11: {id: 11, nameSurname: "Oksana Zabuzhko", books: [{ id: 3, title:  "The Museum of Abandoned Secrets", author: "Oksana Zabuzhko", publishedYear: 2009, bookGenre: "Novel"} ]},
        12: {id: 12, nameSurname: "James Clear", books: [{ id: 4, title:  "Atomic Habits: An Easy and Proven Way to Build Good Habits and Break Bad Ones", author: "James Clear", publishedYear: 2022, bookGenre: "Motivation"}]},
        13: {id: 13, nameSurname: "Benjamin Graham", books: [{ id: 5, title:  "The Intelligent Investor", author: "Benjamin Graham", publishedYear: 1949, bookGenre: "Finance"}]}
    }

    getBooks(): IBook[] {
        return Object.values(this.books);
    }

    getBookById(id: number): IBook | undefined {
        return this.books[id]; 
    }

    getAuthors(): IAuthor[] {
        return Object.values(this.authors);
    }

    getAuthorById(id: number): IAuthor | undefined {
        return this.authors[id];
    }

    getBooksByAuthor(nameSurname: string): IBook[] | undefined {
        const bookByAuthor = Object.values(this.books).filter(book => book.author === nameSurname);
        return bookByAuthor.length > 0 ? bookByAuthor : undefined;
    }

    getAuthorByBookId(id: number): IAuthor | undefined {
        const authorByBookId = Object.values(this.books).filter(book => book.id === id).map(book => book.author)[0];
        return Object.values(this.authors).find(author => author.nameSurname === authorByBookId);
    }

    search(query: string): IBook[] {
        const finalQuery = query.toLowerCase();

        return Object.values(this.books).filter(book => {
            return (
                book.title.toLowerCase().includes(finalQuery) ||
                book.author.toLowerCase().includes(finalQuery) ||
                book.bookGenre.toLowerCase().includes(finalQuery) ||
                book.publishedYear.toString().includes(finalQuery)
            )
        })
    }

}

const myBooks = new BooksService();

//console.log(myBooks.getBooks());
//console.log(myBooks.getBookById(222));

//const authors = myBooks.getAuthors();
//console.log(JSON.stringify(authors, null, 2));

//console.log(myBooks.getAuthorById(10));
//console.log(myBooks.getBooksByAuthor("Serhiy Zhadan"));
//console.log(myBooks.getAuthorByBookId(2));
//console.log(myBooks.search("Novel"));





