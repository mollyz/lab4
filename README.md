# CSCI5448 OOAD 2019 Presentation ExampleCode

## MVC in JavaScript and Java

- Ziying Zhang

## 1. Program Description

This project is to illustrate how to separate the whole work to each part of MVC. 
The task is very simple. Develop a web application that can help you plan the dinner. There are three types of food, starts, main dishes, dessert. And there is a limitation that it only allows choosing one from each type in the current plan.
The features need to implement include: 
- Food list with filter and search;
- Click food to check detail ingredients and add to a waiting list;
- A calculator for the price of current chosen food and pending food;
- Cancel/delete from the current chosen dinner list;
- A second confirm and detail information presentation of final submit of dinner list;
- A view of final dinner list;

Using MVC, I stored all the food information into dinnermodel.js. Model stored all data about food. For every feature, I created a view and a controller. Although much style/view information was written in HTML and CSS, I still followed the rules to separate view and controller, since it will be better for the future expanded. Totally, there were 7 Views and 7 Controllers. Controllers control the event and data interaction between view and model.


## 2. Run Note

Please download the whole master. Then after decompressing, click the index.html to start it.


## 3. Special Tips
This is my own lab assignment in 2016 KTH DH2641. I implemented more complex functions to connect to a commercial open recipe API. But the bigOven API is already expired, the webpage can't run well. So I have to rewrote it to the version of the static web page.
If you interested in the final version, ignore the API problem, please visit [here](https://github.com/Christ1992/New-Start-for-Lab3). 
We change the whole project to Angular JS and connect the real API with real information.

Another code example I provided in the presentation is the [Spotify Manager](https://github.com/mollyz/project-2642). It was also a project based on MVC. But as adding PHP to write database, it was not a very standard MVC, some functions should belong to view haven't be separated with controller and HTML. Just as a reference.
