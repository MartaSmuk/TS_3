// // Опис типу книги
// interface Book {
//     id: number;         // Унікальний ідентифікатор книги
//     title: string;      // Назва книги
//     author: string;     // Автор книги
//     publishedYear: number; // Рік публікації
//   }
  
//   // Інтерфейс сервісу роботи з книгами
//   interface IBookService {
//     getBooks(): Book[];                // Метод для отримання всіх книг
//     getBookById(id: number): Book | undefined; // Метод для отримання книги за ID
//   }
  
//   // Приклад реалізації інтерфейсу
//   class BookService implements IBookService {
//     private books: Book[] = [
//       { id: 1, title: "1984", author: "George Orwell", publishedYear: 1949 },
//       { id: 2, title: "Brave New World", author: "Aldous Huxley", publishedYear: 1932 },
//       { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", publishedYear: 1925 }
//     ];
  
//     getBooks(): Book[] {
//       return [...this.books]; // Повертаємо всі книги
//     }
  
//     getBookById(id: number): Book | undefined {
//       return this.books.find(book => book.id === id); // Знаходимо книгу за ID
//     }
//   }
  
//   // Використання сервісу
//   const bookService: IBookService = new BookService();
  
//   console.log(bookService.getBooks());
//   // Output: масив всіх доступних книг
  
//   console.log(bookService.getBookById(2));
//   // Output: { id: 2, title: "Brave New World", author: "Aldous Huxley", publishedYear: 1932 }
  
//   console.log(bookService.getBookById(10));
//   // Output: undefined (книга з ID 10 не знайдена)
  