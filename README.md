# Ginger Payments Frontend Assignment

This assignment is to implement client-side API requests to the JSON-server (which contains payment data), create a client-side filter and render the
 content in the browser. You have the freedom to choose any additional framework/stylings and try to make it look decent. 
 
 ## Overview
 
 - Language: JavaScript, HTML, CSS
 - Estimated effort: 2 hours
 - Dependencies: [JSON-server](https://www.npmjs.com/package/json-server)

 ## Setup
 
 To install and start the JSON-server type the following command in your terminal:
 
 ```
 npm install && npm run start:api
 ``` 

 To open the index.html file, run a local server.
 ```
 python -m SimpleHTTPServer
 ```
> If the Server URL is not on localhost:3000, you can change it in the input field provided
 
 ## Tasks
 
 Implement the following tasks:
 
 ### Callback button
 
 When this button is clicked a callback is made to get the 20 payments with the highest amount and renders the data in a table, where each payment is stored in a row. 
 
 ### Promise button
 
 When this button is clicked a promise is made for a GET request for the payments from the merchant "Ginger".
 
 ### Filter Payment-Method
 
Use the filer dropdown in the table to filter 

 ### Add Payments 
 When this button is clicked, a form is displayed to POST data to the JSON-server.

