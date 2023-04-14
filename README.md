# Book-Store-Back-End-project
## Task One

Our project is depending on ***NodeJs*** to build a Book Store, Which provides different types of books and make customer able to buy any of them. Each book has its **Name**, **Author** and **Price** as an initial attributes.

In File: [Books.js](https://github.com/Nourelshehry/Book-Store-Backe-End-project/blob/main/models/book.js) you can see the basic set of books which we created.

The Basic functions we used is: ***Get***, ***Post***, ***Delete***, and ***Put*** to make basic proccesses in our BookSet, you can see this here: [BookController](https://github.com/Aml-Hassan-Abd-El-hamid/Book-Store-Backe-End-project/blob/WarmUP-task/controllers/book_controller.js)  . With help of **Postman** these functions are applied. Like that:


**Post**

*Adding book by ID:4:*

![new](https://user-images.githubusercontent.com/76706477/229152745-e1def581-3450-4807-888e-89775b6d60dd.png)



**Get**

*Getting all books:*

![95](https://user-images.githubusercontent.com/76706477/229019758-c79cd33d-d521-4695-a075-736832f430d1.png)


*Getting one book by ID:1*

![96](https://user-images.githubusercontent.com/76706477/229019871-c6127a68-c793-4205-b253-d49e7969ddba.png)


**Put**

*Editing specific book by ID:4*

![98](https://user-images.githubusercontent.com/76706477/229020118-1ca29141-3731-4ced-a527-18673f0e64f6.png)


**Delete**

**Deleting one book ID:2 and showing the rest books:*

![100](https://user-images.githubusercontent.com/76706477/229020317-87ae0b19-66f8-42da-8236-b90a3040b641.png)


*Deleting specific book by ID:*

![99](https://user-images.githubusercontent.com/76706477/229020287-f5c0ecf4-deb6-483f-b807-31485d036231.png)







*Note*

1-The validation function file: [BookValidation](https://github.com/Aml-Hassan-Abd-El-hamid/Book-Store-Backe-End-project/blob/WarmUP-task/helper/validation.js) is used to validate the rules which we predetermined, we call it in need (e.g.: ***Put*** and ***Post***).

2-The Router file: [BookRouter](https://github.com/Aml-Hassan-Abd-El-hamid/Book-Store-Backe-End-project/blob/WarmUP-task/routes/book_router.js)  is used to access all functions when it's called.


.................................................................................................................................................................................................
## Task Two
In this task, We created a simple Nosql DataBase in ***MongoDB***:
it's consists of 

1- **Books**: Which contains all books in DB which have some attributes, such like: BookName, BookAuthor, PublicationYear, and BookCount.

2- **User**: User can make ***order*** by choosing any available books, each user has an specific ***order*** in which we can specify and calculate all total amount of books he has orderd.

3-**Order**: This order contains all books the user has chosen (Each user with specific order). We handle the case of ordering some ***Books*** which is above the number of our available books, In addition to making user able to Enter his information (e.g. Address, Name, Email, PhoneNumber,...) and in case of confirmation order (checkout) the total price is calculated, and the quantity of available books also.


The relation between tables:

![2023-04-14_23h13_57](https://user-images.githubusercontent.com/76706477/232156323-69a09894-65e7-442f-a797-73b1b57d06f2.png)



**User** can Edit his informations, the book quantities he needs, and confirms his order which affects the **Books** and **Orders** DB as shown:

