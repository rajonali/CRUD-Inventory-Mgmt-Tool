

# CRUD Inventory Management Tool

## Technologies
  React, MongoDB, Express, and Node

## Run Project

Client: <br/>  

cd CRUD-Inventory-Mgmt-Tool </br>

yarn add <br/>

yarn run start <br/>


Server:  <br/>

mongod (need Mongodb installed) <br/>
cd backend/ <br/>
yarn add\ <br/>
yarn run dev <br/>



Description:
------------

Open source Inventory Management/Point of Sale is a web based point of sale system written in React and MERN stack.

Current features are:

✅ Stock management <br/>
✅ Sale register with transactions logging <br/>


To-Do:
------
* Refactor code

* Make sure the current product state scope is reset completely for all fields before changing focus to another product.

* Create a modal that pops up if a product is not found in db and prompt user to insert the product into the db.

* Store images in db for each product.

* Create a function to sum all sales and present on sales report page. Create a tax calculator function too.

* Create column field for product that shows the price the product was bought for. 

* Being able to edit the fields on all pages with data grid

* redux action to search and add to global state: products and transactions 

* If there is no results when searching for the object, then prompt a modal to ask the user if they would like to add enter more details about the product. They can leave some fields blank if they are in a hurry and edit it later

* Create an action to retrieve products and edit their fields and calculate order quantities    

* Create global state for orders to place

* Create an action to add an order to order objects array

* Create a boolean state for place order field in each product object

* The software is written in Javascript language, uses React Framework, MongoDB as data storage, and an Express back-end server for the REST API.

Demo:
-----
Products page:
![](gif_previews/products_page.gif)

Sales page:
![](gif_previews/sales_page.gif)
