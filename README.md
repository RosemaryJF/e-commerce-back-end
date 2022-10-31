# e-commerce-back-end

# E-Commerce Back End

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

The E-Commerce Back End application is RESTful API that allows online businesses to easily view, create, update and delete the following areas of an online store:

- Categories

- Products

- Tags

This is important as it is essential for retail businesses to be able to adapt their online stores quickly for a better user experience.

I was able to implement using Sequelize throughtout this entire application, which allowed me to practice seeding a database, and it's tables through JavaScript for the first time. I got further practise at using routes, and implenting CRUD development, which is something I am still getting the hang of but feeling a lot more confident in after developing this application.

It was super satisfying being able to test the GET, POST, PUT and DELETE aspects through Insomnia, and see them working!

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)
- [Credits](#credits)

---

## Installation

The user will need to clone the application from my GitHub account: https://github.com/RosemaryJF/e-commerce-back-end, to their local repository, and install Node.js, mySQL and npm onn their code editor, if it isn't already. In addition to this, to view the applications functionality it would help to have a program like Insomnia, or Postman.

Once cloned to the local repository the user will need to run `npm i` or `npm install` so that the necessary packages are installed on the application.

Next the user should open the db folder in their integrated terminal. They should run the following command: 
- `mysql -u root -p`

They will be prompted to enter their password, once this has been done and sql is running, they should enter:
- `SOURCE schema.sql`

This will create the database needed for the app to run.

The user should next edit the `.env.example` file to reflect their mySQL user and password. It is already linked to the database created through the schema.

Once this is done they should navigate back to server.js file and run `node seeds/index.js` in their integrated terminal; this will seed the database so that they can test the app's functionality. 

From there the user will be able to launch the application from their intergrated terminal with either `node server.js` or `npm start`. I would advise testing the program and it's functionality through Insomnia.

---

## Usage

For a full tutorial please view my run through video of the application and its functionalities via the link below:

https://drive.google.com/file/d/1mOPdabdkOPIPeV3McHRLc18nuhjVhM8X/view

Once the application is installed and being hosted on their local server the user should navigate to their API design program (such as; Insomnia or Postman).

Firstly, to view the seeded categories, products and tags the user should do a `GET` request to the following:
- localhost:3001/api/categories/
- localhost:3001/api/products/
- localhost:3001/api/tags/

If they want to view individuals of any of the above the simply need to input the `:id` at the end of the URL.

To create either a category/product/tag they should switch to `POST` with the applicable URL and enter in JSON format what is required in the body to create said item. I would recommend that you either take note, or copy the body structure when viewing the existing areas and their contents.

To update the user should switch to `PUT` enter the applicable URL and id digit of the category/product/tag that is being updated. Then in JSON format they can enter the required aspects of the body to be updated. A message will be displayed letting them know "X has been updated"

If the user wishes to `DELETE` they should once again enter the applicable URL and id digit of the category/product/tag to be deleted. Once the category/product/tag has been successfully deleted a message will display saying "X has been deleted".

If you have any questions or suggestions at all about the application don't hesitate to reach out to me on GitHub.

---

## Features

The best feature of the whole application is the update functionality, which allows the user to update various parts of the database if needed. This removes the more often seen delete to the recreate something, which could ultimately negatively affect the database the users online store runs from. This functionality can be seen in the walk through video and is done through `PUT` requests.

---

## License

This application is licensed under an [MIT license](https://github.com/RosemaryJF/e-commerce-back-end/blob/main/LICENSE).

---

## Credits

- https://maciek.cloud/sequelize-decimal-type-error/

- https://sebhastian.com/sequelize-default-value/

- https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/

- https://www.techonthenet.com/mysql/tables/alter_table.php#:~:text=The%20syntax%20to%20drop%20a,table_name

- https://dev.to/kmcknight91/how-to-use-insomnia-to-test-api-endpoints-1lad

- https://sydney.bootcampcontent.com/university-of-sydney/USYD-VIRT-FSF-PT-07-2022-U-LOLC/-/tree/main/13-ORM/01-Activities/02-Stu_Sequelize-Setup

- https://sydney.bootcampcontent.com/university-of-sydney/USYD-VIRT-FSF-PT-07-2022-U-LOLC/-/tree/main/13-ORM/01-Activities/06-Stu_Create-Read

- https://sydney.bootcampcontent.com/university-of-sydney/USYD-VIRT-FSF-PT-07-2022-U-LOLC/-/tree/main/13-ORM/01-Activities/12-Stu_RESTful-Routes

- https://sydney.bootcampcontent.com/university-of-sydney/USYD-VIRT-FSF-PT-07-2022-U-LOLC/-/tree/main/13-ORM/01-Activities/28-Stu_Mini-Project