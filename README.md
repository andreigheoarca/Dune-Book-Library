# Dune Book Library 

As soon as I got a bit comfortable with fetch API requests I started scouring for free API as I already had a few ideas that I wanted to turn into projects. 

While browsing to the github public api list I arrived at a Dune book api created by a github user which provided exactly very nicely formatted JSON data needed for a library of all the dune books. The API was hosted on Heroku but unfortunately the link did not seem to work anymore so I figured that I could use the Goodreads API which was my initial plan. 

Unfortunately for me again, Goodreads had stopped provinding access to their API some time ago, so after a bit more browsing through book library API's I decided to finally use the one provided by Google Books.

## Link

https://jazzy-gingersnap-f0d55d.netlify.app/

## Usage

The project displays a list of Dune related books in the form of cards using data consumed from the Google Books API with an option to filter the books by using the available search bar. 

Unfortunately, for now, the user might have to scroll up or down in order to see the filtered result because the functionality does not move the position of the result in the DOM.

## Project lookback and future considerations 

By now, I had quite a bit of experience in consuming API data so I can't say that I encountered any major challenges and the same time the functionality of the project is quite simple. 

One of the challenges was destructuring the returned JSON data from Google Books which had quite weird nesting so I got the opportunity to practice and learn quite a bit about object destructuring and nested object destructuring which I found quite helpful.

I also initially forgot to convert the titles of the books to lowercase while trying to implement the search functionality and could not figure out why It would not work correctly from the first few tries.

The Google Books API does not provide any high quality photos for the cover of the books so I had to resort to using the large version of the thumbnails available in the JSON data in order the display the book covers which doesn't look quite as I would like but I plan on coming back to this later on in order to fix some weird sizing issues that can be found in displaying the cards.
