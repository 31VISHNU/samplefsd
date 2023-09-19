var books = [
    { title: "Something I never told u", author: "Bindra", publisher: "Pearson" },
    { title: "PS", author: "Kalki", publisher: "Vikram" },
    { title: "Something I wanted to tell u", author: "Bindra", publisher: "Pearson" },
    { title: "It ends with us", author: "Collen Hover", publisher: "Pearson" }
];
books.sort(function (a, b) { return a.author.localeCompare(b.author); });
console.log("List of Books sorted by author name in ascending order:");
books.forEach(function (book) {
    console.log("".concat(book.title, " by ").concat(book.author, " (published by ").concat(book.publisher, ")"));
});
