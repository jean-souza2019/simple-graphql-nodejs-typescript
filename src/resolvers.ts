export const resolvers = {
  Query: {
    books: () => books,
    book: (_: any, { id }: {id: number}) => books.find(book => book.id === id),
    authors: () => authors,
    author: (_: any, { id }: {id: number}) => authors.find(author => author.id === id),
  },
  Author: {
    books: (parent: any) => books.filter(book => book.author.id === parent.id),
  },
  Book: {
    author: (parent: any) => authors.find(author => author.id === parent.author.id),
  },

  Mutation: {
    create: (_: any, {id, title, author}: { id: number, title: string, author: number }) => {
      const book = {
        id, title, author: {
          id: author
        }
      }
      books.push(book)
      return book
    },

    delete: (_: any, { id }: {id: number}) => {
      const filteredBooks = books.filter(book => book.id !== id)
      books = filteredBooks;
      return true
    },

    update: (_: any, { id, title, author}: { id: number, title: string, author: number }) => {
      const book = books.find(book => book.id === id)


      if (book) {
        book.title = title
        author && (book.author = {
          id: author
        })
      }
      
      return book
    }
  }
};

let books: {
  id: number,
  title :string,
  author: {
    id: number
  }
}[] = [];

let authors = [
  { id: 1, name: 'J.K. Rowling' },
  { id: 2, name: 'Michael Crichton' },
];
