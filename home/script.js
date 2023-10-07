function Book(bookId, bookName, price, author, bookStatus) {
  // Thuộc tính
  this.bookId = bookId;
  this.bookName = bookName;
  this.price = price;
  this.author = author;
  this.bookStatus = bookStatus;
  //   Phương thức
  this.inputData = function (book) {
    console.log("Kiểm tra", book);
    // Nhập thông tin book
    const data = this.displayData();
    for (const key in data) {
      if (key == "bookId") {
        continue;
      }
      const value = prompt(`Nhập ${key}`, data[key] ? data[key] : "");
      this[key] = value;
    }
  };
  this.displayData = function () {
    return {
      bookId: this.bookId,
      bookName: this.bookName,
      price: this.price,
      author: this.author,
      bookStatus: this.bookStatus,
    };
  };
}

const book_1 = new Book(1, "sach 1", 1000, "Nguyễn Văn A", false);
const bookStore = [
  new Book(1, "sach 1", 500, "Nguyễn Văn A", false),
  new Book(2, "sach 2", 400, "Nguyễn Văn A", true),
  new Book(3, "sach 3", 100, "Nguyễn Văn A", false),
  new Book(4, "sach 4", 200, "Nguyễn Văn A", false),
];

function handleAdd() {
  const book = new Book();
  book.inputData();

  book.bookId = new Date().getTime();

  bookStore.push(book);
}

function handleRender() {
  bookStore.forEach((item) => {
    console.log(item.displayData());
  });
}

function handleDelete() {
  const index = parseInt(prompt("Nhập vị trí cần xóa"));
  if (index >= 0 && index <= bookStore.length - 1) {
    bookStore.splice(index, 1);
  } else {
    alert("vị trí không đúng");
  }
}

function handleUpdate() {
  const index = parseInt(prompt("Nhập vị trí cần sửa"));
  if (index >= 0 && index <= bookStore.length - 1) {
    const book = bookStore[index];
    book.inputData(book.displayData());
  } else {
    alert("vị trí không đúng");
  }
}
