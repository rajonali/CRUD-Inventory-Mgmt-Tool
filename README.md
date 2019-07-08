

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
* Submit user submitted barcode

* Disable product page enter key by searching for key and ignoring it

* Being able to edit the fields on all pages with data grid

* redux action to search and add to global state: products and transactions 

* Be able to edit certain fields

* If there is no results when searching for the object, then prompt a modal to ask the user if they would like to add enter more details about the product. They can leave some fields blank if they are in a hurry and edit it later

* Create an action to retrieve products and edit their fields and calculate order quantities    

* Create a global state for orders to place

* Create an action to add an order to order objects array

* Create a boolean state for place order field in each product object

* The software is written in Javascript language, uses React Framework, MongoDB as data storage, and an Express back-end server for the REST API.

Demo:
-----
Products page:
![](gif_previews/products_page.gif)

Sales page:
![](gif_previews/sales_page.gif)
