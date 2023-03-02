console.log("dune library");

const cardContainer = document.querySelector(".card-container");
// console.log(cardContainer);
const mainElement = document.getElementById("main");
// console.log(mainElement);
const searchInput = document.querySelector(".search");
console.log(searchInput);

const url =
  "https://www.googleapis.com/books/v1/volumes?q=dune&key=AIzaSyC8GMKTkcgZ1pcgIHmDUgM3BkoXJvK-OwY";
const url2 =
  "https://www.googleapis.com/books/v1/volumes?q=frank+herbert&key=AIzaSyC8GMKTkcgZ1pcgIHmDUgM3BkoXJvK-OwY";

// Fetch book data from Google API
async function fetchDuneBooks() {
  const response = await fetch(url);
  const data = await response.json();
  //   console.log(response);
  //   console.log(data.items);
  const dataItems = data.items;
  console.log(dataItems);
  const dataPath = data.items[0].volumeInfo;
  //   console.log(dataPath);
  //   displayBooksDOM(dataItems);
  displayBooksDOM(dataItems);
}

async function fetchDuneBooks2() {
  const response = await fetch(url2);
  const data = await response.json();
  console.log(response, data);
  const dataItems = data.items;
  console.log(dataItems);
  displayBooksDOM(dataItems);
}

fetchDuneBooks();
fetchDuneBooks2();

// Add book data to the DOM
function displayBooksDOM(books) {
  console.log(books);
  books.map(function (item) {
    console.log(item);
    const volumeInfo = item.volumeInfo;
    console.log(volumeInfo);
    const thumbnailPath = item.volumeInfo.imageLinks.thumbnail;
    console.log(thumbnailPath);
    const { title, subtitle, authors, publisher, description } = volumeInfo;
    const bookElement = document.createElement("div");
    bookElement.classList.add("books");
    bookElement.innerHTML = ` 
        <img src="${thumbnailPath}" alt="" />
        <div class="book-info">
          <span>${title}</span>
        </div>
        <div class="overview">
          <h3>${authors}</h3>
          <p>
            ${description}
          </p>
        </div>
      `;
    mainElement.appendChild(bookElement);
  });
}

// Search functionality
function filterBooks(searchTerm) {
  const bookContent = [...document.querySelectorAll("span")];
  const books = document.querySelectorAll(".books");
  console.log(books);
  console.log(bookContent);
  bookContent.map(function (item) {
    const bookTitles = item.innerHTML.toLocaleLowerCase();
    const currentBook = item.parentElement.parentElement;
    console.log(currentBook);
    console.log(bookTitles);
    if (bookTitles === searchTerm) {
      currentBook.classList.remove("hidden");
    } else {
      currentBook.classList.add("hidden");
    }
    if (bookTitles.includes(searchTerm)) {
      currentBook.classList.remove("hidden");
    } else {
      currentBook.classList.add("hidden");
    }
  });
}

// function newFilter(searchTerm) {
//   const bookTitles = document.querySelectorAll("span");
//   bookTitles.forEach(function (item) {
//     console.log(item.textContent);
//     if (!item.textContent.includes(searchTerm)) {
//       item.parentElement.parentElement.classList.add("hidden");
//     } else {
//       item.parentELement.parentELement.classList.remove("hidden");
//     }

//   });
// }

searchInput.addEventListener("keyup", function (e) {
  const searchTerm = searchInput.value.trim().toLocaleLowerCase();
  filterBooks(searchTerm);
  // newFilter(searchTerm);
  console.log(searchTerm);
  // const bookTitles = document.querySelectorAll("span");
  // const bookTitleValue = bookTitles;
  // bookTitleValue.forEach(function (item) {
  //   console.log(item.innerHTML);
  //   const currentBookTitle = item.textContent;
  //   console.log(currentBookTitle);
  //   const currentBook = item.parentElement.parentElement;
  //   console.log(currentBook);
  //   const searchValue = searchInput.value;
  //   console.log(searchValue);
  //   if (searchValue == currentBookTitle) {
  //     console.log("it works");
  //   }
  // });
});
