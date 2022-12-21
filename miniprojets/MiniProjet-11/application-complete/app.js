class Book {
  constructor(bookObj = {}) {
    this.num = +bookObj.num || 0;
    this.authorName = bookObj.authorName || '';
    this.bookTitle = bookObj.bookTitle || '';
  }
}

const app = new Vue({
  'el': "#app",
  data: {
    mode: 'listbooks',
    lastNum: -1,
    authors: [],
    books: [],
    newBook: {},
    idxBook: -1,
    copyBook: null
  },
  mounted: function () {
    this.$nextTick(function () {
      this.loadData();
    })
  },
  methods: {
    loadData: function () {
      this.books = JSON.parse(window.localStorage.getItem("books") || "[]")
        .map(book => new Book(book));
      this.lastNum = this.books.length ? this.books[this.books.length - 1].num : 0;
      this.createNewBook();
      this.updateAuthorsList();
    },
    saveData: function () {
      window.localStorage.setItem("books", JSON.stringify(this.books));
    },
    updateAuthorsList: function () {
      this.books.forEach(book => {
        if (!this.authors.includes(book.authorName)) {
          this.authors.push(book.authorName);
        }
      });
    },
    createNewBook: function () {
      this.newBook = new Book({
        num: this.lastNum + 1
      });
    },
    saveBook: function () {
      this.books.push(this.newBook);
      this.lastNum = this.newBook.num;
      this.createNewBook();
      this.saveData();
      this.updateAuthorsList();
      document.querySelector("#author-name-input").focus();
    },
    editBook: function (idxBook) {
      this.idxBook = idxBook;
      this.copyBook = new Book(this.books[idxBook]);
    },
    updateBook: function () {
      this.books[this.idxBook] = this.copyBook;
      this.idxBook = -1;
      this.saveData();
      this.updateAuthorsList();
    },
    sortBooksByNum: function () {
      this.books.sort((b1, b2) => b1.num - b2.num);
      this.saveData();
    }
  }
});