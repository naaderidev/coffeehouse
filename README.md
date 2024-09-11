# CoffeeHouse :coffee:

Persian-language CoffeeHouse for Coffee Shops and Cafes

**React | ContextAPI | Vite | TailwindCss |mongoDB**

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Coffee House website is a modern web application built using **ReactJS** with the **Context API** for state management. For the backend, we have implemented a simple server using **Node.js** and **Express.js**, and we are utilizing **MongoDB** as the database.

**User Authentication:** Secure user registration and login via email, utilizing JWT (JSON Web Token) for authentication.

**Responsive Design:** Enjoy a seamless user experience with both dark mode and light mode themes.

**Site Structure:** The application consists of three main sections:
- Shop: Where users can browse and purchase products.
- Blog: A space for articles and insights related to coffee culture.
- Café: Information about our coffee offerings and more.

**Shopping Cart:** Users can easily add products to their cart and place orders, which are recorded in the database.

**Filtering Options:** Various filters are available in both the blog and shop sections to enhance user navigation.

**This version is deployed here: https://coffeehouse.liara.run/**

**In the next version, we plan to introduce a User Panel and an Admin Panel to improve user management and content administration.**

## Technologies Used

- ReactJs
- React-Router-DOM
- Context-API
- TailwindCSS
- Yup
- Formik
- Axios
- bcryptjs
- jsonwebtoken
- Swiper
- ckeditor
- React-icons
- sweetalert2
- typewriter-effect
- mongoose
- express

## Features

- Responsive Design
- Context API
- Dark and Light mode
- User Athentication for SignIn & SignUp
- Marketplace + Blog + Cafe
- Modularity and Reusability
- Component-based architecture
- 

## Installation

create a database in mongodb compass and name it coffee-house then extract coffeehouse-db and import all the collections to it!

## Usage

**backend directory**

- install moduls in backend directory

```
npm install
```

- then run server with this command

```
npx nodemon server.js
```

**frontend directory**

- install moduls in frontend directory

```
npm install
```

- then run project with this command

```
npm run dev
```

## Contributing

This project is **open-source**, and we believe that the more people who contribute, the stronger it will become. So, if you're excited about what we're building and want to be a part of it, please feel free to **fork** the repository and submit your pull requests.

## License

This project is released under the **MIT License**, a flexible and widely-used open-source license that grants you the freedom to use, modify, and distribute the code as you see fit.
