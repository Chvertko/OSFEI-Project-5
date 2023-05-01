








OSFEI Project 5
 
1.	Technical description of the task:
 
1.	Create a REST API application using JavaScript framework that will search data from following open source API:
•	https://developers.google.com/books/docs/v1/using
•	https://www.googleapis.com/books/v1/volumes?q={your search text}
This application should provide REST API endpoints for displaying the data (books) for the front-end part.
 
2.	Create an application which displays searched books from API provided by your Application.
Application should contain 2 screens:
-	Book List
-	Book Detailed Screen
Main Features:
-	Display book list provided by you defined API
-	Possibility to search via API you developed 
-	As an advantage would be possibility to add items to favorite

Application Acceptance Criteria:
-	REST API application 
-	Front-end part of the application
-	The code should be clean and understandable for other developers
-	Respect JavaScript Style Guide

Note:
React, styled components, material ui, Redux Toolkit, RTK query, work with REST API (Google bookstore API), Typescript
 
2. Application Screens

2.1	 Book List Screen:

Main Features:
-	Display list of books with possibility to search via dedicated text input
-	Search method should be triggered only after user finishes typing
-	List of books should be displayed in max 4 columns
-	Screen should be responsive
-	When user clicks on one book, application displays detailed information (next screen)
-	When user comes back from an internal URL to current Screen, the application should display latest search text and books
-	Following information should be displayed:
o	Title
o	Thumbnail
o	Subtitle (if available)
o	Search Info (if available)

Screen Example:
 



2.2	 Book Detailed Screen:
Main Features:
-	Displays detailed information about a book
-	On page refresh, same information should be displayed
-	Possibility to add displayed book to Favorite List
-	Following information should be displayed:
o	Title
o	Thumbnail
o	Subtitle (if available)
o	Search Info (if available)
-	When user marks a book as a favorite, the icon should be changed to another one, which will indicate that this book is favorite.

Screen Example:
 
2.3	 Favorite List Screen:
Main Features:
-	Displays list of favorite books marked by user. 
-	Screen should look the same as Book List Screen, but without search input
-	If the user saves some books as favorites and then closes the browser/page, then when the user will come back he should be able to see the list of books that was marked as favorite.
