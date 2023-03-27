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
    mode: 'allbooks',
    lastNum: -1,
    authors: [],
    books: [],
    filteredBooks: [],
    newBook: {},
    filterBook: new Book({ num: -1 }),
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
      this.sortBy('num');
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
    deleteBook: function (idxbook) {
      const book = this.books[idxbook];
      const ans = confirm("هل تريد فعلا حذف هذا الكتاب؟" +
        "\nالكتاب: " + book.bookTitle +
        "\nالمؤلف: " + book.authorName +
        "\nرقم الكتاب: " + book.num);
      if (ans) {
        this.books.splice(idxbook, 1);
        this.saveData();
        document.querySelector("#author-name-input").focus();
      }
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
    },
    sortBy: function (sortColumn) {
      if (this.mode == 'allbooks') {
        this.books.sort((b1, b2) => (b1[sortColumn] > b2[sortColumn]) - (b1[sortColumn] < b2[sortColumn]));
      } else {
        this.filteredBooks.sort((b1, b2) => (b1[sortColumn] > b2[sortColumn]) - (b1[sortColumn] < b2[sortColumn]));
      }
    },
    filterListOfBooks: function () {
      if ((this.filterBook.num == -1 || this.filterBook.num == '') &&
        this.filterBook.bookTitle == '' &&
        this.filterBook.authorName == '') {
        this.mode = "allbooks";
      } else {
        this.mode = "filterbooks";
        this.filteredBooks = this.books.filter(book => {
          let cond = true;
          if (this.filterBook.num != -1) {
            cond &&= ("" + book.num).indexOf(this.filterBook.num) != -1;
          }
          if (cond && this.filterBook.bookTitle != -1) {
            cond &&= book.bookTitle.indexOf(this.filterBook.bookTitle) != -1;
          }
          if (cond && this.filterBook.authorName != -1) {
            cond &&= book.authorName.indexOf(this.filterBook.authorName) != -1;
          }
          return cond;
        });
      }
    }
  }
});