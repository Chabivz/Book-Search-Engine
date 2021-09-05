# 📚 Book Search Engine

## 📙 Description

- As an avid reader I wanted a website that when a user logged in. They could search a book and save it on their reading list. The data will be saved on my account as a book that I am interested in and delete it on my list when I am done with it! 
## 🧐 Table of Contents

- [About the Project](#about-the-project)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## ✨ About the Project

- A fully functioning Google Book API search enging built with a RESTful API.
- Refactor it to be a GraphQL built with Apollo Server. 
- The App is built using the MERN stack with a React front end. 
- MongoDB database, and Node.js/Express.js server and API.
- Deployed on Heroku with MongoDB database using MongoDB Atlas. 
 
- `client` side packages
  - [react-bootsrap](https://www.npmjs.com/package/react-bootstrap)
  - [jwt-decode](https://www.npmjs.com/package/jwt-decode)
  - [react](https://www.npmjs.com/package/react)
  - [react-dom](https://www.npmjs.com/package/react-dom)
  - [react-router-dom](https://www.npmjs.com/package/react-router-dom)
  - [react-scripts](https://www.npmjs.com/package/react-scripts)
  - [@apollo/client](https://www.apollographql.com/docs/react/)
  - [@apollo/react-hooks](https://www.npmjs.com/package/@apollo/react-hooks)

- `server` side packages
  - [apollo-server-express](https://www.npmjs.com/package/apollo-server-express)
  - [bcrypt](https://www.npmjs.com/package/bcrypt)
  - [express](https://www.npmjs.com/package/express)
  - [graphql](https://www.npmjs.com/package/graphql)
  - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
  - [mongoose](https://www.npmjs.com/package/mongoose)
  - [nodemon](nodemon)

## 🚀 Installation

- [Github](https://github.com/Chabivz/Book-Search-Engine)
- Clone and Install all the packages by `npm i`
- Start the server my typing `node server`

## 💫 Usage 
- [Deployed Link](https://chris-a-book-search-engine.herokuapp.com/)
- `Sign Up` or `Log in` 
- Type book name on `Search For Book ` text. Click `Submit Search` to view the books
- A button `Save this Book` on the bottom of the book card will display and will be saved on your Bookshelf.
- To view and delete click the `See Your Books` on the `Nav`.

![Demo Image](./demo/demo-book-search.gif)

## 🎓 License

The MIT License (MIT)

Copyright (c) 2015 Chris Kibble

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
