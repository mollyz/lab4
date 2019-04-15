CSCI5448 OOAD 2019 Presentation ExampleCode - MVC in JavaScript and Java
=================================================
Program Description


This project is to illustrate how to separate the whole work to each part of MVC. 
The task is very simple. Develop a web application that can help you plan the dinner. There are three types of food, starts, main dishes, dessert. And there is a limitation that it only allows choosing one from each type in the current plan.
The features need to implement include: 
Food list with filter and search;
Click food to check detail ingredients and add to a waiting list;
A calculator for the price of current chosen food and pending food;
Cancel/delete from the current chosen dinner list;
A second confirm and detail information presentation of final submit of dinner list;

Using MVC, I stored all the food information into dinnermodel.js. Model stored all data about food. For every feature, I created a view and a controller. Although much style/view information was written in HTML and CSS, I still followed the rules to separate view and controller, since it will be better for the future expanded. Totally, there were 7 Views and 7 Controllers. Controllers control the interaction between view and model.


Run Note
Please download the whole master files. Then compress and click the index.html to start it.
