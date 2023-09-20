# Varuosade andmebaas

This application is for spare parts inventory management with a manual data entry and API integration support. There are multiple warehouses in Estonia and this API will be used by different workshops and dealerships to get price quotes and stock levels.

Key Features:

Manual Parts Addition: Our software provides administrators with the ability to manually add new spare parts to the database. We have details like part names, descriptions, stock quantities, price, and more. This feature is covered by frontend part of this application made in React.

API Integration: You can search for parts by name or product id code. You can filter and sort search results. You can also batch insert and update part data using API.

## Used tech
 - express - REST API framework
 - cors - HTTP CORS header support
 - dotenv - Environment variables using local files in project folder
 - nodemon - for devs, monitors file changes and restarts server

## How to setup dev environement

Install packages

    npm i

Make a copy of env variables file

    cp .env.template .env

Run dev server

    npm start

Default port is 3001, you can access API from http://localhost:3001/

## How to setup live env


Run in production

    npm run prod